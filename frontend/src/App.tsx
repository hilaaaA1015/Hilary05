import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Login from "./Pages/Login";
import Registro from "./Pages/RegistrarCliente";

import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import "./App.css";

export default function App() {

  const location = useLocation();

  return (
    <>

      {/* OCULTAR HEADER EN LOGIN */}
      {location.pathname !== "/login" && 
      location.pathname !== "/registrar" && <Header/>}

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

         <Route
          path="/registrar"
          element={<Registro />}
        />


      </Routes>

      {/* OCULTAR FOOTER EN LOGIN */}
      {location.pathname !== "/login" &&
 location.pathname !== "/registrar" && <Footer />}
    </>
  );
}