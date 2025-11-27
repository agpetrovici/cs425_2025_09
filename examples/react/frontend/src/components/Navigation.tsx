import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/cards" className="nav-link">
        Cards
      </Link>
    </nav>
  );
}

export default Navigation;
