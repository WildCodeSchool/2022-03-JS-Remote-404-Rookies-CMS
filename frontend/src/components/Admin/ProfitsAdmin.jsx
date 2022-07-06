import axios from "axios";
import { useContext, useState, useEffect } from "react";
import ExportContext from "../../contexts/Context";

function ProfitsAdmin() {
  const { language } = useContext(ExportContext.Context);
  const [eImageLink, setEImageLink] = useState("");
  const [eImageAlt, setEImageAlt] = useState("");
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
  const [eImageLink1, setEImageLink1] = useState("");
  const [eImageAlt1, setEImageAlt1] = useState("");
  const [eImageLink2, setEImageLink2] = useState("");
  const [eImageAlt2, setEImageAlt2] = useState("");
  const [eImageLink3, setEImageLink3] = useState("");
  const [eImageAlt3, setEImageAlt3] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: id,
      eImageLink: eImageLink,
      eImageAlt: eImageAlt,
      title: title,
      subTitle: subTitle,
      text: text,
      elemTitle1: elemTitle1,
      elemText1: elemText1,
      elemId1: elemId1,
      elemTitle2: elemTitle2,
      elemText2: elemText2,
      elemId2: elemId2,
      elemTitle3: elemTitle3,
      elemText3: elemText3,
      elemId3: elemId3,
      elemTitle4: elemTitle4,
      elemText4: elemText4,
      elemId4: elemId4,
      eImageLink1: eImageLink1,
      eImageAlt1: eImageAlt1,
      eImageLink2: eImageLink2,
      eImageAlt2: eImageAlt2,
      eImageLink3: eImageLink3,
      eImageAlt3: eImageAlt3,
    };
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/profits`, data)
      .then(() => {
        console.warn("Yes !", data);
      })
      .catch(() => {
        console.warn("No !");
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/profits/${language.id}`)
      .then((response) => {
        setId(response.data.id);
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
        setEImageLink(response.data.elements[0].image_link);
        setEImageAlt(response.data.elements[0].image_alt);
        setEImageLink1(response.data.elements[1].image_link);
        setEImageAlt1(response.data.elements[1].image_alt);
        setEImageLink2(response.data.elements[2].image_link);
        setEImageAlt2(response.data.elements[2].image_alt);
        setEImageLink3(response.data.elements[3].image_link);
        setEImageAlt3(response.data.elements[3].image_alt);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  //   const elements = [
  //    { title: elemTitle1, text: elemText1 },
  //     { title: elemTitle2, text: elemText2 },
  //     { title: elemTitle3, text: elemText3 },
  //     { title: elemTitle4, text: elemText4 },
  //   ];

  return (
    <div className="flex flex-col w-full">
      <form className="flex flex-row h-full w-full justify-center w-full">
        <div className="flex flex-col h-full w-1/2 justify-center">
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
              Sous-titre en vert
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
              Premier titre
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
              Premier texte
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
              Première image
              <input
                value={eImageLink && eImageLink}
                onChange={(e) => setEImageLink(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={eImageLink && eImageLink}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Première description d&apos;image
              <input
                value={eImageAlt && eImageAlt}
                onChange={(e) => setEImageAlt(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={eImageAlt && eImageAlt}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Deuxième titre
              <input
                value={elemTitle2 && elemTitle2}
                onChange={(e) => setElemTitle1(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={elemTitle2 && elemTitle2}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Deuxième texte
              <input
                value={elemText2 && elemText2}
                onChange={(e) => setElemText1(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={elemText2 && elemText2}
              />
            </label>
          </div>
          <div className="flex flex-col h-full w-full justify-center">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Deuxième image
              <input
                value={eImageLink1 && eImageLink1}
                onChange={(e) => setEImageLink(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={eImageLink1 && eImageLink1}
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col h-full w-1/2 justify-center">
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Deuxième description d&apos;image
              <input
                value={eImageAlt1 && eImageAlt1}
                onChange={(e) => setEImageAlt(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={eImageAlt1 && eImageAlt1}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Troisième titre
              <input
                value={elemTitle3 && elemTitle3}
                onChange={(e) => setElemTitle1(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={elemTitle3 && elemTitle3}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Troisième texte
              <input
                value={elemText3 && elemText3}
                onChange={(e) => setElemText1(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={elemText3 && elemText3}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Troisième image
              <input
                value={eImageLink2 && eImageLink2}
                onChange={(e) => setEImageLink(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={eImageLink2 && eImageLink2}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Troisième description d&apos;image
              <input
                value={eImageAlt2 && eImageAlt2}
                onChange={(e) => setEImageAlt(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={eImageAlt2 && eImageAlt2}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Quatrième titre
              <input
                value={elemTitle4 && elemTitle4}
                onChange={(e) => setElemTitle1(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={elemTitle4 && elemTitle4}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Quatrième texte
              <input
                value={elemText4 && elemText4}
                onChange={(e) => setElemText1(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={elemText4 && elemText4}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Quatrième image
              <input
                value={eImageLink3 && eImageLink3}
                onChange={(e) => setEImageLink(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={eImageLink3 && eImageLink3}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Quatrième description d&apos;image
              <input
                value={eImageAlt3 && eImageAlt3}
                onChange={(e) => setEImageAlt(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={eImageAlt3 && eImageAlt3}
              />
            </label>
          </div>
        </div>
      </form>
      <div className="flex justify-center mt-4 mb-4">
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Submit
        </button>
      </div>
      <div className="bg4E pt-12 pb-12 flex flex-col justify-items-center place-items-center text-center w-full mr-2">
        <div className="font-bold text-center mb-8 lg:mb-20">
          <h3 className="text-green-400 text-xl pb-1">
            {subTitle && subTitle}
          </h3>
          <h2 className="text-3xl lg:text-4xl">{title && title}</h2>
        </div>
        <div className="flex flex-col flex-wrap m-4 justify-items-center place-items-center leading-loose lg:flex-row ">
          <div className="basis-1/2 flex flex-col justify-center justify-items-center place-items-center lg:flex-row flex-none mb-4">
            <div className="circle bg-button-green-E10 mr-2 aspect-square">
              <img
                className="logo"
                src={eImageLink && eImageLink}
                alt={eImageAlt && eImageAlt}
              />
            </div>
            <div>
              <h3 className="text-xl pb-1">{elemTitle1 && elemTitle1}</h3>
              <p className="max-w-lg">{elemText1 && elemText1}</p>
            </div>
          </div>
          <div className="basis-1/2 flex flex-col justify-center justify-items-center place-items-center lg:flex-row flex-none mb-4">
            <div className="circle bg-button-green-E10 mr-2 aspect-square">
              <img
                className="logo"
                src={eImageLink1 && eImageLink1}
                alt={eImageAlt1 && eImageAlt1}
              />
            </div>
            <div>
              <h3 className="text-xl pb-1">{elemTitle2 && elemTitle2}</h3>
              <p className="max-w-lg">{elemText2 && elemText2}</p>
            </div>
          </div>
          <div className="basis-1/2 flex flex-col justify-center justify-items-center place-items-center lg:flex-row flex-none mb-4">
            <div className="circle bg-button-green-E10 mr-2 aspect-square">
              <img
                className="logo"
                src={eImageLink2 && eImageLink2}
                alt={eImageAlt2 && eImageAlt2}
              />
            </div>
            <div>
              <h3 className="text-xl pb-1">{elemTitle3 && elemTitle3}</h3>
              <p className="max-w-lg">{elemText3 && elemText3}</p>
            </div>
          </div>
          <div className="basis-1/2 flex flex-col justify-center justify-items-center place-items-center lg:flex-row flex-none mb-4">
            <div className="circle bg-button-green-E10 mr-2 aspect-square">
              <img
                className="logo"
                src={eImageLink3 && eImageLink3}
                alt={eImageAlt3 && eImageAlt3}
              />
            </div>
            <div>
              <h3 className="text-xl pb-1">{elemTitle4 && elemTitle4}</h3>
              <p className="max-w-lg">{elemText4 && elemText4}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfitsAdmin;
