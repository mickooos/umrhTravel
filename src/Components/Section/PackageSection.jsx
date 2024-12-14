import paketSatu from "../../assets/images/paketsatu.png";
import paketDua from "../../assets/images/paketdua.png";
import paketTiga from "../../assets/images/pakettiga.png";

function PackageSection() {
  return (
    <section className="package" id="package">
      <div className="container">
        <p className="section-subtitle">Paket Populer</p>
        <h1 className="h2 section-title">
          🕋 Paket Umroh Ramadhan 1446 Hijriyah
        </h1>
        <p className="section-text">
          Paket yang paling cocok untuk kamu yang mau menunaikan ibadah Umroh
          dengan pahala setara Haji.
        </p>

        <ul className="package-list">
          <li>
            <div className="package-card">
              <figure className="card-banner">
                <img src={paketSatu} alt="Paket Satu" loading="lazy" />
              </figure>
              <div className="card-content">
                <h3 className="h3 card-title">
                  Umroh Ramadhan - Penerbangan Langsung Jakarta-Madinah
                </h3>
                <p className="card-text">
                  Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo
                  maiores, est aliquet porttitor! Eaque, cras, aspernatur.
                </p>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="time"></ion-icon>
                      <p className="text">11D/12N</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="people"></ion-icon>
                      <p className="text">Pax: 10</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="location"></ion-icon>
                      <p className="text">Madinah</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-price">
                <div className="wrapper">
                  <p className="reviews">(25 reviews)</p>
                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
                <p className="price">
                  Rp. 39,9 <span>juta</span>
                </p>
                <button className="btn btn-secondary">Book Now</button>
              </div>
            </div>
          </li>

          <li>
            <div className="package-card">
              <figure className="card-banner">
                <img src={paketDua} alt="Paket Dua" loading="lazy" />
              </figure>
              <div className="card-content">
                <h3 className="h3 card-title">
                  Umroh Lailatul Qadr - Malam Seribu Bulan di Kota Mekkah
                </h3>
                <p className="card-text">
                  Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo
                  maiores, est aliquet porttitor! Eaque, cras, aspernatur.
                </p>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="time"></ion-icon>
                      <p className="text">16D/17N</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="people"></ion-icon>
                      <p className="text">Pax: 10</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="location"></ion-icon>
                      <p className="text">Mekkah</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-price">
                <div className="wrapper">
                  <p className="reviews">(20 reviews)</p>
                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
                <p className="price">
                  Rp. 58,5 <span>juta</span>
                </p>
                <button className="btn btn-secondary">Book Now</button>
              </div>
            </div>
          </li>

          <li>
            <div className="package-card">
              <figure className="card-banner">
                <img
                  src={paketTiga}
                  alt="Santorini Island's Weekend Vacation"
                  loading="lazy"
                />
              </figure>
              <div className="card-content">
                <h3 className="h3 card-title">
                  Umroh Awal Ramadhan 1446H - Free Kereta Cepat - 27 Feb 2025
                </h3>
                <p className="card-text">
                  Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo
                  maiores, est aliquet porttitor! Eaque, cras, aspernatur.
                </p>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="time"></ion-icon>
                      <p className="text">11D/12N</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="people"></ion-icon>
                      <p className="text">pax: 10</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="location"></ion-icon>
                      <p className="text">Mekkah</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-price">
                <div className="wrapper">
                  <p className="reviews">(40 reviews)</p>
                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
                <p className="price">
                  Rp. 37,9 <span>juta</span>
                </p>
                <button className="btn btn-secondary">Book Now</button>
              </div>
            </div>
          </li>
        </ul>

        <button className="btn btn-primary">View All Packages</button>
      </div>
    </section>
  );
}

export default PackageSection;
