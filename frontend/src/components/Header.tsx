import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="header">

      <div className="top-bar">

  {/* LOGO */}
  <div className="logo">
    <img src={logo} alt="logo" />
    <span>Moto Repuestos Avendaño</span>
  </div>

  {/* CENTRO */}
  <div className={`center-section ${openSearch ? "search-open" : ""}`}>

    {/* NAV */}
    <nav className="nav">
      <Link to="/">Inicio</Link>
      <Link to="/">Productos</Link>
      <Link to="/">Contacto</Link>
      <Link to="/">Acerca de nosotros</Link>
    </nav>

    {/* BUSCADOR */}
    <div className={`search-box ${openSearch ? "active" : ""}`}>
      <input type="text" placeholder="Buscar repuestos..." />
      <button onClick={() => setOpenSearch(false)}>✖</button>
    </div>

  </div>

  {/* ACCIONES */}
  <div className="actions">

    {/* LUPA */}
    <button onClick={() => setOpenSearch(!openSearch)}>
      <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" />
    </button>

    {/* CARRITO */}
    <button>
      <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" />
    </button>

    {/* LOGIN */}
    <button
      className="login"
      onClick={() => navigate("/login")}
    >
      Iniciar sesión
    </button>

  </div>

</div>

      {/* SUBMENU */}
      <div className="sub-bar">
        <span>Ofertas</span>
        <span>Repuestos</span>
        <span>Accesorios</span>
        <span>Mantenimiento</span>
      </div>

    </header>
  );
}