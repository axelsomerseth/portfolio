import React from "react";
import { useTranslation } from "react-i18next";

interface LanguageMap {
  [key: string]: { nativeName: string };
}

const LANGUAGES: LanguageMap = {
  en: { nativeName: "English" },
  es: { nativeName: "Español" },
  // pt: { nativeName: "Português" },
};

interface Props {}

const LanguageSwitcher: React.FC<Props> = () => {
  const { i18n } = useTranslation();

  const onLanguageChange = async (value: string) => {
    await i18n.changeLanguage(value);
  };

  return (
    <select
      name="language"
      id="language"
      onChange={(e) => onLanguageChange(e.target.value)}
      defaultValue={i18n.resolvedLanguage || "en"}
      className="LanguageSwitcher"
    >
      {Object.keys(LANGUAGES).map((language) => {
        return (
          <option value={language} key={language}>
            {LANGUAGES[language].nativeName}
          </option>
        );
      })}
    </select>
  );
};

export default LanguageSwitcher;
