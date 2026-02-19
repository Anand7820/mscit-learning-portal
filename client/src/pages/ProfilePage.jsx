import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import StudentLayout from "../components/StudentLayout";
import ImageCropModal from "../components/ImageCropModal";
import api from "../api/api";
import { useAuth } from "../context/AuthContext";

const ProfilePage = () => {
  const { user, fetchMe } = useAuth();
  const [form, setForm] = useState(user?.profile || {});
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState("");
  const [signature, setSignature] = useState(null);
  const [signaturePreview, setSignaturePreview] = useState("");
  const [cropSrc, setCropSrc] = useState("");
  const [cropType, setCropType] = useState(""); // "photo" or "signature"
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (user?.profile) {
      setForm(user.profile);
      setPhotoPreview(user.profile.photoUrl || "");
      setSignaturePreview(user.profile.signatureUrl || "");
    }
  }, [user]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setSaving(true);
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value ?? "");
    });
    if (photo) {
      formData.append("photo", photo);
    }
    if (signature) {
      formData.append("signature", signature);
    }
    try {
      await api.post("/auth/complete-profile", formData);
      await fetchMe();
      setMessage("Profile updated");
      toast.success("Profile updated");
    } catch (err) {
      const message = err.response?.data?.message || "Update failed";
      setError(message);
      toast.error(message);
    } finally {
      setSaving(false);
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
    <StudentLayout>
      <div className="rounded bg-white p-6 shadow">
        <h2 className="text-xl font-semibold">My Profile</h2>
        {message && <p className="mt-2 text-sm text-green-600">{message}</p>}
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-4">
            <img
              src={photoPreview || "https://via.placeholder.com/80"}
              alt="Profile"
              className="h-20 w-20 rounded-full object-cover"
            />
            <div className="text-sm text-gray-600">
              Upload a clear face photo for your profile.
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={signaturePreview || "https://via.placeholder.com/200x80"}
              alt="Signature"
              className="h-20 w-48 object-contain border rounded"
            />
            <div className="text-sm text-gray-600">
              Upload your signature photo.
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            name="name"
            value={form.name || ""}
            onChange={handleChange}
            placeholder="Name"
            className="rounded border px-3 py-2"
          />
          <input
            name="surname"
            value={form.surname || ""}
            onChange={handleChange}
            placeholder="Surname"
            className="rounded border px-3 py-2"
          />
          <input
            name="fatherName"
            value={form.fatherName || ""}
            onChange={handleChange}
            placeholder="Father Name"
            className="rounded border px-3 py-2"
          />
          <input
            name="motherName"
            value={form.motherName || ""}
            onChange={handleChange}
            placeholder="Mother Name"
            className="rounded border px-3 py-2"
          />
          <input
            name="phoneNumber"
            value={form.phoneNumber || ""}
            onChange={handleChange}
            placeholder="Phone Number"
            className="rounded border px-3 py-2"
          />
          <input
            name="address"
            value={form.address || ""}
            onChange={handleChange}
            placeholder="Address"
            className="rounded border px-3 py-2"
          />
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">Profile Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="w-full"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">Signature Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleSignatureChange}
              className="w-full"
            />
          </div>
          <button
            className="rounded bg-indigo-600 py-2 text-white md:col-span-2 disabled:opacity-60"
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Changes"}
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
    </StudentLayout>
  );
};

export default ProfilePage;
