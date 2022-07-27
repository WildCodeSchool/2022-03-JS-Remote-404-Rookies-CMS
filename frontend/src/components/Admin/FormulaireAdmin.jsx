/* eslint-disable react/button-has-type */
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ExportContext from "../../contexts/Context";
import NavBarAdminCompany from "./NavBarAdminCompany";
import phone from "../../assets/téléphone.png";
import tipie from "../../assets/tipie.png";
import Email from "../../assets/letter.png";

function FormulaireAdmin() {
  const [id, setId] = useState(0);
  const { language } = useContext(ExportContext.Context);
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
  const [quote, setQuote] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [quoteGreen, setQuoteGreen] = useState("");
  const [quoteImg, setQuoteImg] = useState("");
  const [quoteImdAlt, setQuoteImdAlt] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [quotesId, setQuotesId] = useState(0);
  const [quotesAuthor, setQuotesAuthor] = useState("");
  const [quotesGreen, setQuotesGreen] = useState("");
  const [quotesImg, setQuotesImg] = useState("");
  const [quotesText, setQuotesText] = useState("");
  const [quotesImgAlt, setQuotesImgAlt] = useState("");
  const [contactText, setContactText] = useState("");
  const [contactImg, setContactImg] = useState("");
  const [contactImgAlt, setContactImgAlt] = useState("");
  const [contactGreen, setContactGreen] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactLabelEmail, setContactLabelEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactLabelPhone, setContactLabelPhone] = useState("");
  const [contactCalendly, setContactCalendly] = useState("");
  const [contactLabelCalendly, setContactLabelCalendly] = useState("");
  const [contactBgImG, setContactBgImG] = useState("");
  const [contactBgImgAlt, setContactBgImgAlt] = useState("");
  const [imgId, setImgId] = useState("");
  const [contactImgId, setContactImgId] = useState("");
  const [contactImgBgId, setContactImgBgId] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/contact_us/${language.id}`)
      .then((response) => {
        setContactText(response.data[0].text);
        setContactImg(response.data[0].image_link);
        setContactImgAlt(response.data[0].image_alt);
        setContactGreen(response.data[0].text_green);
        setContactEmail(response.data[0].email);
        setContactLabelEmail(response.data[0].label_email);
        setContactPhone(response.data[0].phone);
        setContactLabelPhone(response.data[0].label_phone);
        setContactCalendly(response.data[0].link_calendly);
        setContactLabelCalendly(response.data[0].label_rdv);
        setContactBgImG(response.data[0].bg_link);
        setContactBgImgAlt(response.data[0].bg_alt);
        setContactImgId(response.data[0].imgId);
        setContactImgBgId(response.data[0].bgImgId);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const submit = {
      id: id,
      languages_id: language.id,
      title: title,
      sub_title: subTitle,
      fullname: fullname,
      email: email,
      description: description,
      CTA_label: ctaLabel,
      elements: [
        {
          id: 1,
          text: company,
          value: company,
        },
        {
          id: 2,
          text: school,
          value: school,
        },
      ],
    };
    console.warn(submit);
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/contactForm`, submit, {
        withCredentials: true,
      })
      .then(() => {
        console.warn("Yes !");
      })
      .catch(() => {
        console.warn("No !");
      });
  };

  const handleSubmitQuote = (e) => {
    e.preventDefault();
    const submitAdd = {
      languages_id: language.id,
      quote: quote,
      quote_author: quoteAuthor,
      quote_green_part: quoteGreen,
      image_link: quoteImg,
      image_alt: quoteImdAlt,
    };
    const submitPut = {
      languages_id: language.id,
      id: quotesId,
      imgId: imgId,
      quote: quotesText,
      quote_author: quotesAuthor,
      quote_green_part: quotesGreen,
      image_link: quotesImg,
      image_alt: quotesImgAlt,
    };
    const submitDelete = {
      id: quotesId,
      imgId: imgId,
    };
    if (adminTouch2 === "1") {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/quotes`, submitAdd, {
          withCredentials: true,
        })
        .then(() => {
          console.warn("Yes !");
        })
        .catch(() => {
          console.warn("No !");
        });
    } else if (adminTouch2 === "2") {
      axios
        .put(`${import.meta.env.VITE_BACKEND_URL}/quotes`, submitPut, {
          withCredentials: true,
        })
        .then(() => {
          console.warn("Yes !");
        })
        .catch(() => {
          console.warn("No !");
        });
    } else {
      axios
        .delete(
          `${import.meta.env.VITE_BACKEND_URL}/quotes/${imgId}/${quotesId}`,
          submitDelete,
          {
            withCredentials: true,
          }
        )
        .then(() => {
          console.warn("Yes !");
        })
        .catch(() => {
          console.warn("No !");
        });
    }
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
    const submit = {
      id: id,
      languages_id: language.id,
      text: contactText,
      image_link: contactImg,
      image_alt: contactImgAlt,
      text_green: contactGreen,
      email: contactEmail,
      label_email: contactLabelEmail,
      phone: contactPhone,
      label_phone: contactLabelPhone,
      link_calendly: contactCalendly,
      label_rdv: contactLabelCalendly,
      bg_link: contactBgImG,
      bg_alt: contactBgImgAlt,
      imgId: contactImgId,
      bgImgId: contactImgBgId,
    };
    console.warn(submit);
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/contact_us`, submit, {
        withCredentials: true,
      })
      .then(() => {
        console.warn("Yes !");
      })
      .catch(() => {
        console.warn("No !");
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/contactForm/${language.id}`)
      .then((response) => {
        setTitle(response.data.title);
        setSubTitle(response.data.sub_title);
        setFullName(response.data.fullname);
        setEmail(response.data.email);
        setDescription(response.data.description);
        setCtaLabel(response.data.CTA_label);
        setCompany(response.data.elements[0].text);
        setSchool(response.data.elements[1].text);
        setId(response.data.id);
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
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  const background = quotesImg && quotesImg;
  const backgroundContact = contactBgImG && contactBgImG;
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
                onClick={handleSubmitForm}
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
                      />
                      <input
                        className="text-xl bg-gray-100 border-2 border-gray-300 rounded-lg h-1/3 w-11/12 ml-6 shadow-lg mb-6"
                        type="text"
                        name="email"
                        placeholder={email && email}
                      />
                      <select
                        className="text-xl bg-gray-100 border-2 border-gray-300 rounded-lg h-1/3 w-11/12 ml-6 shadow-lg mb-6"
                        type="text"
                        name="category"
                        placeholder="I represent a (company/school)"
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
                        placeholder={description && description}
                      />
                      <div className="flex flex-row justify-center">
                        <button
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
                  onClick={handleSubmitQuote}
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
                onChange={(e) => {
                  setQuotesId(e.target.value);
                  setQuotesAuthor(quotes[quotesId].author);
                  setQuotesGreen(quotes[quotesId].quote_green_part);
                  setQuotesImg(quotes[quotesId].image_link);
                  setQuotesImgAlt(quotes[quotesId].image_alt);
                  setQuotesText(quotes[quotesId].quote);
                  setQuotesId(quotes[quotesId].id);
                  setImgId(quotes[quotesId].imgId);
                  setQuotesId(quotes[quotesId].id);
                }}
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
                  value={quotesText && quotesText}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={quotesText && quotesText}
                  onChange={(e) => setQuotesText(e.target.value)}
                />

                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Partie en vert
                </label>
                <input
                  value={quotesGreen && quotesGreen}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={quotesGreen && quotesGreen}
                  onChange={(e) => setQuotesGreen(e.target.value)}
                />

                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Auteur
                </label>
                <input
                  value={quotesAuthor && quotesAuthor}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={quotesAuthor && quotesAuthor}
                  onChange={(e) => setQuotesAuthor(e.target.value)}
                />

                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Image de fond
                </label>
                <input
                  value={quotesImg && quotesImg}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder={quotesImg && quotesImg}
                  onChange={(e) => setQuotesImg(e.target.value)}
                />

                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Description de l&apos;image de fond
                </label>
                <input
                  value={quotesImgAlt && quotesImgAlt}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6 mb-8"
                  type="text"
                  placeholder={quotesImgAlt && quotesImgAlt}
                  onChange={(e) => setQuotesImgAlt(e.target.value)}
                />
                <div className="flex justify-center mt-4 mr-52">
                  <button
                    type="submit"
                    onClick={handleSubmitQuote}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mb-4"
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
                            {quotesText && quotesText}
                            <span className="text-green">
                              {quotesGreen && quotesGreen}
                              &quot;
                            </span>
                          </p>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full ml-16 blur-none">
                          <p className="text-white font-bold mb-2 lg:text-3xl font-mono blur-none md:text-xl">
                            {quotesAuthor && quotesAuthor}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
          {adminTouch2 === "3" ? (
            <div className="flex flex-col w-4/5 h-3/5">
              <div className="flex flex-col w-full" />
              <select
                className="bg-button-green-E10 text-02e494 text-2xl font-bold py-0 px-1 drop-shadow-md hover:bg-green-300"
                onChange={(e) => {
                  setQuotesId(e.target.value);
                  setQuotesAuthor(quotes[quotesId].author);
                  setQuotesGreen(quotes[quotesId].quote_green_part);
                  setQuotesImg(quotes[quotesId].image_link);
                  setQuotesImgAlt(quotes[quotesId].image_alt);
                  setQuotesText(quotes[quotesId].quote);
                  setQuotesId(quotes[quotesId].id);
                  setImgId(quotes[quotesId].imgId);
                  setQuotesId(quotes[quotesId].id);
                }}
              >
                <option value={quotes.id}>Choisissez une citation</option>
                {quotes &&
                  quotes.map((quotess, index) => (
                    <option value={index}>{quotess.id}</option>
                  ))}
              </select>
              <div
                className="flex object-cover rounded-[16px] mt-8 h-1/3"
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
                        {quotesText && quotesText}
                        <span className="text-green">
                          {quotesGreen && quotesGreen}
                          &quot;
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full ml-16 blur-none">
                      <p className="text-white font-bold mb-2 lg:text-3xl font-mono blur-none md:text-xl">
                        {quotesAuthor && quotesAuthor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                onClick={handleSubmitQuote}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mb-4 mt-8"
              >
                Supprimer
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
      {adminTouch === "3" ? (
        <div className="flex flex-col w-full">
          <form className="flex flex-col">
            <div className="flex flex-col w-4/5">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Title
              </label>
              <input
                value={contactText && contactText}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                name="text"
                placeholder={contactText && contactText}
                onChange={(e) => setContactText(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Green Title
              </label>
              <input
                value={contactGreen && contactGreen}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={contactGreen && contactGreen}
                onChange={(e) => setContactGreen(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Texte téléphone
              </label>
              <input
                value={contactLabelPhone && contactLabelPhone}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={contactLabelPhone && contactLabelPhone}
                onChange={(e) => setContactLabelPhone(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Téléphone
              </label>
              <input
                value={contactPhone && contactPhone}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={contactPhone && contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Texte rendez-vous
              </label>
              <input
                value={contactLabelCalendly && contactLabelCalendly}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={contactLabelCalendly && contactLabelCalendly}
                onChange={(e) => setContactLabelCalendly(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Lien rendez-vous
              </label>
              <input
                value={contactCalendly && contactCalendly}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={contactCalendly && contactCalendly}
                onChange={(e) => setContactCalendly(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Texte email
              </label>
              <input
                value={contactLabelEmail && contactLabelEmail}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={contactLabelEmail && contactLabelEmail}
                onChange={(e) => setContactLabelEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Lien email
              </label>
              <input
                value={contactEmail && contactEmail}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={contactEmail && contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Lien image de fond
              </label>
              <input
                value={contactBgImG && contactBgImG}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={contactBgImG && contactBgImG}
                onChange={(e) => setContactBgImG(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Description image de fond
              </label>
              <input
                value={contactBgImgAlt && contactBgImgAlt}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={contactBgImgAlt && contactBgImgAlt}
                onChange={(e) => setContactBgImgAlt(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Lien image à contacter
              </label>
              <input
                value={contactImg && contactImg}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={contactImg && contactImg}
                onChange={(e) => setContactImg(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                Description image à contacter
              </label>
              <input
                value={contactImgAlt && contactImgAlt}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={contactImgAlt && contactImgAlt}
                onChange={(e) => setContactImgAlt(e.target.value)}
              />
            </div>
            <div className="flex justify-center mt-4 mr-52">
              <button
                type="submit"
                onClick={handleSubmitContact}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mb-8"
              >
                Submit
              </button>
            </div>
          </form>
          <div
            className="flex h-1/3 object-cover rounded-[16px] w-4/5 items-center justify-center"
            style={{
              backgroundImage: `url(${backgroundContact})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "70% 90%",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col justify-center items-center w-2/3">
              <div className="flex flex-col md:flex-col justify-center w-8/12 blur-none backdrop-blur-3xl pt-8 px-8 rounded-[16px] text-white">
                <div className="flex flex-row md:flex-col items-center w-4/5 h-full">
                  <img
                    src={contactImg && contactImg}
                    alt={contactImgAlt && contactImgAlt}
                    className="flex items-center rounded-full mr-10 ml-2 lg:ml-4 -mt-1/3 w-1/2"
                  />
                  <h1 className="mt-2 mb-8 text-xl text-center">
                    {contactText && contactText} <br />
                    <span className="text-green-400 mb-8 text-center">
                      {contactGreen && contactGreen}
                    </span>
                  </h1>
                </div>
                <div className="flex flex-row">
                  <div className="circle bg-button-green-E10 mr-2 aspect-square mb-8">
                    <img className="logo" src={phone} alt="phone" />
                  </div>
                  <div className="flex flex-col text-xl">
                    <h1 className="text-base font-semibold">
                      {contactLabelPhone && contactLabelPhone}
                    </h1>
                    <p className="font-normal text-sm">
                      {contactPhone && contactPhone}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="circle bg-button-green-E10 mr-2 aspect-square mb-8">
                    <img className="logo" src={tipie} alt="plane" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-base font-semibold">
                      {contactLabelCalendly && contactLabelCalendly}
                    </h1>
                    <p className="font-normal text-sm">
                      {contactCalendly && contactCalendly}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="circle bg-button-green-E10 mr-2 aspect-square mb-8">
                    <img className="logo" src={Email} alt="email" />
                  </div>
                  <div className="flex flex-col mb-8">
                    <h1 className="text-base font-semibold">
                      {contactLabelEmail && contactLabelEmail}
                    </h1>
                    <p className="font-normal text-sm">
                      {contactEmail && contactEmail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default FormulaireAdmin;
