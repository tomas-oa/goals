import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Objetivos</Link>
      </div>
      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt />
            <span>Login</span>
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUser />
            <span>Registrarse</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
