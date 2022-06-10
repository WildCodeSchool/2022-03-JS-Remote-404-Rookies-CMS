import React, { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <Context.Provider value={{ isFormOpen, setIsFormOpen }}>
      {children}
    </Context.Provider>
  );
}
const ExportContext = {
  Context,
  Provider,
};

export default ExportContext;
