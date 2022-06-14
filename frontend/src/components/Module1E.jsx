import React from "react";
import GetStarted from "./GetStarted";
import imgm1 from "../assets/imgm1.png";

function Module1e() {
  return (
    <div
      className="bg-white bg-cover max-w-md py-16 lg:max-w-full lg:flex flex-row lg:justify-center"
      style={{ backgroundImage: `url(./src/assets/bgm1.png)` }}
    >
      <div className="mx-4 lg:w-1/3 lg:mx-6">
        <h1 className="mb-4 text-xl font-bold lg:text-3xl mb-6">
          A wonderful title with all the things we could do for you
        </h1>
        <h2 className="mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt sint,
          repellendus, fugiat harum doloribus id inventore{" "}
        </h2>
        <div className="flex justify-center lg:justify-start">
          <GetStarted />
        </div>
      </div>
      <div className=" mx-6 flex flex-row-reverse justify-center lg:w-1/3 lg:justify-center">
        <img
          className=" w-4/5 h-auto mt-6 lg:w-96 "
          src={imgm1}
          alt="people gathering"
        />
      </div>
    </div>
  );
}

export default Module1e;
