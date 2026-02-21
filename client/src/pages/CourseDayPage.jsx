import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import StudentLayout from "../components/StudentLayout";
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
  const contentTopRef = useRef(null);
  const section1Ref = useRef(null);
  const [day, setDay] = useState(null);
  const [completedSections, setCompletedSections] = useState([]);
  const [error, setError] = useState("");
  const [loadingDay, setLoadingDay] = useState(null);

  useEffect(() => {
    const num = Number(dayNumber);
    setError("");
    setLoadingDay(num);
    api
      .get(`/courses/days/${dayNumber}`)
      .then((res) => {
        setDay(res.data);
        setLoadingDay(null);
      })
      .catch((err) => {
        setError(err.response?.data?.message || "Day locked");
        setLoadingDay(null);
      });
  }, [dayNumber]);

  // When next day loads, scroll to Section 1 (first subsection) so user sees next day's Section 1
  useEffect(() => {
    if (!day?.dayNumber) return;
    if (day.subsections?.length > 0) {
      const timer = setTimeout(() => {
        section1Ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      return () => clearTimeout(timer);
    } else {
      contentTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [day?.dayNumber]);

  const isMr = i18n.language === "mr";
  const totalSections = day?.subsections?.length || 0;
  const allSectionsCompleted =
    totalSections === 0 || completedSections.filter(Boolean).length === totalSections;

  useEffect(() => {
    if (day?.subsections) {
      setCompletedSections(Array(day.subsections.length).fill(false));
    }
  }, [day]);

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
          {day.subsections.map((section, index) => (
            <div key={index} ref={index === 0 ? section1Ref : null} className="rounded bg-gray-50 p-4">
              <h3 className="font-semibold">
                {isMr ? section.titleMr : section.titleEn}
              </h3>
              <div className="mt-2 space-y-2">
                {renderContent(isMr ? section.contentMr : section.contentEn, {
                  isSectionTwo: index === 1
                })}
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
                onClick={() =>
                  setCompletedSections((prev) => {
                    const next = [...prev];
                    next[index] = !next[index];
                    return next;
                  })
                }
                className={`mt-3 rounded px-3 py-2 text-sm font-semibold ${
                  completedSections[index]
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border"
                }`}
              >
                {completedSections[index] ? "Marked as Complete" : "Mark as Complete"}
              </button>
            </div>
          ))}
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
          <button
            onClick={() => navigate(`/courses/${Number(day.dayNumber) + 1}`)}
            disabled={totalSections > 0 && !allSectionsCompleted}
            className="rounded bg-indigo-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            Proceed to Next
          </button>
        </div>
      </div>
    </StudentLayout>
  );
};

export default CourseDayPage;
