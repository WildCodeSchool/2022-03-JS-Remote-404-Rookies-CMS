import axios from "axios";
import { useContext, useState, useEffect } from "react";
import ExportContext from "../../contexts/Context";

function StudyCaseHomeAdmin() {
  const { language } = useContext(ExportContext.Context);
  const [imageLink, setImageLink] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [titleGreenPart, setTitleGreenPart] = useState("");
  const [cta, setCta] = useState("");
  const [bgImage, setBgImage] = useState("");
  const [bgImageAlt, setBgImageAlt] = useState("");
  const [id, setId] = useState("");
  const [imgId, setImgId] = useState("");
  const [BimgId, setBimgId] = useState("");
  const [elemid1, setElemid1] = useState("");
  const [elemid2, setElemid2] = useState("");
  const [elemid3, setElemid3] = useState("");
  const [elemid4, setElemid4] = useState("");
  const [elemid5, setElemid5] = useState("");
  const [elemTitle1, setElemTitle1] = useState("");
  const [elemTitle2, setElemTitle2] = useState("");
  const [elemTitle3, setElemTitle3] = useState("");
  const [elemTitle4, setElemTitle4] = useState("");
  const [elemTitle5, setElemTitle5] = useState("");
  const [elemSubTile1, setElemSubTile1] = useState("");
  const [elemSubTile2, setElemSubTile2] = useState("");
  const [elemSubTile3, setElemSubTile3] = useState("");
  const [elemSubTile4, setElemSubTile4] = useState("");
  const [elemSubTile5, setElemSubTile5] = useState("");
  const [elemImgLink1, setElemImgLink1] = useState("");
  const [elemImgLink2, setElemImgLink2] = useState("");
  const [elemImgLink3, setElemImgLink3] = useState("");
  const [elemImgLink4, setElemImgLink4] = useState("");
  const [elemImgLink5, setElemImgLink5] = useState("");
  const [elemImgAlt1, setElemImgAlt1] = useState("");
  const [elemImgAlt2, setElemImgAlt2] = useState("");
  const [elemImgAlt3, setElemImgAlt3] = useState("");
  const [elemImgAlt4, setElemImgAlt4] = useState("");
  const [elemImgAlt5, setElemImgAlt5] = useState("");
  const [topic, setTopic] = useState("");
  const [labelTopic, setLabelTopic] = useState("");
  const [imgId1, setImgId1] = useState("");
  const [imgId2, setImgId2] = useState("");
  const [imgId3, setImgId3] = useState("");
  const [imgId4, setImgId4] = useState("");
  const [imgId5, setImgId5] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/studygethomes/${language.id}`)
      .then((response) => {
        setBgImage(response.data.image_link);
        setBgImageAlt(response.data.image_alt);
        setImageLink(response.data.topicImgLink);
        setImageAlt(response.data.topicImgAlt);
        setTitle(response.data.title);
        setText(response.data.text);
        setTitleGreenPart(response.data.title_green_part);
        setCta(response.data.cta_label);
        setId(response.data.id);
        setImgId(response.data.imgId);
        setBimgId(response.data.BimgId);
        setElemid1(response.data.elements[0].id);
        setElemid2(response.data.elements[1].id);
        setElemid3(response.data.elements[2].id);
        setElemid4(response.data.elements[3].id);
        setElemid5(response.data.elements[4].id);
        setElemTitle1(response.data.elements[0].title);
        setElemTitle2(response.data.elements[1].title);
        setElemTitle3(response.data.elements[2].title);
        setElemTitle4(response.data.elements[3].title);
        setElemTitle5(response.data.elements[4].title);
        setElemSubTile1(response.data.elements[0].sub_title);
        setElemSubTile2(response.data.elements[1].sub_title);
        setElemSubTile3(response.data.elements[2].sub_title);
        setElemSubTile4(response.data.elements[3].sub_title);
        setElemSubTile5(response.data.elements[4].sub_title);
        setElemImgLink1(response.data.elements[0].image_link);
        setElemImgLink2(response.data.elements[1].image_link);
        setElemImgLink3(response.data.elements[2].image_link);
        setElemImgLink4(response.data.elements[3].image_link);
        setElemImgLink5(response.data.elements[4].image_link);
        setElemImgAlt1(response.data.elements[0].image_alt);
        setElemImgAlt2(response.data.elements[1].image_alt);
        setElemImgAlt3(response.data.elements[2].image_alt);
        setElemImgAlt4(response.data.elements[3].image_alt);
        setElemImgAlt5(response.data.elements[4].image_alt);
        setTopic(response.data.topic);
        setLabelTopic(response.data.label_topics);
        setImgId1(response.data.elements[0].imgid);
        setImgId2(response.data.elements[1].imgid);
        setImgId3(response.data.elements[2].imgid);
        setImgId4(response.data.elements[3].imgid);
        setImgId5(response.data.elements[4].imgid);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  const elements = [
    {
      id: elemid1,
      title: elemTitle1,
      sub_title: elemSubTile1,
      image_link: elemImgLink1,
      image_alt: elemImgAlt1,
      imgid: imgId1,
    },
    {
      id: elemid2,
      title: elemTitle2,
      sub_title: elemSubTile2,
      image_link: elemImgLink2,
      image_alt: elemImgAlt2,
      imgid: imgId2,
    },
    {
      id: elemid3,
      title: elemTitle3,
      sub_title: elemSubTile3,
      image_link: elemImgLink3,
      image_alt: elemImgAlt3,
      imgid: imgId3,
    },
    {
      id: elemid4,
      title: elemTitle4,
      sub_title: elemSubTile4,
      image_link: elemImgLink4,
      image_alt: elemImgAlt4,
      imgid: imgId4,
    },
    {
      id: elemid5,
      title: elemTitle5,
      sub_title: elemSubTile5,
      image_link: elemImgLink5,
      image_alt: elemImgAlt5,
      imgid: imgId5,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data1 = {
      id: id,
      imageLink: imageLink,
      imageAlt: imageAlt,
      title: title,
      text: text,
      titleGreenPart: titleGreenPart,
      cta: cta,
      bgImage: bgImage,
      bgImageAlt: bgImageAlt,
      imgId: imgId,
      BimgId: BimgId,
      elements: elements,
      topic: topic,
      label_topics: labelTopic,
    };
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/studygethomes`, data1)
      .then(() => {
        console.warn("Yes !");
      })
      .catch(() => {
        console.warn(`${imgId} ${BimgId} ${titleGreenPart} ${cta}`);
        console.warn("No !");
      });
  };

  return (
    <div className="flex flex-col items-center justify-evenly py-16 ">
      <div className="bg-white bg-cover flex flex-col justify-center">
        <div className="flex flex-row">
          <form className="flex flex-col h-full w-1/2 justify-center">
            <div className="flex flex-col h-full w-full justify-center">
              <div className="flex flex-col h-full w-full justify-center">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Titre
                  <input
                    value={title && title}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={title && title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Partie du titre souligné en vert
                  <input
                    value={titleGreenPart}
                    onChange={(e) => setTitleGreenPart(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={titleGreenPart}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Texte
                  <input
                    value={text && text}
                    onChange={(e) => setText(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={text && text}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Nom du Call to action
                  <input
                    value={cta && cta}
                    onChange={(e) => setCta(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={cta && cta}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Image de fond
                  <input
                    value={bgImage && bgImage}
                    onChange={(e) => setBgImage(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={bgImage && bgImage}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Alt de l&apos;image de fond
                  <input
                    value={bgImageAlt && bgImageAlt}
                    onChange={(e) => setBgImageAlt(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={bgImageAlt && bgImageAlt}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Image
                  <input
                    value={imageLink && imageLink}
                    onChange={(e) => setImageLink(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={imageLink && imageLink}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Alt image
                  <input
                    value={imageAlt && imageAlt}
                    onChange={(e) => setImageAlt(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={imageAlt && imageAlt}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Dernier élément topic
                  <input
                    value={topic && topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={topic && topic}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Titre topic 1
                  <input
                    value={elemTitle1 && elemTitle1}
                    onChange={(e) => setElemTitle1(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={elemTitle1 && elemTitle1}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Sous-titre topic 1
                  <input
                    value={elemSubTile1 && elemSubTile1}
                    onChange={(e) => setElemSubTile1(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={elemSubTile1 && elemSubTile1}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Image topic 1
                  <input
                    value={elemImgLink1 && elemImgLink1}
                    onChange={(e) => setElemImgLink1(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={elemImgLink1 && elemImgLink1}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Description image topic 1
                  <input
                    value={elemImgAlt1 && elemImgAlt1}
                    onChange={(e) => setElemImgAlt1(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={elemImgAlt1 && elemImgAlt1}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Titre topic 2
                  <input
                    value={elemTitle2 && elemTitle2}
                    onChange={(e) => setElemTitle2(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={elemTitle2 && elemTitle2}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Sous-titre topic 1
                  <input
                    value={elemSubTile2 && elemSubTile2}
                    onChange={(e) => setElemSubTile1(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={elemSubTile2 && elemSubTile2}
                  />
                </label>
              </div>
            </div>
          </form>
          <form className="flex flex-col h-full w-1/2 justify-center">
            <div className="flex flex-col h-full w-full justify-center">
              <div className="flex flex-col h-full w-full justify-center">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Image topic 2
                  <input
                    value={elemImgLink2 && elemImgLink2}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={elemImgLink2 && elemImgLink2}
                    onChange={(e) => setElemImgLink2(e.target.value)}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Description image topic 2
                  <input
                    value={elemImgAlt2 && elemImgAlt2}
                    onChange={(e) => setElemImgAlt2(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={elemImgAlt2 && elemImgAlt2}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Titre topic 3
                  <input
                    value={elemTitle3 && elemTitle3}
                    onChange={(e) => setElemTitle3(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={elemTitle3 && elemTitle3}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Sous-titre topic 3
                  <input
                    value={elemSubTile3 && elemSubTile3}
                    onChange={(e) => setElemSubTile3(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={elemSubTile3 && elemSubTile3}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Image topic 3
                  <input
                    value={elemImgLink3 && elemImgLink3}
                    onChange={(e) => setElemImgLink3(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={elemImgLink3 && elemImgLink3}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Description image topic 3
                  <input
                    value={elemImgAlt3 && elemImgAlt3}
                    onChange={(e) => setElemImgAlt2(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={elemImgAlt3 && elemImgAlt3}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Titre topic 4
                  <input
                    value={elemTitle4 && elemTitle4}
                    onChange={(e) => setElemTitle4(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={elemTitle4 && elemTitle4}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Sous titre topic 4
                  <input
                    value={elemSubTile4 && elemSubTile4}
                    onChange={(e) => setElemSubTile4(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={elemSubTile4 && elemSubTile4}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Image topic 4
                  <input
                    value={elemImgLink4 && elemImgLink4}
                    onChange={(e) => setElemImgLink4(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={elemImgLink4 && elemImgLink4}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Description image topic 4
                  <input
                    value={elemImgAlt4 && elemImgAlt4}
                    onChange={(e) => setElemImgAlt4(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={elemImgAlt4 && elemImgAlt4}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Titre topic 5
                  <input
                    value={elemTitle5 && elemTitle5}
                    onChange={(e) => setElemTitle5(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={elemTitle5 && elemTitle5}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Sous titre topic 5
                  <input
                    value={elemSubTile5 && elemSubTile5}
                    onChange={(e) => setElemSubTile5(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={elemSubTile5 && elemSubTile5}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Image topic 5
                  <input
                    value={elemImgLink5 && elemImgLink5}
                    onChange={(e) => setElemImgLink5(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={elemImgLink5 && elemImgLink5}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
                  Description image topic 5
                  <input
                    value={elemImgAlt5 && elemImgAlt5}
                    onChange={(e) => setElemImgAlt5(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                    type="text"
                    placeholder={elemImgAlt5 && elemImgAlt5}
                  />
                </label>
              </div>
            </div>
          </form>
        </div>
        <div className="flex justify-center mt-8 w-full px-8">
          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Submit
          </button>
        </div>
        <div className=" flex flex-col lg:flex-row">
          <div className="w-1/2 px-2 lg:px-16 lg:w-1/2 flex flex-col justify-evenly mt-20">
            <h1 className="w-1/2 font-bold text-4xl">
              {title && title}
              <br />{" "}
              <span className="underline decoration-8 decoration-green-400">
                {titleGreenPart && titleGreenPart}
              </span>
            </h1>
            <p className="py-8 text-3xl">{text && text}</p>
            <button
              type="button"
              className="bg-green-400 rounded-xl p-2 self-center text-white object-left flex-start flex flex-row-reverse flex-initial"
            >
              {cta && cta} 💬
            </button>
          </div>
          <div
            className="hidden lg:inline w-1/2 mt-20"
            style={{
              backgroundImage: `url(${bgImage && bgImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "90% 100%",
            }}
          >
            <div className="flex justify-center mr-24">
              <div className="flex flex-col bg-white w-3/6 my-12 p-8 rounded-2xl ">
                <h3 className="flex flex-start justify-start object-top text-2xl font-bold">
                  {labelTopic && labelTopic}
                </h3>
                <span />
                <img
                  src={imageLink && imageLink}
                  alt={imageAlt && imageAlt}
                  className="hat rounded-full w-1/4 h-1/4 flex-end"
                />
                {elements &&
                  elements.map((item) => (
                    <div className="flex p-2 justify-around w-2/3">
                      <img
                        src={item?.image_link}
                        alt={item?.image_alt}
                        className="w-4/12 aspect-square object-contain "
                      />
                      <div className="w-6/12">
                        <h2 className="font-bold">{item?.title}</h2>
                        <h3>{item?.sub_title}</h3>
                      </div>
                    </div>
                  ))}
                <p>{topic && topic}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StudyCaseHomeAdmin;
