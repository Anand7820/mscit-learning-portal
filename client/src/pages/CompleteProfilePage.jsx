import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ImageCropModal from "../components/ImageCropModal";
import api from "../api/api";
import { useAuth } from "../context/AuthContext";

const CompleteProfilePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { fetchMe } = useAuth();
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    age: "",
    fatherName: "",
    motherName: "",
    surname: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    phoneNumber: "",
    language: "en",
    address: "",
    education: "",
    selectedCourse: "MS-CIT"
  });
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState("");
  const [signature, setSignature] = useState(null);
  const [signaturePreview, setSignaturePreview] = useState("");
  const [cropSrc, setCropSrc] = useState("");
  const [cropType, setCropType] = useState(""); // "photo" or "signature"

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });
      if (photo) {
        formData.append("photo", photo);
      }
      if (signature) {
        formData.append("signature", signature);
      }
      await api.post("/auth/complete-profile", formData);
      await fetchMe();
      toast.success("Profile completed");
      navigate("/dashboard");
    } catch (err) {
      const message = err.response?.data?.message || "Profile update failed";
      setError(message);
      toast.error(message);
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setCropSrc(url);
    setCropType("photo");
  };

  const handleSignatureChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setCropSrc(url);
    setCropType("signature");
  };

  const handleCropSave = (blob) => {
    if (cropType === "photo") {
      const croppedFile = new File([blob], "profile.jpg", { type: "image/jpeg" });
      setPhoto(croppedFile);
      const previewUrl = URL.createObjectURL(blob);
      setPhotoPreview(previewUrl);
    } else if (cropType === "signature") {
      const croppedFile = new File([blob], "signature.jpg", { type: "image/jpeg" });
      setSignature(croppedFile);
      const previewUrl = URL.createObjectURL(blob);
      setSignaturePreview(previewUrl);
    }
    setCropSrc("");
    setCropType("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <form onSubmit={handleSubmit} className="mx-auto max-w-3xl rounded bg-white p-6 shadow">
        <h1 className="mb-4 text-2xl font-semibold">{t("completeProfile")}</h1>
        {error && <p className="mb-3 text-sm text-red-500">{error}</p>}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="rounded border px-3 py-2"
            required
          />
          <input
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            type="number"
            className="rounded border px-3 py-2"
            required
          />
          <input
            name="fatherName"
            placeholder="Father Name"
            value={form.fatherName}
            onChange={handleChange}
            className="rounded border px-3 py-2"
          />
          <input
            name="motherName"
            placeholder="Mother Name"
            value={form.motherName}
            onChange={handleChange}
            className="rounded border px-3 py-2"
          />
          <input
            name="surname"
            placeholder="Surname"
            value={form.surname}
            onChange={handleChange}
            className="rounded border px-3 py-2"
          />
          <input
            name="dob"
            placeholder="Date of Birth"
            value={form.dob}
            onChange={handleChange}
            type="date"
            className="rounded border px-3 py-2"
          />
          <input
            name="gender"
            placeholder="Gender"
            value={form.gender}
            onChange={handleChange}
            className="rounded border px-3 py-2"
          />
          <input
            name="maritalStatus"
            placeholder="Marital Status"
            value={form.maritalStatus}
            onChange={handleChange}
            className="rounded border px-3 py-2"
          />
          <input
            name="phoneNumber"
            placeholder="Phone Number"
            value={form.phoneNumber}
            onChange={handleChange}
            className="rounded border px-3 py-2"
          />
          <select
            name="language"
            value={form.language}
            onChange={handleChange}
            className="rounded border px-3 py-2"
          >
            <option value="en">English</option>
            <option value="mr">Marathi</option>
          </select>
          <input
            name="education"
            placeholder="Education"
            value={form.education}
            onChange={handleChange}
            className="rounded border px-3 py-2"
          />
          <input
            name="selectedCourse"
            placeholder="Selected Course"
            value={form.selectedCourse}
            onChange={handleChange}
            className="rounded border px-3 py-2"
          />
          <input
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="rounded border px-3 py-2 md:col-span-2"
          />
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">Profile Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="w-full mb-2"
            />
            {photoPreview && (
              <img
                src={photoPreview}
                alt="Profile Preview"
                className="h-24 w-24 rounded-full object-cover mt-2"
              />
            )}
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">Signature Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleSignatureChange}
              className="w-full mb-2"
            />
            {signaturePreview && (
              <img
                src={signaturePreview}
                alt="Signature Preview"
                className="h-20 w-48 object-contain border rounded mt-2"
              />
            )}
          </div>
        </div>
        <button className="mt-6 w-full rounded bg-indigo-600 py-2 text-white">
          Save Profile
        </button>
      </form>
      {cropSrc && (
        <ImageCropModal
          imageSrc={cropSrc}
          onClose={() => setCropSrc("")}
          onSave={handleCropSave}
        />
      )}
    </div>
  );
};

export default CompleteProfilePage;
