import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import StudentLayout from "../components/StudentLayout";
import api from "../api/api";

const rememberAnswer = (answers, index) => {
  return answers[index] ?? -1;
};

const ExamPage = () => {
  const { dayNumber } = useParams();
  const { i18n } = useTranslation();
  const [attemptId, setAttemptId] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // Add timestamp to prevent caching
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
      handleSubmit();
    }
  }, [remaining, attemptId, result]);

  const handleAnswer = (qIndex, optionIndex) => {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[qIndex] = optionIndex;
      return updated;
    });
  };

  const handleSubmit = async () => {
    try {
      const { data } = await api.post("/exams/submit", { attemptId, answers });
      setResult(data);
      toast.success("Exam submitted");
    } catch (err) {
      const message = err.response?.data?.message || "Submit failed";
      setError(message);
      toast.error(message);
    }
  };

  const isMr = i18n.language === "mr";

  if (error) {
    return (
      <StudentLayout>
        <div className="rounded bg-white p-6 shadow">
          <p className="text-red-500">{error}</p>
        </div>
      </StudentLayout>
    );
  }

  return (
    <StudentLayout>
      <div className="rounded bg-white p-6 shadow">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Day {dayNumber} Exam</h2>
          <div className="rounded bg-gray-100 px-3 py-1 text-sm">
            Time Left: {Math.floor(remaining / 60)}:{String(remaining % 60).padStart(2, "0")}
          </div>
        </div>
        {result ? (
          <div className="mt-6 rounded bg-green-100 p-4 text-green-700">
            Score: {result.score}/{result.total}
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {questions.map((q, qIndex) => (
              <div key={qIndex} className="rounded border p-4">
                <p className="font-semibold">{isMr ? q.questionMr : q.questionEn}</p>
                <div className="mt-3 space-y-2">
                  {q.options.map((opt, oIndex) => (
                    <label key={oIndex} className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name={`q-${qIndex}`}
                        checked={rememberAnswer(answers, qIndex) === oIndex}
                        onChange={() => handleAnswer(qIndex, oIndex)}
                      />
                      <span>{isMr ? opt.textMr : opt.textEn}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button
              onClick={handleSubmit}
              className="rounded bg-indigo-600 px-4 py-2 text-white"
            >
              Submit Exam
            </button>
          </div>
        )}
      </div>
    </StudentLayout>
  );
};

export default ExamPage;
