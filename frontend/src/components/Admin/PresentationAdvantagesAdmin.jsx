import axios from "axios";
import { useContext, useState, useEffect } from "react";
import ExportContext from "../../contexts/Context";
import NavBarAdminCompany from "./NavBarAdminCompany";
import CTA from "../CTA";

function PresentationAdvantagesAdmin() {
  const { language, media } = useContext(ExportContext.Context);

  const [id, setId] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [cta, setCta] = useState("");
  const [summary1, setSummary1] = useState("");
  const [summary2, setSummary2] = useState("");
  const [summary3, setSummary3] = useState("");
  const [details1, setDetails1] = useState("");
  const [details2, setDetails2] = useState("");
  const [details3, setDetails3] = useState("");
  const [id1, setId1] = useState("");
  const [id2, setId2] = useState("");
  const [id3, setId3] = useState("");

  const elements = [
    { summary: summary1, details: details1, id: id1 },
    { summary: summary2, details: details2, id: id2 },
    { summary: summary3, details: details3, id: id3 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: id,
      subtitle: subtitle,
      title: title,
      text: text,
      cta: cta,
      elements: elements,
    };
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/presentationadvantage`, data, {
        withCredentials: true,
      })
      .then(() => {
        console.warn(` ${subtitle} ${title} ${text} ${cta}`);
        console.warn("Yes !");
        console.warn(data);
      })
      .catch(() => {
        console.warn(` ${subtitle} ${title} ${text} ${cta}`);
        console.warn("No !");
        console.warn(data);
      });
  };

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/presentationadvantages/${
          language.id
        }`
      )
      .then((response) => {
        setId(response.data.id);
        setSubTitle(response.data.sub_title);
        setTitle(response.data.title);
        setText(response.data.text);
        setCta(response.data.CTA_label);
        setSummary1(response.data.summary);
        setSummary2(response.data.summary2);
        setSummary3(response.data.summary3);
        setDetails1(response.data.details);
        setDetails2(response.data.details2);
        setDetails3(response.data.details3);
        setId1(response.data.id1);
        setId2(response.data.id2);
        setId3(response.data.id3);
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
      <div>
        <form className="flex flex-col w-full justify-center">
          <div className="flex flex-row flex-wrap w-full justify-center">
            <div className="flex flex-col w-1/2 justify-center">
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
                Texte
                <input
                  value={text && text}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={text && text}
                  onChange={(e) => setText(e.target.value)}
                />
              </label>
            </div>
            <div className="flex flex-col w-1/2">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Bouton
                <input
                  value={cta && cta}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={cta && cta}
                  onChange={(e) => setCta(e.target.value)}
                />
              </label>
            </div>
            <div className="flex flex-col w-1/2">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                premier avantage
                <input
                  value={summary1 && summary1}
                  onChange={(e) => setSummary1(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={summary1 && summary1}
                />
              </label>
            </div>
            <div className="flex flex-col w-1/2">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                premier détail
                <input
                  value={details1 && details1}
                  onChange={(e) => setDetails1(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={details1 && details1}
                />
              </label>
            </div>
            <div className="flex flex-col w-1/2">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                deuxième avantage
                <input
                  value={summary2 && summary2}
                  onChange={(e) => setSummary2(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={summary2 && summary2}
                />
              </label>
            </div>
            <div className="flex flex-col w-1/2">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                deuxième détail
                <input
                  value={details2 && details2}
                  onChange={(e) => setDetails2(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={details2 && details2}
                />
              </label>
            </div>
            <div className="flex flex-col w-1/2">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                troisème avantage
                <input
                  value={summary3 && summary3}
                  onChange={(e) => setSummary3(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={summary3 && summary3}
                />
              </label>
            </div>
            <div className="flex flex-col w-1/2">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                troisième détail
                <input
                  value={details3 && details3}
                  onChange={(e) => setDetails3(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={details3 && details3}
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
        <section className="bg4E py-16 lg:max-w-full md:max-w-full lg:flex flex-row lg:justify-center">
          <div className="lg:w-1/3 flex flex-col justify-center">
            <h2 className="lg:text-lg text-2xl text-bold text-green-400 mx-4">
              {subtitle && subtitle}
            </h2>
            <h3 className="text-2xl text-gree font-bold m-4">
              {title && title}
            </h3>
            <p className="text-lg text-gray-600 m-4 ">{text && text}</p>
            <div className="flex justify-center lg:justify-start">
              <CTA label={cta && cta} />
            </div>
          </div>
          <div className="mx-4 lg:w-1/3 ">
            <details className="bc4E border-2 text-gray-600 p-3 my-4">
              <summary className="ds4E text-black font-lightbold">
                {summary1 && summary1}
              </summary>
              {details1 && details1}
            </details>
            <details className="bc4E border-2 text-gray-600 p-3 my-4">
              <summary className="ds4E text-black font-lightbold">
                {summary2 && summary2}
              </summary>
              {details2 && details2}
            </details>
            <details className="bc4E border-2 text-gray-600 p-3 my-4">
              <summary className="ds4E text-black font-lightbold">
                {summary3 && summary3}
              </summary>
              {details3 && details3}
            </details>
          </div>
          {media ? (
            <div className="flex justify-center">
              <CTA label={cta && cta} className="" />
            </div>
          ) : (
            ""
          )}
        </section>
      </div>
    </div>
  );
}
export default PresentationAdvantagesAdmin;
