import companyLogo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src={companyLogo} alt="Company Logo" />
            </a>
            <p className="footer-text">
              Menebar Berkah, Menginspirasi Perjalanan, Menjaga Harmoni
              Kehidupan.
            </p>
          </div>

          <div className="footer-contact">
            <h4 className="contact-title">Contact Us</h4>
            <ul>
              <li className="contact-item">
                <ion-icon name="call-outline"></ion-icon>
                <a href="tel:+01123456790" className="contact-link">
                  +62 8113567777
                </a>
              </li>
              <li className="contact-item">
                <ion-icon name="mail-outline"></ion-icon>
                <a href="mailto:info.tourly.com" className="contact-link">
                  cs@annisatravel.com
                </a>
              </li>
              <li className="contact-item">
                <ion-icon name="location-outline"></ion-icon>
                <address>
                  Jl. Raya Lenteng Agung No.8A, Jakarta Selatan 12630 -
                  Indonesia
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2024 <a href="">Annisa Travel</a>. All rights reserved
          </p>
          <ul className="footer-bottom-list">
            <li>
              <a href="#" className="footer-bottom-link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="footer-bottom-link">
                Term & Condition
              </a>
            </li>
            <li>
              <a href="#" className="footer-bottom-link">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
