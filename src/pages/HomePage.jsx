import "../styles/HomePage.scss";

const HomePage = () => {
  return (
    <section className="body">
      {/* Introducción */}
      <div className="intro">
        <p>
          Somos un emprendimiento mexicano dedicado a optimizar la labor
          arbitral a través de la tecnología. Nuestra aplicación, diseñada para
          smartwatch y smartphone, permite a los árbitros registrar eventos de
          manera eficiente y precisa durante los partidos.
        </p>
        <img
          src="/whistle-time-landing/Images/Referee.png"
          alt="Árbitro"
          className="intro_image"
        />
      </div>

      {/* Sección de motivos */}
      <div className="motives_section">
        <p className="title">¿Por qué elegir nuestra aplicación?</p>
        <div className="motives">
          <ul className="motives-list">
            <li>
              <b>Eficiencia en tiempo real:</b> Registra tarjetas, goles,
              cambios y otras incidencias sin necesidad de papel y lápiz.
            </li>
            <li>
              <b>Sincronización inteligente:</b> Toda la información se guarda
              automáticamente y puede consultarse desde cualquier dispositivo.
            </li>
            <li>
              <b>Diseño intuitivo:</b> Interfaz fácil de usar que permite un
              acceso rápido a las funciones esenciales.
            </li>
            <li>
              <b>Optimización del proceso:</b> Reduce errores humanos y mejora
              la transparencia en el arbitraje.
            </li>
          </ul>
        </div>
      </div>

      {/* Sección de documentos */}
      <div className="documents_section">
        <p className="documents_title">Documentos importantes</p>
        <div className="buttons">
          <a
            href="/whistle-time-landing/docs/Aviso-de-Privacidad-Integral_WhistleTime.pdf"
            download
          >
            <button className="doc_button">
              Descargar Aviso de Privacidad
            </button>
          </a>
          <a
            href="/whistle-time-landing/docs/Términos-y-Condiciones-de-Uso_WhistleTime.pdf"
            download
          >
            <button className="doc_button">
              Descargar Términos y Condiciones
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
