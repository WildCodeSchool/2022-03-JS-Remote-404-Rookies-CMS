/* eslint-disable import/no-extraneous-dependencies */
import "../App.css";
import jason from "./generatedforlogo";

function ImageTraitement1() {
  return (
    <div className="logo-carousel">
      <div className="carousel-item-container">
        {jason.slice(0, 4).map((item) => {
          return (
            <div className="inner-carousel1" key={item.index}>
              <img src={item.picture} alt={item.name} />
            </div>
          );
        })}
      </div>
      <div className="carousel-item-container">
        {jason.slice(4, 8).map((item) => {
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

export default ImageTraitement1;
