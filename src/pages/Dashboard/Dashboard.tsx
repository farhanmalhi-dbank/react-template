import React from "react";
import { useTranslation } from "react-i18next";

import "./Dashboard.css";

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container mx-auto">{t("title")}</div>
    </>
  );
};

export default Dashboard;
