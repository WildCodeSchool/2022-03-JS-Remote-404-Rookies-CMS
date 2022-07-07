import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import ExportContext from "../../contexts/Context";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarrousselReviewCard from "../CarrousselReviewCard";

function CarrouselReviewAdmin() {
  const { language } = useContext(ExportContext.Context);

  const [id, setId] = useState("");
  const [data, setData] = useState([]);
  const [image, setImage] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [imgId, setImageId] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [fullName, setFullName] = useState("");
  const [post, setPost] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [logo, setLogo] = useState("");
  const [logoAlt, setLogoAlt] = useState("");
  const [logoId, setLogoId] = useState("");
  const [adminTouch, setAdminTouch] = useState("");

  const object = {
    id: id,
    title: title,
    sub_title: subTitle,
    fullname: fullName,
    post: post,
    testimonial: testimonial,
    image_link: image,
    image_alt: imageAlt,
    logo_id: imgId,
    linkLogo: logo,
    altLogo: logoAlt,
    image_id: logoId,
    type: 1,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submit = {
      id: id,
      title: title,
      subTitle: subTitle,
      logoAlt: logoAlt,
      fullName: fullName,
      testimonial: testimonial,
      post: post,
      type: 1,
      carrousselId: 1,
      images: [
        {
          image_link: image,
          image_alt: imageAlt,
          status: 1,
          categorie: "ImgCarouselReviewCompany",
          languages_id: 1,
          url: "",
        },
        {
          image_link: logo,
          image_alt: logoAlt,
          status: 1,
          categorie: "logo",
          languages_id: 1,
          url: "",
        },
      ],
    };
    console.warn(submit);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/carrousselreview`, submit)
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
      id: id,
      title: title,
      subTitle: subTitle,
      fullName: fullName,
      post: post,
      testimonial: testimonial,
      type: 1,
      languages_id: language.id,
      images: [
        {
          image_link: image,
          image_alt: imageAlt,
          id: imgId,
        },
        {
          image_link: logo,
          image_alt: logoAlt,
          id: logoId,
        },
      ],
    };
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/carrousselreview`, submit)
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
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/carrousselreview/${id}`)
      .then(() => {
        console.warn("Yes !");
      })
      .catch(() => {
        console.warn("No !");
      });
  };

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/carrousselreview/${language.id}`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  //   const elements = [
  //    { title: elemTitle1, text: elemText1 },
  //     { title: elemTitle2, text: elemText2 },
  //     { title: elemTitle3, text: elemText3 },
  //     { title: elemTitle4, text: elemText4 },
  //   ];

  return (
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
      <div className="flex flex-row w-1/2 h-full" />
      {adminTouch === "1" ? (
        <form className="flex flex-col w-1/2 align-center justify-center ml-24">
          <div className="flex flex-col h-full w-full justify-center">
            <div>
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                Lien de l&apos;image
                <input
                  value={image}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder="Lien de l'image"
                  onChange={(e) => setImage(e.target.value)}
                  required
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
                  required
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                nom & prenom
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder="nom & prenom"
                  required
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                Poste occuper
                <input
                  value={post}
                  onChange={(e) => setPost(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder="Poste occuper"
                  required
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                Testimonial
                <input
                  value={testimonial}
                  onChange={(e) => setTestimonial(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder="Testimonial"
                  required
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                lien du logo
                <input
                  value={logo}
                  onChange={(e) => setLogo(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder="lien du logo"
                  required
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                Description du logo
                <input
                  value={logoAlt}
                  onChange={(e) => setLogoAlt(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder="Description du logo"
                  required
                />
              </label>
            </div>
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
      ) : null}
      {adminTouch === "2" ? (
        <div className="flex flex-col w-1/2 align-center justify-center ml-24">
          <select
            className="flex flex-col justify-center align-center bg-green-500 hover:bg-green-700 text-white font-bold text-xl py-1 px-1 rounded"
            onChange={(e) => {
              setTitle(data[e.target.value - 1].title);
              setSubTitle(data[e.target.value - 1].sub_title);
              setImage(data[e.target.value - 1].image_link);
              setImageAlt(data[e.target.value - 1].image_alt);
              setImageId(data[e.target.value - 1].image_id);
              setFullName(data[e.target.value - 1].fullname);
              setPost(data[e.target.value - 1].post);
              setTestimonial(data[e.target.value - 1].testimonial);
              setLogo(data[e.target.value - 1].linkLogo);
              setLogoAlt(data[e.target.value - 1].altLogo);
              setLogoId(data[e.target.value - 1].logo_id);
              setId(data[e.target.value - 1].id);
            }}
          >
            <option> selection un element a modifier </option>
            {data.map((elem) => (
              <option value={elem.id}> testimonial {elem.id} </option>
            ))}
          </select>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
              Titre
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder="Titre"
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
              Sous Titre
              <input
                value={subTitle}
                onChange={(e) => setSubTitle(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder="Sous Titre"
              />
            </label>
          </div>
          <div className="flex flex-col h-full w-full justify-center">
            <div>
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                Lien de l&apos;image
                <input
                  value={image}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder="Lien de l'image"
                  onChange={(e) => setImage(e.target.value)}
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
                nom & prénom
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder="nom & prénom"
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                intitulé du poste
                <input
                  value={post}
                  onChange={(e) => setPost(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder="intitulé du poste"
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                testimonial
                <input
                  value={testimonial}
                  onChange={(e) => setTestimonial(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder="testimonial"
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                Lien du logo
                <input
                  value={logo}
                  onChange={(e) => setLogo(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder="Lien du logo"
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                Description de logo
                <input
                  value={logoAlt}
                  onChange={(e) => setLogoAlt(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                  type="text"
                  placeholder="Description de logo"
                />
              </label>
            </div>
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
      ) : null}
      {adminTouch === "3" ? (
        <div className="flex flex-col w-1/2 align-center justify-center ml-24">
          <div className="flex flex-col h-full w-full justify-center">
            <div className="flex flex-col">
              <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                Id de l&apos;image
                <input
                  value={id}
                  onChange={(e) => setId(e.target.value)}
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
      {adminTouch !== "2" ? (
        <div className="flex flex-col h-full mt-12">
          <div className="carousel">
            <div className="flex flex-col items-center justify-center">
              <section className="">
                <h2 className="text-center text-green font-bold md:text-xl text-lg lg:text-2xl pb-4">
                  {data[0] && data[0].title}
                </h2>
                <h3 className="text-center font-bold text-xl md:text-2xl lg:text-4xl pb-4 lg:pb-20 ">
                  {data[0] && data[0].sub_title}
                </h3>
                <div className="">
                  <Carousel
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    centerSlidePercentage={100}
                    centerMode
                    className="w-screen h-screen"
                  >
                    {data &&
                      data.map((elem) => {
                        return <CarrousselReviewCard {...elem} />;
                      })}
                  </Carousel>
                </div>
              </section>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-full mt-12">
          <div className="carousel">
            <div className="flex flex-col items-center justify-center">
              <section className="">
                <h2 className="text-center text-green font-bold md:text-xl text-lg lg:text-2xl pb-4">
                  {title[0] && title}
                </h2>
                <h3 className="text-center font-bold text-xl md:text-2xl lg:text-4xl pb-4 lg:pb-20 ">
                  {subTitle && subTitle}
                </h3>
                <div className="">
                  <Carousel
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    centerSlidePercentage={100}
                    centerMode
                    className="w-screen h-screen"
                  >
                    <CarrousselReviewCard {...object} />;
                  </Carousel>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarrouselReviewAdmin;
