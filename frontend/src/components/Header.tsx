import { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <header className="header">

      <div className="top-bar">

        {/* LOGO */}
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>Moto Repuestos Avendaño</span>
        </div>

        {/* NAV */}
        <nav className={`nav ${openSearch ? "hide" : ""}`}>
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Contacto</a>
          <a href="#">Acerca de nosotros</a>
        </nav>

        {/* BUSCADOR DESLIZANTE */}
        <div className={`search-box ${openSearch ? "active" : ""}`}>
          <input type="text" placeholder="Buscar repuestos..." />
          <button onClick={() => setOpenSearch(false)}>✖</button>
        </div>


        {/* ACCIONES */}
        <div className="actions">
          <button onClick={() => setOpenSearch(true)}>
            <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" />
          </button>

          <button>
            <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" />
          </button>

          <button className="login">Iniciar sesión</button>
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