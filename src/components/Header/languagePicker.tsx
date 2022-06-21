import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguagePicker() {
  const { i18n } = useTranslation();

  const changeLanguageHandler = (e: any) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };

  return (
    <select
      className="custom-select"
      style={{ width: 200 }}
      onChange={changeLanguageHandler}
    >
      <option value="hn">Hindi</option>
      <option value="en">English</option>
      <option value="de">German</option>
    </select>
  );
}
