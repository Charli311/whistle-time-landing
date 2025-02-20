import "../styles/DownloadPage.scss";

const DownloadPage = () => {
  return (
    <section className="download-page">
      <div className="download-container">
        <h1>Descarga la App y Mejora tu Experiencia Arbitral</h1>
        <p>
          Nuestra aplicación está disponible en Google Play Store. Sigue estos
          sencillos pasos para comenzar a digitalizar tu labor arbitral:
        </p>

        <ol>
          <li>
            <b>Haz clic en el enlace de descarga:</b> Encuéntranos en la Play
            Store con un solo clic.
          </li>
          <li>
            <b>Instala la aplicación:</b> Compatible con dispositivos Android y
            smartwatch.
          </li>
          <li>
            <b>Regístrate y personaliza tu perfil:</b> Configura tu cuenta y
            empieza a usar la app.
          </li>
        </ol>

        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="download-button"
        >
          Descargar en Google Play
        </a>
        <p>
          No pierdas la oportunidad de llevar el arbitraje al siguiente nivel.
        </p>
      </div>
    </section>
  );
};

export default DownloadPage;
