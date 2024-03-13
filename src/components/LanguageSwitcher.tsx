import React from "react";

interface LanguageMap {
  [key: string]: { nativeName: string };
}

const LANGUAGES: LanguageMap = {
  en: { nativeName: "English" },
  es: { nativeName: "Español" },
  // pt: { nativeName: "Português" },
};

interface Props {
  currentLanguage: string;
  handleLanguage: (language: string) => void;
}

const LanguageSwitcher: React.FC<Props> = ({ handleLanguage }) => {
  const onLanguageChange = (value: string) => {
    handleLanguage(value);
  };

  return (
    <select
      name="language"
      id="language"
      onChange={(e) => onLanguageChange(e.target.value)}
    >
      {Object.keys(LANGUAGES).map((language) => (
        <option value={language} key={language}>
          {LANGUAGES[language].nativeName}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
