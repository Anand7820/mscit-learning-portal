import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import StudentLayout from "../components/StudentLayout";
import api from "../api/api";

const ExamPage = () => {
  const { dayNumber } = useParams();
  const { i18n } = useTranslation();
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
    return (
      <StudentLayout>
        <div className="rounded bg-white p-6 shadow">
          <h2 className="text-2xl font-semibold mb-4">Exam Completed!</h2>
          <div className="rounded bg-green-100 p-6 text-center">
            <p className="text-3xl font-bold text-green-700">
              Score: {result.score}/{result.total}
            </p>
            <p className="text-lg mt-2 text-green-600">
              {Math.round((result.score / result.total) * 100)}% Correct
            </p>
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
      <div className="rounded bg-white p-6 shadow">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Day {dayNumber} Exam</h2>
          <div className="rounded bg-gray-100 px-3 py-1 text-sm">
            Time Left: {Math.floor(remaining / 60)}:{String(remaining % 60).padStart(2, "0")}
          </div>
        </div>

        {/* Question Progress */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Current Question */}
        <div className="mb-6">
          <div className={`rounded border-2 p-4 ${
            isAnswered
              ? currentAnswer === correctAnswer
                ? "border-green-500 bg-green-50"
                : "border-red-500 bg-red-50"
              : "border-gray-300"
          }`}>
            <p className="font-semibold text-lg mb-4">
              {isMr ? currentQuestion.questionMr : currentQuestion.questionEn}
            </p>
            <div className="space-y-3">
              {currentQuestion.options.map((opt, oIndex) => {
                const isSelected = currentAnswer === oIndex;
                const isCorrect = oIndex === correctAnswer;
                const showFeedback = isAnswered;

                let bgColor = "bg-white";
                let borderColor = "border-gray-300";
                let textColor = "text-gray-800";

                if (showFeedback) {
                  if (isCorrect) {
                    bgColor = "bg-green-100";
                    borderColor = "border-green-500";
                    textColor = "text-green-800";
                  } else if (isSelected && !isCorrect) {
                    bgColor = "bg-red-100";
                    borderColor = "border-red-500";
                    textColor = "text-red-800";
                  }
                } else if (isSelected) {
                  bgColor = "bg-indigo-50";
                  borderColor = "border-indigo-500";
                }

                return (
                  <label
                    key={oIndex}
                    className={`flex items-center gap-3 p-3 rounded border-2 cursor-pointer transition-all ${bgColor} ${borderColor} ${textColor} ${
                      isAnswered ? "cursor-default" : "hover:bg-indigo-50"
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
                    <span className="flex-1">{isMr ? opt.textMr : opt.textEn}</span>
                    {showFeedback && isCorrect && (
                      <span className="text-green-600 font-semibold">✓ Correct</span>
                    )}
                    {showFeedback && isSelected && !isCorrect && (
                      <span className="text-red-600 font-semibold">✗ Wrong</span>
                    )}
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* Skip Button */}
        {!isAnswered && (
          <div className="mb-4 text-center">
            <button
              onClick={handleSkip}
              disabled={checkingAnswer}
              className="rounded bg-yellow-500 hover:bg-yellow-600 px-4 py-2 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Skip Question
            </button>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={goToPrevious}
            disabled={currentQuestionIndex === 0}
            className="rounded bg-gray-500 px-4 py-2 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          <div className="flex gap-2">
            {questions.map((_, index) => {
              let boxColor = "bg-gray-200 text-gray-700"; // Unanswered
              
              if (index === currentQuestionIndex) {
                boxColor = "bg-indigo-600 text-white"; // Current question
              } else if (correctQuestions.has(index)) {
                boxColor = "bg-green-500 text-white"; // Correct answer
              } else if (incorrectQuestions.has(index)) {
                boxColor = "bg-red-500 text-white"; // Wrong answer
              } else if (skippedQuestions.has(index)) {
                boxColor = "bg-yellow-500 text-white"; // Skipped question
              }
              
              return (
                <button
                  key={index}
                  onClick={() => goToQuestion(index)}
                  className={`w-8 h-8 rounded text-sm font-semibold ${boxColor}`}
                  title={`Question ${index + 1}`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>

          {currentQuestionIndex === questions.length - 1 ? (
            <button
              onClick={handleFinalSubmit}
              disabled={answeredQuestions.size === 0}
              className="rounded bg-green-600 px-4 py-2 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Exam ({answeredQuestions.size}/{questions.length} answered)
            </button>
          ) : (
            <button
              onClick={goToNext}
              disabled={currentQuestionIndex === questions.length - 1}
              className="rounded bg-indigo-600 px-4 py-2 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          )}
        </div>

        {/* Progress Summary */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <div>Answered: {answeredQuestions.size} / {questions.length}</div>
          {skippedQuestions.size > 0 && (
            <div className="text-yellow-600 mt-1">Skipped: {skippedQuestions.size}</div>
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
