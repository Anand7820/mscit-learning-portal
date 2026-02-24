import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import api from "../api/api";

const Sidebar = () => {
  const { i18n } = useTranslation();
  const [days, setDays] = useState([]);
  const [completedExamDays, setCompletedExamDays] = useState([]);
  const [expandedDays, setExpandedDays] = useState(() => new Set());
  const navigate = useNavigate();
  const location = useLocation();
  const isMr = i18n.language === "mr";

  const fetchDays = () => {
    api
      .get("/courses/days")
      .then((res) => setDays(res.data))
      .catch(() => setDays([]));
  };

  useEffect(() => {
    fetchDays();
  }, []);

  // Refetch days when section completion changes (e.g. user clicked "Mark as Complete")
  useEffect(() => {
    const onSectionChange = () => fetchDays();
    window.addEventListener("section-completion-changed", onSectionChange);
    return () => window.removeEventListener("section-completion-changed", onSectionChange);
  }, []);

  // Refetch progress and days when user navigates
  useEffect(() => {
    api
      .get("/auth/me")
      .then((res) => setCompletedExamDays(res.data.completedExamDays || []))
      .catch(() => setCompletedExamDays([]));
    fetchDays();
  }, [location.pathname]);

  // Auto-expand the day that matches the current course page
  useEffect(() => {
    const match = location.pathname.match(/^\/courses\/(\d+)$/);
    const dayNum = match ? parseInt(match[1], 10) : null;
    if (dayNum != null) {
      setExpandedDays((prev) => new Set(prev).add(dayNum));
    }
  }, [location.pathname]);

  const toggleDay = (dayNumber, e) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedDays((prev) => {
      const next = new Set(prev);
      if (next.has(dayNumber)) next.delete(dayNumber);
      else next.add(dayNumber);
      return next;
    });
  };

  const goToSection = (dayNumber, sectionIndex) => {
    navigate(`/courses/${dayNumber}#section-${sectionIndex}`);
  };

  const goToDay = (dayNumber) => {
    navigate(`/courses/${dayNumber}`);
  };

  return (
    <aside className="min-h-0 w-64 flex-shrink-0 overflow-y-auto border-r bg-white p-4">
      <h2 className="mb-4 text-lg font-semibold">Days 1-50</h2>
      <div className="grid grid-cols-1 gap-1">
        {days.map((day) => {
          const isCompleted = completedExamDays.includes(day.dayNumber);
          const isAvailable = day.status === "available";
          const sections = day.sections || [];
          const hasSections = sections.length > 0;
          const isExpanded = expandedDays.has(day.dayNumber);
          return (
            <div key={day.dayNumber} className="mb-2">
              <div
                className={`flex items-center gap-1 rounded px-2 py-2 text-sm ${
                  isCompleted
                    ? "bg-green-500 text-white"
                    : "bg-white text-gray-800 border"
                } ${isAvailable ? "cursor-pointer" : "cursor-not-allowed opacity-60"}`}
              >
                <button
                  type="button"
                  onClick={() => isAvailable && goToDay(day.dayNumber)}
                  disabled={!isAvailable}
                  className="min-w-0 flex-1 text-left"
                >
                  Day {day.dayNumber}
                </button>
                {hasSections ? (
                  <button
                    type="button"
                    onClick={(e) => toggleDay(day.dayNumber, e)}
                    className="flex-shrink-0 p-0.5 hover:opacity-80"
                    aria-label={isExpanded ? "Collapse" : "Expand"}
                  >
                    <span className="inline-block text-xs font-bold">
                      {isExpanded ? "▼" : "▶"}
                    </span>
                  </button>
                ) : null}
              </div>
              {hasSections && isExpanded && (
                <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-gray-200 pl-2">
                  {sections.map((sec) => {
                    const isSectionComplete = day.completedSections?.[sec.index];
                    return (
                      <button
                        key={sec.index}
                        onClick={() => isAvailable && goToSection(day.dayNumber, sec.index)}
                        disabled={!isAvailable}
                        className={`block w-full rounded px-2 py-1.5 text-left text-xs ${
                          isSectionComplete
                            ? "font-medium text-green-600 hover:bg-green-50"
                            : isAvailable
                              ? "text-gray-700 hover:bg-gray-100"
                              : "cursor-not-allowed text-gray-400"
                        }`}
                      >
                        {isMr ? sec.titleMr : sec.titleEn}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
