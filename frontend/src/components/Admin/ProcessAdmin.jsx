/* eslint-disable object-shorthand */
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import fleche from "../../assets/module5Earrow.png";
import flecheReverse from "../../assets/module5Earrowreverse.png";
import ExportContext from "../../contexts/Context";

function ProcessAdmin() {
  const { language } = useContext(ExportContext.Context);
  const [imageLink, setImageLink] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [text, setText] = useState("");
  const [elemTitle1, setElemTitle1] = useState("");
  const [elemText1, setElemText1] = useState("");
  const [elemId1, setElemId1] = useState("");
  const [elemTitle2, setElemTitle2] = useState("");
  const [elemText2, setElemText2] = useState("");
  const [elemId2, setElemId2] = useState("");
  const [elemTitle3, setElemTitle3] = useState("");
  const [elemText3, setElemText3] = useState("");
  const [elemId3, setElemId3] = useState("");
  const [elemTitle4, setElemTitle4] = useState("");
  const [elemText4, setElemText4] = useState("");
  const [elemId4, setElemId4] = useState("");
  const [id, setId] = useState("");
  const [imgId, setImgId] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/processs/${language.id}`)
      .then((response) => {
        setId(response.data.id);
        setImgId(response.data.imgId);
        setTitle(response.data.title);
        setSubTitle(response.data.sub_title);
        setText(response.data.text);
        setElemTitle1(response.data.elements[0].title);
        setElemText1(response.data.elements[0].text);
        setElemId1(response.data.elements[0].id);
        setElemTitle2(response.data.elements[1].title);
        setElemText2(response.data.elements[1].text);
        setElemId2(response.data.elements[1].id);
        setElemTitle3(response.data.elements[2].title);
        setElemText3(response.data.elements[2].text);
        setElemId3(response.data.elements[2].id);
        setElemTitle4(response.data.elements[3].title);
        setElemText4(response.data.elements[3].text);
        setElemId4(response.data.elements[3].id);
        setImageLink(response.data.image_link);
        setImageAlt(response.data.image_alt);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  const elements = [
    { title: elemTitle1, text: elemText1, id: elemId1 },
    { title: elemTitle2, text: elemText2, id: elemId2 },
    { title: elemTitle3, text: elemText3, id: elemId3 },
    { title: elemTitle4, text: elemText4, id: elemId4 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: id,
      imgId: imgId,
      imageLink: imageLink,
      imageAlt: imageAlt,
      title: title,
      subTitle: subTitle,
      text: text,
      elements: elements,
    };
    axios
      .put("http://localhost:5000/process", data)
      .then(() => {
        console.warn(data);
      })
      .catch(() => {
        console.warn(data);
        console.warn("No !");
      });
  };

  return (
    <div className="bg-white bg-cover flex flex-row justify-center w-full h-full">
      <form className="flex flex-col h-full w-2/5 justify-center">
        <div className="flex flex-col h-full w-full justify-center">
          <div className="flex flex-col h-full w-full justify-center">
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
              Sous titre
              <input
                value={subTitle && subTitle}
                onChange={(e) => setSubTitle(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={subTitle && subTitle}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Texte
              <textarea
                value={text && text}
                onChange={(e) => setText(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                placeholder={text && text}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Titre partie 1
              <input
                value={elemTitle1 && elemTitle1}
                onChange={(e) => setElemTitle1(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={elemTitle1 && elemTitle1}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Texte partie 1
              <input
                value={elemText1 && elemText1}
                onChange={(e) => setElemText1(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={elemText1 && elemText1}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Titre partie 2
              <input
                value={elemTitle2 && elemTitle2}
                onChange={(e) => setElemTitle2(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={elemTitle2 && elemTitle2}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Texte partie 2
              <input
                value={elemText2 && elemText2}
                onChange={(e) => setElemText2(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={elemText2 && elemText2}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Titre partie 3
              <input
                value={elemTitle3 && elemTitle3}
                onChange={(e) => setElemTitle3(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={elemTitle3 && elemTitle3}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Texte partie 3
              <input
                value={elemText3 && elemText3}
                onChange={(e) => setElemText3(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={elemText3 && elemText3}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Titre partie 4
              <input
                value={elemTitle4 && elemTitle4}
                onChange={(e) => setElemTitle4(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={elemTitle4 && elemTitle4}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Texte partie 4
              <input
                value={elemText4 && elemText4}
                onChange={(e) => setElemText4(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={elemText4 && elemText4}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Image Lien
              <input
                value={imageLink && imageLink}
                onChange={(e) => setImageLink(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={imageLink && imageLink}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Alt image
              <input
                value={imageAlt && imageAlt}
                onChange={(e) => setImageAlt(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={imageAlt && imageAlt}
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
      {/* affichage composant en fonction des state en relation avec les input */}
      <section className="flex flex-col py-16">
        <div className="justify-center mx-4 lg:flex">
          <div className="mb-4 lg:w-1/3 lg:flex flex-col justify-center lg:mx-6">
            <h2 className="font-bold module5E-green text-xl lg:text-xl">
              {title && title}
            </h2>
            <h3 className="font-extrabold text-4xl lg:text-4xl my-6">
              {subTitle && subTitle}
            </h3>
            <p className="text-gray-600 text-lg lg:w-4/5">{text && text}</p>
          </div>
          <div className="flex justify-center lg:w-1/3 lg:flex flex-col">
            <img
              className="hidden lg:block"
              src={imageLink && imageLink}
              alt={imageAlt && imageAlt}
            />
          </div>
        </div>
        <div className="flex flex-wrap mx-8 lg:grid lg:grid5A mt-4 lg:mt-16 justify-evenly">
          <div className="div1 w-full lg:w-min mb-4">
            <h3 className="font-bold text-left  text-xl mb-4">
              <span className="font-bold text-2xl  module5E-green pr-2">
                01
              </span>
              {elements[0].title && elements[0].title}
            </h3>
            <h4 className="text-gray-600 text-md text-left  lg:text-lg>">
              {elements[0].text && elements[0].text}
            </h4>
          </div>
          <img
            src={fleche}
            alt="fleche de l'etape 1 a 2"
            className="arrow1 hidden lg:block"
          />
          <div className="div2 w-full lg:w-min mb-4">
            <h3 className="font-bold text-left  text-xl mb-4">
              <span className="font-bold text-2xl  module5E-green pr-2">
                02
              </span>
              {elements[1].title && elements[1].title}
            </h3>
            <h4 className="text-gray-600 text-left  text-md lg:text-lg">
              {elements[1].text && elements[1].text}
            </h4>
          </div>
          <img
            src={flecheReverse}
            alt="fleche de l'etape 2 a 3"
            className="arrow2 hidden lg:block"
          />
          <div className="div3 mb-4 w-full lg:w-min">
            <h3 className="font-bold text-left text-xl mb-4">
              <span className="font-bold text-2xl module5E-green pr-2">03</span>
              {elements[2].title && elements[2].title}
            </h3>
            <h4 className="text-gray-600 text-left  text-md lg:text-lg">
              {elements[2].text && elements[2].text}
            </h4>
          </div>
          <img
            src={fleche}
            alt="fleche de l'etape 3 a 4"
            className="arrow3 hidden lg:block"
          />
          <div className="div4 w-full lg:w-min ">
            <h3 className="font-bold  text-left text-xl mb-4">
              <span className="font-bold text-2xl   module5E-green pr-2">
                04
              </span>
              {elements[3].title && elements[3].title}
            </h3>
            <h4 className="text-gray-600 text-left  text-md lg:text-lg">
              {elements[3].text && elements[3].text}
            </h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProcessAdmin;
