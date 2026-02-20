import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const Sidebar = () => {
  const [days, setDays] = useState([]);
  const [unlockedUpTo, setUnlockedUpTo] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/courses/days")
      .then((res) => setDays(res.data))
      .catch(() => setDays([]));
    api
      .get("/auth/me")
      .then((res) => setUnlockedUpTo(res.data.unlockedUpTo || 0))
      .catch(() => setUnlockedUpTo(0));
  }, []);

  return (
    <aside className="min-h-0 w-64 flex-shrink-0 overflow-y-auto border-r bg-white p-4">
      <h2 className="mb-4 text-lg font-semibold">Days 1-50</h2>
      <div className="grid grid-cols-1 gap-2">
        {days.map((day) => {
          const isCompleted = day.dayNumber <= unlockedUpTo;
          const isAvailable = day.status === "available";
          return (
            <button
              key={day.dayNumber}
              onClick={() => isAvailable && navigate(`/courses/${day.dayNumber}`)}
              disabled={!isAvailable}
              className={`rounded px-2 py-2 text-sm ${
                isCompleted
                  ? "bg-green-500 text-white"
                  : "bg-white text-gray-800 border"
              } ${isAvailable ? "cursor-pointer" : "cursor-not-allowed opacity-60"}`}
            >
              Day {day.dayNumber}
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
