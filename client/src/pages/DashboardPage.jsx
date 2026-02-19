import React, { useEffect, useState } from "react";
import StudentLayout from "../components/StudentLayout";
import api from "../api/api";

const DashboardPage = () => {
  const [certificate, setCertificate] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    api.get("/certificate/status").then((res) => setCertificate(res.data)).catch(() => {});
    api.get("/exams/history").then((res) => setHistory(res.data)).catch(() => {});
  }, []);

  return (
    <StudentLayout>
      <div className="grid gap-6 lg:grid-cols-2">
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
        <div className="rounded bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Certificate</h2>
          {certificate?.eligible ? (
            <a
              href={`${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}/certificate/download`}
              className="mt-4 inline-block rounded bg-green-600 px-4 py-2 text-white"
            >
              Download Certificate
            </a>
          ) : (
            <p className="mt-3 text-sm text-gray-600">
              Certificate will be available after 15 days of exam completion.
            </p>
          )}
        </div>
      </div>
    </StudentLayout>
  );
};

export default DashboardPage;
