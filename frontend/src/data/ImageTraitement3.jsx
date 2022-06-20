/* eslint-disable import/no-extraneous-dependencies */
import "../App.css";
import react, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ImageTraitement1() {
  const [image, setImage] = react.useState([]);
  const { page5 } = useParams();

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

  return (
    <div className="logo-carousel">
      <div className="carousel-item-container">
        {image.slice(20, 25).map((item) => (
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
        {image.slice(25, 30).map((item) => (
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
