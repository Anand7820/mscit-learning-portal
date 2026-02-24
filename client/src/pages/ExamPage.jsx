import React, { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import StudentLayout from "../components/StudentLayout";
import api from "../api/api";

const ExamPage = () => {
  const { dayNumber } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const questionStripRef = useRef(null);
  const questionButtonRefs = useRef([]);
  const [attemptId, setAttemptId] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState({}); // { questionIndex: correctAnswerIndex }
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set()); // Track which questions have been answered
  const [skippedQuestions, setSkippedQuestions] = useState(new Set()); // Track which questions have been skipped
  const [correctQuestions, setCorrectQuestions] = useState(new Set()); // Track which questions were answered correctly
  const [incorrectQuestions, setIncorrectQuestions] = useState(new Set()); // Track which questions were answered incorrectly
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [checkingAnswer, setCheckingAnswer] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [submitPassword, setSubmitPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    api
      .post(`/exams/${dayNumber}/start`, {}, {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      })
      .then((res) => {
        console.log(`[ExamPage] Received ${res.data.questions?.length || 0} questions for Day ${dayNumber}`);
        setAttemptId(res.data.attemptId);
        setQuestions(res.data.questions);
        setAnswers(Array(res.data.questions.length).fill(-1));
        setRemaining(res.data.durationMinutes * 60);
      })
      .catch((err) => {
        const message = err.response?.data?.message || "Exam unavailable";
        setError(message);
        toast.error(message);
      });
  }, [dayNumber]);

  useEffect(() => {
    if (remaining <= 0 || result) return;
    const timer = setInterval(() => {
      setRemaining((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [remaining, result]);

  useEffect(() => {
    if (remaining === 0 && attemptId && !result) {
      handleFinalSubmit();
    }
  }, [remaining, attemptId, result]);

  const handleAnswerSelect = async (optionIndex) => {
    if (checkingAnswer || answeredQuestions.has(currentQuestionIndex)) return;
    
    // Remove from skipped if it was skipped
    if (skippedQuestions.has(currentQuestionIndex)) {
      setSkippedQuestions((prev) => {
        const updated = new Set(prev);
        updated.delete(currentQuestionIndex);
        return updated;
      });
    }

    // Update local answer immediately
    setAnswers((prev) => {
      const updated = [...prev];
      updated[currentQuestionIndex] = optionIndex;
      return updated;
    });

    // Check answer with backend
    setCheckingAnswer(true);
    try {
      const { data } = await api.post("/exams/check-answer", {
        attemptId,
        questionIndex: currentQuestionIndex,
        answer: optionIndex
      });

      // Store correct answer
      setCorrectAnswers((prev) => ({
        ...prev,
        [currentQuestionIndex]: data.correctAnswer
      }));

      // Mark as answered
      setAnsweredQuestions((prev) => new Set([...prev, currentQuestionIndex]));

      // Track correct/incorrect
      if (data.isCorrect) {
        setCorrectQuestions((prev) => new Set([...prev, currentQuestionIndex]));
        setIncorrectQuestions((prev) => {
          const updated = new Set(prev);
          updated.delete(currentQuestionIndex);
          return updated;
        });
        toast.success("Correct answer!");
      } else {
        setIncorrectQuestions((prev) => new Set([...prev, currentQuestionIndex]));
        setCorrectQuestions((prev) => {
          const updated = new Set(prev);
          updated.delete(currentQuestionIndex);
          return updated;
        });
        toast.error("Incorrect answer");
      }
    } catch (err) {
      toast.error("Failed to check answer");
      console.error(err);
    } finally {
      setCheckingAnswer(false);
    }
  };

  const handleFinalSubmit = async () => {
    if (!showPasswordModal) {
      // Show password modal first
      setShowPasswordModal(true);
      return;
    }

    if (!submitPassword) {
      toast.error("Please enter your password");
      return;
    }

    setSubmitting(true);
    try {
      const { data } = await api.post("/exams/submit", { 
        attemptId, 
        answers,
        password: submitPassword
      });
      setResult(data);
      setShowPasswordModal(false);
      toast.success("Exam submitted successfully");
    } catch (err) {
      const message = err.response?.data?.message || "Submit failed";
      if (message.includes("password") || message.includes("Password")) {
        toast.error(message);
        setSubmitPassword(""); // Clear password on error
      } else {
        setError(message);
        toast.error(message);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleSkip = () => {
    // Mark as skipped
    setSkippedQuestions((prev) => new Set([...prev, currentQuestionIndex]));
    // Move to next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const goToQuestion = (index) => {
    if (index >= 0 && index < questions.length) {
      setCurrentQuestionIndex(index);
    }
  };

  // Scroll question strip so current question is visible
  useEffect(() => {
    const el = questionButtonRefs.current[currentQuestionIndex];
    if (el && questionStripRef.current) {
      el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [currentQuestionIndex]);

  const isMr = i18n.language === "mr";
  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = answers[currentQuestionIndex];
  const isAnswered = answeredQuestions.has(currentQuestionIndex);
  const correctAnswer = correctAnswers[currentQuestionIndex];

  if (error) {
    return (
      <StudentLayout>
        <div className="rounded bg-white p-6 shadow">
          <p className="text-red-500">{error}</p>
        </div>
      </StudentLayout>
    );
  }

  if (result) {
    const passed = result.score > 40;
    return (
      <StudentLayout>
        <div className="rounded bg-white p-6 shadow">
          <h2 className="text-2xl font-semibold mb-4">Exam Completed!</h2>
          <div className={`rounded p-6 text-center ${passed ? "bg-green-100" : "bg-amber-100"}`}>
            <p className={`text-3xl font-bold ${passed ? "text-green-700" : "text-amber-800"}`}>
              Score: {result.score}/{result.total}
            </p>
            <p className={`text-lg mt-2 ${passed ? "text-green-600" : "text-amber-700"}`}>
              {Math.round((result.score / result.total) * 100)}% Correct
            </p>
            {!passed && (
              <p className="mt-3 text-sm font-medium text-amber-800">
                You need a score greater than 40 to pass. Please retake the exam.
              </p>
            )}
          </div>
          <div className="mt-6 flex gap-3">
            {passed ? (
              <button
                onClick={() => navigate(`/courses/${Number(dayNumber) + 1}`)}
                className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
              >
                Proceed to Next
              </button>
            ) : (
              <button
                onClick={() => navigate(`/courses/${dayNumber}`)}
                className="rounded bg-amber-600 px-4 py-2 text-white hover:bg-amber-700"
              >
                Retake Exam
              </button>
            )}
          </div>
        </div>
      </StudentLayout>
    );
  }

  if (!currentQuestion) {
    return (
      <StudentLayout>
        <div className="rounded bg-white p-6 shadow">
          <p>Loading exam...</p>
        </div>
      </StudentLayout>
    );
  }

  return (
    <StudentLayout>
      <div className="rounded bg-white p-6 shadow max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Day {dayNumber} Exam</h2>
          <div className="rounded bg-gray-100 px-3 py-1.5 text-sm font-medium tabular-nums">
            Time: {Math.floor(remaining / 60)}:{String(remaining % 60).padStart(2, "0")}
          </div>
        </div>

        {/* Green "✓ Correct" banner */}
        {isAnswered && correctAnswer !== undefined && currentAnswer === correctAnswer && (
          <div className="mb-4 rounded-lg bg-green-600 text-white px-4 py-3 text-center font-semibold flex items-center justify-center gap-2">
            <span>✓</span>
            <span>Correct</span>
          </div>
        )}

        {/* Current Question - clean card layout */}
        <div className="mb-6">
          <p className="font-semibold text-lg text-gray-900 mb-4">
            {isMr ? currentQuestion.questionMr : currentQuestion.questionEn}
          </p>
            <div className="space-y-3">
              {currentQuestion.options.map((opt, oIndex) => {
                const isSelected = currentAnswer === oIndex;
                const isCorrect = oIndex === correctAnswer;
                const showFeedback = isAnswered;

                let borderClass = "border-gray-200";
                let bgClass = "bg-white";
                if (showFeedback) {
                  if (isCorrect) {
                    borderClass = "border-green-500";
                    bgClass = "bg-white";
                  } else if (isSelected && !isCorrect) {
                    borderClass = "border-red-300";
                    bgClass = "bg-red-50";
                  }
                } else if (isSelected) {
                  borderClass = "border-green-400";
                  bgClass = "bg-white";
                }

                return (
                  <label
                    key={oIndex}
                    className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${bgClass} ${borderClass} ${
                      isAnswered ? "cursor-default" : "hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`q-${currentQuestionIndex}`}
                      checked={isSelected}
                      onChange={() => handleAnswerSelect(oIndex)}
                      disabled={isAnswered || checkingAnswer}
                      className="w-4 h-4"
                    />
                    <span className="flex-1 text-gray-800">{isMr ? opt.textMr : opt.textEn}</span>
                    {showFeedback && isCorrect && (
                      <span className="text-green-600 font-semibold shrink-0">✓ Correct</span>
                    )}
                    {showFeedback && isSelected && !isCorrect && (
                      <span className="text-red-600 font-semibold shrink-0">✗ Wrong</span>
                    )}
                  </label>
                );
              })}
            </div>
        </div>

        {/* Skip */}
        {!isAnswered && (
          <div className="mb-6 text-center">
            <button
              onClick={handleSkip}
              disabled={checkingAnswer}
              className="rounded bg-amber-500 hover:bg-amber-600 px-4 py-2 text-white text-sm font-medium disabled:opacity-50"
            >
              Skip
            </button>
          </div>
        )}

        {/* Question strip + Prev/Next */}
        <div className="border-t border-gray-200 pt-4">
          <div ref={questionStripRef} className="overflow-x-auto pb-2 scroll-smooth">
            <div className="flex gap-1.5 justify-start min-w-max">
            {questions.map((_, index) => {
              let boxClass = "bg-gray-100 text-gray-700 border border-gray-200";
              if (index === currentQuestionIndex) boxClass = "bg-indigo-600 text-white border-indigo-600";
              else if (correctQuestions.has(index)) boxClass = "bg-green-500 text-white border-green-500";
              else if (incorrectQuestions.has(index)) boxClass = "bg-red-500 text-white border-red-500";
              else if (skippedQuestions.has(index)) boxClass = "bg-amber-400 text-white border-amber-400";
              else if (answeredQuestions.has(index)) boxClass = "bg-gray-200 text-gray-800 border-gray-300";
              return (
                <button
                  key={index}
                  ref={(el) => { questionButtonRefs.current[index] = el; }}
                  type="button"
                  onClick={() => goToQuestion(index)}
                  className={`w-9 h-9 rounded text-sm font-semibold border shrink-0 flex items-center justify-center ${boxClass} hover:opacity-90`}
                  title={`Question ${index + 1}`}
                >
                  {index + 1}
                </button>
              );
            })}
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-3">Answered: {answeredQuestions.size} / {questions.length}</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            onClick={goToPrevious}
            disabled={currentQuestionIndex === 0}
            className="rounded bg-gray-200 text-gray-800 px-4 py-2 text-sm font-medium hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          {currentQuestionIndex < questions.length - 1 ? (
            <button onClick={goToNext} className="rounded bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700">
              Next
            </button>
          ) : (
            <button onClick={() => setShowPasswordModal(true)} className="rounded bg-green-600 text-white px-4 py-2 text-sm font-medium hover:bg-green-700">
              Submit Exam
            </button>
          )}
        </div>
      </div>

      {/* Password Verification Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold mb-4">Confirm Exam Submission</h3>
            <p className="text-gray-600 mb-4">
              Please enter your password to submit the exam. This action cannot be undone.
            </p>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={submitPassword}
                onChange={(e) => setSubmitPassword(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleFinalSubmit();
                  }
                }}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                autoFocus
              />
            </div>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => {
                  setShowPasswordModal(false);
                  setSubmitPassword("");
                }}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                disabled={submitting}
              >
                Cancel
              </button>
              <button
                onClick={handleFinalSubmit}
                disabled={!submitPassword || submitting}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Submit Exam"}
              </button>
            </div>
          </div>
        </div>
      )}
    </StudentLayout>
  );
};

export default ExamPage;