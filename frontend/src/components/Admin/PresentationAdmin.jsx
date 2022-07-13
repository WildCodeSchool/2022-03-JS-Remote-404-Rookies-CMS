/* eslint-disable object-shorthand */
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import CTA from "../CTA";
import ExportContext from "../../contexts/Context";
import NavBarAdminCompany from "./NavBarAdminCompany";
import checkbox from "../../assets/Checkbox.png";

function PresentationAdmin() {
  const { language, media } = useContext(ExportContext.Context);
  const [imageLink, setImageLink] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [cta, setCta] = useState("");
  const [id, setId] = useState("");
  const [imgId, setImgId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: id,
      imageLink: imageLink,
      imageAlt: imageAlt,
      title: title,
      subTitle: subTitle,
      text1: text1,
      text2: text2,
      text3: text3,
      cta: cta,
      imgId: imgId,
    };
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/presentations`, data)
      .then(() => {
        console.warn("Yes !", data);
      })
      .catch(() => {
        console.warn("No !");
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/presentations/${language.id}`)
      .then((response) => {
        setId(response.data.id);
        setImgId(response.data.imgId);
        setTitle(response.data.title);
        setSubTitle(response.data.sub_title);
        setText1(response.data.text1);
        setText2(response.data.text2);
        setText3(response.data.text3);
        setCta(response.data.CTA_label);
        setImageLink(response.data.image_link);
        setImageAlt(response.data.image_alt);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  return (
    <div className="bg-white bg-cover flex flex-row justify-center w-full h-full">
      <div className="w-1/5">
        <NavBarAdminCompany />
      </div>
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
              Partie du titre souligné en vert
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
              <input
                value={text1 && text1}
                onChange={(e) => setText1(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={text1 && text1}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Texte 1er checkbox
              <input
                value={text2 && text2}
                onChange={(e) => setText2(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={text2 && text2}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Texte 2eme checkbox
              <input
                value={text3 && text3}
                onChange={(e) => setText3(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={text3 && text3}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Nom du Call to action
              <input
                value={cta && cta}
                onChange={(e) => setCta(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={cta && cta}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Image
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
      <section className="bg-slate-100 text-gray-800">
        <div className="container mx-auto flex flex-col px-5 py-12 space-x-4 lg:flex-row">
          <div className="mr-4 w-5/6 md:max-w-lg md:w-full ">
            <img
              className="object-cover object-center hidden lg:block"
              src={imageLink && imageLink}
              alt={imageAlt && imageAlt}
            />
          </div>
          <div className="flex flex-col justify-start lg:mb-16  lg:pr-32 ">
            <h3 className="flex flex-start text-left text-green-500 font-bold">
              {title && title}
            </h3>
            <h2 className="text-3xl mb-4 font-bold text-gray-900">
              {subTitle && subTitle}
            </h2>
            <p className=" mb-8 ">{text1 && text1}</p>
            <div>
              <img
                className="object-cover object-center lg:hidden lg:max-w-full"
                src={imageLink && imageLink}
                alt={imageAlt && imageAlt}
              />
            </div>
            <div>
              <div className=" mb-2 flex">
                <img
                  className=" mr-2 ar-1 w-8 h-8 "
                  src={checkbox}
                  alt="checkbox"
                />
                <p className="text-sm mb-4 space-x-4">{text2 && text2}</p>
              </div>
              <div className="mb-2 flex">
                <img
                  className="mr-2 ar-1 w-8 h-8"
                  src={checkbox}
                  alt="checkbox"
                />
                <p className="text-sm mb-4 space-x-4">{text3 && text3}</p>
              </div>
            </div>
            <div className="flex flex-col items-center max-w-full lg:w-full">
              <CTA label={`${cta && cta} ${media ? "💬" : ""}`} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PresentationAdmin;
