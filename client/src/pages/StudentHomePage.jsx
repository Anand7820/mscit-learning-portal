import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const StudentHomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex min-h-[70vh] items-center justify-center p-6">
        <button
          onClick={() => navigate("/dashboard")}
          className="w-full max-w-sm rounded-xl bg-white p-10 text-center text-2xl font-semibold shadow hover:shadow-lg"
          style={{ color: '#f28121' }}
        >
          MS-CIT
        </button>
      </div>
    </div>
  );
};

export default StudentHomePage;
