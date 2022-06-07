import image from "../assets/module5E.png";
import fleche from "../assets/module5Earrow.png";
import flecheReverse from "../assets/module5Earrowreverse.png";

function Module5E(jason) {
  return (
    <section className="flex flex-col">
      <div className="flex justify-evenly">
        <div className="w-2/5 flex flex-col justify-evenly">
          <h2 className="font-bold module5E-green text-xl">{jason[0].name}</h2>
          <h3 className="font-extrabold text-4xl">{jason[0].address}</h3>
          <p>{jason[0].about}</p>
        </div>
        <div className="w-2/5">
          <img
            src={image}
            alt="projet sur le market study, visual design ,proof of concept et uX/UI design"
          />
        </div>
      </div>
      <div className="grid grid5A mt-16 justify-evenly">
        <div className="div1">
          <h3 className="font-bold text-xl mb-4">
            <span className="font-bold text-2xl module5E-green pr-2">01</span>
            {jason[0].friends[0].name}
          </h3>
          <h4>{jason[0].friends[0].description}</h4>
        </div>
        <img src={fleche} alt="fleche de l'etape 1 a 2" className="arrow1" />
        <div className="div2">
          <h3 className="font-bold text-xl mb-4">
            <span className="font-bold text-2xl module5E-green pr-2">02</span>
            {jason[0].friends[1].name}
          </h3>
          <h4>{jason[0].friends[1].description}</h4>
        </div>
        <img
          src={flecheReverse}
          alt="fleche de l'etape 2 a 3"
          className="arrow2"
        />
        <div className="div3">
          <h3 className="font-bold text-xl mb-4">
            <span className="font-bold text-2xl module5E-green pr-2">03</span>
            {jason[0].friends[2].name}
          </h3>
          <h4>{jason[0].friends[2].description}</h4>
        </div>
        <img src={fleche} alt="fleche de l'etape 3 a 4" className="arrow3" />
        <div className="div4">
          <h3 className="font-bold text-xl mb-4">
            <span className="font-bold text-2xl module5E-green pr-2">04</span>
            {jason[0].friends[3].name}
          </h3>
          <h4>{jason[0].friends[3].description}</h4>
        </div>
      </div>
    </section>
  );
}

export default Module5E;
