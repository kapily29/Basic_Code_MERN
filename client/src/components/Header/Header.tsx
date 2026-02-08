import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Basic MERN
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/health" className="nav-link">
            Health Check
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
