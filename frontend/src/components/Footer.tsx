import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LOGO + INFO */}
        <div className="footer-section">
          <h2>Moto Repuestos Avendaño</h2>
          <p>Repuestos y accesorios de calidad para tu moto 🏍️</p>
          <p>📍 Managua, Nicaragua</p>
          <p>📞 +505 1234-5678</p>
        </div>

        {/* ENLACES */}
        <div className="footer-section">
          <h3>Enlaces</h3>
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Contacto</a>
        </div>

        {/* CATEGORÍAS */}
        <div className="footer-section">
          <h3>Categorías</h3>
          <a href="#">Repuestos</a>
          <a href="#">Accesorios</a>
          <a href="#">Mantenimiento</a>
        </div>

        {/* REDES */}
        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="socials">
            <span>📘</span>
            <span>📸</span>
            <span>🟢</span>
          </div>
        </div>

      </div>

      {/* COPY */}
      <div className="footer-bottom">
        © 2026 MotoRepuestoAvendaño | Todos los derechos reservados
      </div>

    </footer>
  );
}