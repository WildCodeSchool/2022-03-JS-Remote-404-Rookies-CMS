import React from "react";
import pen from "../assets/pen.png";
import clock from "../assets/clock.png";
import network from "../assets/network.png";
import sheet from "../assets/sheet.png";
import GetStarted from "./GetStarted";

function Module6e() {
  return (
    <div className="bg4E pt-12 flex flex-col justify-items-center place-items-center">
      <div className="font-bold text-center">
        <h3 className="text-green-400 text-xl pb-1">
          Benefits of working with us
        </h3>
        <h2 className="text-4xl">A turnkey solution</h2>
      </div>
      <div className="flex flex-row flex-wrap mt-20 justify-items-center  place-items-center">
        <div className="basis-1/2 flex flex-row flex-none justify-end">
          <div className="circle bg-slate-50 mr-2">
            <img className="logo" src={pen} alt="pen" />
          </div>
          <div>
            <h3 className="text-xl pb-1">Easily design your project</h3>
            <p className="max-w-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              sequi assumenda, quaerat eius ab
            </p>
          </div>
        </div>
        <div className="basis-1/2 flex flex-row flex-none justify-start">
          <div className="circle bg-slate-50 mr-2">
            <img className="logo" src={network} alt="network" />
          </div>
          <div>
            <h3 className="text-xl pb-1">Access a large network</h3>
            <p className="max-w-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              sequi assumenda, quaerat eius ab
            </p>
          </div>
        </div>
        <div className="basis-1/2 flex flex-row flex-none justify-end">
          <div className="circle bg-slate-50 mr-2">
            <img className="logo" src={clock} alt="clock" />
          </div>
          <div>
            <h3 className="text-xl pb-1">Simplified project management</h3>
            <p className="max-w-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              sequi assumenda, quaerat eius ab
            </p>
          </div>
        </div>
        <div className="basis-1/2 flex flex-row flex-none justify-start">
          <div className="circle bg-slate-50 mr-2">
            <img className="logo" src={sheet} alt="sheet" />
          </div>
          <div>
            <h3 className="text-xl pb-4">Detailed report</h3>
            <p className="max-w-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              sequi assumenda, quaerat eius ab
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center w-1/3 mb-12 mt-12">
        <GetStarted />
      </div>
    </div>
  );
}

export default Module6e;
