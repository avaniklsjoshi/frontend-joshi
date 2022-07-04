import React from "react";
import { useTranslation } from "react-i18next";
import LanguagePicker from "./languagePicker";
import ThemePicker from "./themePicker";

export default function Header() {
  const { t } = useTranslation();

  return (
    <div>
      {t("name")}:{t("avani")}
      <ThemePicker />
      <LanguagePicker />
    </div>
  );
}
