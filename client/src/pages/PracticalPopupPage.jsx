import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import api from "../api/api";
import { DEFAULT_PRACTICAL_STEPS_BY_DAY } from "../data/practicalStepsByDay";

/**
 * Standalone Practical steps window. Opened in a separate browser window so it stays
 * visible outside the main course tab while the user does steps in Word, Excel, PPT, etc.
 */
const PracticalPopupPage = () => {
  const { dayNumber } = useParams();
  const { i18n } = useTranslation();
  const isMr = i18n.language === "mr";
  const [loading, setLoading] = useState(true);
  const [stepsList, setStepsList] = useState([]);
  const [completedSteps, setCompletedSteps] = useState([]);

  useEffect(() => {
    const num = Number(dayNumber);
    if (!dayNumber) return;
    api
      .get(`/courses/days/${dayNumber}`)
      .then((res) => {
        const data = res.data;
        const defaultForDay = DEFAULT_PRACTICAL_STEPS_BY_DAY[num];
        const steps = (defaultForDay?.length) ? defaultForDay : (data.practicalSteps || []);
        setStepsList(steps);
        const saved = data.practicalCompletedSteps;
        if (Array.isArray(saved) && saved.length === steps.length) {
          setCompletedSteps(saved);
        } else {
          const arr = Array(steps.length).fill(false);
          if (Array.isArray(saved)) saved.forEach((v, i) => { if (i < steps.length) arr[i] = v; });
          setCompletedSteps(arr);
        }
      })
      .catch(() => {
        setStepsList([]);
        setCompletedSteps([]);
      })
      .finally(() => setLoading(false));
  }, [dayNumber]);

  const toggleStep = (index) => {
    const next = [...completedSteps];
    if (next.length <= index) {
      while (next.length <= index) next.push(false);
    }
    next[index] = !next[index];
    setCompletedSteps(next);
    api.put(`/courses/days/${dayNumber}/practical-completion`, { completedSteps: next }).catch(() => {});
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-[340px] rounded-xl border border-gray-200 bg-white shadow-lg">
        <div className="flex items-center justify-between border-b border-gray-100 p-3">
          <h1 className="text-base font-semibold text-gray-900">Day {dayNumber} – Practical</h1>
          <button
            type="button"
            onClick={() => window.close()}
            className="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <p className="px-3 pt-2 text-xs text-gray-600">
          {isMr
            ? "ही विंडो ब्राउझरच्या बाहेर राहते. Word, Excel, PPT इ. उघडून पायऱ्या करा, नंतर येथे टॅप करून पूर्ण म्हणून चिन्हांकित करा."
            : "This window stays outside the browser. Open Word, Excel, PPT, etc. to do the steps, then tap here to mark done."}
        </p>
        <div className="mx-3 mt-2 rounded-lg bg-amber-50 border border-amber-200 px-3 py-2 text-xs text-amber-900">
          <span className="font-semibold">{isMr ? "टिप: " : "Tip: "}</span>
          {isMr
            ? "ही विंडो Word/Excel वर ठेवण्यासाठी: या विंडोवर क्लिक करून Win+Left Arrow दाबा (डावीकडे स्नॅप). नंतर Word उघडून Win+Right Arrow दाबा. दोन्ही विंडो एकाच वेळी दिसतील."
            : "To keep this window visible next to Word: click this window, press Win+Left Arrow (snap left). Then open Word and press Win+Right Arrow. Both windows stay visible side by side."}
        </div>
        {loading ? (
          <div className="p-6 text-center text-sm text-gray-500">Loading…</div>
        ) : (
          <ul className="max-h-[60vh] overflow-y-auto p-3 space-y-2">
            {stepsList.length === 0 ? (
              <li className="text-sm text-gray-500">No practical steps for this day yet.</li>
            ) : (
              stepsList.map((step, index) => {
                const completed = completedSteps[index] === true;
                return (
                  <li key={step.stepNumber}>
                    <button
                      type="button"
                      onClick={() => toggleStep(index)}
                      className={`flex w-full items-center gap-2 rounded-lg border-2 px-3 py-2.5 text-left text-sm transition ${
                        completed
                          ? "border-green-500 bg-green-50 text-green-800"
                          : "border-gray-200 bg-white text-gray-800 hover:border-amber-300 hover:bg-amber-50"
                      }`}
                    >
                      <span className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-semibold ${completed ? "bg-green-500 text-white" : "bg-gray-200 text-gray-600"}`}>
                        {completed ? "✓" : step.stepNumber}
                      </span>
                      <span className="flex-1">{isMr && step.textMr ? step.textMr : step.textEn}</span>
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        )}
        <div className="border-t border-gray-100 p-3">
          <button
            type="button"
            onClick={() => window.close()}
            className="w-full rounded-lg bg-gray-200 px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PracticalPopupPage;
