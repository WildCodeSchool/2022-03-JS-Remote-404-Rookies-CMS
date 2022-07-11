import React, { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const [isContactOpen, setIsContactOpen] = useState(false);
  const handleContact = () => {
    setIsContactOpen(!isContactOpen);
  };

  // const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  // const handleCalendly = () => {
  //   setIsCalendlyOpen(!isCalendlyOpen);
  // };

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
        handleContact,
        isContactOpen,
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
