
import "./Home.css";
import Hero from "./Hero";

import producto1 from "../assets/producto1.png";
import producto2 from "../assets/producto2.png";
import producto3 from "../assets/producto3.png";
import producto4 from "../assets/producto4.png";
import producto5 from "../assets/producto5.png";
import producto6 from "../assets/producto6.png";
import producto7 from "../assets/producto7.png";
import producto8 from "../assets/producto8.png";
import producto9 from "../assets/producto9.png";

export default function Home() {

  return (
    <>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/50578738726?text=Hola%20quiero%20información%20sobre%20repuestos"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
        />
      </a>

      {/* HERO */}
  <Hero/>

      {/* SERVICIOS */}
      {/* SERVICIOS */}
<section className="section gray-bg">

  <div className="section-title">

    <span className="mini-title">
      NUESTROS SERVICIOS
    </span>

    <h2>
      ¿Qué ofrecemos?
    </h2>

  </div>

  <div className="services-grid">

    {/* CARD 1 */}
    <div className="card">

      <div className="icon-box">
        <img
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
          className="icon"
          alt="Tienda"
        />
      </div>

      <h3>
        Repuestos
      </h3>

      <p>
        Encuentra baterías, carburadores,
        bobinas y todo tipo de piezas.
      </p>

      <button className="service-btn">
        Ver más
      </button>

    </div>

    {/* CARD 2 */}
    <div className="card">

      <div className="icon-box">
        <img
          src="https://img.icons8.com/color/96/motorcycle.png"
          className="icon"
          alt="Casco"
        />
      </div>

      <h3>
        Accesorios
      </h3>

      <p>
        Cascos, guantes y accesorios
        para mejorar tu experiencia.
      </p>

      <button className="service-btn">
        Ver más
      </button>

    </div>

    {/* CARD 3 */}
    <div className="card">

      <div className="icon-box">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1995/1995470.png"
          className="icon"
          alt="Mantenimiento"
        />
      </div>

      <h3>
        Mantenimiento
      </h3>

      <p>
        Servicio profesional para mantener
        tu moto en perfecto estado.
      </p>

      <button className="service-btn">
        Ver más
      </button>

    </div>
{/* CARD 4 */}
<div className="card">

  <div className="icon-box">
    <img
      src="https://img.icons8.com/color/96/motorcycle.png"
      className="icon"
      alt="Moto"
    />
  </div>

  <h3>
    Lubricantes
  </h3>

  <p>
    Aceites y productos premium
    para el cuidado de tu moto.
  </p>

  <button className="service-btn">
    Ver más
  </button>

</div>

  </div>

</section>
      {/* PRODUCTOS DESTACADOS */}
      <section className="section dark">

        <h2>Productos destacados</h2>

        <div className="products">

          <div className="product-card">
            <img src={producto2} alt="Batería moto" />
            <h3>Batería para moto</h3>

            <button className="btn-product">
              Ver producto
            </button>
          </div>

          <div className="product-card">
            <img src={producto1} alt="Aceite Motul" />
            <h3>Aceite Motul</h3>

            <button className="btn-product">
              Ver producto
            </button>
          </div>

          <div className="product-card">
            <img src={producto3} alt="Kit de arrastre" />
            <h3>Kit de arrastre</h3>

            <button className="btn-product">
              Ver producto
            </button>
          </div>

        </div>

      </section>

      {/* PRODUCTOS INFZ */}
      <section className="section dark">

        <h2>Repuestos</h2>

        <div className="products">

          <div className="product-card">
            <img src={producto4} alt="Batería moto" />
            <h3>Batería para moto</h3>

            <button className="btn-product">
              Ver producto
            </button>
          </div>

          <div className="product-card">
            <img src={producto5} alt="Batería" />
            <h3>Batería</h3>

            <button className="btn-product">
              Ver producto
            </button>
          </div>

          <div className="product-card">
            <img src={producto6} alt="Bobina" />
            <h3>Bobina de encendido</h3>

            <button className="btn-product">
              Ver producto
            </button>
          </div>

          <div className="product-card">
            <img src={producto7} alt="Kit transmisión" />
            <h3>Kit de transmisión</h3>

            <button className="btn-product">
              Ver producto
            </button>
          </div>

          <div className="product-card">
            <img src={producto8} alt="Carburador" />
            <h3>Carburador universal</h3>

            <button className="btn-product">
              Ver producto
            </button>
          </div>

          <div className="product-card">
            <img src={producto9} alt="Casco" />
            <h3>Casco</h3>

            <button className="btn-product">
              Ver producto
            </button>
          </div>

          <div className="product-card">
            <img src={producto3} alt="Kit arrastre" />
            <h3>Kit de arrastre</h3>

            <button className="btn-product">
              Ver producto
            </button>
          </div>


          <div className="product-card">
            <img src={producto3} alt="Kit de arrastre" />
            <h3>Kit de arrastre</h3>

            <button className="btn-product">
              Ver producto
            </button>
          </div>

        </div>

      </section>

    </>
  );
}