import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const Context = createContext();

function Provider({ children }) {
  // gestionnaire d'ouverture/fermeture de la modale de contacte aka get started
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  // gestionnaire de la langue activ dans la bar de navigation
  const [language, setLanguage] = useState({ id: 1, languages: "EN" });
  const selectLanguage = (option) => {
    setLanguage(option);
  };

  // gestion du mail de reception de mail de nodemailer(systeme d'envoie de mail de contacte)
  const [receptionEmail, setReceptionEmail] = useState("");

  const handleReceptionEmail = (newEmail) => {
    setReceptionEmail(newEmail);
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

  /*
  gestion de l'emplacement actuelle sur le site. il est utiliser pour chercher les data venant de la même table mais d'une entrée différentes
  exemples: le composant home est présent su deux page il possede donc des entrée differente dans la database
  */
  const [position, setPosition] = useState(1);

  const handlePosition = (id) => {
    setPosition(id);
  };

  // gestionnaire d'ouverture/fermeture de la modale de contacte aka contact us
  const [isContactOpen, setIsContactOpen] = useState(false);
  const handleContact = () => {
    setIsContactOpen(!isContactOpen);
  };

  // gestionnaire des langues globale du site activ ou non
  const [allLanguages, setAllLanguages] = useState();
  const handleLanguages = (toSet) => {
    setAllLanguages(toSet);
  };

  // gestionnaire des lien de la bar de navigation venant directement de la DB selon la langue active
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/navigation/${language.id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  // boolean pour gerer certain affichage
  const media = window.innerWidth < 769;

  // data de l'admin connecter
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
        handlePosition,
        position,
        data,
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
