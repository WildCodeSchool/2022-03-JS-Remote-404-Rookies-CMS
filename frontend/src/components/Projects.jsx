/* eslint-disable import/no-extraneous-dependencies */
import react, { useEffect } from "react";
import axios from "axios";

function Projetcs() {
  const [image, setImage] = react.useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/images")
      .then((response) => {
        console.warn(response.data);
        setImage(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);
  const status = 0;

  return (
    <div className="flex flex row w-full -h-full mt-20">
      <div
        className={`flex flex-col w-1/2 h-1/2 ml-24 ${
          status === 1 ? "order-1" : ""
        }`}
      >
        <h1 className="text-green-400 text-2xl mb-8">
          HOMECORE x EM Normandie
        </h1>
        <h2 className="font-extrabold text-5xl mb-4">Audit SEO & SEA</h2>
        <h3 className="text-2xl text-gray-600 mb-20">
          M2 Marketing Digital - Parcours Grande Ecole
        </h3>
        <div className="flex flex-row w-full h-full items-center justify-between place-items-center">
          <div className="flex flex-row items-center w-3/5 h-2/5 p-2 border-4 rounded-2xl m-6">
            {image.slice(28, 31).map((item) => (
              <img
                src={item.image_link}
                alt={item.image_alt}
                className="rounded-full w-2/12 h-2/12 -mr-12 ml-6 items-center"
              />
            ))}
            {image.slice(33, 34).map((item) => (
              <img
                src={item.image_link}
                alt={item.image_alt}
                className="rounded-full w-2/12 h-2/12 -mr-12 ml-6 items-center -z-10"
              />
            ))}
            <div className="flex flex-col w-full h-full justify-center items-center ml-20 border-4 rounded-2xl p-3">
              <h3 className="text-gray-600 text-xl font-bold">6 étudiants</h3>
            </div>
          </div>
          <div className="flex flex-col justify-around">
            <p className="text-gray-600 text-xl font-bold border-2 rounded-2xl p-2 ">
              8 semaines de projet
            </p>
            <p className="text-gray-600 text-xl font-bold border-2 rounded-2xl p-2 mt-4">
              400 heures de travail
            </p>
          </div>
        </div>
        <div className="bg-gray-200 rounded-2xl p-4">
          <span />
          <p className="text-xl pb-4">
            Wise busy past both park when an ye no. Nay likely her length sooner
            thrown sex lively income. The expense windows.
          </p>
          <p className="text-xl font-bold">- Mike Taylor, Web Designer</p>
        </div>
      </div>
      <div className="flex flex-col w-1/2 h-1/2 items-center mb-12 mt-10">
        {image.slice(46, 47).map((item) => (
          <img src={item.image_link} alt={item.image_alt} />
        ))}
      </div>
    </div>
  );
}

export default Projetcs;
