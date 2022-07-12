import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ExportContext from "../contexts/Context";
import phone from "../assets/téléphone.png";
import tipie from "../assets/tipie.png";
import email from "../assets/letter.png";

function ContactUs() {
  const { language } = useContext(ExportContext.Context);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/contact_us/${language.id}`)
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  const background = data && data.bg_link;
  return (
    <div
      className="flex h-full w-full object-cover rounded-[16px]"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col md:flex-col justify-center w-9/12 blur-none backdrop-blur-3xl pt-8 px-8 rounded-[16px] w-full text-white">
          <div className="flex flex-row md:flex-col items-center w-4/5 h-full">
            <img
              src={data && data.image_link}
              alt={data && data.image_alt}
              className="flex items-center rounded-full mr-10 ml-2 lg:ml-4 -mt-1/3 w-1/2"
            />
            <h1 className="mt-2 mb-8 text-xl">
              {data?.text}
              <span className="text-green-400 mb-8"> {data?.text_green}</span>
            </h1>
          </div>
          <div className="flex flex-row">
            <div className="circle bg-button-green-E10 mr-2 aspect-square mb-8">
              <img className="logo" src={phone} alt="phone" />
            </div>
            <div className="flex flex-col text-xl">
              <h1 className="text-base font-semibold">{data?.label_phone}</h1>
              <p className="font-normal text-sm">{data?.phone}</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="circle bg-button-green-E10 mr-2 aspect-square mb-8">
              <img className="logo" src={tipie} alt="plane" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-base font-semibold">{data?.label_rdv}</h1>
              <p className="font-normal text-sm">{data?.link_calendly}</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="circle bg-button-green-E10 mr-2 aspect-square mb-8">
              <img className="logo" src={email} alt="email" />
            </div>
            <div className="flex flex-col mb-8">
              <h1 className="text-base font-semibold">{data?.label_email}</h1>
              <p className="font-normal text-sm">{data?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
