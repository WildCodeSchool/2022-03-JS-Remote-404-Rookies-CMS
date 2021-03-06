import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ExportContext from "../contexts/Context";

function Quote() {
  const { language } = useContext(ExportContext.Context);
  const [quotes, setQuotes] = useState([]);
  const [entierAleatoire, setEntierAleatoire] = useState("");

  function entierAleatoire1(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/quote/${language.id}`)
      .then((response) => {
        setQuotes(response.data);
        setEntierAleatoire(entierAleatoire1(0, response.data.length));
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  const entier = entierAleatoire;
  const background = quotes[entier] && quotes[entier].image_link;
  return (
    <div
      className="flex h-full object-cover rounded-[16px]"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }} // wep derriere y'a des images qui ne se chargent pas faudra voir pourquoi, du 403 encore - probleme de cross origin apparament
    >
      <div className="flex flex-col mt-4 px-4 mx-auto justify-center items-center max-h-fit maw-w-fit">
        <div className="flex flex-col items-center justify-center w-9/12 blur-none backdrop-blur-3xl pt-8 px-8 rounded-[16px] max-h-fit">
          <div className="flex flex-col items-center justify-center w-full mb-16 ">
            <p className="text-white font-bold mb-2 lg:text-2xl italic font-mono md:text-base">
              &quot;{quotes[entier] && quotes[entier].quote}
              <span className="text-green">
                {quotes[entier] && quotes[entier].quote_green_part}&quot;
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full ml-16 blur-none">
            <p className="text-white font-bold mb-2 lg:text-3xl font-mono blur-none md:text-xl">
              {quotes[entier] && quotes[entier].author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
