import { useState, useContext, useEffect } from "react";
import axios from "axios";
import ExportContext from "../../contexts/Context";

function FooterAdmin() {
  const { language } = useContext(ExportContext.Context);

  const [id, setId] = useState("");
  const [logo, setLogo] = useState("");
  const [altLogo, setAltLogo] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subtitle1, setSubtitle1] = useState("");
  const [subtitle2, setSubtitle2] = useState("");
  const [copyright, setCopyright] = useState("");
  const [policy, setPolicy] = useState("");
  const [terms, setTerms] = useState("");
  const [newsletter, setNewsletter] = useState("");
  const [image1, setImage1] = useState("");
  const [image1Alt, setImage1Alt] = useState("");
  const [image2, setImage2] = useState("");
  const [image2Alt, setImage2Alt] = useState("");
  const [imid1, setImid1] = useState("");
  const [imid2, setImid2] = useState("");
  const [imid3, setImid3] = useState("");
  const [data, setData] = useState([]);

  const images = [
    {
      imageLink: image1,
      imageAlt: image1Alt,
      imid: imid1,
    },
    {
      imageLink: image2,
      imageAlt: image2Alt,
      imid: imid2,
    },
    {
      imageLink: logo,
      imageAlt: altLogo,
      imid: imid3,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data1 = {
      id: id,
      phone_number: phone,
      mail: email,
      sub_title1: subtitle1,
      sub_title2: subtitle2,
      copyright: copyright,
      policy: policy,
      terms: terms,
      newsletter: newsletter,
      images: images,
    };
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/footers`, data1)
      .then(() => {
        console.warn(`${phone} ${email} ${id}`);
        console.warn("Yes !");
      })
      .catch(() => {
        console.warn(`${phone} ${email} ${id}`);
        console.warn("No !");
      });
  };
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/footer/${language.id}`)
      .then((response) => {
        setData(response.data);
        setId(response.data.id);
        setLogo(response.data.image_logo_link);
        setAltLogo(response.data.image_logo_alt);
        setPhone(response.data.phone_number);
        setEmail(response.data.mail);
        setSubtitle1(response.data.sub_title1);
        setSubtitle2(response.data.sub_title2);
        setCopyright(response.data.copyright);
        setPolicy(response.data.policy);
        setTerms(response.data.terms);
        setNewsletter(response.data.newsletter);
        setImage1(response.data.image_link);
        setImage1Alt(response.data.image_alt);
        setImage2(response.data.image_link2);
        setImage2Alt(response.data.image_alt2);
        setImid1(response.data.imid1);
        setImid2(response.data.imid2);
        setImid3(response.data.imid3);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);
  return (
    <div className="flex flex-row w-screen">
      <form className="flex flex-col h-full w-3/4 justify-center">
        <div className="flex flex-col h-full w-full justify-center">
          <div className="flex flex-col w-full justify-center">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Logo link
              <input
                value={logo && logo}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={logo && logo}
                onChange={(e) => setLogo(e.target.value)}
              />
            </label>
          </div>
          <div className="flex flex-col w-full justify-center">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Logo alt
              <input
                value={altLogo && altLogo}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={altLogo && altLogo}
                onChange={(e) => setLogo(e.target.value)}
              />
            </label>
          </div>
          <div className="flex flex-col w-full justify-center">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Numéro de téléphone
              <input
                value={phone && phone}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={phone && phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Email
              <input
                value={email && email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={email && email}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Sous titre 1
              <input
                value={subtitle1 && subtitle1}
                onChange={(e) => setSubtitle1(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={subtitle1 && subtitle1}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Sous titre 2
              <input
                value={subtitle2 && subtitle2}
                onChange={(e) => setSubtitle1(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={subtitle2 && subtitle2}
              />
            </label>
          </div>
          <div className="flex flex-col w-full justify-center">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Image 1 url
              <input
                value={image1 && image1}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={image1 && image1}
                onChange={(e) => setImage1(e.target.value)}
              />
            </label>
          </div>
          <div className="flex flex-col w-full justify-center">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Image 1 alt
              <input
                value={image1Alt && image1Alt}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={image1Alt && image1Alt}
                onChange={(e) => setImage1Alt(e.target.value)}
              />
            </label>
          </div>
          <div className="flex flex-col w-full justify-center">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Image 2 url
              <input
                value={image2 && image2}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={image2 && image2}
                onChange={(e) => setImage2(e.target.value)}
              />
            </label>
          </div>
          <div className="flex flex-col w-full justify-center">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Image 2 alt
              <input
                value={image2Alt && image2Alt}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={image2Alt && image2Alt}
                onChange={(e) => setImage2Alt(e.target.value)}
              />
            </label>
          </div>
          <div className="flex flex-col w-full justify-center">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Terms
              <input
                value={terms && terms}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={terms && terms}
                onChange={(e) => setTerms(e.target.value)}
              />
            </label>
          </div>
          <div className="flex flex-col w-full justify-center">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Policy
              <input
                value={policy && policy}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={policy && policy}
                onChange={(e) => setPolicy(e.target.value)}
              />
            </label>
          </div>
          <div className="flex flex-col w-full justify-center">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Copyright
              <input
                value={copyright && copyright}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={copyright && copyright}
                onChange={(e) => setCopyright(e.target.value)}
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
      <footer className="lg:mx-20 h-full w-full">
        <div
          className="
          flex flex-col mt-4
          px-4
          mx-auto
          md:items-center
          lg:items-start
          md:flex-row md:flex-nowrap
        "
        >
          <div className="flex flex-row lg:flex-col text-center mb-4 lg:w-1/3 h-full">
            <div className="w-1/2">
              <div
                className="
            flex justify-start lg:justify-center text-4xl font-bold md:justify-start
            "
              >
                <img src={logo} alt={altLogo} />
              </div>
              <a
                className="flex justity-center  ml-4 lg:ml-6 mt-2 text-sm text-justify text-gray-500"
                href="tel:+33785680988"
              >
                {phone}
              </a>
              <p className="flex justify-start  ml-4 lg:ml-6 mt-2 text-sm text-justify text-gray-500">
                {email}
              </p>
            </div>
            <div className="flex justify-center w-1/2 pt-10 lg:pt-4 lg:justify-start lg:ml-2">
              <div className="ml-3">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-1/3 text-white bg-gray-500 rounded-sm object-contain"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx="4" cy="4" r="2" stroke="none" />
                </svg>
              </div>
              <div className="mb-4 -mt-1 -ml-6">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-2/5 text-gray-500 object-contain"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex Privacy Policyflex-row lg:flex justify-between w-full text-center">
            <div className="w-1/3 lg:w-1/2">
              <h2 className="font-bold text-lg mb-4 lg:flex text-green-400">
                {subtitle1}
              </h2>
              <ul className="text-sm lg:text-md lg:flex ">
                <div className="flex justify-start flex-col lg:mr-20 ">
                  <li>
                    <div className="mb-4 text-gray-600 hover:text-gray-800">
                      <a href={data && data.links[0].path}>
                        {data && data.links[0].label}
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="mb-4 flex justify-center lg:justify-start text-gray-600 hover:text-gray-800 ">
                      <a href={data && data.links[1].path}>
                        {data && data.links[1].label}
                      </a>
                    </div>
                  </li>
                </div>
                <div className="flex justify-start flex-col lg:ml-20">
                  <li>
                    <div className="mb-4 text-gray-600 hover:text-gray-800 ">
                      <a href={data && data.links[2].path}>
                        {data && data.links[2].label}
                      </a>
                    </div>
                  </li>
                </div>
                <li>
                  <div className="flex justify-center lg:justify-start text-gray-600 hover:text-gray-800 hidden">
                    <a href={data && data.links[3].path}>
                      {data && data.links[3].label}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-2/3 px-4 lg:w-1/2 ">
              <h2 className="flex justify-start mb-2 font-bold text-lg  text-green-400">
                {subtitle2}
              </h2>
              <div className="flex mt-4 lg:w-2/3 lg:h-10 ">
                <input
                  type="text"
                  className="
                w-3/4 h-auto
                p-2
                text-sm
                text-grey-dark
                border-l-2 border-t-2 border-b-2 rounded-l-lg
              "
                  placeholder={newsletter}
                />
                <button
                  type="button"
                  className="text-green-400 lg:text-white bg-white font-medium lg:bg-green-400 border-t-2 border-b-2 border-r lg:border-green-400 rounded-r-lg lg:w-1/6"
                >
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex mx-2 mt-4 ">
                <img
                  className="mr-4 lg:w-15 lg:h-15 "
                  src={image1}
                  alt={image1Alt}
                />
                <img
                  className="mr-4 lg:w-15 lg:h-15"
                  src={image2}
                  alt={image2Alt}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between mt-6 border-gray-200 border-t-2">
          <div className="flex justify-center">
            <p className="mx-10 mb-4 underline text-base  text-gray-400">
              {terms}
            </p>
            <p className="mx-10 mb-4 underline text-base  text-gray-400">
              {policy}
            </p>
          </div>
          <p className="flex justify-center lg:justify-end text-base text-gray-400">
            {copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default FooterAdmin;
