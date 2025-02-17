import Header from "../components/header";
import "../styles/HomePage.scss";

//TODO: Landing page
const HomePage = () => {
  return (
    <>
      <Header />
      <section className="body">
        <p>Revolucionando el arbitraje de Futból</p>
        <div className="intro">
          <p>
            Somos un emprendimiento mexicano dedicado a optimizar la labor
            arbitral a través de la tecnología. Nuestra aplicación, diseñada
            para smartwatch y smartphone, permite a los árbitros registrar
            eventos de manera eficiente y precisa durante los partidos.
          </p>
          <p className="intro_image">Aqui va una imagen</p>
        </div>
        <div className="motives_section">
          <p className="title">¿Porque eligir nuestra aplicacion?</p>
          <ul className="motives">
            <li>
              <b>Eficiencia en tiempo real: </b>Registra tarjetas, goles,
              cambios y otras incidencias sin necesidad de papel y lapiz.
            </li>
            <li>
              <b>Sincronización inteligente: </b>Toda la información se guarda
              automáticamente y puede consultarse desde cualquier dispositivo.
            </li>
            <li>
              <b>Diseño intuitiva: </b>Intefaz fácil de usar que permite un
              accesso rápido a las funciones esenciales.
            </li>
            <li>
              <b>Optimización del proceso: </b>Reduce errorres humanos y mejora
              la transparencia en el ar
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default HomePage;
