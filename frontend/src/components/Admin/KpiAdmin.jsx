import axios from "axios";
import { useContext, useState, useEffect } from "react";
import ExportContext from "../../contexts/Context";
import NavBarAdminCompany from "./NavBarAdminCompany";

function KpiAdmin() {
  const { language } = useContext(ExportContext.Context);

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3, setNumber3] = useState("");
  const [number4, setNumber4] = useState("");
  const [label1, setLabel1] = useState("");
  const [label2, setLabel2] = useState("");
  const [label3, setLabel3] = useState("");
  const [label4, setLabel4] = useState("");
  const [id1, setId1] = useState("");
  const [id2, setId2] = useState("");
  const [id3, setId3] = useState("");
  const [id4, setId4] = useState("");

  const elements = [
    { number: number1, label: label1, id: id1 },
    { number: number2, label: label2, id: id2 },
    { number: number3, label: label3, id: id3 },
    { number: number4, label: label4, id: id4 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: id,
      title: title,
      subtitle: subtitle,
      elements: elements,
    };
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/kpi`, data)
      .then(() => {
        console.warn(`${title} ${subtitle}`);
        console.warn("Yes !");
        console.warn(data);
      })
      .catch(() => {
        console.warn(`${title} ${subtitle}`);
        console.warn("No !");
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/kpis/${language.id}`)
      .then((response) => {
        setId(response.data.id);
        setTitle(response.data.title);
        setSubTitle(response.data.sub_title);
        setNumber1(response.data.elements[0].number);
        setNumber2(response.data.elements[1].number);
        setNumber3(response.data.elements[2].number);
        setNumber4(response.data.elements[3].number);
        setLabel1(response.data.elements[0].label);
        setLabel2(response.data.elements[1].label);
        setLabel3(response.data.elements[2].label);
        setLabel4(response.data.elements[3].label);
        setId1(response.data.elements[0].id);
        setId2(response.data.elements[1].id);
        setId3(response.data.elements[2].id);
        setId4(response.data.elements[3].id);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  return (
    <div className="flex flex-row w-screen">
      <div className="w-1/5">
        <NavBarAdminCompany />
      </div>
      <div className="flex flex-col w-full">
        <form className="flex flex-col w-full ">
          <div className="flex flex-col ">
            <div className="flex flex-col ">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Titre
                <input
                  value={title && title}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={title && title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Sous-titre
                <input
                  value={subtitle && subtitle}
                  onChange={(e) => setSubTitle(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={subtitle && subtitle}
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                premier chiffre
                <input
                  value={number1 && number1}
                  onChange={(e) => setNumber1(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={number1 && number1}
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                premier intitulé
                <input
                  value={label1 && label1}
                  onChange={(e) => setLabel1(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={label1 && label1}
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                deuxième chiffre
                <input
                  value={number2 && number2}
                  onChange={(e) => setNumber2(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={number2 && number2}
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                deuxième intitulé
                <input
                  value={label2 && label2}
                  onChange={(e) => setLabel2(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={label2 && label2}
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                troisème chiffre
                <input
                  value={number3 && number3}
                  onChange={(e) => setNumber3(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={number3 && number3}
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                troisième intitulé
                <input
                  value={label3 && label3}
                  onChange={(e) => setLabel3(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={label3 && label3}
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                quatrième chiffre
                <input
                  value={number4 && number4}
                  onChange={(e) => setNumber4(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={number4 && number4}
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                quatrième intitulé
                <input
                  value={label4 && label4}
                  onChange={(e) => setLabel4(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={label4 && label4}
                />
              </label>
            </div>
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                onClick={(e) => handleSubmit(e)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <section className="bg4E flex flex-col justify-evenly py-16">
          <div>
            <h2 className="lg:text-xl pl-4 text-3xl text-green green-400 text-left lg:text-center font-bold py-4 ">
              {title && title}
            </h2>
            <h3 className="lg:text-4xl py-4 text-4xl font-bold text-3 pl-4 text-left lg:text-center mb-6">
              {subtitle && subtitle}
            </h3>
          </div>
          <div className="flex flex-wrap justify-evenly  lg:grid  lg:grid-cols-4 lg:gap-6 lg:divide-x-2 lg:divide-green-300">
            {elements &&
              elements.map((element) => {
                return (
                  <div className="flex w-2/5 justify-start lg:w-full flex-col lg:basis-1/4 mb-4">
                    <p className="flex justify-center text-2xl lg:text-4xl tc4E font-bold order-2 mb-4">
                      {element.number}
                    </p>
                    <p className="flex justify-center font-bold  lg:font-medium lg:text-xl mb-4 tc4e2">
                      {element.label}
                    </p>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default KpiAdmin;
