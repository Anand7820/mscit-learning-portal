import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const { t } = useTranslation();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const user = await login(form.email, form.password);
      toast.success("Login successful");
      if (user.role === "admin") {
        navigate("/admin");
      } else if (!user.profileCompleted) {
        navigate("/complete-profile");
      } else {
        navigate("/home");
      }
    } catch (err) {
      const message = err.response?.data?.message || "Login failed";
      setError(message);
      toast.error(message);
      if (message.toLowerCase().includes("approval")) {
        navigate("/pending");
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded bg-white p-6 shadow">
        <h1 className="mb-4 text-2xl font-semibold">{t("login")}</h1>
        {error && <p className="mb-3 text-sm text-red-500">{error}</p>}
        <label className="block text-sm">{t("email")}</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="mb-3 w-full rounded border px-3 py-2"
          required
        />
        <label className="block text-sm">{t("password")}</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          className="mb-4 w-full rounded border px-3 py-2"
          required
        />
        <button className="w-full rounded bg-indigo-600 py-2 text-white">
          {t("login")}
        </button>
        <p className="mt-3 text-center text-sm">
          New student?{" "}
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="text-indigo-600"
          >
            {t("signup")}
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
