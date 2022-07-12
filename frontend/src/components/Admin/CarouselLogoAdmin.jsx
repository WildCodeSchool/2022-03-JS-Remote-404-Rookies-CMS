import React from "react";
import axios from "axios";
import LogoCarouseAdmin from "./Module2EAdmin";
import NavBarAdminCompany from "./NavBarAdminCompany";

function LogoCarouselAdmin() {
  const [imageLink, setImageLink] = React.useState("");
  const [imageAlt, setImageAlt] = React.useState("");
  const [imageId, setImageId] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [adminTouch, setAdminTouch] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const submit = {
      image_link: imageLink,
      image_alt: imageAlt,
      url: imageUrl,
      categorie: "logo",
      status: "0",
      languages_id: "1",
    };
    console.warn(submit);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/images`, submit)
      .then(() => {
        console.warn("Yes !");
      })
      .catch(() => {
        console.warn("No !");
      });
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    const submit = {
      imageId,
      imageLink,
      imageAlt,
      imageUrl,
      categorie: "logo",
    };
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/images`, submit)
      .then(() => {
        console.warn(submit);
        console.warn("Yes !");
      })
      .catch(() => {
        console.warn(submit);
        console.warn("No !");
      });
  };

  const handleSubmitDelete = (e) => {
    e.preventDefault();
    const submit = {
      imageId,
    };
    console.warn(submit);
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/images/${imageId}`)
      .then(() => {
        console.warn("Yes !");
      })
      .catch(() => {
        console.warn("No !");
      });
  };

  return (
    <div className="flex">
      <NavBarAdminCompany />
      <div className="flex flex-col align-center justify-center">
        <div className="flex flex-col align-center justify-center ml-12 w-1/3 ml-60 mt-4 mb-4 text-center">
          <select
            className="flex flex-col justify-center align-center bg-green-500 hover:bg-green-700 text-white font-bold text-xl py-1 px-1 rounded"
            onChange={(e) => setAdminTouch(e.target.value)}
          >
            <option value="0">Sélectionner une option</option>
            <option value="1">Ajouter</option>
            <option value="2">Mettre à jour</option>
            <option value="3">Supprimer</option>
          </select>
        </div>
        <div className="flex flex-row w-1/2" />
        {adminTouch === "1" ? (
          <form className="flex flex-col w-1/2 align-center justify-center ml-24">
            <div className="flex flex-col h-full w-full justify-center">
              <div>
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                  Lien de l&apos;image
                  <input
                    value={imageLink}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder="Lien de l'image"
                    onChange={(e) => setImageLink(e.target.value)}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                  Description de l&apos;image
                  <input
                    value={imageAlt}
                    onChange={(e) => setImageAlt(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder="Description de l'image"
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                  Url de l&apos;image
                  <input
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder="Url de l'image"
                  />
                </label>
              </div>
              <div className="flex justify-center mt-4 mr-52">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        ) : null}
        {adminTouch === "2" ? (
          <div className="flex flex-col w-1/2 align-center justify-center ml-24">
            <div className="flex flex-col h-full w-full justify-center">
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                  Id de l&apos;image
                  <input
                    value={imageId}
                    onChange={(e) => setImageId(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder="Id de l'image"
                  />
                </label>
              </div>
              <div>
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                  Lien de l&apos;image
                  <input
                    value={imageLink}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder="Lien de l'image"
                    onChange={(e) => setImageLink(e.target.value)}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                  Description de l&apos;image
                  <input
                    value={imageAlt}
                    onChange={(e) => setImageAlt(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder="Description de l'image"
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                  Url de l&apos;image
                  <input
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder="Url de l'image"
                  />
                </label>
              </div>
              <div className="flex justify-center mt-4 mr-52">
                <button
                  type="submit"
                  onClick={handleSubmitUpdate}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        ) : null}
        {adminTouch === "3" ? (
          <div className="flex flex-col w-1/2 align-center justify-center ml-24">
            <div className="flex flex-col h-full w-full justify-center">
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                  Id de l&apos;image
                  <input
                    value={imageId}
                    onChange={(e) => setImageId(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder="Id de l'image"
                  />
                </label>
              </div>
              <div className="flex justify-center mt-4 mr-52">
                <button
                  type="submit"
                  onClick={handleSubmitDelete}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        ) : null}
        <div className="flex flex-col w-1/2 h-full mt-12">
          <div className="carousel">
            <LogoCarouseAdmin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoCarouselAdmin;
