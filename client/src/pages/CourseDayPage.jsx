import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import StudentLayout from "../components/StudentLayout";
import CtrlShortcutsTable from "../components/CtrlShortcutsTable";
import api from "../api/api";

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
  const [error, setError] = useState("");
  const [loadingDay, setLoadingDay] = useState(null);
  const SECTION2_READING_SECONDS = 180; // 3 min
  const [section2TimeLeft, setSection2TimeLeft] = useState(null); // null = not started, number = seconds left
  const [section2TimerDone, setSection2TimerDone] = useState(false);
  const [section2TimerActive, setSection2TimerActive] = useState(false); // true = interval is running

  const getSection2TimerKeys = (dayNum) => ({
    doneKey: `section2TimerDone_${dayNum}`,
    startKey: `section2TimerStart_${dayNum}`
  });

  const computeSection2Remaining = (startedAtMs) => {
    const elapsed = Math.floor((Date.now() - startedAtMs) / 1000);
    return Math.max(0, SECTION2_READING_SECONDS - elapsed);
  };

  useEffect(() => {
    const num = Number(dayNumber);
    setError("");
    setLoadingDay(num);
    setSection2TimerActive(false); // reset when changing day
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
        // Section 2 timer: restore from localStorage for this day only
        if (data.subsections?.length > 1) {
          const dayNum = Number(data.dayNumber);
          const { doneKey, startKey } = getSection2TimerKeys(dayNum);
          const done = localStorage.getItem(doneKey) === "true";
          if (done) {
            setSection2TimerDone(true);
            setSection2TimeLeft(0);
            setSection2TimerActive(false);
          } else {
            const startedAtMs = Number(localStorage.getItem(startKey));
            if (Number.isFinite(startedAtMs) && startedAtMs > 0) {
              const remaining = computeSection2Remaining(startedAtMs);
              if (remaining <= 0) {
                localStorage.setItem(doneKey, "true");
                localStorage.removeItem(startKey);
                setSection2TimerDone(true);
                setSection2TimeLeft(0);
                setSection2TimerActive(false);
              } else {
                setSection2TimeLeft(remaining);
                setSection2TimerDone(false);
                setSection2TimerActive(true); // resume countdown
              }
            } else {
              setSection2TimeLeft(null);
              setSection2TimerDone(false);
              setSection2TimerActive(false);
            }
          }
        } else {
          setSection2TimeLeft(null);
          setSection2TimerDone(true);
          setSection2TimerActive(false);
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

  // Section 2: run countdown interval only when section2TimerActive is true (started on this day)
  useEffect(() => {
    if (!section2TimerActive || section2TimerDone) return;
    if (!day?.subsections?.length || day.subsections.length < 2) return;
    const dayNum = Number(day.dayNumber);
    const { doneKey, startKey } = getSection2TimerKeys(dayNum);

    const id = setInterval(() => {
      setSection2TimeLeft((prev) => {
        if (prev == null || prev <= 1) {
          localStorage.setItem(doneKey, "true");
          localStorage.removeItem(startKey);
          setSection2TimerDone(true);
          setSection2TimerActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [section2TimerActive, section2TimerDone, day?.dayNumber, day?.subsections?.length]);

  const isMr = i18n.language === "mr";
  const totalSections = day?.subsections?.length || 0;
  const allSectionsCompleted =
    totalSections === 0 || completedSections.filter(Boolean).length === totalSections;


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
          {day.subsections.map((section, index) => {
          const isSection2 = index === 1;
          const section2TimerRunning = isSection2 && section2TimeLeft != null && section2TimeLeft > 0 && !section2TimerDone;
          const section2CanMarkComplete = !isSection2 || section2TimerDone;
          const section2ButtonLabel = isSection2 && !completedSections[0] && !section2TimerDone
            ? "Complete Section 1 first"
            : isSection2 && section2TimerRunning
              ? `${Math.floor((section2TimeLeft ?? 0) / 60)}:${String((section2TimeLeft ?? 0) % 60).padStart(2, "0")}`
              : completedSections[index]
                ? "Marked as Complete"
                : "Mark as Complete";
          return (
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
                  // When marking Section 1 complete, start the 3-min reading timer for Section 2 (this day only)
                  if (index === 0 && next[0] && day.subsections?.length > 1) {
                    const dayNum = Number(day.dayNumber);
                    const { startKey, doneKey } = getSection2TimerKeys(dayNum);
                    if (localStorage.getItem(doneKey) !== "true") {
                      localStorage.setItem(startKey, String(Date.now()));
                      setSection2TimeLeft(SECTION2_READING_SECONDS);
                      setSection2TimerDone(false);
                      setSection2TimerActive(true);
                    }
                  }
                  api.put(`/courses/days/${day.dayNumber}/sections`, { completedSections: next }).then(() => {
                    window.dispatchEvent(new Event("section-completion-changed"));
                  }).catch(() => {});
                }}
                disabled={!section2CanMarkComplete}
                className={`mt-3 rounded px-3 py-2 text-sm font-semibold tabular-nums ${
                  completedSections[index]
                    ? "bg-blue-600 text-white"
                    : section2TimerRunning
                      ? "bg-amber-100 text-amber-800 border border-amber-400"
                      : "bg-white text-blue-600 border"
                } ${!section2CanMarkComplete ? "cursor-not-allowed opacity-60" : ""}`}
              >
                {section2ButtonLabel}
              </button>
            </div>
          );
        })}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {allSectionsCompleted ? (
            <button
              onClick={() => navigate(`/exams/${day.dayNumber}`)}
              className="rounded bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700"
            >
              Start Exam
            </button>
          ) : totalSections > 0 ? (
            <span className="rounded border border-gray-300 bg-gray-100 px-4 py-2 text-sm text-gray-500">
              Mark Section 1 and Section 2 as complete to unlock exam
            </span>
          ) : null}
        </div>
      </div>
    </StudentLayout>
  );
};

export default CourseDayPage;
