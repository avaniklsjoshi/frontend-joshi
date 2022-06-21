import React from "react";
import { useTranslation } from "react-i18next";
import LanguagePicker from "./languagePicker";

export default function Header() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      {t("name")}:{t("avani")}
      <LanguagePicker />
    </div>
  );
}
