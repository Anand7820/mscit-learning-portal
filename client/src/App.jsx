import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PendingPage from "./pages/PendingPage";
import CompleteProfilePage from "./pages/CompleteProfilePage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import CourseDayPage from "./pages/CourseDayPage";
import ExamPage from "./pages/ExamPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import StudentHomePage from "./pages/StudentHomePage";
import ProtectedRoute from "./routes/ProtectedRoute";

const HomeRedirect = () => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (user.role === "admin") {
    return <Navigate to="/admin" replace />;
  }
  if (!user.profileCompleted) {
    return <Navigate to="/complete-profile" replace />;
  }
  return <Navigate to="/home" replace />;
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomeRedirect />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/pending" element={<PendingPage />} />
    <Route
      path="/complete-profile"
      element={
        <ProtectedRoute>
          <CompleteProfilePage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/home"
      element={
        <ProtectedRoute>
          <StudentHomePage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/profile"
      element={
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/courses/:dayNumber"
      element={
        <ProtectedRoute>
          <CourseDayPage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/exams/:dayNumber"
      element={
        <ProtectedRoute>
          <ExamPage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/admin"
      element={
        <ProtectedRoute role="admin">
          <AdminDashboardPage />
        </ProtectedRoute>
      }
    />
  </Routes>
);

const App = () => (
  <AuthProvider>
    <Toaster position="top-right" />
    <AppRoutes />
  </AuthProvider>
);

export default App;
