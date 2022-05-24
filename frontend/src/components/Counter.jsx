import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <ul>
      <Link to="/">
        <li>acceuil</li>
      </Link>
      <Link to="/page2">
        <li>Page2</li>
      </Link>
      <Link to="/page3">
        <li>Page3</li>
      </Link>
      <Link to="/page4">
        <li>Page4</li>
      </Link>
    </ul>
  );
}
