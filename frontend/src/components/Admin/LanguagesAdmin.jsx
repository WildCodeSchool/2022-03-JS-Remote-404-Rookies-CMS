/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import axios from "axios";
import NavBarAdminCompany from "./NavBarAdminCompany";

function LanguagesAdmin() {
  const [data, setData] = useState("");
  const [adminTouch, setAdminTouch] = useState(0);
  const [isAdd, setIsAdd] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAdd === true) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/languages`, data[0], {
          withCredentials: true,
        })
        .then(() => {
          console.warn("Yes !");
        })
        .catch(() => {
          console.warn("No !");
        });
    } else {
      axios
        .put(
          `${import.meta.env.VITE_BACKEND_URL}/languages`,
          data[adminTouch],
          { withCredentials: true }
        )
        .then(() => {
          console.warn("Yes !");
        })
        .catch(() => {
          console.warn("No !");
        });
    }
  };
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/languages/`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  const editData = (area, value) => {
    if (adminTouch !== "add") {
      const newData = [...data];
      newData[adminTouch][area] = value;
      setData(newData);
    } else {
      toAdd[0][area] = value;
      setData(toAdd);
    }
  };

  return (
    <div className="flex flex-row align-center justify-center">
      <div className="w-1/5">
        <NavBarAdminCompany />
      </div>
      <div className="w-4/5">
        <div className="flex flex-col align-center justify-center mt-4 mb-4 text-center">
          <p className="pb-4 text-2xl text-red-500 font-bold">
            Attention un language ajouter ne peut être supprimer il peut
            seulement être désactiver
          </p>
          <select
            className="flex flex-col justify-center self-center w-1/3 bg-green-500 hover:bg-green-700 text-white font-bold text-xl py-1 px-1 rounded"
            onChange={(e) => {
              if (e.target.value === "add") {
                setData([
                  {
                    languages: "",
                    status: "",
                    images_link: "",
                    images_alt: "",
                  },
                ]);
                setAdminTouch(0);
                setIsAdd(true);
              } else {
                setIsAdd(false);
                setAdminTouch(e.target.value);
              }
            }}
          >
            <option value="0">Sélectionner une option</option>
            {data &&
              data.map((elem) => (
                <option value={data?.indexOf(elem)}>
                  Mettre a jour {elem.id}
                </option>
              ))}
            <option id="add" value="add">
              Ajouter (nouveaux en bas de page)
            </option>
          </select>
        </div>
        <form>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
              ISO 639-1 (expemple pour l&apos;anglais EN pour le français FR( 2
              charactères max))
              <input
                value={data[adminTouch]?.languages}
                name="languages"
                onChange={(e) => editData(e.target.name, e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
                type="text"
                placeholder="exemple EN FR ZH PL BG"
                required
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
              Etat du langage
              <select
                value={data[adminTouch]?.status}
                name="status"
                onChange={(e) => {
                  editData(e.target.name, parseFloat(e.target.value));
                }}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
                type="text"
              >
                <option value={0}>Inactif</option>
                <option value={1}>Actif</option>
              </select>
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
              Lien du drapeau
              <input
                value={data[adminTouch]?.images_link}
                name="images_link"
                onChange={(e) => editData(e.target.name, e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
                type="text"
                placeholder="Lien du drapeaux"
                required
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
              Description de l&apos;image
              <input
                value={data[adminTouch]?.images_alt}
                name="images_alt"
                onChange={(e) => editData(e.target.name, e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
                type="text"
                placeholder="description de l'image"
                required
              />
            </label>
          </div>
          <div className="flex justify-center gap-10">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="flex flex-row justify-center mt-10">
          <img
            src={data && data[adminTouch].images_link}
            alt={data && data[adminTouch].images_alt}
            className="w-2/12 object-contain mr-4"
          />
          <select className="border py-2 px-5" name="language" id="language">
            {data &&
              data.map((option) => {
                return (
                  <option
                    id="option"
                    value={option.id}
                    label={option.languages}
                    key={option.id}
                  />
                );
              })}
          </select>
        </div>
      </div>
    </div>
  );
}
export default LanguagesAdmin;
