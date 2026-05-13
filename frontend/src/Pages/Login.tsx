import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login: React.FC = () => {

  const [user, setUser] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleLogin = (): void => {

    if (user === "admin" && pass === "1234") {

      alert("Bienvenido a Moto Repuestos Avendaño");
      setError(false);

    } else {

      setError(true);

    }

  };

  return (

    <div className="login-container">

      {/* PANEL IZQUIERDO */}
      <div className="login-left">

        <div className="overlay">

          <h1>
            Moto Repuestos
            <span> Avendaño</span>
          </h1>

          <p>
            Repuestos, accesorios y mantenimiento
            para tu motocicleta en un solo lugar.
          </p>

        </div>

      </div>

      {/* LOGIN */}
      <div className="login-right">

        <div className="login-card">

          <div className="top">

            <div className="logo-circle">
              🏍
            </div>

            <h2>Iniciar Sesión</h2>

            <p>
              Bienvenido
            </p>

          </div>

          {/* INPUT USER */}
          <div className="input-group">

            <label>Usuario</label>

            <input
              type="text"
              placeholder="Ingrese su usuario"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />

          </div>

          {/* INPUT PASS */}
          <div className="input-group">

            <label>Contraseña</label>

            <input
              type="password"
              placeholder="Ingrese su contraseña"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />

          </div>

          {/* OPCIONES */}
          <div className="options">

            <label className="remember">

              <input type="checkbox" />

              Recordarme

            </label>

            <a href="#">
              ¿Olvidaste tu contraseña?
            </a>

          </div>

          {/* ERROR */}
          {error && (
            <p className="error">
              Usuario o contraseña incorrectos
            </p>
          )}

          {/* BOTON */}
          <button
            className="login-btn"
            onClick={handleLogin}
          >
            Ingresar
          </button>

          {/* DIVISOR */}
          <div className="divider">
            <span>o</span>
          </div>

          {/* GOOGLE */}
          <button className="google-btn">

            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              alt="google"
            />

            Continuar con Google

          </button>

          {/* REGISTRO */}
          <div className="register">

            ¿No tienes cuenta?

            <Link to="/registrar">
              Registrarse
            </Link>

          </div>

        </div>

      </div>

    </div>

  );
};

export default Login;