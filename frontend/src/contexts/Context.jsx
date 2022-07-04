import React, { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const [languages, setLanguages] = useState();
  const handleLanguages = (toSet) => {
    setLanguages(toSet);
  };

  const [language, setLanguage] = useState(1);
  const selectLanguage = (option) => {
    setLanguage(option);
  };
  const media = window.innerWidth < 769;

  const [user, setUser] = useState();

  return (
    <Context.Provider
      value={{
        languages,
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
