import Module10E from "@components/Module10E";
import Module7E from "../components/module7E";
import Module5E from "../components/Module5E";
import Module4E from "../components/Module4E";
import jason from "../data/generated";

export default function Page1() {
  return (
    <div>
      <h1>acceuil</h1>
      <Module10E {...jason} />
      <Module7E />
      <Module5E {...jason} />
      <Module4E {...jason} />
    </div>
  );
}
