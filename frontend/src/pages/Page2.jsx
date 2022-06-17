import React from "react";

import Module1S from "../components/Module1S";
import Module2S from "../components/Module2S";
import Module1E from "../components/Module1E";
import Module2E from "../components/Module2E";
import Module3E from "../components/Module3E";
import Module7E from "../components/module7E";
import Module9E from "../components/Module9E";
import Footer from "../components/Footer";

export default function Page2() {
  return (
    <div>
      <Module1E />
      <Module2E />
      <Module1S />
      <Module3E />
      <Module7E />
      <Module9E />
      <Module2S />
      <Footer />
    </div>
  );
}
