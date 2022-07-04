import React from "react";
import axios from "axios";
import LogoCarouseAdmin from "./Module2EAdmin";

function LogoCarouselAdmin() {
  const [imageLink, setImageLink] = React.useState("");
  const [imageAlt, setImageAlt] = React.useState("");
  const [imageStatus, setImageStatus] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [imageLanguage, setImageLanguage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const submit = {
      imageLink,
      imageAlt,
      imageStatus,
      imageUrl,
      imageLanguage,
    };
    console.warn(submit);
    axios
      .post("http://localhost:5000/images", {
        image_link: imageLink,
        image_alt: imageAlt,
        status: imageStatus,
        url: imageUrl,
        languages_id: imageLanguage,
      })
      .then(() => {
        console.warn("Yes !");
      })
      .catch(() => {
        console.warn("No !");
      });
  };

  return (
    <div>
      <div className="flex flex-row w-full h-full">
        <form>
          <div className="flex flex-col h-full w-full justify-center">
            <div>
              <label className="text-gray-900 font-bold mb-2 ml-6 mt-2">
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
              <label className="text-gray-900 font-bold mb-2 ml-6 mt-2">
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
              <label className="text-gray-900 font-bold mb-2 ml-6 mt-2">
                Image active ou inactive ?
                <input
                  value={imageStatus}
                  onChange={(e) => setImageStatus(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder="0 = active, 1 = inactive"
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-900 font-bold mb-2 ml-6 mt-2">
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
            <div className="flex flex-col">
              <label className="text-gray-900 font-bold mb-2 ml-6 mt-2">
                Language
                <input
                  value={imageLanguage}
                  onChange={(e) => setImageLanguage(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder="Language"
                />
              </label>
            </div>
            <div className="flex justify-center mt-8">
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
        <div className="flex flex-col w-2/3 h-full">
          <div className="carousel">
            <LogoCarouseAdmin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoCarouselAdmin;
