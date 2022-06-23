/* eslint-disable import/no-extraneous-dependencies */
import "../App.css";
import react, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ExportContext from "../contexts/Context";

function ImageTraitement1() {
  const [image, setImage] = react.useState([]);
  const { page5 } = useParams();

  const { media } = useContext(ExportContext.Context);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/imageslogo`)
      .then((response) => {
        setImage(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  if (!media) {
    return (
      <div className="logo-carousel">
        <div className="carousel-item-container">
          {image.slice(0, 5).map((item) => (
            <a
              href={item.url}
              target="_blank"
              className="inner-carousel1"
              rel="noreferrer"
            >
              <img src={item.image_link} alt={item.image_alt} />
              {page5 ? <p>{item.id}</p> : null}
            </a>
          ))}
        </div>
        <div className="carousel-item-container">
          {image.slice(5, 10).map((item) => (
            <a
              href={item.url}
              target="_blank"
              className="inner-carousel1"
              rel="noreferrer"
            >
              <img src={item.image_link} alt={item.image_alt} />
              {page5 ? <p>{item.id}</p> : null}
            </a>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="logo-carousel">
      <div className="carousel-item-container">
        {image.slice(0, 3).map((item) => (
          <a
            href={item.url}
            target="_blank"
            className="inner-carousel1"
            rel="noreferrer"
          >
            <img src={item.image_link} alt={item.image_alt} />
            {page5 ? <p>{item.id}</p> : null}
          </a>
        ))}
      </div>
      <div className="carousel-item-container">
        {image.slice(3, 6).map((item) => (
          <a
            href={item.url}
            target="_blank"
            className="inner-carousel1"
            rel="noreferrer"
          >
            <img src={item.image_link} alt={item.image_alt} />
            {page5 ? <p>{item.id}</p> : null}
          </a>
        ))}
      </div>
      <div className="carousel-item-container">
        {image.slice(6, 9).map((item) => (
          <a
            href={item.url}
            target="_blank"
            className="inner-carousel1"
            rel="noreferrer"
          >
            <img src={item.image_link} alt={item.image_alt} />
            {page5 ? <p>{item.id}</p> : null}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ImageTraitement1;
