/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import ExportContext from "../../contexts/Context";
import NavBarAdminCompany from "./NavBarAdminCompany";

function NavigationElements() {
  const { language, allLanguages, handleLanguages, selectLanguage } =
    useContext(ExportContext.Context);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/languages/`)
      .then((response) => {
        handleLanguages(response.data);
        selectLanguage(response.data[0]);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/navigation/${
          language && language.id
        }`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  const [adminTouch, setAdminTouch] = useState(0);

  const editData = (area, value) => {
    const newData = { ...data };
    newData[area] = value;
    setData(newData);
  };

  const editData2 = (area, value) => {
    const newData = { ...data };
    newData.links[adminTouch][area] = value;
    setData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/navigationlogo`, data, {
        withCredentials: true,
      })
      .then(() => {
        console.warn("Yes !");
      })
      .catch(() => {
        console.warn("No !");
      });
  };
  const handleSubmitElement = (e) => {
    e.preventDefault();
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/navigation`,
        data.links[adminTouch],
        {
          withCredentials: true,
        }
      )
      .then(() => {
        console.warn("Yes !");
      })
      .catch(() => {
        console.warn("No !");
      });
  };

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

  return (
    <div className="flex flex-row">
      <div className="w-1/5">
        <NavBarAdminCompany />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <form className="flex flex-col">
            <div>
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                Lien de l&apos;image
                <input
                  value={data?.image_link}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 self-center py-1 w-4/5 "
                  type="text"
                  name="image_link"
                  placeholder="Lien de l'image"
                  onChange={(e) => editData(e.target.name, e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                Description de l&apos;image
                <input
                  value={data?.image_alt}
                  name="image_alt"
                  onChange={(e) => editData(e.target.name, e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
                  type="text"
                  placeholder="Description de l'image"
                  required
                />
              </label>
            </div>
            <div className="flex justify-center mt-4 gap-10">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <section className="border ">
          <div className="flex justify-between w-full align-center items-center bg-white ">
            <img
              src={data?.image_link}
              alt={data?.image_alt}
              className="static"
            />
            <ul className="flex justify-evenly w-2/4 gap-10 font-bold text-2xl">
              <NavLink to={`/${language.languages}/page1`}>
                <li className="tab">{data.links && data.links[0].label}</li>
              </NavLink>
              <NavLink to={`/${language.languages}/page2`} className="tab">
                <li>{data.links && data.links[1].label}</li>
              </NavLink>
              <NavLink to={`/${language.languages}/page3`} className="tab">
                <li>{data.links && data.links[2].label}</li>
              </NavLink>
              <NavLink to={`${language.languages}/page4/`} className="hidden">
                <li>{data.links && data.links[3].label}</li>
              </NavLink>
            </ul>
            <div className="flex flex-row">
              <button
                type="button"
                className="pt-2 pb-3 pl-3 pr-3 rounded-full buttonNav mr-10 text-xl text-white"
              >
                {data.links && data.links[4].label}
              </button>
              <div className="flex flex-row justify-end">
                <img
                  src={language.images_link}
                  alt={language.images_alt}
                  className="w-2/12 object-contain mr-4"
                />
                <select
                  className="border py-2 px-5"
                  name="language"
                  id="language"
                  onChange={(e) =>
                    selectLanguage(allLanguages[e.target.value - 1])
                  }
                >
                  {allLanguages &&
                    allLanguages
                      .filter((langue) => langue.status === 1)
                      .map((option) => {
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
        </section>
        <select
          className="flex flex-col justify-center self-center w-1/3 bg-green-500 hover:bg-green-700 text-white font-bold text-xl py-1 px-1 rounded"
          onChange={(e) => setAdminTouch(e.target.value)}
        >
          <option value="0">Sélectionner une option</option>
          {data.links &&
            data.links.map((elem) => (
              <option value={data.links && data.links.indexOf(elem)}>
                Mettre a jour {elem.id}
              </option>
            ))}
        </select>
        <div>
          <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
            Label du lien
            <input
              value={data.links && data.links[adminTouch].label}
              className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 self-center py-1 w-4/5 "
              type="text"
              name="label"
              placeholder="Label du lien"
              onChange={(e) => editData2(e.target.name, e.target.value)}
              required
            />
          </label>
        </div>
        <div className="flex flex-col">
          <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
            Chemin du lien
            <input
              value={data.links && data?.links[adminTouch].path}
              name="path"
              onChange={(e) => editData2(e.target.name, e.target.value)}
              className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
              type="text"
              placeholder="Chemin du lien"
              required
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
            Est un lien ?
            <select
              value={data.links && data?.links[adminTouch]["link?"]}
              className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 self-center py-1 w-4/5 "
              type="text"
              name="link?"
              onChange={(e) => editData2(e.target.name, e.target.value)}
              required
            >
              <option value={0}>Ceci est un lien.</option>
              <option value={1}>Ceci n'est pas un lien.</option>
            </select>
          </label>
        </div>
        <div className="flex flex-col">
          <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
            Titre de la page
            <input
              value={data.links && data?.links[adminTouch].title}
              name="title"
              onChange={(e) => editData2(e.target.name, e.target.value)}
              className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
              type="text"
              placeholder="Titre de la page"
              required
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
            Description de la page
            <input
              value={data.links && data?.links[adminTouch].description}
              className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 self-center py-1 w-4/5 "
              type="text"
              name="description"
              placeholder="Lien de l'image"
              onChange={(e) => editData2(e.target.name, e.target.value)}
              required
            />
          </label>
        </div>
        <div className="flex flex-col">
          <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
            Image à afficher lors du partage du lien
            <input
              value={data.links && data?.links[adminTouch].ogimage}
              name="opimage"
              onChange={(e) => editData2(e.target.name, e.target.value)}
              className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
              type="text"
              placeholder="Image à afficher lors du partage du lien"
              required
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
            Lien de l&apos;image à afficher lors du partage du lien
            <input
              value={data.links && data?.links[adminTouch].ogurl}
              className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 self-center py-1 w-4/5 "
              type="text"
              name="ogurl"
              placeholder="Not yet implemented"
              onChange={(e) => editData2(e.target.name, e.target.value)}
              required
            />
          </label>
        </div>
        <div className="flex flex-col">
          <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
            Type de l'open graphe
            <input
              value={data.links && data?.links[adminTouch].ogtype}
              name="ogtype"
              onChange={(e) => editData2(e.target.name, e.target.value)}
              className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
              type="text"
              placeholder="Not yet implemented"
              required
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
            Titre de l'open graphe
            <input
              value={data.links && data.links[adminTouch].ogtitle}
              className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 self-center py-1 w-4/5 "
              type="text"
              name="ogtitle"
              placeholder="Not yet implemented"
              onChange={(e) => editData2(e.target.name, e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
            Description de l'open graphe
            <input
              value={data.links && data.links[adminTouch].ogdescription}
              className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 self-center py-1 w-4/5 "
              type="text"
              name="ogdescription"
              placeholder="Not yet implemented"
              onChange={(e) => editData2(e.target.name, e.target.value)}
              required
            />
          </label>
        </div>
        <div className=" self-center py-4 ">
          <button
            type="submit"
            onClick={handleSubmitElement}
            className="bg-green-500 hover:bg-green-700 text-white font-bold  py-2 px-4 rounded-full"
          >
            Submit
          </button>
        </div>
        <section className="border">
          <div className="flex justify-between w-full align-center items-center bg-white ">
            <img
              src={data?.image_link}
              alt={data?.image_alt}
              className="static"
            />
            <ul className="flex justify-evenly w-2/4 gap-10 font-bold text-2xl">
              <NavLink to={`/${language.languages}/page1`}>
                <li className="tab">{data.links && data.links[0].label}</li>
              </NavLink>
              <NavLink to={`/${language.languages}/page2`} className="tab">
                <li>{data.links && data.links[1].label}</li>
              </NavLink>
              <NavLink to={`/${language.languages}/page3`} className="tab">
                <li>{data.links && data.links[2].label}</li>
              </NavLink>
              <NavLink to={`${language.languages}/page4/`} className="hidden">
                <li>{data.links && data.links[3].label}</li>
              </NavLink>
            </ul>
            <div className="flex flex-row">
              <button
                type="button"
                className="pt-2 pb-3 pl-3 pr-3 rounded-full buttonNav mr-10 text-xl text-white"
              >
                {data.links && data.links[4].label}
              </button>
              <div className="flex flex-row justify-end">
                <img
                  src={language.images_link}
                  alt={language.images_alt}
                  className="w-2/12 object-contain mr-4"
                />
                <select
                  className="border py-2 px-5"
                  name="language"
                  id="language"
                  onChange={(e) =>
                    selectLanguage(allLanguages[e.target.value - 1])
                  }
                >
                  {allLanguages &&
                    allLanguages
                      .filter((langue) => langue.status === 1)
                      .map((option) => {
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
        </section>
      </div>
    </div>
  );
}

export default NavigationElements;
