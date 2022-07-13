import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const Context = createContext();

function Provider({ children }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [receptionEmail, setReceptionEmail] = useState("");

  const handleReceptionEmail = (newEmail) => {
    setReceptionEmail(newEmail);
  };

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

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/email/`)
      .then((response) => {
        setReceptionEmail(response.data[0]);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

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
        receptionEmail,
        handleReceptionEmail,
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
