import { useState, useContext, useEffect } from "react";
import axios from "axios";
import ExportContext from "../../contexts/Context";
import NavBarAdminCompany from "./NavBarAdminCompany";

function CtaStudyCaseAdmin() {
  const { language } = useContext(ExportContext.Context);

  const [id, setId] = useState("");
  const [text, setText] = useState("");
  const [ctaLabel, setCtaLabel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: id,
      text: text,
      ctaLabel: ctaLabel,
    };
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/ctacasestudy`, data, {
        withCredentials: true,
      })
      .then(() => {
        console.warn(`${text} ${id}`);
        console.warn("Yes !");
        console.warn(data);
      })
      .catch(() => {
        console.warn(`${text} ${id}`);
        console.warn("No !");
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/ctacasestudy/${language.id}`)
      .then((response) => {
        setId(response.data.id);
        setText(response.data.text);
        setCtaLabel(response.data.cta_label);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  return (
    <div className="flex w-screen">
      <div className="w-1/5">
        <NavBarAdminCompany />
      </div>
      <div className="flex flex-col w-4/5">
        <form className="flex flex-col ">
          <div className="flex flex-col ">
            <div className="flex flex-col  ">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Titre
                <input
                  value={text && text}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={text && text}
                  onChange={(e) => setText(e.target.value)}
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
        <section className="bg-slate-100 mt-8">
          <div className="flex flex-row lg: flex justify-center mx-4">
            <div className=" w-4/5 flex justify-center my-4 mx-10 rounded-lg">
              <div>
                <h2 className=" w-4/5 font-semibold text-xl py-6 pl-4">
                  {text && text}
                </h2>
              </div>
              <div className=" flex flex-col items-center justify-center w-1/3 px-10 ">
                <button
                  type="button"
                  className="bg-green-400 px-6 py-2 text-sm text-white font-bold rounded  "
                >
                  {ctaLabel && ctaLabel}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CtaStudyCaseAdmin;
