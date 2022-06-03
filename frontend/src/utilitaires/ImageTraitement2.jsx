/* eslint-disable import/no-extraneous-dependencies */
import "../App.css";
import jason from "../data/generatedforlogo";

function ImageTraitement2() {
  return (
    <div className="logo-carousel">
      <div className="carousel-item-container">
        {jason.slice(8, 12).map((item) => {
          return (
            <div className="inner-carousel1" key={item.index}>
              <img src={item.picture} alt={item.name} />
            </div>
          );
        })}
      </div>
      <div className="carousel-item-container">
        {jason.slice(12, 16).map((item) => {
          return (
            <div className="inner-carousel2" key={item.index}>
              <img src={item.picture} alt={item.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ImageTraitement2;
