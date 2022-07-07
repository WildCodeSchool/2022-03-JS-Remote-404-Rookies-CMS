import React, { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const [allLanguages, setAllLanguages] = useState();
  const handleLanguages = (toSet) => {
    setAllLanguages(toSet);
  };

  const [language, setLanguage] = useState({ id: 1, languages: "EN" });
  const selectLanguage = (option) => {
    setLanguage(option);
  };

  const media = window.innerWidth < 769;

  const [user, setUser] = useState();

  return (
    <Context.Provider
      value={{
        allLanguages,
        handleLanguages,
        isFormOpen,
        handleForm,
        language,
        selectLanguage,
        media,
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
}
const ExportContext = {
  Context,
  Provider,
};

export default ExportContext;
