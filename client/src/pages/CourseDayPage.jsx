import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import StudentLayout from "../components/StudentLayout";
import CtrlShortcutsTable from "../components/CtrlShortcutsTable";
import ExcelOperatorsTable from "../components/ExcelOperatorsTable";
import ExcelShortcutsTable from "../components/ExcelShortcutsTable";
import ExcelStatisticalFunctionsTable from "../components/ExcelStatisticalFunctionsTable";
import HighlightCellRulesTable from "../components/HighlightCellRulesTable";
import PowerPointKeyFeaturesTable from "../components/PowerPointKeyFeaturesTable";
import api from "../api/api";
import { DEFAULT_PRACTICAL_STEPS_BY_DAY } from "../data/practicalStepsByDay";

const getYoutubeEmbedUrl = (url) => {
  if (!url) return "";
  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes("youtube.com/watch")) {
    const params = new URLSearchParams(url.split("?")[1] || "");
    const id = params.get("v");
    return id ? `https://www.youtube.com/embed/${id}` : "";
  }
  return "";
};

const isHeadingLine = (line) => {
  const trimmed = line.trim();
  if (!trimmed) return false;
  if (trimmed.startsWith("[") && trimmed.includes("]")) return true;
  if (trimmed.endsWith(":")) return true;
  if (trimmed.startsWith("Computer Class Day")) return true;
  if (trimmed.startsWith("Title:") || trimmed.startsWith("Channel:")) return true;
  if (trimmed.startsWith("Language:")) return true;
  if (/^\d+\./.test(trimmed)) return false;
  if (trimmed.startsWith("-")) return false;
  if (trimmed.length <= 45 && !trimmed.includes(".")) return true;
  return false;
};

const renderContent = (content, { isSectionTwo = false } = {}) => {
  const bodyTextClass = isSectionTwo ? "text-base" : "text-sm";       // ~16px / ~14px
  const headingTextClass = isSectionTwo ? "text-xl font-bold" : "text-lg font-semibold";   // ~20px / ~18px
  const subheadingTextClass = isSectionTwo ? "text-lg font-bold" : "text-base font-semibold";  // ~18px / ~16px
  return content.split("\n").map((line, index) => {
    const trimmed = line.trim();
    if (!trimmed) {
      return <div key={`space-${index}`} className="h-2" />;
    }
  if (isSectionTwo && /^\d+\.\s/.test(trimmed)) {
    const isTimedHeading = /\[\d{2}:\d{2}:\d{2}\]/.test(trimmed);
    const numberClass = isTimedHeading ? headingTextClass : subheadingTextClass;
    return (
      <div key={`h1-${index}`} className={`${numberClass} text-gray-900`}>
        {trimmed}
      </div>
    );
  }
  if (
    isSectionTwo &&
    isHeadingLine(trimmed) &&
    !trimmed.startsWith("Computer Class Day") &&
    !/^\d+\.\s/.test(trimmed)
  ) {
    return (
      <div key={`h2-${index}`} className={`${subheadingTextClass} text-gray-900`}>
        {trimmed}
      </div>
    );
  }
    if (isSectionTwo && trimmed.endsWith(":")) {
      return (
        <div key={`h2-${index}`} className={`${subheadingTextClass} text-gray-900`}>
          {trimmed}
        </div>
      );
    }
    if (/^\d+\./.test(trimmed)) {
      return (
        <div key={`num-${index}`} className={`ml-4 ${bodyTextClass} text-gray-700`}>
          {trimmed}
        </div>
      );
    }
    if (trimmed.startsWith("-")) {
      return (
        <div key={`bul-${index}`} className={`ml-4 ${bodyTextClass} text-gray-700`}>
          • {trimmed.replace(/^-+\s*/, "")}
        </div>
      );
    }
    if (isHeadingLine(trimmed)) {
      return (
        <div key={`head-${index}`} className={`${headingTextClass} text-gray-900`}>
          {trimmed}
        </div>
      );
    }
    return (
      <div key={`txt-${index}`} className={`${bodyTextClass} text-gray-700`}>
        {trimmed}
      </div>
    );
  });
};

