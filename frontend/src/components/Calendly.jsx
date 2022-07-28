/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { PopupButton } from "react-calendly";

function Calendly(label) {
  return (
    <div className="">
      <PopupButton
        url="https://calendly.com/rookies"
        rootElement={document.getElementById("calendly")}
        text={label && label.label}
        textColor="#ffffff"
        color="#02e494"
        backgroundColor="#02e494"
        position="relative"
        className="bg-button-green-E10 p-4 rounded-lg text-white font-bold"
      />
    </div>
  );
}

export default Calendly;
