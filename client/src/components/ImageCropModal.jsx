import React, { useState } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "../utils/cropImage";

const ImageCropModal = ({ imageSrc, onClose, onSave }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = (_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  };

  const handleSave = async () => {
    if (!croppedAreaPixels) {
      return;
    }
    const blob = await getCroppedImg(imageSrc, croppedAreaPixels);
    onSave(blob);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-lg rounded bg-white p-4 shadow">
        <h3 className="text-lg font-semibold">Crop Photo</h3>
        <div className="relative mt-4 h-80 w-full bg-gray-100">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
        </div>
        <div className="mt-4 flex items-center justify-between gap-3">
          <input
            type="range"
            min="1"
            max="3"
            step="0.1"
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded border px-3 py-1 text-sm"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="rounded bg-indigo-600 px-3 py-1 text-sm text-white"
            >
              Save Crop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCropModal;
