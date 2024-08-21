import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [showOptions, setShowOptions] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'en');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setSelectedLanguage(lng);
    setShowOptions(false); // Hide options after selecting a language
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  React.useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setSelectedLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <section className="flex flex-col relative  items-center bg-gray-100  ">
      <h3 className="text-sm text-end w-full mr-10 absolute top-2  cursor-pointer" onClick={toggleOptions}>
        Select Language
      </h3>
      {showOptions && (
        <div className="absolute top-10 right-1 flex flex-col items-center bg-white rounded-md shadow-lg p-3 transition duration-300 ease-in-out">
          <button
            className={`py-2 px-4 mb-2 rounded cursor-pointer transition duration-300 ${selectedLanguage === 'en' ? 'text-blue-500' : 'text-black'}`}
            onClick={() => changeLanguage('en')}
          >
            English
          </button>
          <button
            className={`py-2 px-4 rounded cursor-pointer transition duration-300 ${selectedLanguage === 'fr' ? 'text-blue-500' : 'text-black'}`}
            onClick={() => changeLanguage('fr')}
          >
            Français
          </button>
        </div>
      )}
    </section>
  );
}

export default LanguageSwitcher;
