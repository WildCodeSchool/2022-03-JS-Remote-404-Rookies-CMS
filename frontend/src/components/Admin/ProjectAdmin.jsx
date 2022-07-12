/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import ExportContext from "../../contexts/Context";
import ProjectsCard from "../ProjectsCard";

function ProjectAdmin() {
  const { language } = useContext(ExportContext.Context);

  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [timeWeek, setTimeWeek] = useState("");
  const [timeHour, setTimeHour] = useState("");
  const [text, setText] = useState("");
  const [signature, setSignature] = useState("");
  const [amount, setAmount] = useState("");
  const [imgId, setImageId] = useState("");
  const [image, setImage] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [imagesFixedId1, setImagesFixedId1] = useState("");
  const [imagesFixed1, setImagesFixed1] = useState("");
  const [imagesFixedAlt1, setImagesFixedAlt1] = useState("");
  const [imageFixedId2, setImagefixedId2] = useState("");
  const [imageFixed2, setImagefixed2] = useState("");
  const [imageFixedAlt2, setImagefixedAlt2] = useState("");
  const [imageFixedId3, setImagefixedId3] = useState("");
  const [imageFixed3, setImagefixed3] = useState("");
  const [imageFixedAlt3, setImagefixedAlt3] = useState("");
  const [imageFixedId4, setImagefixedId4] = useState("");
  const [imageFixed4, setImagefixed4] = useState("");
  const [imageFixedAlt4, setImagefixedAlt4] = useState("");
  const [projectMemberId1, setProjectMemberId1] = useState("");
  const [projectMemberId2, setProjectMemberId2] = useState("");
  const [projectMemberId3, setProjectMemberId3] = useState("");
  const [projectId1, setProjectrId1] = useState("");
  const [projectId2, setProjectrId2] = useState("");
  const [projectId3, setProjectrId3] = useState("");
  const [projectMemberImgId1, setProjectMemberImgId1] = useState("");
  const [projectMemberImg1, setProjectMemberImg1] = useState("");
  const [projectMemberImgAlt1, setProjectMemberImgAlt1] = useState("");
  const [projectMemberImgId2, setProjectMemberImgId2] = useState("");
  const [projectMemberImg2, setProjectMemberImg2] = useState("");
  const [projectMemberImgAlt2, setProjectMemberImgAlt2] = useState("");
  const [projectMemberImgId3, setProjectMemberImgId3] = useState("");
  const [projectMemberImg3, setProjectMemberImg3] = useState("");
  const [projectMemberImgAlt3, setProjectMemberImgAlt3] = useState("");
  const [adminTouch, setAdminTouch] = useState("");

  const object = {
    id: id,
    title: title,
    sub_title: subTitle,
    image_link: image,
    image_alt: imageAlt,
    images_id: imgId,
    status: status,
    description: description,
    time_week: timeWeek,
    time_hour: timeHour,
    text: text,
    signature: signature,
    amount: amount,
  };

  const imagesFixed = [
    {
      id: imagesFixedId1,
      image_link: imagesFixed1,
      image_alt: imagesFixedAlt1,
    },
    {
      id: imageFixedId2,
      image_link: imageFixed2,
      image_alt: imageFixedAlt2,
    },
    {
      id: imageFixedId3,
      image_link: imageFixed3,
      image_alt: imageFixedAlt3,
    },
    {
      id: imageFixedId4,
      image_link: imageFixed4,
      image_alt: imageFixedAlt4,
    },
  ];

  const projectMember = [
    {
      id: projectMemberId1,
      project_id: projectId1,
      image_id: projectMemberImgId1,
      image_link: projectMemberImg1,
      image_alt: projectMemberImgAlt1,
    },
    {
      id: projectMemberId2,
      project_id: projectId2,
      image_id: projectMemberImgId2,
      image_link: projectMemberImg2,
      image_alt: projectMemberImgAlt2,
    },
    {
      id: projectMemberId3,
      project_id: projectId3,
      image_id: projectMemberImgId3,
      image_link: projectMemberImg3,
      image_alt: projectMemberImgAlt3,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const submit = {
      object: object,
      imagesFixed: imagesFixed,
      projectMember: projectMember,
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
      object: object,
      imagesFixed: imagesFixed,
      projectMember: projectMember,
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
      .get(`${import.meta.env.VITE_BACKEND_URL}/project/${language.id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

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
        <div className="flex flex-row align-center justify-center ml-12 w-1/3 ml-60 mt-4 mb-4 text-center">
          <div className="flex flex-col align-center justify-center ml-12 w-1/3 ml-60 mt-4 mb-4 text-center">
            <div className="flex flex-col align-center justify-center ml-12 w-1/3 ml-60 mt-4 mb-4 text-center">
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
                      Titre
                      <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                        type="text"
                        placeholder="nom & prenom"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      Sous-titre
                      <input
                        value={subTitle}
                        onChange={(e) => setSubTitle(e.target.value)}
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                        type="text"
                        placeholder="Poste occuper"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      Description
                      <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                        type="text"
                        placeholder="Description"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      Times week
                      <input
                        value={timeWeek}
                        onChange={(e) => setTimeWeek(e.target.value)}
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                        type="text"
                        placeholder="temps en semaine"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      Testimonial
                      <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                        type="text"
                        placeholder="testimonial"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      Signature
                      <input
                        value={signature}
                        onChange={(e) => setSignature(e.target.value)}
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                        type="text"
                        placeholder="signature"
                        required
                      />
                    </label>
                  </div>
                </div>
              </form>
              <form className="flex flex-col w-1/2 align-center justify-center ml-24">
                <div className="flex flex-col h-full w-full justify-center">
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      Times hours
                      <input
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                        type="text"
                        placeholder="temsp en heure"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      Lien de l&apos;image
                      <input
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                        type="text"
                        placeholder="temsp en heure"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      image description
                      <input
                        value={imageAlt}
                        onChange={(e) => setImageAlt(e.target.value)}
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                        type="text"
                        placeholder="image description"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      lien du 1er menbre
                      <input
                        value={projectMemberImg1}
                        onChange={(e) => setTimeHour(e.target.value)}
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                        type="text"
                        placeholder="lien du 1er menbre"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      description de l'image du 1er membre
                      <input
                        value={projectMemberImgAlt1}
                        onChange={(e) => setTimeHour(setProjectMemberImgAlt1)}
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                        type="text"
                        placeholder="description de l'image du 1er membre"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      lien image du 2eme menbre
                      <input
                        value={projectMemberImg2}
                        onChange={(e) => setProjectMemberImg2(e.target.value)}
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                        type="text"
                        placeholder="lien image du 2eme menbre"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      description de l&aps;image du 2eme membre
                      <input
                        value={projectMemberImgAlt2}
                        onChange={(e) =>
                          setProjectMemberImgAlt2(e.target.value)
                        }
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                        type="text"
                        placeholder="description de l'image du 2eme membre"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      lien image du 3eme menbre
                      <input
                        value={projectMemberImg3}
                        onChange={(e) => setProjectMemberImg3(e.target.value)}
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                        type="text"
                        placeholder="lien image du 3eme menbre"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
                      description de l&aps;image du 3eme membre
                      <input
                        value={projectMemberImgAlt3}
                        onChange={(e) =>
                          setProjectMemberImgAlt3(e.target.value)
                        }
                        className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                        type="text"
                        placeholder="description de l'image du 3eme membre"
                        required
                      />
                    </label>
                  </div>
                </div>
              </form>
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
        </div>
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
        <div>
          {data.length > 0 &&
            data.map((project) => {
              return <ProjectsCard project={project} />;
            })}
        </div>
      ) : (
        <div className="flex flex-col h-full mt-12">
          {/* <div className="carousel">
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
          </div> */}
        </div>
      )}
    </div>
  );
}

export default ProjectAdmin;
