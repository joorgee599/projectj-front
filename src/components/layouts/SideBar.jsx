import {
  FaAlignLeft,
  FaAlignRight,
  FaArrowCircleLeft,
  FaCertificate,
  FaHome,
  FaProductHunt,
  FaSalesforce,
  FaThLarge,
  FaUserAlt,
} from "react-icons/fa";
import { logoutController } from "../../controllers/auth/AuthController";
import logo from "../../assets/img/logo-projectj.png";
import { Link } from "react-router-dom";
import  useAuthContext  from "../../hooks/useAuthContext";

const SideBar = ({ isOpen, setIsOpen }) => {
  const {id}= useAuthContext();
  
  const handleLogout = async (e) => {
    e.preventDefault();

    const response = await logoutController();
    if (response.success) {
      alert(response.message || "Cerrando sesión exitoso.");
      window.location.href = "/auth/login";
    } else {
      alert(response.message || "No se pudo cerra sesión.");
    }
  };
  return (
    <aside className={`sidebar-principal ${isOpen ? "open" : ""}`}>
      <div className="sidebar-inner-principal">
        <header className="sidebar-header-principal">
          <button
            type="button"
            className="sidebar-burger-principal"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>
              {isOpen ? (
                <FaAlignRight></FaAlignRight>
              ) : (
                <FaAlignLeft></FaAlignLeft>
              )}
            </span>
          </button>
          <img src={logo} className="sidebar-logo-principal" />
        </header>

        <nav className="sidebar-menu-principal">
          <Link className="sidebar-button-principal" to="/user">
            <span className="">
              <FaHome></FaHome>
            </span>
            <p className="mt-3">home</p>
          </Link>
          <Link className="sidebar-button-principal" to={`/user/${id}/show`}>
            <span className="">
              <FaUserAlt></FaUserAlt>
            </span>
            <p className="mt-3">Usuario</p>
          </Link>

          <Link className="sidebar-button-principal" to="/product/products">
            <span className="">
              <FaProductHunt></FaProductHunt>
            </span>
            <p className="mt-3">Productos</p>
          </Link>
          <Link className="sidebar-button-principal" to="/cart/cart">
            <span className="">
              <FaSalesforce></FaSalesforce>
            </span>
            <p className="mt-3">Carrito de compras</p>
          </Link>

          <button className="sidebar-button-principal" onClick={handleLogout}>
            <span className="">
              <FaArrowCircleLeft></FaArrowCircleLeft>
            </span>
            <p className="mt-3">Salir</p>
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
