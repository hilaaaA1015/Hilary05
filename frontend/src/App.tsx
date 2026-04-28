import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Hero />

      {/* SERVICIOS */}
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


     <section className="section gray-bg">
  <h2>¿Qué ofrecemos?</h2>

  <div className="services-grid">
    
    {/* TIENDA */}
    <div className="card">
      <img 
        src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
        className="icon"
        alt="Tienda"
      />
      <h3>Repuestos</h3>
      <p>Encuentra todo en un solo lugar.</p>
    </div>

    {/* CASCO DE MOTO */}
    <div className="card">
      <img 
        src="https://cdn-icons-png.flaticon.com/512/1686/1686898.png"
        className="icon"
        alt="Casco de moto"
      />
      <h3>Accesorios</h3>
      <p>Protección y estilo para tu moto.</p>
    </div>

    {/* LLAVE INGLESA */}
    <div className="card">
      <img 
        src="https://cdn-icons-png.flaticon.com/512/3063/3063822.png"
        className="icon"
        alt="Llave inglesa"
      />
      <h3>Mantenimiento</h3>
      <p>Servicio y cuidado profesional.</p>
    </div>

  </div>
</section>


      {/* PRODUCTOS */}
      <section className="section dark">
        <h2>Productos destacados</h2>

        <div className="products">
  <div className="product-card">
    <img src="/src/assets/producto2.png" alt="Batería moto" />
    <h3>Batería para moto</h3>

    <button className="btn-product">
      Ver producto
    </button>
  </div>

  <div className="product-card">
    <img src="/src/assets/producto1.png" alt="Aceite Motul" />
    <h3>Aceite Motul</h3>

    <button className="btn-product">
      Ver producto
    </button>
  </div>

  <div className="product-card">
    <img src="/src/assets/producto3.png" alt="Kit de arrastre" />
    <h3>Kit de arrastre</h3>

    <button className="btn-product">
      Ver producto
    </button>
  </div>
</div>
      </section>

      {/* PASOS */}
      <section className="section">
        <h2>¿Cómo comprar?</h2>

        <div className="steps">
          <div className="step">
            <div>1</div>
            <h3>Elige producto</h3>
          </div>

          <div className="step">
            <div>2</div>
            <h3>Contáctanos</h3>
          </div>

          <div className="step">
            <div>3</div>
            <h3>Recibe tu pedido</h3>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="section dark">
        
      </section>

      <Footer />
    </>
  );
}