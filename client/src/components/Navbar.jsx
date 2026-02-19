import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const getInitials = (name) => {
  if (!name) return "S";
  const parts = name.trim().split(" ");
  return parts.slice(0, 2).map((p) => p[0]).join("").toUpperCase();
};

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav className="flex items-center justify-between bg-white px-6 py-3 shadow">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate(user?.role === "student" ? "/home" : "/")}
      >
        <img
          src="https://imgs.search.brave.com/lmQJM-TWFOuTMQ1L6kmXfaMaXgi5ZdLKR4u3T5bTQZw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9tcy1jaXQtMS5z/dmc"
          alt="MS-CIT Logo"
          className="h-14 w-auto object-contain"
        />
      </div>
      <div className="flex items-center gap-4">
        {user?.role === "student" && (
          <button
            onClick={() => navigate("/profile")}
            className="flex items-center gap-3 rounded bg-gray-100 px-3 py-2"
          >
            {user.profile?.photoUrl ? (
              <img
                src={user.profile.photoUrl}
                alt="profile"
                className="h-10 w-10 rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
                {getInitials(user.profile?.name)}
              </div>
            )}
            <div className="text-left text-sm">
              <p className="font-semibold">{user.profile?.name || "Student"}</p>
              <p className="text-xs text-gray-500">{user.profile?.selectedCourse}</p>
            </div>
          </button>
        )}
        <select
          className="rounded border px-2 py-1 text-sm"
          value={i18n.language}
          onChange={handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="mr">मराठी</option>
        </select>
        <button
          onClick={logout}
          className="rounded bg-indigo-600 px-3 py-2 text-sm text-white"
        >
          {t("logout")}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
