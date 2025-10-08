import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Contactez-nous</h2>
        <div className="contact-wrapper">
          
          {/* Social Media Section */}
          <div className="contact-info">
            <h3>Suivez-nous</h3>
            <p>
              Restez connecté avec nous sur nos réseaux sociaux pour découvrir
              nos dernières nouveautés et offres exclusives.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon facebook">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon instagram">
                <FaInstagram />
              </a>
              <a href="https://wa.me/212619646265" target="_blank" rel="noreferrer" className="social-icon whatsapp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Form Section */}
          <div className="contact-form">
            <h3>Envoyez-nous un message</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Votre nom" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Votre email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Votre message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-submit">Envoyer</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
