import React from "react";
import imgm1 from "../assets/imgm1.png";

function Module1e() {
  return (
    <div
      className="bg-white bg-cover bg-no-repeat flex flex-row p-8"
      style={{ backgroundImage: `url(./src/assets/bgm1.png)` }}
    >
      <div className="w-1/2 m-6">
        <h1 className="text-3xl font-bold mt-6 mb-6">
          A wonderful title with all the things we could do for you
        </h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt sint,
          repellendus, fugiat harum doloribus id inventore{" "}
        </h2>
        <button
          className="bg-green-700 text-white font-bold py-2 px-4 mt-6 rounded-full"
          type="submit"
        >
          Get started
        </button>
      </div>
      npm run
      <div className="w-1/2">
        <img className="w-96 h-auto mt-6" src={imgm1} alt="people gathering" />
      </div>
    </div>
  );
}

export default Module1e;
