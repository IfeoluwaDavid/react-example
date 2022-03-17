import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
    <div className="navContainer">
      <h1>Dear BPTN</h1>
      <div className="navOptionsContainer">
        <Link className="navOption" to="/">
          Home
        </Link>
        <Link className="navOption" to="/liked">
          Liked Movies
        </Link>
      </div>
    </div>
  );
}
