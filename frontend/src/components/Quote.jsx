import React from "react";
import quote from "../data/quote";

function Quote() {
  function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const entier = entierAleatoire(0, quote.length);
  return (
    <div className="flex flex-col items-center justify-center w-9/12">
      <div className="flex flex-col items-center justify-center w-full mb-16">
        <p className="text-gray-900 font-bold mb-2 text-3xl italic font-mono">
          &quot;{quote[entier].quote}&quot;
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full ml-16">
        <p className="text-green font-bold mb-2 text-3xl font-mono">
          {quote[entier].author}
        </p>
      </div>
    </div>
  );
}

export default Quote;
