import React, { useEffect, useState, useMemo } from "react";
import StudentLayout from "../components/StudentLayout";
import api from "../api/api";

// One row per day: keep latest attempt per day, sorted by day number ascending
const organizeHistory = (attempts) => {
  const byDay = new Map();
  for (const a of attempts || []) {
    if (!a.submittedAt) continue;
    const day = a.dayNumber;
    const existing = byDay.get(day);
    if (!existing || new Date(a.submittedAt) > new Date(existing.submittedAt)) {
      byDay.set(day, a);
    }
  }
  return Array.from(byDay.values()).sort((a, b) => a.dayNumber - b.dayNumber);
};

const DashboardPage = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    api.get("/exams/history").then((res) => setHistory(res.data)).catch(() => {});
  }, []);

  const organized = useMemo(() => organizeHistory(history), [history]);

  return (
    <StudentLayout>
      <div className="grid gap-6 lg:grid-cols-1">
        <div className="rounded bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Exam History</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {organized.map((item) => (
              <li key={item.dayNumber} className="flex justify-between">
                <span>Day {item.dayNumber}</span>
                <span>
                  {item.score}/{item.total}
                </span>
              </li>
            ))}
            {!organized.length && <li className="text-gray-500">No exams taken yet.</li>}
          </ul>
        </div>
      </div>
    </StudentLayout>
  );
};

export default DashboardPage;
