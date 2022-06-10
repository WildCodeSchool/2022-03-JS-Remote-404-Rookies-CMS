import React from "react";

import key from "../assets/key.png";
import cog from "../assets/cog.png";
import star from "../assets/star.png";

function Module1S() {
  return (
    <div className="bg-green-200 pt-12 flex flex-col justify-items-center place-items-center">
      <div className="font-bold text-center">
        <h3 className="text-green-400 text-xl pb-1">Les avantages concrets</h3>
        <h2 className="text-4xl">Lorem ipsum dolor sit amet</h2>
      </div>
      <div className="flex flex-row m-16 ">
        <div className="m-6 border-green-400 border-2 border-solid rounded-md p-6 w-1/3">
          <img className="logo2" src={key} alt="key" />
          <h4 className="text-xl pt-8 font-bold">Plus d&apos;opportunités</h4>
          <p className="pt-4 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ad
            mollitia id provident dolor quas dolore labore, reiciendis qui
            nostrum aliquid excepturi in odit dolorem quidem hic repellat
            reprehenderit eligendi.
          </p>
        </div>
        <div className="m-6 border-green-400 border-2 border-solid rounded-md p-6 w-1/3">
          <img className="logo2" src={cog} alt="cog" />
          <h4 className="text-xl pt-8 font-bold">Gestion facilitée</h4>
          <p className="pt-4 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            assumenda aliquam fuga enim neque. Adipisci perferendis dolore,
            magnam numquam molestiae aperiam consequuntur minima laudantium
            nostrum sit consectetur, ullam unde quia?
          </p>
        </div>
        <div className="m-6 border-green-400 border-2 border-solid rounded-md p-6 w-1/3">
          <img className="logo2" src={star} alt="star" />
          <h4 className="text-xl pt-8 font-bold">Evaluation RH express</h4>
          <p className="pt-4 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ea
            at quo voluptatibus sit voluptates error dignissimos ipsam non quasi
            impedit quisquam quia deserunt rerum nobis, doloremque consectetur
            adipisci quas.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Module1S;
