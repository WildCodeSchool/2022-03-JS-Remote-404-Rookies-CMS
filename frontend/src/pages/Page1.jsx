import Module10E from "@components/Module10E";
import Module4E from "../components/Module4E";
import jason from "../data/generated";

export default function Page1() {
  return (
    <div>
      <h1>acceuil</h1>
      <Module10E {...jason} />
      <Module4E {...jason} />
    </div>
  );
}
