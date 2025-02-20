import "../styles/ContactPage.scss";

const ContactPage = () => {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <h1>Ponte en Contacto con Nosotros</h1>
        <p>
          Si tienes preguntas, comentarios o sugerencias, no dudes en
          contactarnos. Estamos aquí para apoyarte y mejorar tu experiencia con
          nuestra aplicación.
        </p>

        <div className="contact-info">
          <p>
            <b>Correo Electrónico: </b>
            <a href="mailto:contacto@whistletime.com">
              contacto@whistletime.com
            </a>
          </p>
          <p>
            <b>Teléfono: </b>
            <a href="tel:+525512345678">+52 55 1234 5678</a>
          </p>
        </div>

        <p>
          <b>Redes Sociales:</b> Síguenos en nuestras plataformas para más
          actualizaciones.
        </p>

        <div className="social-links">
          {/* <a
            href="https://facebook.com/whistletime"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/whistletime"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a> */}
          <a
            href="https://www.instagram.com/whistletime_oficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
