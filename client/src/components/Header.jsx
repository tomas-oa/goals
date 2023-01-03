import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/auth.slice";
import { useNavigate } from "react-router-dom";

function Header() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    nav("/login");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Objetivos</Link>
      </div>
      <ul>
        {user ? (
          <>
            <li>
              <button className="btn" onClick={onLogout}>
                <FaSignInAlt />
                <span>Logout</span>
              </button>
            </li>
          </>
        ) : (
          <>
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
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
