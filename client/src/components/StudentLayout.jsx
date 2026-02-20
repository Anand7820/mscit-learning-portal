import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const StudentLayout = ({ children }) => {
  return (
    <div className="flex h-screen flex-col bg-gray-100">
      <Navbar />
      <div className="flex min-h-0 flex-1">
        <Sidebar />
        <main className="min-h-0 flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default StudentLayout;
