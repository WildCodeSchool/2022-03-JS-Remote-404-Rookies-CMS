import React from "react";
import pen from "../assets/pen.png";
import clock from "../assets/clock.png";
import network from "../assets/network.png";
import sheet from "../assets/sheet.png";
import GetStarted from "./GetStarted";

function Module6e() {
  return (
    <div className="bg4E pt-12 pb-12 flex flex-col justify-items-center place-items-center">
      <div className="font-bold text-center mb-8 lg:mb-20">
        <h3 className="text-green-400 text-xl pb-1">
          Benefits of working with us
        </h3>
        <h2 className="text-3xl lg:text-4xl">A turnkey solution</h2>
      </div>
      <div className="flex flex-col flex-wrap m-4 justify-items-center place-items-center leading-loose lg:flex-row">
        <div className="basis-1/2 flex flex-row flex-none justify-end">
          <div className="circle bg-slate-50 mr-2 aspect-square">
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
          <div className="circle bg-slate-50 mr-2 aspect-square">
            <img className="logo" src={network} alt="network" />
          </div>
          <div>
            <h3 className="text-xl pt-2 pb-2">Access a large network</h3>
            <p className="max-w-lg pb-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              sequi assumenda, quaerat eius ab
            </p>
          </div>
        </div>
        <div className="basis-1/2 flex flex-row flex-none justify-end">
          <div className="circle bg-slate-50 mr-2 aspect-square">
            <img className="logo" src={clock} alt="clock" />
          </div>
          <div>
            <h3 className="text-xl pt-2 pb-2">Simplified project management</h3>
            <p className="max-w-lg pb-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              sequi assumenda, quaerat eius ab
            </p>
          </div>
        </div>
        <div className="basis-1/2 flex flex-row flex-none justify-start">
          <div className="circle bg-slate-50 mr-2 aspect-square">
            <img className="logo" src={sheet} alt="sheet" />
          </div>
          <div>
            <h3 className="text-xl pt-2 pb-2">Detailed report</h3>
            <p className="max-w-lg pb-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              sequi assumenda, quaerat eius ab
            </p>
          </div>
        </div>
      </div>
      <GetStarted />
    </div>
  );
}

export default Module6e;
