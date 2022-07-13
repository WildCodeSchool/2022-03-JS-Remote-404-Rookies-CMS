/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import ExportContext from "../../contexts/Context";
import ProjectsCard from "../ProjectsCard";
import NavBarAdminCompany from "./NavBarAdminCompany";

function ProjectAdminTest() {
  const { language } = useContext(ExportContext.Context);

  const [data, setData] = useState([]);
  const [adminTouch, setAdminTouch] = useState(null);
  const [isAdd, setIsAdd] = useState(false);

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
  const editData2 = (area, value) => {
    const index2 = area.slice(0, 1);
    const area2 = area.slice(1);
    const newData = [...data];
    newData[adminTouch].projectMember[index2][area2] = value;
    setData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAdd === true) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/projectadd`, data)
        .then(() => {
          console.warn("Yes !");
        })
        .catch(() => {
          console.warn("No !");
        });
    } else {
      axios
        .put(`${import.meta.env.VITE_BACKEND_URL}/projects`, data[adminTouch])
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
      .delete(`${import.meta.env.VITE_BACKEND_URL}/projectdelete/${adminTouch}`)
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
    <div className="flex flex-row align-center justify-center">
      <div className="w-1/5">
        <NavBarAdminCompany />
      </div>
      <div className="w-4/5">
        <div className="flex flex-col align-center justify-center mt-4 mb-4 text-center">
          <select
            className="flex flex-col justify-center self-center w-1/3 bg-green-500 hover:bg-green-700 text-white font-bold text-xl py-1 px-1 rounded"
            onChange={(e) => {
              if (e.target.value === "add") {
                setData([
                  {
                    languages_id: language.id,
                    id: 1,
                    status: 0,
                    title: "HOMECORE x EM Normandie",
                    sub_title: "Audit SEO & SEA",
                    description: "M2 Marketing Digital - Parcours Grande Ecole",
                    time_week: "8 semaines de projet",
                    time_hour: "400 heures de travail",
                    text: "Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows .",
                    signature: "- Mike Taylor, Web Designer",
                    amount: 6,
                    images_id: 47,
                    image_link:
                      "https://i.ibb.co/dcL1Gwn/HOMECORE-x-EM-Normandie.png",
                    image_alt: "HOMECORE x EM Normandie",
                    url: "",
                    categorie: "Project",
                    imagesFixed: [
                      {
                        id: 34,
                        image_link: "https://i.ibb.co/W2mNBmr/3.png",
                        image_alt: "3 petits points encerclés",
                      },
                      {
                        id: 67,
                        image_link: "https://i.ibb.co/ZBfcZnr/quote.png",
                        image_alt: "Quote Project",
                      },
                      {
                        id: 68,
                        image_link: "https://i.ibb.co/4VZkS0W/calendar.png",
                        image_alt: "Calendar Project",
                      },
                      {
                        id: 69,
                        image_link: "https://i.ibb.co/c3DsRRm/clock2.png",
                        image_alt: "Clock Project",
                      },
                    ],
                    projectMember: [
                      {
                        id: 1,
                        project_id: 1,
                        imgId: 49,
                        image_link:
                          "https://i.ibb.co/rZfs9nX/project-menber2.png",
                        image_alt: "project member",
                        status: 0,
                        url: "",
                        categorie: "Project",
                        languages_id: language.id,
                      },
                      {
                        id: 2,
                        project_id: 1,
                        imgId: 50,
                        image_link:
                          "https://i.ibb.co/Gn7WJkD/project-menber3.png",
                        image_alt: "project member 2",
                        status: 0,
                        url: "",
                        categorie: "Project",
                        languages_id: language.id,
                      },
                      {
                        id: 3,
                        project_id: 1,
                        imgId: 51,
                        image_link:
                          "https://i.ibb.co/N19m1WJ/project-menber1.png",
                        image_alt: "project member 3",
                        status: 0,
                        url: "",
                        categorie: "Project",
                        languages_id: language.id,
                      },
                    ],
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
            {data.map((elem) => (
              <option value={data.indexOf(elem)}>
                Mettre a jour ou supprimer {elem.id}
              </option>
            ))}
            <option id="add" value="add">
              Ajouter (nouveaux en bas de page)
            </option>
          </select>
        </div>
        <div className="flex flex-row w-1/2" />
        <div className="flex flex-col align-center justify-center mt-4 mb-4 text-center">
          <div className="flex flex-col align-center justify-center mt-4 mb-4 text-center">
            <div className="flex flex-row align-center justify-around mt-4 mb-4 text-center">
              <form className="flex flex-col align-center w-1/2 justify-center">
                <div className="flex flex-col w-full justify-center">
                  <div>
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      Lien de l&apos;image
                      <input
                        value={data[adminTouch]?.image_link}
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 self-center py-1 w-4/5 "
                        type="text"
                        name="image_link"
                        placeholder="Lien de l'image"
                        onChange={(e) =>
                          editData(e.target.name, e.target.value)
                        }
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
                        onChange={(e) =>
                          editData(e.target.name, e.target.value)
                        }
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
                        type="text"
                        placeholder="Description de l'image"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      Description de l&apos;image
                      <select
                        value={data[adminTouch]?.status}
                        name="status"
                        onChange={(e) => {
                          editData(e.target.name, parseFloat(e.target.value));
                        }}
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
                        type="text"
                      >
                        <option value={0}>Image a droite</option>
                        <option value={1}>Image a gauche</option>
                      </select>
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      Titre
                      <input
                        value={data[adminTouch]?.title}
                        name="title"
                        onChange={(e) =>
                          editData(e.target.name, e.target.value)
                        }
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
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
                        onChange={(e) =>
                          editData(e.target.name, e.target.value)
                        }
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
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
                        onChange={(e) =>
                          editData(e.target.name, e.target.value)
                        }
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
                        type="text"
                        placeholder="Description"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      Temps en semaine
                      <input
                        value={data[adminTouch]?.time_week}
                        name="time_week"
                        onChange={(e) =>
                          editData(e.target.name, e.target.value)
                        }
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
                        type="text"
                        placeholder="temps en semaine"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      Temps en heures
                      <input
                        value={data[adminTouch]?.time_hour}
                        name="time_hour"
                        onChange={(e) =>
                          editData(e.target.name, e.target.value)
                        }
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
                        type="text"
                        placeholder="testimonial"
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
                      Nombre d'élèves
                      <input
                        value={data[adminTouch]?.amount}
                        name="amount"
                        onChange={(e) =>
                          editData(e.target.name, e.target.value)
                        }
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
                        type="text"
                        placeholder="quantités d'élèves"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      Testimonial
                      <input
                        value={data[adminTouch]?.text}
                        name="text"
                        onChange={(e) =>
                          editData(e.target.name, e.target.value)
                        }
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
                        type="text"
                        placeholder="signature"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      Signature
                      <input
                        value={data[adminTouch]?.signature}
                        name="signature"
                        onChange={(e) =>
                          editData(e.target.name, e.target.value)
                        }
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
                        type="text"
                        placeholder="temps en heures"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      Lien de l'image du premier membre
                      <input
                        value={data[adminTouch]?.projectMember[0].image_link}
                        name="0image_link"
                        onChange={(e) =>
                          editData2(e.target.name, e.target.value)
                        }
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
                        type="text"
                        placeholder="lien du 1er menbre"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      Description de l'image du premier membre
                      <input
                        value={data[adminTouch]?.projectMember[0].image_alt}
                        name="0image_alt"
                        onChange={(e) =>
                          editData2(e.target.name, e.target.value)
                        }
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
                        type="text"
                        placeholder="description de l'image du 1er membre"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      Lien de l'image du deuxième membre
                      <input
                        value={data[adminTouch]?.projectMember[1].image_link}
                        name="1image_link"
                        onChange={(e) =>
                          editData2(e.target.name, e.target.value)
                        }
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
                        type="text"
                        placeholder="lien image du 2eme menbre"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      Description de l'image du deuxième membre
                      <input
                        value={data[adminTouch]?.projectMember[1].image_alt}
                        name="1image_alt"
                        onChange={(e) =>
                          editData2(e.target.name, e.target.value)
                        }
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
                        type="text"
                        placeholder="description de l'image du 2eme membre"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      Lien de l'image du troisième membre
                      <input
                        value={data[adminTouch]?.projectMember[2].image_link}
                        name="2image_link"
                        onChange={(e) =>
                          editData2(e.target.name, e.target.value)
                        }
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
                        type="text"
                        placeholder="lien image du 3eme menbre"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      Description de l'image du troisième membre
                      <input
                        value={data[adminTouch]?.projectMember[2].image_alt}
                        name="2image_alt"
                        onChange={(e) =>
                          editData2(e.target.name, e.target.value)
                        }
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 self-center"
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
          <div className="flex justify-center mt-4 gap-10">
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
    </div>
  );
}

export default ProjectAdminTest;
