import axios from "axios";
import { useContext, useState, useEffect } from "react";
import ExportContext from "../../contexts/Context";
import CTA from "../CTA";
import NavBarAdminCompany from "./NavBarAdminCompany";

function QAAdmin() {
  const { language } = useContext(ExportContext.Context);

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [cta1, setCta1] = useState("");
  const [cta2, setCta2] = useState("");
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [question5, setQuestion5] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [id1, setId1] = useState("");
  const [id2, setId2] = useState("");
  const [id3, setId3] = useState("");
  const [id4, setId4] = useState("");
  const [id5, setId5] = useState("");
  const [ctaId, setCtaId] = useState("");

  const elements = [
    { question: question1, answer: answer1, id: id1 },
    { question: question2, answer: answer2, id: id2 },
    { question: question3, answer: answer3, id: id3 },
    { question: question4, answer: answer4, id: id4 },
    { question: question5, answer: answer5, id: id5 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: id,
      subtitle: subtitle,
      title: title,
      elements: elements,
    };
    const dataCta = {
      id: ctaId,
      cta1_label: cta1,
      cta2_label: cta2,
    };
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/QAS`, data,{ withCredentials: true })
      .then(() => {
        console.warn("Yes !");
      })
      .then();
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/getstarteds`, dataCta,{ withCredentials: true })
      .catch(() => {
        console.warn("No !");
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/QAS/${language.id}`)
      .then((response) => {
        setId(response.data.id);
        setTitle(response.data.title);
        setSubTitle(response.data.sub_title);
        setQuestion1(response.data.elements[0].question);
        setQuestion2(response.data.elements[1].question);
        setQuestion3(response.data.elements[2].question);
        setQuestion4(response.data.elements[3].question);
        setQuestion5(response.data.elements[4].question);
        setAnswer1(response.data.elements[0].answer);
        setAnswer2(response.data.elements[1].answer);
        setAnswer3(response.data.elements[2].answer);
        setAnswer4(response.data.elements[3].answer);
        setAnswer5(response.data.elements[4].answer);
        setId1(response.data.elements[0].id);
        setId2(response.data.elements[1].id);
        setId3(response.data.elements[2].id);
        setId4(response.data.elements[3].id);
        setId5(response.data.elements[4].id);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/getstarteds/${language.id}`)
      .then((response) => {
        setCta1(response.data[0].cta1_label);
        setCta2(response.data[0].cta2_label);
        setCtaId(response.data[0].id);
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
      <div className="w-4/5">
        <form className="flex flex-col w-full justify-center">
          <div className="flex flex-row flex-wrap w-full justify-center">
            <div className="flex flex-col w-1/2">
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
            <div className="flex flex-col w-1/2">
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
            <div className="flex flex-col w-1/2">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                premier avantage
                <input
                  value={question1 && question1}
                  onChange={(e) => setQuestion1(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={question1 && question1}
                />
              </label>
            </div>
            <div className="flex flex-col w-1/2">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Premier détail
                <input
                  value={answer1 && answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={answer1 && answer1}
                />
              </label>
            </div>
            <div className="flex flex-col w-1/2">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Deuxième avantage
                <input
                  value={question2 && question2}
                  onChange={(e) => setQuestion2(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={question2 && question2}
                />
              </label>
            </div>
            <div className="flex flex-col w-1/2">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Deuxième détail
                <input
                  value={answer2 && answer2}
                  onChange={(e) => setAnswer2(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={answer2 && answer2}
                />
              </label>
            </div>
            <div className="flex flex-col w-1/2">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Troisème question
                <input
                  value={question3 && question3}
                  onChange={(e) => setQuestion3(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={question3 && question3}
                />
              </label>
            </div>
            <div className="flex flex-col w-1/2">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Troisième réponse
                <input
                  value={answer3 && answer3}
                  onChange={(e) => setAnswer3(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={answer3 && answer3}
                />
              </label>
            </div>
            <div className="flex flex-col w-1/2">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Quatrième question
                <input
                  value={question4 && question4}
                  onChange={(e) => setQuestion4(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={question4 && question4}
                />
              </label>
            </div>
            <div className="flex flex-col w-1/2">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Quatrième réponse
                <input
                  value={answer4 && answer4}
                  onChange={(e) => setAnswer4(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={answer4 && answer4}
                />
              </label>
            </div>
            <div className="flex flex-col w-1/2">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Cinquième question
                <input
                  value={question5 && question5}
                  onChange={(e) => setQuestion5(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={question5 && question5}
                />
              </label>
            </div>
            <div className="flex flex-col w-1/2">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Cinquième réponse
                <input
                  value={answer5 && answer5}
                  onChange={(e) => setAnswer5(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={answer5 && answer5}
                />
              </label>
            </div>
            <div className="flex flex-col w-1/2">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Bouton 1
                <input
                  value={cta1 && cta1}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={cta1 && cta1}
                  onChange={(e) => setCta1(e.target.value)}
                />
              </label>
            </div>
            <div className="flex flex-col w-1/2">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Bouton 2
                <input
                  value={cta2 && cta2}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={cta2 && cta2}
                  onChange={(e) => setCta2(e.target.value)}
                />
              </label>
            </div>
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
        </form>
        {/* affichage composant en fonction des state en relation avec les input */}
        <section className="bg-slate-100 flex flex-col items-center justify-evenly py-16 ">
          <div className="w-1/1 lg:w-1/2 flex flex-col text-center justify-between">
            <h2 className="tc4E text-xl font-bold py-4 ">{title && title}</h2>
            <h3 className="text-4xl py-4 font-bold text-gray-800">
              {subtitle && subtitle}
            </h3>
          </div>
          {elements &&
            elements.map((element) => {
              return (
                <div className="w-1/1 mx-2 lg:w-1/2 flex flex-col content-center justify-between">
                  <details className="bc9E border-b-2 border-gray-200 text-gray-800 p-3 my-4">
                    <summary className="ds4E font-semibold">
                      {element.question}
                    </summary>
                    {element.answer}
                  </details>
                </div>
              );
            })}
          <div className="flex flex-col justify-items-center  place-items-center pt-20">
            <div className="pb-20 flex justify-center gap-20">
              <CTA label={cta1 && cta1} />
              <CTA label={cta2 && cta2} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default QAAdmin;
