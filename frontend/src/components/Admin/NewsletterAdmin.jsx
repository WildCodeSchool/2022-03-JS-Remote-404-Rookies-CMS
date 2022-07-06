import { useState, useContext, useEffect } from "react";
import axios from "axios";
import ExportContext from "../../contexts/Context";

function NewsletterAdmin() {
  const { language } = useContext(ExportContext.Context);

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [ctaLabel, setCtaLabel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: id,
      title: title,
      text: text,
      cta_label: ctaLabel,
    };
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/newsletter`, data)
      .then(() => {
        console.warn(`${title} ${text} ${id}`);
        console.warn("Yes !");
        console.warn(data);
      })
      .catch(() => {
        console.warn(`${title} ${text} ${id}`);
        console.warn("No !");
      });
  };
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/newsletter/${language.id}`)
      .then((response) => {
        setId(response.data[0].id);
        setTitle(response.data[0].title);
        setText(response.data[0].text);
        setCtaLabel(response.data[0].cta_label);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  return (
    <div className="flex flex-row w-screen">
      <form className="flex flex-col h-full w-1/4 justify-center">
        <div className="flex flex-col h-full w-full justify-center">
          <div className="flex flex-col w-full justify-center">
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
              Text
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
              Nom du bouton
              <input
                value={ctaLabel && ctaLabel}
                onChange={(e) => setCtaLabel(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={ctaLabel && ctaLabel}
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
      <div className="flex flex-col justify-evenly content-center py-16 place-content-center justify-items-center text-center bg10E w-3/4">
        <h2 className="text-4xl font-bold">{title && title}</h2>
        <p className="my-8 self-center lg:w-1/3 mx-8 text-lg">
          {" "}
          {text && text}{" "}
        </p>
        <div className=" p-2 lg:w-1/3 border-2 border-green-400 rounded-full self-center bg-white mx-8">
          <input
            type="text"
            className="
                w-2/3
                lg:text-xl
                text-lg
                pl-4
                text-grey-dark
                font-medium
              "
            placeholder="Enter your email"
          />
          <button
            type="button"
            className="w-1/3 font-medium text-white border-t-2 border-b-2 border-r py-4 bg-green-400 rounded-full "
          >
            {ctaLabel && ctaLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsletterAdmin;
