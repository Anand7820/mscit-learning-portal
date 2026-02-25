import React, { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import StudentLayout from "../components/StudentLayout";
import api from "../api/api";
import { useAuth } from "../context/AuthContext";

// Passing score: score > 40 to pass (i.e. score ≤ 40 is fail)
const PASSING_SCORE = 40;

const getInitials = (name) => {
  if (!name || typeof name !== "string") return "?";
  return name.trim().split(/\s+/).map((n) => n[0]).join("").toUpperCase().slice(0, 2);
};

const ExamPage = () => {
  const { dayNumber } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { user } = useAuth();
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
    const passed = result.score > PASSING_SCORE;
    const isDay21 = dayNumber === "21";
    const isMr = i18n.language === "mr";

    if (isDay21 && passed) {
      const name = user?.profile?.name || "Student";
      const photoUrl = user?.profile?.photoUrl;
      const confettiColors = [
        "#f59e0b", "#10b981", "#6366f1", "#ec4899", "#eab308", "#14b8a6",
        "#f97316", "#8b5cf6", "#ef4444", "#22c55e"
      ];
      const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
        color: confettiColors[i % confettiColors.length],
        left: (i * 5.7) % 100,
        delay: (i * 0.2) % 4,
        size: 6 + (i % 5),
        isStrip: i % 3 === 0
      }));
      return (
        <StudentLayout>
          <div
            className="relative min-h-[60vh] overflow-hidden rounded-2xl border-4 p-8 animate-border-rainbow"
            style={{
              background: "linear-gradient(135deg, #fef3c7 0%, #fff 25%, #d1fae5 50%, #fff 75%, #fef3c7 100%)",
              backgroundSize: "400% 400%",
              animation: "bg-shift 8s ease infinite"
            }}
          >
            {/* Falling confetti - squares + strips */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
              {confettiPieces.map((c, i) =>
                c.isStrip ? (
                  <div
                    key={`s-${i}`}
                    className="animate-confetti-strip"
                    style={{
                      left: `${c.left}%`,
                      backgroundColor: c.color,
                      animationDelay: `${c.delay}s`
                    }}
                  />
                ) : (
                  <div
                    key={i}
                    className="animate-confetti-fall"
                    style={{
                      left: `${c.left}%`,
                      backgroundColor: c.color,
                      width: c.size,
                      height: c.size,
                      animationDelay: `${c.delay}s`
                    }}
                  />
                )
              )}
            </div>
            <div className="relative max-w-lg mx-auto text-center">
              <p className="text-5xl mb-2 animate-emoji-crazy" aria-hidden="true">🎉</p>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-1 animate-crazy-pop-in animate-text-rainbow">
                {isMr ? "अभिनंदन! तुम्ही दिवस २१ परीक्षा उत्तीर्ण झाला!" : "Congratulations! You passed Day 21!"}
              </h2>
              <p className="text-lg font-bold text-amber-700 mb-6 animate-wiggle">
                {isMr ? "🎉 खूप छान! तुमचे अभिनंदन! 🎉" : "🎉 You did something amazing! 🎉"}
              </p>
              <div className="flex justify-center mb-6" style={{ perspective: "400px" }}>
                <div className="relative flex items-center justify-center" style={{ width: 180, height: 180 }}>
                  {/* Spinning ring */}
                  <div
                    className="absolute inset-0 rounded-full border-4 border-dashed border-amber-400/60 animate-spin-ring"
                    style={{ width: 160, height: 160, margin: "auto" }}
                  />
                  <div
                    className="absolute rounded-full border-4 border-transparent animate-spin-ring"
                    style={{
                      width: 170,
                      height: 170,
                      margin: "auto",
                      borderTopColor: "#ec4899",
                      borderRightColor: "#6366f1",
                      borderBottomColor: "#10b981",
                      borderLeftColor: "#eab308"
                    }}
                  />
                  {/* Badge with 3D glow */}
                  <div className="relative w-28 h-28 rounded-full ring-4 ring-amber-400/80 ring-offset-2 ring-offset-white overflow-hidden bg-gradient-to-br from-amber-200 to-amber-400 animate-badge-crazy">
                    {photoUrl ? (
                      <img src={photoUrl} alt={name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="flex items-center justify-center w-full h-full text-3xl font-bold text-amber-800">
                        {getInitials(name)}
                      </span>
                    )}
                  </div>
                  {/* Orbiting stars */}
                  <span
                    className="absolute text-2xl animate-orbit-star-1"
                    style={{ top: "50%", left: "50%", marginTop: -14, marginLeft: -14 }}
                    aria-hidden="true"
                  >
                    ⭐
                  </span>
                  <span
                    className="absolute text-2xl animate-orbit-star-2"
                    style={{ top: "50%", left: "50%", marginTop: -14, marginLeft: -14 }}
                    aria-hidden="true"
                  >
                    ✨
                  </span>
                </div>
              </div>
              <p className="text-xl font-semibold text-gray-800 mb-1">{name}</p>
              <p className="text-2xl font-bold text-green-700 mb-6 animate-score-pop">
                Score: {result.score}/{result.total} ({Math.round((result.score / result.total) * 100)}%)
              </p>
              <p className="text-gray-600 mb-6">
                {isMr ? "तुम्ही २० दिवसांचा अभ्यास परीक्षेत उत्तीर्ण झाला. पुढच्या पायरीसाठी शुभेच्छा!" : "You've completed the 20-day recap exam. Well done!"}
              </p>
              <button
                onClick={() => navigate("/courses/22")}
                className="btn-shimmer relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-lg font-bold text-white animate-btn-neon hover:scale-110 transition-transform duration-300"
              >
                <span className="relative z-10">{isMr ? "पुढे जा" : "Proceed to Next"}</span>
              </button>
            </div>
          </div>
        </StudentLayout>
      );
    }

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
                You need a score greater than {PASSING_SCORE} to pass. Please retake the exam.
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