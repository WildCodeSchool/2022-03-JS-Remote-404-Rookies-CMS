/* eslint-disable object-shorthand */
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import CTA from "../CTA";
import ExportContext from "../../contexts/Context";
import NavBarAdminCompany from "./NavBarAdminCompany";

function HomeAdmin(props) {
  const { language, media } = useContext(ExportContext.Context);
  const [imageLink, setImageLink] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [titleGreenPart, setTitleGreenPart] = useState("");
  const [cta, setCta] = useState("");
  const [bgImage, setBgImage] = useState("");
  const [bgImageAlt, setBgImageAlt] = useState("");
  const [id, setId] = useState("");
  const [imgId, setImgId] = useState("");
  const [BimgId, setBimgId] = useState("");
  const [adminTouch, setAdminTouch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: id,
      imageLink: imageLink,
      imageAlt: imageAlt,
      title: title,
      text: text,
      titleGreenPart: titleGreenPart,
      cta: cta,
      bgImage: bgImage,
      bgImageAlt: bgImageAlt,
      imgId: imgId,
      BimgId: BimgId,
    };
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/homes`, data, {
        withCredentials: true,
      })
      .then(() => {
        console.warn(`${imgId} ${BimgId} ${titleGreenPart} ${cta}`);
        console.warn("Yes !");
      })
      .catch(() => {
        console.warn(`${imgId} ${BimgId} ${titleGreenPart} ${cta}`);
        console.warn("No !");
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/homes/${language.id}`)
      .then((response) => {
        setId(response.data[adminTouch].id);
        setImgId(response.data[adminTouch].imgId);
        setBimgId(response.data[adminTouch].BimgId);
        setTitle(response.data[adminTouch].title);
        setTitleGreenPart(response.data[adminTouch].title_green_part);
        setText(response.data[adminTouch].text);
        setCta(response.data[adminTouch].CTA_label);
        setBgImage(response.data[adminTouch].image_link_background);
        setBgImageAlt(response.data[adminTouch].image_alt_background);
        setImageLink(response.data[adminTouch].image_link);
        setImageAlt(response.data[adminTouch].image_alt);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [adminTouch]);

  return (
    <div className="bg-white bg-cover flex flex-row justify-center w-full h-full">
      <div className="w-1/5">
        <NavBarAdminCompany />
      </div>
      <div className="flex flex-col w-4/5">
        <div className="bg-white bg-cover flex flex-col w-full h-full">
          <select
            className="flex flex-col justify-center align-center bg-green-500 hover:bg-green-700 text-white font-bold text-xl py-1 px-1 rounded w-1/3"
            onChange={(e) => setAdminTouch(e.target.value)}
          >
            <option value="">Select a page</option>
            <option value="0">Company</option>
            <option value="1">School</option>
          </select>
          <form className="flex flex-col  w-full justify-center">
            <div className="flex flex-col  w-full justify-center">
              <div className="flex flex-col  w-full justify-center">
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
                    value={titleGreenPart}
                    onChange={(e) => setTitleGreenPart(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={titleGreenPart}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Texte
                  <input
                    value={text && text}
                    onChange={(e) => setText(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={text && text}
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
                  Image de fond
                  <input
                    value={bgImage && bgImage}
                    onChange={(e) => setBgImage(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={bgImage && bgImage}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Alt de l&apos;image de fond
                  <input
                    value={bgImageAlt && bgImageAlt}
                    onChange={(e) => setBgImageAlt(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={bgImageAlt && bgImageAlt}
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
          <div
            className="bg-white bg-cover flex flex-col justify-center  py-16 lg:max-w-full lg:flex-row"
            style={{
              backgroundImage: `url(${bgImage && bgImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
          >
            <div
              className="flex flex-col justify-center items-center lg:w-1/2 lg:m-6 lg:items-start text-left"
              id={props.status === 1 ? "trytorotate" : ""}
            >
              <h1 className="justify-center text-4xl lg:text-3xl font-bold mt-6 mb-6 last-child">
                {title && title}
                <br />
                <span className="underline decoration-8 decoration-green-400">
                  {titleGreenPart && titleGreenPart}
                </span>
              </h1>
              <h2 className=" lg:center text-left text-xl">{text && text}</h2>
              <CTA label={`${cta && cta} ${media ? "💬" : ""}`} />
            </div>
            <div className="lg:w-1/2 flex justify-center lg:flex-row-reverse ">
              <img
                className="w-96 h-auto mt-6 lg:flex lg:justify-center hidden"
                src={imageLink && imageLink}
                alt={imageAlt && imageAlt}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAdmin;
