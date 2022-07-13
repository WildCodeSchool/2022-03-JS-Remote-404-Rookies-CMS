/* eslint-disable react/button-has-type */
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ExportContext from "../../contexts/Context";
import NavBarAdminCompany from "./NavBarAdminCompany";

function FormulaireAdmin() {
  const [data, setData] = useState([]);
  const { handleForm, language } = useContext(ExportContext.Context);
  const [adminTouch, setAdminTouch] = React.useState("");
  const [adminTouch2, setAdminTouch2] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [subTitle, setSubTitle] = React.useState("");
  const [fullname, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [ctaLabel, setCtaLabel] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [school, setSchool] = React.useState("");
  const [mailData, setMailData] = useState([
    {
      fullname: "",
      category: "Company",
      email: "",
      message: "",
    },
  ]);
  const [quote, setQuote] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [quoteGreen, setQuoteGreen] = useState("");
  const [quoteImg, setQuoteImg] = useState("");
  const [quoteImdAlt, setQuoteImdAlt] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [quotesId, setQuotesId] = useState([]);
  const [quotesAuthor, setQuotesAuthor] = useState([]);
  const [quotesGreen, setQuotesGreen] = useState([]);
  const [quotesImg, setQuotesImg] = useState([]);
  const [quotesText, setQuotesText] = useState([]);

  const editData = (area, value) => {
    const newData = [...mailData];
    newData[0][area] = value;
    setMailData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submit = {};
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

  const SubmitMail = () => {
    axios
      .post(`http://localhost:5000/sendEmail`, mailData)
      .then((res) => {
        console.warn(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/contactForm/${language.id}`)
      .then((response) => {
        setData(response.data);
        setTitle(response.data.title);
        setSubTitle(response.data.sub_title);
        setFullName(response.data.fullname);
        setEmail(response.data.email);
        setDescription(response.data.description);
        setCtaLabel(response.data.CTA_label);
        setCompany(response.data.elements[0].text);
        setSchool(response.data.elements[1].text);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/quote/${language.id}`)
      .then((response) => {
        setQuotes(response.data);
        setQuotesAuthor(response.data.author);
        setQuotesGreen(response.data.quote_green_part);
        setQuotesImg(response.data.image_link);
        setQuotesText(response.data.quote);
        setQuotesId(response.data.id);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  const background = quotesImg && quotesImg[0];
  return (
    <div className="flex flex-row w-screen">
      <div className="w-1/5">
        <NavBarAdminCompany />
      </div>
      <div className="flex flex-col">
        <select
          className="bg-button-green-E10 text-02e494 text-2xl font-bold py-0 px-1 drop-shadow-md hover:bg-green-300"
          onChange={(e) => setAdminTouch(e.target.value)}
        >
          <option value="0">Choisissez une option</option>
          <option value="1">Formulaire</option>
          <option value="2">Citations</option>
          <option value="3">Contactez-nous</option>
        </select>
      </div>
      {adminTouch === "1" ? (
        <div className="flex flex-col w-full">
          <form className="flex flex-col">
            <div className="flex flex-col w-4/5">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Title
              </label>
              <input
                value={title && title}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={title && title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Sub title
              </label>
              <input
                value={subTitle && subTitle}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={subTitle && subTitle}
                onChange={(e) => setSubTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Placeholder name and surname
              </label>
              <input
                value={fullname && fullname}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={fullname && fullname}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Placeholder Email
              </label>
              <input
                value={email && email}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={email && email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Placeholder Company
              </label>
              <input
                value={company && company}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={company && company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Placeholder School
              </label>
              <input
                value={school && school}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={school && school}
                onChange={(e) => setSchool(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Placeholder message
              </label>
              <input
                value={description && description}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={description && description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Label du bouton
              </label>
              <input
                value={ctaLabel && ctaLabel}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={ctaLabel && ctaLabel}
                onChange={(e) => setCtaLabel(e.target.value)}
              />
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
          </form>
          <div className="justify-center items-center flex w-full">
            <div className="h-4/5 w-3/4 flex flex-col justify-between bg-slate-50 rounded-[16px]">
              <div className="flex flex-col h-full w-full">
                <div className="flex flex-row md:flex-row items-center w-full h-full">
                  <div className="flex flex-col md:flex-col w-full h-full ml-12">
                    <h1 className="text-3xl font-bold mt-12 mb-2 ml-6">
                      {title && title}
                    </h1>
                    <p className="text-xl text-gray-500 mb-8 ml-6 mt-4 font-bold">
                      {subTitle && subTitle}
                    </p>
                    <form className="flex flex-col w-full h-full">
                      <input
                        className="text-xl bg-gray-100 border-2 border-gray-300 rounded-lg h-1/3 w-11/12 ml-6 shadow-lg mb-6"
                        type="text"
                        name="fullname"
                        placeholder={fullname && fullname}
                        onChange={(e) =>
                          editData(e.target.name, e.target.value)
                        }
                      />
                      <input
                        className="text-xl bg-gray-100 border-2 border-gray-300 rounded-lg h-1/3 w-11/12 ml-6 shadow-lg mb-6"
                        type="text"
                        name="email"
                        placeholder={email && email}
                        onChange={(e) =>
                          editData(e.target.name, e.target.value)
                        }
                      />
                      <select
                        className="text-xl bg-gray-100 border-2 border-gray-300 rounded-lg h-1/3 w-11/12 ml-6 shadow-lg mb-6"
                        type="text"
                        name="category"
                        placeholder="I represent a (company/school)"
                        onChange={(e) =>
                          editData(e.target.name, e.target.value)
                        }
                      >
                        <option
                          value={company && company}
                          label={company && company}
                        />
                        <option
                          value={school && school}
                          label={school && school}
                        />
                      </select>
                      <textarea
                        className="text-xl bg-gray-100 border-2 border-gray-300 rounded-lg h-4/5 w-11/12 ml-6 shadow-lg mb-6"
                        type="text"
                        name="message"
                        placeholder={data?.description}
                        onChange={(e) =>
                          editData(e.target.name, e.target.value)
                        }
                      />
                      <div className="flex flex-row justify-center">
                        <button
                          onClick={(e) => {
                            handleForm();
                            e.preventDefault();
                            SubmitMail();
                          }}
                          type="button"
                          className="bg-button-green-E10 shadow-lg text-white font-boldrounded-full hover:bg-green-300 h-4/5 w-4/5 flex justify-center items-center align-center rounded-[12px] mb-8"
                        >
                          {ctaLabel && ctaLabel}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {adminTouch === "2" ? (
        <div className="flex flex-col w-full">
          <div className="flex flex-col">
            <select
              className="bg-button-green-E10 text-02e494 text-2xl font-bold py-0 px-1 drop-shadow-md hover:bg-green-300"
              onChange={(e) => setAdminTouch2(e.target.value)}
            >
              <option value="0">Choisissez une option</option>
              <option value="1">Ajouter</option>
              <option value="2">Mettre à jour</option>
              <option value="3">Supprimer</option>
            </select>
          </div>
          {adminTouch2 === "1" ? (
            <div className="flex flex-col w-4/5 h-3/5">
              <div className="flex flex-col w-full">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Citation
                </label>
                <input
                  value={quote && quote}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={quote && quote}
                  onChange={(e) => setQuote(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Partie en vert
                </label>
                <input
                  value={quoteGreen && quoteGreen}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={quoteGreen && quoteGreen}
                  onChange={(e) => setQuoteGreen(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Auteur
                </label>
                <input
                  value={quoteAuthor && quoteAuthor}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={quoteAuthor && quoteAuthor}
                  onChange={(e) => setQuoteAuthor(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Image de fond
                </label>
                <input
                  value={quoteImg && quoteImg}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={quoteImg && quoteImg}
                  onChange={(e) => setQuoteImg(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Description de l&apos;image de fond
                </label>
                <input
                  value={quoteImdAlt && quoteImdAlt}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6 mb-8"
                  type="text"
                  placeholder={quoteImdAlt && quoteImdAlt}
                  onChange={(e) => setQuoteImdAlt(e.target.value)}
                />
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
              <div
                className="flex h-full object-cover rounded-[16px]"
                style={{
                  backgroundImage: `url(${quoteImg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="flex flex-col mt-4 px-4 mx-auto justify-center items-center max-h-fit maw-w-fit">
                  <div className="flex flex-col items-center justify-center w-9/12 blur-none backdrop-blur-3xl pt-8 px-8 rounded-[16px] max-h-fit">
                    <div className="flex flex-col items-center justify-center w-full mb-16 ">
                      <p className="text-white font-bold mb-2 lg:text-2xl italic font-mono md:text-base">
                        &quot;{quote && quote}
                        <span className="text-green">
                          {quoteGreen && quoteGreen}
                          &quot;
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full ml-16 blur-none">
                      <p className="text-white font-bold mb-2 lg:text-3xl font-mono blur-none md:text-xl">
                        {quoteAuthor && quoteAuthor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {adminTouch2 === "2" ? (
            <div className="flex flex-col w-4/5 h-3/5">
              <div className="flex flex-col w-full" />
              <select
                className="bg-button-green-E10 text-02e494 text-2xl font-bold py-0 px-1 drop-shadow-md hover:bg-green-300"
                onChange={(e) => setQuotesId(e.target.value)}
              >
                <option value={quotes.id}>Choisissez une citation</option>
                {quotes &&
                  quotes.map((quotess) => (
                    <option value={quotess.id}>{quotess.id}</option>
                  ))}
              </select>
              <div className="flex flex-col w-4/5 h-3/5">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Citation
                </label>
                <input
                  value={quote && quote}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={quote && quote}
                  onChange={(e) => setQuote(e.target.value)}
                />

                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Partie en vert
                </label>
                <input
                  value={quoteGreen && quoteGreen}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={quoteGreen && quoteGreen}
                  onChange={(e) => setQuoteGreen(e.target.value)}
                />

                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Auteur
                </label>
                <input
                  value={quoteAuthor && quoteAuthor}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={quoteAuthor && quoteAuthor}
                  onChange={(e) => setQuoteAuthor(e.target.value)}
                />

                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Image de fond
                </label>
                <input
                  value={quoteImg && quoteImg}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={quoteImg && quoteImg}
                  onChange={(e) => setQuoteImg(e.target.value)}
                />

                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Description de l&apos;image de fond
                </label>
                <input
                  value={quoteImdAlt && quoteImdAlt}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6 mb-8"
                  type="text"
                  placeholder={quoteImdAlt && quoteImdAlt}
                  onChange={(e) => setQuoteImdAlt(e.target.value)}
                />
                <div className="flex justify-center mt-4 mr-52">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Submit
                  </button>
                </div>
                {quotesId ? (
                  <div
                    className="flex h-full object-cover rounded-[16px]"
                    style={{
                      backgroundImage: `url(${background})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="flex flex-col mt-4 px-4 mx-auto justify-center items-center max-h-fit maw-w-fit">
                      <div className="flex flex-col items-center justify-center w-9/12 blur-none backdrop-blur-3xl pt-8 px-8 rounded-[16px] max-h-fit">
                        <div className="flex flex-col items-center justify-center w-full mb-16 ">
                          <p className="text-white font-bold mb-2 lg:text-2xl italic font-mono md:text-base">
                            &quot;
                            {quotesText[quotesId] && quotesText[quotesId]}
                            <span className="text-green">
                              {quotesGreen[quotesId] && quotesGreen[quotesId]}
                              &quot;
                            </span>
                          </p>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full ml-16 blur-none">
                          <p className="text-white font-bold mb-2 lg:text-3xl font-mono blur-none md:text-xl">
                            {quotesAuthor[quotesId] && quotesAuthor[quotesId]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default FormulaireAdmin;
