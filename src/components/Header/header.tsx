import React from "react";
import { useTranslation } from "react-i18next";
import LanguagePicker from "./languagePicker";
import ThemePicker from "./themePicker";
import "./header.scss";

export default function Header() {
  const { t } = useTranslation();
  return (
    <div className="header-container">
      <div className="header-title">{t("avani")}</div>

      <div className="header-accessibilities">
        <div className="header-navigator">{t("featuresRoute")}</div>
        <ThemePicker />
        <LanguagePicker />
        {/* <Button /> */}
      </div>
    </div>
  );
}
