import React, { useEffect, useState } from "react";
import StudentLayout from "../components/StudentLayout";
import api from "../api/api";

const DashboardPage = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    api.get("/exams/history").then((res) => setHistory(res.data)).catch(() => {});
  }, []);

  return (
    <StudentLayout>
      <div className="grid gap-6 lg:grid-cols-1">
        <div className="rounded bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Exam History</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {history.map((item) => (
              <li key={`${item.dayNumber}-${item.submittedAt}`} className="flex justify-between">
                <span>Day {item.dayNumber}</span>
                <span>
                  {item.score}/{item.total}
                </span>
              </li>
            ))}
            {!history.length && <li className="text-gray-500">No exams taken yet.</li>}
          </ul>
        </div>
      </div>
    </StudentLayout>
  );
};

export default DashboardPage;
