import React from "react";
import { useTranslation } from "react-i18next";
import StudentLayout from "../components/StudentLayout";

const PendingPage = () => {
  const { t } = useTranslation();
  return (
    <StudentLayout>
      <div className="rounded bg-white p-6 shadow">
        <h2 className="text-xl font-semibold">{t("pendingApproval")}</h2>
        <p className="mt-2 text-sm text-gray-600">
          Please wait for admin approval. You can login only after approval.
        </p>
      </div>
    </StudentLayout>
  );
};

export default PendingPage;
