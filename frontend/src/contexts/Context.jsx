import React, { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const [language, setLanguage] = useState(1);
  const selectLanguage = (option) => {
    setLanguage(option);
  };
  const media = window.innerWidth < 768;

  return (
    <Context.Provider
      value={{ isFormOpen, handleForm, language, selectLanguage, media }}
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
