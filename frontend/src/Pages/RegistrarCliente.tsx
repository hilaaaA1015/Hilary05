import "./RegistrarCliente.css"
export default function RegistrarCliente() {
  return (
    <div className="registro-container">

      <div className="registro-card">

        <h1>Crear cuenta</h1>

        <p>
          Regístrate para comprar repuestos y accesorios.
        </p>

        <form>

          <input
            type="text"
            placeholder="Nombre completo"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
          />

          <input
            type="password"
            placeholder="Contraseña"
          />

          <input
            type="password"
            placeholder="Confirmar contraseña"
          />

          <button type="submit">
            Registrarse
          </button>

        </form>

      </div>

    </div>
  );
}