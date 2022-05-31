import jason from "../data/generated";
import Module5E from "../components/Module5E";

export default function Page1() {
  return (
    <div>
      <h1>acceuil</h1>
      <Module5E {...jason} />
    </div>
  );
}
