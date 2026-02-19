import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../api/api";
import Navbar from "../components/Navbar";

const getInitials = (name) => {
  if (!name) return "S";
  const parts = name.trim().split(" ");
  return parts.slice(0, 2).map((p) => p[0]).join("").toUpperCase();
};

const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const getDaysSinceAdded = (dateString) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

const AdminDashboardPage = () => {
  const [stats, setStats] = useState(null);
  const [pending, setPending] = useState([]);
  const [students, setStudents] = useState([]);
  const [batches, setBatches] = useState([]);
  const [imageErrors, setImageErrors] = useState(new Set());
  const [showAddForm, setShowAddForm] = useState(false);
  const [showBatchForm, setShowBatchForm] = useState(false);
  const [newStudent, setNewStudent] = useState({
    email: "",
    password: "",
    name: "",
    autoApprove: true
  });
  const [newBatch, setNewBatch] = useState({
    name: "",
    description: "",
    capacity: "",
    startDate: "",
    endDate: ""
  });
  const [selectedBatchFilter, setSelectedBatchFilter] = useState("all");
  const [expandedBatch, setExpandedBatch] = useState(null);

  const loadData = async () => {
    const [statsRes, pendingRes, studentsRes, batchesRes] = await Promise.all([
      api.get("/admin/stats"),
      api.get("/admin/pending"),
      api.get("/admin/students"),
      api.get("/admin/batches")
    ]);
    setStats(statsRes.data);
    setPending(pendingRes.data);
    setStudents(studentsRes.data);
    setBatches(batchesRes.data);
    setImageErrors(new Set());
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleApprove = async (id) => {
    try {
      await api.post(`/admin/students/${id}/approve`);
      toast.success("Student approved");
      loadData();
    } catch (error) {
      toast.error(error.response?.data?.message || "Approve failed");
    }
  };

  const handleReject = async (id) => {
    try {
      await api.post(`/admin/students/${id}/reject`);
      toast.success("Student rejected");
      loadData();
    } catch (error) {
      toast.error(error.response?.data?.message || "Reject failed");
    }
  };

  const handleFeesPaid = async (id) => {
    try {
      await api.post(`/admin/students/${id}/fees-paid`);
      toast.success("Fees marked as paid");
      loadData();
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    }
  };

  const handleFeesPart1 = async (id) => {
    try {
      await api.post(`/admin/students/${id}/fees-part1`);
      toast.success("Fees part 1 marked");
      loadData();
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    }
  };

  const handleFeesPart2 = async (id) => {
    try {
      await api.post(`/admin/students/${id}/fees-part2`);
      toast.success("Fees part 2 marked");
      loadData();
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    }
  };

  const handleUnlockDay = async (id, dayNumber) => {
    try {
      await api.post(`/admin/students/${id}/unlock-day`, { dayNumber });
      toast.success(`Day ${dayNumber} unlocked`);
      loadData();
    } catch (error) {
      toast.error(error.response?.data?.message || "Unlock failed");
    }
  };

  const handleDeleteStudent = async (id) => {
    const confirmDelete = window.confirm("Delete this student?");
    if (!confirmDelete) return;
    try {
      await api.delete(`/admin/students/${id}`);
      toast.success("Student deleted");
      loadData();
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed");
    }
  };

  const handleCreateStudent = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/admin/students", newStudent);
      toast.success(data.message || "Student created successfully");
      setNewStudent({ email: "", password: "", name: "", autoApprove: true });
      setShowAddForm(false);
      loadData();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create student");
    }
  };

  const handleCreateBatch = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/admin/batches", newBatch);
      toast.success(data.message || "Batch created successfully");
      setNewBatch({ name: "", description: "", capacity: "", startDate: "", endDate: "" });
      setShowBatchForm(false);
      loadData();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create batch");
    }
  };

  const handleAssignBatch = async (studentId, batchId) => {
    try {
      await api.post(`/admin/students/${studentId}/assign-batch`, { batchId: batchId || null });
      toast.success("Batch assignment updated");
      loadData();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to assign batch");
    }
  };

  const handleDeleteBatch = async (batchId) => {
    const confirmDelete = window.confirm("Delete this batch? Students will be unassigned.");
    if (!confirmDelete) return;
    try {
      await api.delete(`/admin/batches/${batchId}`);
      toast.success("Batch deleted");
      loadData();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete batch");
    }
  };

  const filteredStudents = selectedBatchFilter === "all" 
    ? students 
    : selectedBatchFilter === "unassigned"
    ? students.filter(s => !s.batch)
    : students.filter(s => s.batch?._id === selectedBatchFilter);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-4">
        <h1 className="text-xl font-semibold">Admin Dashboard</h1>
        {stats && (
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            <div className="rounded bg-white p-3 shadow">
              <p className="text-xs text-gray-500">Total Students</p>
              <p className="text-lg font-semibold">{stats.totalStudents}</p>
            </div>
            <div className="rounded bg-white p-3 shadow">
              <p className="text-xs text-gray-500">Active Students</p>
              <p className="text-lg font-semibold">{stats.activeStudents}</p>
            </div>
            <div className="rounded bg-white p-3 shadow">
              <p className="text-xs text-gray-500">Pending Students</p>
              <p className="text-lg font-semibold">{stats.pendingStudents}</p>
            </div>
          </div>
        )}
        {stats?.needsSecondFee > 0 && (
          <div className="mt-4 rounded border border-yellow-300 bg-yellow-50 p-4 text-sm">
            {stats.needsSecondFee} student(s) completed 30 days. Please collect second fees.
          </div>
        )}

        {/* Batch Management Section */}
        <div className="mt-4 rounded bg-white p-4 shadow">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold">Batch Management</h2>
            <button
              onClick={() => setShowBatchForm(!showBatchForm)}
              className="rounded bg-purple-600 px-3 py-1 text-sm text-white hover:bg-purple-700"
            >
              {showBatchForm ? "Cancel" : "+ Create Batch"}
            </button>
          </div>
          {showBatchForm && (
            <form onSubmit={handleCreateBatch} className="mt-3 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Batch Name *</label>
                  <input
                    type="text"
                    value={newBatch.name}
                    onChange={(e) => setNewBatch({ ...newBatch, name: e.target.value })}
                    className="w-full rounded border px-3 py-2 text-sm"
                    required
                    placeholder="e.g., Batch A, Morning Batch"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Capacity</label>
                  <input
                    type="number"
                    value={newBatch.capacity}
                    onChange={(e) => setNewBatch({ ...newBatch, capacity: e.target.value })}
                    className="w-full rounded border px-3 py-2 text-sm"
                    placeholder="Max students"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Start Date</label>
                  <input
                    type="date"
                    value={newBatch.startDate}
                    onChange={(e) => setNewBatch({ ...newBatch, startDate: e.target.value })}
                    className="w-full rounded border px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">End Date</label>
                  <input
                    type="date"
                    value={newBatch.endDate}
                    onChange={(e) => setNewBatch({ ...newBatch, endDate: e.target.value })}
                    className="w-full rounded border px-3 py-2 text-sm"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs text-gray-600 mb-1">Description</label>
                  <textarea
                    value={newBatch.description}
                    onChange={(e) => setNewBatch({ ...newBatch, description: e.target.value })}
                    className="w-full rounded border px-3 py-2 text-sm"
                    rows="2"
                    placeholder="Optional description"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="rounded bg-purple-600 px-4 py-2 text-sm text-white hover:bg-purple-700"
              >
                Create Batch
              </button>
            </form>
          )}
          <div className="mt-4 space-y-3">
            {batches.map((batch) => {
              const batchStudents = students.filter(s => s.batch?._id === batch._id);
              const isExpanded = expandedBatch === batch._id;
              
              return (
                <div key={batch._id} className="rounded border bg-white shadow-sm">
                  <div 
                    className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50"
                    onClick={() => setExpandedBatch(isExpanded ? null : batch._id)}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-sm">{batch.name}</h3>
                        <span className="text-xs text-gray-500">
                          ({batch.studentCount || 0} student{batch.studentCount !== 1 ? "s" : ""})
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {batch.capacity > 0 && `Capacity: ${batch.capacity} | `}
                        {batch.startDate && `Start: ${formatDate(batch.startDate)}`}
                        {batch.endDate && ` | End: ${formatDate(batch.endDate)}`}
                      </p>
                      {batch.description && (
                        <p className="text-xs text-gray-400 mt-1">{batch.description}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">
                        {isExpanded ? "▼" : "▶"}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteBatch(batch._id);
                        }}
                        className="text-red-600 hover:text-red-800 text-xs px-2 py-1 rounded hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  
                  {isExpanded && (
                    <div className="border-t p-3 bg-gray-50">
                      <h4 className="text-sm font-semibold mb-3">Students in {batch.name}</h4>
                      {batchStudents.length === 0 ? (
                        <p className="text-gray-500 text-sm">No students assigned to this batch.</p>
                      ) : (
                        <div className="space-y-2">
                          {batchStudents.map((student) => {
                            const hasPhoto = student.profile?.photoUrl && !imageErrors.has(student._id);
                            const hasSignature = student.profile?.signatureUrl;
                            
                            return (
                              <div key={student._id} className="bg-white rounded border p-2">
                                <div className="grid grid-cols-1 gap-2 md:grid-cols-5 md:items-center">
                                  <div className="md:col-span-2 flex items-center gap-3">
                                    {hasPhoto ? (
                                      <img
                                        src={student.profile.photoUrl}
                                        alt={student.profile?.name || "Student"}
                                        className="h-12 w-12 rounded-full object-cover border-2 border-gray-200 flex-shrink-0"
                                        onError={() => {
                                          setImageErrors((prev) => new Set(prev).add(student._id));
                                        }}
                                      />
                                    ) : (
                                      <div
                                        className="h-12 w-12 rounded-full flex items-center justify-center text-white font-semibold text-sm border-2 border-gray-200 flex-shrink-0"
                                        style={{ backgroundColor: "#4f46e5" }}
                                      >
                                        {getInitials(student.profile?.name || student.email)}
                                      </div>
                                    )}
                                    {hasSignature && (
                                      <img
                                        src={student.profile.signatureUrl}
                                        alt="Signature"
                                        className="h-10 w-32 object-contain border rounded bg-white"
                                      />
                                    )}
                                    <div className="flex flex-col min-w-0">
                                      <p className="text-sm font-semibold truncate">{student.email}</p>
                                      {student.studentNumber && (
                                        <p className="text-xs font-mono text-indigo-600 font-semibold">
                                          Student #: {student.studentNumber}
                                        </p>
                                      )}
                                      <p className="text-xs text-gray-500">
                                        Status: {student.status} | Progress: Day {student.unlockedUpTo}
                                      </p>
                                      {student.createdAt && (
                                        <p className="text-xs text-gray-400">
                                          Added: {formatDate(student.createdAt)}
                                          {(() => {
                                            const days = getDaysSinceAdded(student.createdAt);
                                            return days !== null ? ` (${days} day${days !== 1 ? "s" : ""} ago)` : "";
                                          })()}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                  <div className="text-xs text-gray-600">
                                    Fees 1: {student.feesPart1Paid ? "Paid" : "Unpaid"} | Fees 2:{" "}
                                    {student.feesPart2Paid ? "Paid" : "Unpaid"}
                                  </div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <label className="text-xs text-gray-600">Assign to Batch:</label>
                                    <select
                                      value={student.batch?._id || ""}
                                      onChange={(e) => handleAssignBatch(student._id, e.target.value)}
                                      onClick={(e) => e.stopPropagation()}
                                      className="rounded border px-2 py-1 text-xs"
                                    >
                                      <option value="">Unassigned</option>
                                      {batches.map((b) => (
                                        <option key={b._id} value={b._id}>
                                          {b.name}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                  <div className="flex flex-wrap gap-2">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleFeesPart1(student._id);
                                      }}
                                      className="rounded bg-indigo-600 px-2 py-1 text-xs text-white"
                                    >
                                      Fees 1
                                    </button>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleFeesPart2(student._id);
                                      }}
                                      className="rounded bg-green-600 px-2 py-1 text-xs text-white"
                                    >
                                      Fees 2
                                    </button>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleFeesPaid(student._id);
                                      }}
                                      className="rounded bg-gray-700 px-2 py-1 text-xs text-white"
                                    >
                                      All Paid
                                    </button>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteStudent(student._id);
                                      }}
                                      className="rounded bg-red-600 px-2 py-1 text-xs text-white"
                                    >
                                      Delete
                                    </button>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <input
                                      type="number"
                                      min="1"
                                      max="50"
                                      placeholder="Day"
                                      className="w-16 rounded border px-2 py-1 text-xs"
                                      id={`batch-unlock-${student._id}`}
                                      onClick={(e) => e.stopPropagation()}
                                    />
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        const input = document.getElementById(`batch-unlock-${student._id}`);
                                        const dayValue = Number(input.value);
                                        if (dayValue) handleUnlockDay(student._id, dayValue);
                                      }}
                                      className="rounded bg-gray-800 px-2 py-1 text-xs text-white"
                                    >
                                      Unlock
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
            {batches.length === 0 && (
              <p className="text-gray-500 text-sm text-center py-4">No batches created yet.</p>
            )}
          </div>
        </div>

        <div className="mt-4 rounded bg-white p-4 shadow">
          <h2 className="text-base font-semibold">Pending Approvals</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {pending.map((student) => {
              const hasPhoto = student.profile?.photoUrl && !imageErrors.has(student._id);
              const hasSignature = student.profile?.signatureUrl;
              return (
                <li key={student._id} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {hasPhoto ? (
                      <img
                        src={student.profile.photoUrl}
                        alt={student.profile?.name || "Student"}
                        className="h-12 w-12 rounded-full object-cover border-2 border-gray-200"
                        onError={() => {
                          setImageErrors((prev) => new Set(prev).add(student._id));
                        }}
                      />
                    ) : (
                      <div
                        className="h-12 w-12 rounded-full flex items-center justify-center text-white font-semibold text-sm border-2 border-gray-200 flex-shrink-0"
                        style={{
                          backgroundColor: "#4f46e5"
                        }}
                      >
                        {getInitials(student.profile?.name || student.email)}
                      </div>
                    )}
                    {hasSignature && (
                      <img
                        src={student.profile.signatureUrl}
                        alt="Signature"
                        className="h-10 w-32 object-contain border rounded bg-white"
                      />
                    )}
                  <div className="flex flex-col">
                    <span>
                      {student.profile?.name ? `${student.profile.name} - ` : ""}
                      {student.email}
                    </span>
                    {student.studentNumber && (
                      <span className="text-xs text-gray-500 font-mono">
                        Student Number: {student.studentNumber}
                      </span>
                    )}
                    {student.batch && (
                      <span className="text-xs text-purple-600 font-semibold">
                        Batch: {student.batch.name}
                      </span>
                    )}
                    {student.createdAt && (
                      <span className="text-xs text-gray-400">
                        Added: {formatDate(student.createdAt)}
                        {(() => {
                          const days = getDaysSinceAdded(student.createdAt);
                          return days !== null ? ` (${days} day${days !== 1 ? "s" : ""} ago)` : "";
                        })()}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <label className="text-xs text-gray-600">Assign to Batch:</label>
                  <select
                    value={student.batch?._id || ""}
                    onChange={(e) => handleAssignBatch(student._id, e.target.value)}
                    className="rounded border px-2 py-1 text-xs"
                  >
                    <option value="">Unassigned</option>
                    {batches.map((batch) => (
                      <option key={batch._id} value={batch._id}>
                        {batch.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleApprove(student._id)}
                    className="rounded bg-green-600 px-2 py-1 text-xs text-white"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(student._id)}
                    className="rounded bg-red-600 px-2 py-1 text-xs text-white"
                  >
                    Reject
                  </button>
                </div>
              </li>
            );
            })}
            {!pending.length && <li className="text-gray-500">No pending students.</li>}
          </ul>
        </div>

        <div className="mt-4 rounded bg-white p-4 shadow">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold">Student Controls</h2>
            <div className="flex items-center gap-2">
              <label className="text-xs text-gray-600">Filter by Batch:</label>
              <select
                value={selectedBatchFilter}
                onChange={(e) => setSelectedBatchFilter(e.target.value)}
                className="rounded border px-2 py-1 text-xs"
              >
                <option value="all">All Students</option>
                <option value="unassigned">Unassigned</option>
                {batches.map((batch) => (
                  <option key={batch._id} value={batch._id}>
                    {batch.name} ({batch.studentCount || 0})
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-3 space-y-2">
            {filteredStudents.map((student) => {
              const hasPhoto = student.profile?.photoUrl && !imageErrors.has(student._id);
              const hasSignature = student.profile?.signatureUrl;
              return (
                <div key={student._id} className="rounded border p-2">
                  <div className="grid grid-cols-1 gap-2 md:grid-cols-5 md:items-center">
                    <div className="md:col-span-2 flex items-center gap-3">
                      {hasPhoto ? (
                        <img
                          src={student.profile.photoUrl}
                          alt={student.profile?.name || "Student"}
                          className="h-12 w-12 rounded-full object-cover border-2 border-gray-200 flex-shrink-0"
                          onError={() => {
                            setImageErrors((prev) => new Set(prev).add(student._id));
                          }}
                        />
                      ) : (
                        <div
                          className="h-12 w-12 rounded-full flex items-center justify-center text-white font-semibold text-sm border-2 border-gray-200 flex-shrink-0"
                          style={{
                            backgroundColor: "#4f46e5"
                          }}
                        >
                          {getInitials(student.profile?.name || student.email)}
                        </div>
                      )}
                      {hasSignature && (
                        <img
                          src={student.profile.signatureUrl}
                          alt="Signature"
                          className="h-10 w-32 object-contain border rounded bg-white"
                        />
                      )}
                    <div className="flex flex-col min-w-0">
                      <p className="text-sm font-semibold truncate">{student.email}</p>
                      {student.studentNumber && (
                        <p className="text-xs font-mono text-indigo-600 font-semibold">
                          Student #: {student.studentNumber}
                        </p>
                      )}
                      <p className="text-xs text-gray-500">
                        Status: {student.status} | Progress: Day {student.unlockedUpTo}
                      </p>
                      <p className="text-xs text-purple-600 font-semibold">
                        Batch: {student.batch?.name || "Unassigned"}
                      </p>
                      {student.createdAt && (
                        <p className="text-xs text-gray-400">
                          Added: {formatDate(student.createdAt)}
                          {(() => {
                            const days = getDaysSinceAdded(student.createdAt);
                            return days !== null ? ` (${days} day${days !== 1 ? "s" : ""} ago)` : "";
                          })()}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-xs text-gray-600">
                    Fees 1: {student.feesPart1Paid ? "Paid" : "Unpaid"} | Fees 2:{" "}
                    {student.feesPart2Paid ? "Paid" : "Unpaid"}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <label className="text-xs text-gray-600">Assign to Batch:</label>
                    <select
                      value={student.batch?._id || ""}
                      onChange={(e) => handleAssignBatch(student._id, e.target.value)}
                      className="rounded border px-2 py-1 text-xs"
                    >
                      <option value="">Unassigned</option>
                      {batches.map((batch) => (
                        <option key={batch._id} value={batch._id}>
                          {batch.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleFeesPart1(student._id)}
                      className="rounded bg-indigo-600 px-2 py-1 text-xs text-white"
                    >
                      Fees 1
                    </button>
                    <button
                      onClick={() => handleFeesPart2(student._id)}
                      className="rounded bg-green-600 px-2 py-1 text-xs text-white"
                    >
                      Fees 2
                    </button>
                    <button
                      onClick={() => handleFeesPaid(student._id)}
                      className="rounded bg-gray-700 px-2 py-1 text-xs text-white"
                    >
                      All Paid
                    </button>
                    <button
                      onClick={() => handleDeleteStudent(student._id)}
                      className="rounded bg-red-600 px-2 py-1 text-xs text-white"
                    >
                      Delete
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      max="50"
                      placeholder="Day"
                      className="w-16 rounded border px-2 py-1 text-xs"
                      id={`unlock-${student._id}`}
                    />
                    <button
                      onClick={() => {
                        const input = document.getElementById(`unlock-${student._id}`);
                        const dayValue = Number(input.value);
                        if (dayValue) handleUnlockDay(student._id, dayValue);
                      }}
                      className="rounded bg-gray-800 px-2 py-1 text-xs text-white"
                    >
                      Unlock
                    </button>
                  </div>
                </div>
              </div>
            );
            })}
            {!filteredStudents.length && <p className="text-gray-500">No students found.</p>}
          </div>
        </div>

        <div className="mt-4 rounded bg-white p-4 shadow">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold">Add New Student</h2>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="rounded bg-indigo-600 px-3 py-1 text-sm text-white hover:bg-indigo-700"
            >
              {showAddForm ? "Cancel" : "+ Add Student"}
            </button>
          </div>
          {showAddForm && (
            <form onSubmit={handleCreateStudent} className="mt-3 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Email *</label>
                  <input
                    type="email"
                    value={newStudent.email}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, email: e.target.value })
                    }
                    className="w-full rounded border px-3 py-2 text-sm"
                    required
                    placeholder="student@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Password *</label>
                  <input
                    type="password"
                    value={newStudent.password}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, password: e.target.value })
                    }
                    className="w-full rounded border px-3 py-2 text-sm"
                    required
                    placeholder="Enter password"
                    minLength={6}
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Name (Optional)</label>
                  <input
                    type="text"
                    value={newStudent.name}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, name: e.target.value })
                    }
                    className="w-full rounded border px-3 py-2 text-sm"
                    placeholder="Student name"
                  />
                </div>
                <div className="flex items-center">
                  <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={newStudent.autoApprove}
                      onChange={(e) =>
                        setNewStudent({ ...newStudent, autoApprove: e.target.checked })
                      }
                      className="rounded"
                    />
                    Auto-approve (student can login immediately)
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="rounded bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700"
              >
                Create Student
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