const CourseDayPage = () => {
  const { dayNumber } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const contentTopRef = useRef(null);
  const section1Ref = useRef(null);
  const [day, setDay] = useState(null);
  const [completedSections, setCompletedSections] = useState([]);
  const [practicalCompletedSteps, setPracticalCompletedSteps] = useState([]);
  const [showPracticalModal, setShowPracticalModal] = useState(false);
  const [error, setError] = useState("");
  const [loadingDay, setLoadingDay] = useState(null);

  useEffect(() => {
    const num = Number(dayNumber);
    setError("");
    setLoadingDay(num);
    api
      .get(`/courses/days/${dayNumber}`)
      .then((res) => {
        const data = res.data;
        setDay(data);
        setLoadingDay(null);
        if (data.subsections?.length && Array.isArray(data.completedSections) && data.completedSections.length === data.subsections.length) {
          setCompletedSections(data.completedSections);
        } else if (data.subsections?.length) {
          setCompletedSections(Array(data.subsections.length).fill(false));
        }
        const defaultForDay = DEFAULT_PRACTICAL_STEPS_BY_DAY[num];
        const steps = (defaultForDay?.length) ? defaultForDay : (data.practicalSteps || []);
        const saved = data.practicalCompletedSteps;
        if (Array.isArray(saved) && saved.length === steps.length) {
          setPracticalCompletedSteps(saved);
        } else {
          const completed = Array(steps.length).fill(false);
          if (Array.isArray(saved)) saved.forEach((v, i) => { if (i < steps.length) completed[i] = v; });
          setPracticalCompletedSteps(completed);
        }
      })
      .catch((err) => {
        setError(err.response?.data?.message || "Day locked");
        setLoadingDay(null);
      });
  }, [dayNumber]);

  // When day loads, scroll to hash (e.g. #section-1) or to Section 1 / top
  useEffect(() => {
    if (!day?.dayNumber) return;
    const timer = setTimeout(() => {
      const hash = window.location.hash;
      const sectionMatch = hash && hash.match(/^#section-(\d+)$/);
      const sectionIndex = sectionMatch ? parseInt(sectionMatch[1], 10) : null;
      if (sectionIndex != null && day.subsections?.[sectionIndex]) {
        document.getElementById(`section-${sectionIndex}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (day.subsections?.length > 0) {
        section1Ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        contentTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [day?.dayNumber, day?.subsections?.length, location.hash]);

  const isMr = i18n.language === "mr";
  const totalSections = day?.subsections?.length || 0;
  const allSectionsCompleted =
    totalSections === 0 || completedSections.filter(Boolean).length === totalSections;

  const defaultStepsForDay = day ? DEFAULT_PRACTICAL_STEPS_BY_DAY[Number(day.dayNumber)] : [];
  const practicalStepsList = (defaultStepsForDay?.length) ? defaultStepsForDay : (day?.practicalSteps || []);
  const allPracticalStepsComplete =
    practicalStepsList.length === 0 ||
    (practicalCompletedSteps.length === practicalStepsList.length && practicalCompletedSteps.every(Boolean));
  const examUnlocked = allSectionsCompleted && allPracticalStepsComplete;


  if (error) {
    return (
      <StudentLayout>
        <div className="rounded bg-white p-6 shadow">
          <p className="text-red-500">{error}</p>
        </div>
      </StudentLayout>
    );
  }

  if (!day) {
    return (
      <StudentLayout>
        <div className="p-6">
          {loadingDay ? `Loading Day ${loadingDay}...` : "Loading..."}
        </div>
      </StudentLayout>
    );
  }

  // While switching days, show previous day with a small loading bar (no full refresh flash)
  const isSwitchingDays = loadingDay != null && day != null && Number(day.dayNumber) !== Number(loadingDay);
  const isExamOnlyDay = Number(day.dayNumber) === 21 && (!day.subsections || day.subsections.length === 0);

  return (
    <StudentLayout>
      <div ref={contentTopRef} className="rounded bg-white p-6 shadow">
        {isSwitchingDays && (
          <div className="mb-4 flex items-center gap-2 rounded bg-indigo-50 px-3 py-2 text-sm text-indigo-700">
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-indigo-600 border-t-transparent" />
            Loading Day {loadingDay}...
          </div>
        )}
        <h2 className="text-xl font-semibold">Day {day.dayNumber}</h2>
        {isExamOnlyDay ? (
          <div className="mt-6 rounded-lg border-2 border-amber-200 bg-amber-50 p-6 text-center">
            <p className="text-lg font-medium text-gray-800">
              {isMr
                ? "या दिवसावर फक्त परीक्षा आहे. व्हिडिओ किंवा मजकूर नाही—मागील २० दिवसांतील १०० प्रश्न."
                : "This day is exam only. No video or content—100 questions from the past 20 days."}
            </p>
            <button
              onClick={() => navigate(`/exams/${day.dayNumber}`)}
              className="mt-6 rounded bg-green-600 px-6 py-3 text-base font-semibold text-white hover:bg-green-700"
            >
              Start Exam
            </button>
          </div>
        ) : (
          <>
        {day.imageUrl && (
          <img
            src={day.imageUrl}
            alt={`Day ${day.dayNumber}`}
            className="mt-4 w-full rounded object-cover"
          />
        )}
        {day.videoUrl && (
          <video className="mt-4 w-full rounded" controls src={day.videoUrl} />
        )}
        <div className="mt-4 space-y-2">
          {renderContent(isMr ? day.contentMr : day.contentEn)}
        </div>
        <div className="mt-4 space-y-3">
          {day.subsections.map((section, index) => (
            <div key={index} id={`section-${index}`} ref={index === 0 ? section1Ref : null} className="rounded bg-gray-50 p-4">
              <h3 className="font-semibold">
                {isMr ? section.titleMr : section.titleEn}
              </h3>
              <div className="mt-2 space-y-2">
                {Number(day.dayNumber) === 9 && index === 1 ? (
                  <>
                    {renderContent(
                      (() => {
                        const content = isMr ? section.contentMr : section.contentEn;
                        const tableMarker = "Shortcut | Primary Function";
                        const detailedMarker = "Detailed Explanations";
                        if (content.includes(tableMarker) && content.includes(detailedMarker)) {
                          return content.substring(0, content.indexOf(tableMarker)).trim();
                        }
                        return content;
                      })(),
                      { isSectionTwo: true }
                    )}
                    <CtrlShortcutsTable />
                    {(() => {
                      const content = isMr ? section.contentMr : section.contentEn;
                      const detailedMarker = "Detailed Explanations";
                      if (content.includes(detailedMarker)) {
                        return (
                          <div className="mt-4">
                            {renderContent(
                              content.substring(content.indexOf(detailedMarker)).trim(),
                              { isSectionTwo: true }
                            )}
                          </div>
                        );
                      }
                      return null;
                    })()}
                  </>
                ) : Number(day.dayNumber) === 23 && index === 1 ? (
                  <>
                    {renderContent(
                      (() => {
                        const content = isMr ? section.contentMr : section.contentEn;
                        const tableMarker = "5. Summary Table of Operators";
                        if (content.includes(tableMarker)) {
                          return content.substring(0, content.indexOf(tableMarker)).trim();
                        }
                        return content;
                      })(),
                      { isSectionTwo: true }
                    )}
                    <ExcelOperatorsTable />
                  </>
                ) : Number(day.dayNumber) === 25 && index === 1 ? (
                  <>
                    {renderContent(
                      (() => {
                        const content = isMr ? section.contentMr : section.contentEn;
                        const tableMarker = "5. Summary of Shortcuts";
                        if (content.includes(tableMarker)) {
                          return content.substring(0, content.indexOf(tableMarker)).trim();
                        }
                        return content;
                      })(),
                      { isSectionTwo: true }
                    )}
                    <ExcelShortcutsTable />
                  </>
                ) : Number(day.dayNumber) === 26 && index === 1 ? (
                  <>
                    {renderContent(
                      (() => {
                        const content = isMr ? section.contentMr : section.contentEn;
                        const tableMarker = "Common functions used for data analysis in tables:";
                        if (content.includes(tableMarker)) {
                          return content.substring(0, content.indexOf(tableMarker)).trim();
                        }
                        return content;
                      })(),
                      { isSectionTwo: true }
                    )}
                    <ExcelStatisticalFunctionsTable />
                    {(() => {
                      const content = isMr ? section.contentMr : section.contentEn;
                      const afterMarker = "Pro Tip:";
                      if (content.includes(afterMarker)) {
                        return (
                          <div className="mt-4">
                            {renderContent(
                              content.substring(content.indexOf(afterMarker)).trim(),
                              { isSectionTwo: true }
                            )}
                          </div>
                        );
                      }
                      return null;
                    })()}
                  </>
                ) : Number(day.dayNumber) === 27 && index === 1 ? (
                  <>
                    {renderContent(
                      (() => {
                        const content = isMr ? section.contentMr : section.contentEn;
                        const tableMarker = "Greater Than:";
                        if (content.includes(tableMarker)) {
                          return content.substring(0, content.indexOf(tableMarker)).trim();
                        }
                        return content;
                      })(),
                      { isSectionTwo: true }
                    )}
                    <HighlightCellRulesTable />
                    {(() => {
                      const content = isMr ? section.contentMr : section.contentEn;
                      const afterMarker = "3. Top/Bottom Rules";
                      if (content.includes(afterMarker)) {
                        return (
                          <div className="mt-4">
                            {renderContent(
                              content.substring(content.indexOf(afterMarker)).trim(),
                              { isSectionTwo: true }
                            )}
                          </div>
                        );
                      }
                      return null;
                    })()}
                  </>
                ) : Number(day.dayNumber) === 29 && index === 1 ? (
                  <>
                    {renderContent(
                      (() => {
                        const content = isMr ? section.contentMr : section.contentEn;
                        const tableMarker = "4. Summary Table of Key Features";
                        if (content.includes(tableMarker)) {
                          return content.substring(0, content.indexOf(tableMarker)).trim();
                        }
                        return content;
                      })(),
                      { isSectionTwo: true }
                    )}
                    <PowerPointKeyFeaturesTable />
                  </>
                ) : (
                  renderContent(isMr ? section.contentMr : section.contentEn, {
                    isSectionTwo: index === 1
                  })
                )}
              </div>
              {section.videoUrl && (
                <div className="mt-3 aspect-video w-full">
                  <iframe
                    title={`section-${index}-video`}
                    src={getYoutubeEmbedUrl(section.videoUrl) || section.videoUrl}
                    className="h-full w-full rounded"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              <button
                onClick={() => {
                  const next = [...completedSections];
                  next[index] = !next[index];
                  setCompletedSections(next);
                  api.put(`/courses/days/${day.dayNumber}/sections`, { completedSections: next }).then(() => {
                    window.dispatchEvent(new Event("section-completion-changed"));
                  }).catch(() => {});
                }}
                className={`mt-3 rounded px-3 py-2 text-sm font-semibold ${
                  completedSections[index] ? "bg-blue-600 text-white" : "bg-white text-blue-600 border"
                }`}
              >
                {completedSections[index] ? "Marked as Complete" : "Mark as Complete"}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => {
              const lang = i18n.language || "en";
              const url = `${window.location.origin}/courses/${day.dayNumber}/practical-popup?lang=${encodeURIComponent(lang)}`;
              const w = window.open(url, `PracticalDay${day.dayNumber}`, "width=380,height=700,scrollbars=yes,resizable=yes,left=100,top=100");
              if (!w) setShowPracticalModal(true);
            }}
            className="rounded bg-amber-500 px-4 py-2 text-sm font-medium text-white hover:bg-amber-600"
          >
            Practical
          </button>
          {examUnlocked ? (
            <button
              onClick={() => navigate(`/exams/${day.dayNumber}`)}
              className="rounded bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700"
            >
              Start Exam
            </button>
          ) : totalSections > 0 || practicalStepsList.length > 0 ? (
            <span className="rounded border border-gray-300 bg-gray-100 px-4 py-2 text-sm text-gray-500">
              {!allSectionsCompleted
                ? (isMr ? "प्रथम Section 1 आणि Section 2 पूर्ण करा, नंतर Practical पूर्ण करा, त्यानंतर परीक्षा अनलॉक होईल." : "Complete Section 1 and Section 2, then complete Practical to unlock exam.")
                : (isMr ? "परीक्षा अनलॉक करण्यासाठी सर्व Practical पायऱ्या पूर्ण करा." : "Complete all Practical steps to unlock exam.")}
            </span>
          ) : null}
        </div>
        {showPracticalModal && (() => {
          const dayNum = Number(day.dayNumber);
          const defaultForDay = DEFAULT_PRACTICAL_STEPS_BY_DAY[dayNum];
          const stepsList = (defaultForDay?.length) ? defaultForDay : (day.practicalSteps?.length ? day.practicalSteps : []);
          return (
            <>
              {/* No overlay: main area stays usable so you can scroll, read, and use Settings/Files/Word/Excel/PPT while the steps panel stays on the right */}
              <div className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-[320px] flex flex-col rounded-l-xl border-l border-gray-200 bg-white shadow-2xl">
                <div className="flex items-center justify-between border-b border-gray-100 p-3">
                  <h3 className="text-base font-semibold text-gray-900">Day {day.dayNumber} – Practical</h3>
                  <button type="button" onClick={() => setShowPracticalModal(false)} className="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700" aria-label="Close">✕</button>
                </div>
                <p className="px-3 pt-2 text-xs text-gray-600">
                  {isMr
                    ? "प्रत्येक पायरी PC वर करा (Settings, Files, Word, Excel, PPT इ.). हा पॅनेल येथेच राहतो—उर्वरित स्क्रीनवर पायऱ्या करा, नंतर पूर्ण म्हणून टॅप करा."
                    : "Do each step on your PC (Settings, Files, Word, Excel, PPT, etc.). This panel stays here—use the rest of the screen to perform the steps, then tap to mark done."}
                </p>
                <ul className="flex-1 overflow-y-auto p-3 space-y-2">
                  {stepsList.length === 0 ? (
                    <li className="text-sm text-gray-500">No practical steps for this day yet.</li>
                  ) : (
                    stepsList.map((step, index) => {
                      const completed = practicalCompletedSteps[index] === true;
                      return (
                        <li key={step.stepNumber}>
                          <button
                            type="button"
                            onClick={() => {
                              const next = [...practicalCompletedSteps];
                              if (next.length <= index) {
                                while (next.length <= index) next.push(false);
                              }
                              next[index] = !next[index];
                              setPracticalCompletedSteps(next);
                              api.put(`/courses/days/${day.dayNumber}/practical-completion`, { completedSteps: next }).catch(() => {});
                            }}
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
                <div className="border-t border-gray-100 p-3">
                  <button
                    type="button"
                    onClick={() => setShowPracticalModal(false)}
                    className="w-full rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700"
                  >
                    {isMr ? "सबमिट" : "Submit"}
                  </button>
                </div>
              </div>
            </>
          );
        })()}
          </>
        )}
      </div>
    </StudentLayout>
  );
};

export default CourseDayPage;
