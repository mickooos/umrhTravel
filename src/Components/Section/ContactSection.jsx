function ContactSection() {
  return (
    <div className="contact-section" id="contactus">
      <p className="section-subtitle">Contact</p>
      <div className="contact-header">
        <h2 className="h2 section-title">Kontak Kami</h2>
      </div>

      <div className="contact-form-card">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nama</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Pesan</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;
