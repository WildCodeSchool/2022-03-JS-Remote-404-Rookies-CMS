/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import ExportContext from "../../contexts/Context";
import ProjectsCard from "../ProjectsCard";

function ProjectAdminTest() {
  const { language } = useContext(ExportContext.Context);

  const [data, setData] = useState([]);
  const [adminTouch, setAdminTouch] = useState("");

  const editData = (area, value) => {
    const newData = [...data];
    newData[adminTouch][area] = value;
    setData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (admintouch !== null) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/project`, data)
        .then(() => {
          console.warn("Yes !");
        })
        .catch(() => {
          console.warn("No !");
        });
    } else {
      axios
        .put(`${import.meta.env.VITE_BACKEND_URL}/project`, data)
        .then(() => {
          console.warn("Yes !");
        })
        .catch(() => {
          console.warn("No !");
        });
    }
  };

  const handleSubmitDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/project/${adminTouch}`)
      .then(() => {
        console.warn("Yes !");
      })
      .catch(() => {
        console.warn("No !");
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/project/${language.id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  return (
    <div className="flex flex-col align-center justify-center">
      <div className="flex flex-col align-center justify-center ml-12 w-1/3 ml-60 mt-4 mb-4 text-center">
        <select
          className="flex flex-col justify-center align-center bg-green-500 hover:bg-green-700 text-white font-bold text-xl py-1 px-1 rounded"
          onChange={(e) => {
            setAdminTouch(e.target.value);
          }}
        >
          <option value="0">Sélectionner une option</option>
          <option value={null}>Ajouter</option>
          {data.map((elem) => (
            <option value={data.indexOf(elem)}>Mettre a jour {elem.id}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-row w-1/2 h-full" />
      <div className="flex flex-col align-center justify-center mt-4 mb-4 text-center">
        <div className="flex flex-col align-center justify-center mt-4 mb-4 text-center">
          <div className="flex flex-row align-center justify-around mt-4 mb-4 text-center">
            <form className="flex flex-col align-center w-1/2 justify-center">
              <div className="flex flex-col h-full w-full justify-center">
                <div>
                  <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                    Lien de l&apos;image
                    <input
                      value={data[adminTouch]?.image_link}
                      className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
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
                      value={data[adminTouch]?.image_alt}
                      name="image_alt"
                      onChange={(e) => editData(e.target.name, e.target.value)}
                      className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                      type="text"
                      placeholder="Description de l'image"
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                    Titre
                    <input
                      value={data[adminTouch]?.title}
                      name="title"
                      onChange={(e) => editData(e.target.name, e.target.value)}
                      className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                      type="text"
                      placeholder="nom & prenom"
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                    Sous-titre
                    <input
                      value={data[adminTouch]?.sub_title}
                      name="sub_title"
                      onChange={(e) => editData(e.target.name, e.target.value)}
                      className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                      type="text"
                      placeholder="Poste occuper"
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                    Description
                    <input
                      value={data[adminTouch]?.description}
                      name="description"
                      onChange={(e) => editData(e.target.name, e.target.value)}
                      className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                      type="text"
                      placeholder="Description"
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                    Times week
                    <input
                      value={data[adminTouch]?.time_week}
                      name="time_week"
                      onChange={(e) => editData(e.target.name, e.target.value)}
                      className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                      type="text"
                      placeholder="temps en semaine"
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                    Testimonial
                    <input
                      value={data[adminTouch]?.time_hour}
                      name="time_hour"
                      onChange={(e) => editData(e.target.name, e.target.value)}
                      className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                      type="text"
                      placeholder="testimonial"
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                    Signature
                    <input
                      value={data[adminTouch]?.text}
                      name="text"
                      onChange={(e) => editData(e.target.name, e.target.value)}
                      className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                      type="text"
                      placeholder="signature"
                      required
                    />
                  </label>
                </div>
              </div>
            </form>
            <form className="flex flex-col align-center w-1/2 justify-center">
              <div className="flex flex-col h-full w-full justify-center">
                <div className="flex flex-col">
                  <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                    Times hours
                    <input
                      value={data[adminTouch]?.signature}
                      name="signature"
                      onChange={(e) => editData(e.target.name, e.target.value)}
                      className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                      type="text"
                      placeholder="temsp en heure"
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                    Lien de l&apos;image
                    <input
                      value={data[adminTouch]?.image_link}
                      name="image_link"
                      onChange={(e) => editData(e.target.name, e.target.value)}
                      className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                      type="text"
                      placeholder="temsp en heure"
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                    image description
                    <input
                      value={data[adminTouch]?.image_alt}
                      name="image_alt"
                      onChange={(e) => editData(e.target.name, e.target.value)}
                      className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                      type="text"
                      placeholder="image description"
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                    lien du 1er menbre
                    <input
                      value={data[adminTouch]?.projectMember[0].image_link}
                      name="projectMember[0].image_link"
                      onChange={(e) => editData(e.target.name, e.target.value)}
                      className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                      type="text"
                      placeholder="lien du 1er menbre"
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                    description de l'image du 1er membre
                    <input
                      value={data[adminTouch]?.projectMember[0].image_alt}
                      name="projectMember[0].image_alt"
                      onChange={(e) => editData(e.target.name, e.target.value)}
                      className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                      type="text"
                      placeholder="description de l'image du 1er membre"
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                    lien image du 2eme menbre
                    <input
                      value={data[adminTouch]?.projectMember[1].image_link}
                      name="projectMember[1].image_link"
                      onChange={(e) => editData(e.target.name, e.target.value)}
                      className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                      type="text"
                      placeholder="lien image du 2eme menbre"
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                    description de l&aps;image du 2eme membre
                    <input
                      value={data[adminTouch]?.projectMember[1].image_alt}
                      name="projectMember[1].image_alt"
                      onChange={(e) => editData(e.target.name, e.target.value)}
                      className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                      type="text"
                      placeholder="description de l'image du 2eme membre"
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                    lien image du 3eme menbre
                    <input
                      value={data[adminTouch]?.projectMember[2].image_link}
                      name="projectMember[2].image_link"
                      onChange={(e) => editData(e.target.name, e.target.value)}
                      className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                      type="text"
                      placeholder="lien image du 3eme menbre"
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                    description de l&aps;image du 3eme membre
                    <input
                      value={data[adminTouch]?.projectMember[2].image_alt}
                      name="projectMember[2].image_alt"
                      onChange={(e) => editData(e.target.name, e.target.value)}
                      className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                      type="text"
                      placeholder="description de l'image du 3eme membre"
                      required
                    />
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-around mt-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Submit
          </button>
          <button
            type="submit"
            onClick={handleSubmitDelete}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Delete
          </button>
        </div>
      </div>
      <section>
        <div>
          {data.length > 0 &&
            data.map((project) => {
              return <ProjectsCard project={project} />;
            })}
        </div>
      </section>
    </div>
  );
}

export default ProjectAdminTest;
