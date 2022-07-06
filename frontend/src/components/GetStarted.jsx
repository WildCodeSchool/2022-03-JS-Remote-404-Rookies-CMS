import { useContext, useState, useEffect } from "react";
import axios from "axios";

import ExportContext from "../contexts/Context";
import CTA from "./CTA";

function GetStarted() {
  const { language } = useContext(ExportContext.Context);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/getstarteds/${language.id}`)
      .then((response) => {
        setData(response.data);
        console.error(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  return (
    <section className="flex flex-col justify-items-center  place-items-center pt-20">
      <div className="pb-20 flex justify-center gap-20">
        <CTA label={data?.cta1_label} />
        <CTA label={data?.cta2_label} />
      </div>
    </section>
  );
}
export default GetStarted;
