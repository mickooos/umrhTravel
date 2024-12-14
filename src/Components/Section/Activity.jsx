import poster from "../../assets/images/poster.jpg";

function Activity() {
  return (
    <section className="popular" id="activity">
      <div className="container">
        <p className="section-subtitle">Aktivitas</p>
        <h2 className="h2 section-title">Our Activity</h2>
        <p className="section-text">
          Kami menyediakan layanan perjalanan umroh terpercaya untuk pengalaman
          spiritual yang nyaman dan berkesan.
        </p>

        <div className="popular-list">
          <div className="popular-card">
            <figure className="card-img">
              <img src={poster} alt="Journey Of Faith" loading="lazy" />
            </figure>
            <div className="card-content">
              <p className="card-subtitle">
                <a href="#">Senayan, Jakarta</a>
              </p>
              <h3 className="h3 card-title">
                <a href="#">JOURNEY OF FAITH – PAMERAN UMRAH DAN HAJI 2025</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Activity;
