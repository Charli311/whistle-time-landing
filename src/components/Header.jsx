import { Link } from "react-router-dom";
import "../styles/Header.scss";

const Header = () => {
  //Todo: Arreglar los colores
  return (
    <header className="head">
      <div className="logo">Whistle Time</div>
      <nav className="nav">
        <Link to="/" className="nav-link">
          Inicio
        </Link>
        <Link to="/download" className="nav-link">
          Descarga
        </Link>
        <Link to="/contact" className="nav-link">
          Contacto
        </Link>
      </nav>
    </header>
  );
};

export default Header;
