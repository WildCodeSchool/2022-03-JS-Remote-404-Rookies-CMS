import React from "react";

import Module1e from "../components/Module1E";
import Module2E from "../components/Module2E";
import Module3E from "../components/Module3E";
import Module4E from "../components/Module4E";
import Module5E from "../components/Module5E";
import Module7E from "../components/module7E";
import Module8E from "../components/Module8E";
import Module9E from "../components/Module9E";
import Module10E from "../components/Module10E";
import jason from "../data/generated";

export default function Page1() {
  return (
    <div>
      <h2>Accueil</h2>
      <Module1e />
      <Module2E />
      <Module3E />
      <Module4E {...jason} />
      <Module5E {...jason} />
      <Module7E />
      <Module8E />
      <Module9E />
      <Module10E {...jason} />
    </div>
  );
}
