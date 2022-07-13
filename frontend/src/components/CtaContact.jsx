import React from "react";
import ExportContext from "../contexts/Context";

function CTAContact({ label }) {
  const { handleContact } = React.useContext(ExportContext.Context);
  return (
    <button
      className="p-2 bg-button-green-E10 min-w-1/3 lg:w-1/3 rounded-lg font-semibold mt-4 hover:bg-green-300"
      type="submit"
      onClick={() => {
        handleContact();
      }}
    >
      {label}
    </button>
  );
}

export default CTAContact;
