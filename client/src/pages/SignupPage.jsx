import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import api from "../api/api";

const SignupPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    try {
      const { data } = await api.post("/auth/signup", form);
      setMessage(data.message);
      toast.success("Signup successful");
      setTimeout(() => navigate("/pending"), 800);
    } catch (err) {
      const message = err.response?.data?.message || "Signup failed";
      setError(message);
      toast.error(message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded bg-white p-6 shadow">
        <h1 className="mb-4 text-2xl font-semibold">{t("signup")}</h1>
        {message && <p className="mb-3 text-sm text-green-600">{message}</p>}
        {error && <p className="mb-3 text-sm text-red-500">{error}</p>}
        <label className="block text-sm">Student Name</label>
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          className="mb-3 w-full rounded border px-3 py-2"
          required
        />
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
          {t("signup")}
        </button>
        <p className="mt-3 text-center text-sm">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-indigo-600"
          >
            {t("login")}
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
