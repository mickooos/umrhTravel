import React from "react";
import hotel from "../../assets/images/hotel.png";
import airplane from "../../assets/images/airplane.png";
import kabah from "../../assets/images/kabah.png";
import mosque from "../../assets/images/mosque.png";
import quality from "../../assets/images/quality.png";
import trophy from "../../assets/images/trophy.png";

const AboutUs = () => {
  return (
    <section className="about-us" id="aboutus">
      <div className="about-us-cards">
        <p className="section-subtitle">About Us</p>
        <div className="about-header">
          <h2 className="h2 section-title">
            Alasan Kamu Harus Pilih Annisa Travel
          </h2>
          <p className="section-text">
            Annisa Travel adalah perusahaan travel umroh terpercaya yang
            melayani jamaah sejak 2003, dengan pelayanan untuk pribadi maupun
            perusahaan. Kami resmi terdaftar di Kementerian Agama RI dan
            menawarkan pengalaman ibadah yang nyaman dan terjamin.
          </p>
        </div>
        <div className="cards-container">
          <div className="card">
            <img src={kabah} alt="Ikon Terpercaya" className="card-icon" />
            <h3>Terpercaya melayani jamaah sejak 2003</h3>
            <p>Pribadi & Perusahaan</p>
          </div>
          <div className="card">
            <img
              src={mosque}
              alt="Ikon Resmi Terdaftar"
              className="card-icon"
            />
            <h3>Resmi terdaftar di kementrian agama RI</h3>
          </div>
          <div className="card">
            <img src={airplane} alt="Ikon Maskapai" className="card-icon" />
            <h3>Maskapai penerbangan full service.</h3>
            <p>(bukan LCC)</p>
          </div>
          <div className="card">
            <img src={hotel} alt="Ikon Manasik" className="card-icon" />
            <h3>Annisa Travel memiliki ruang manasik private</h3>
          </div>
          <div className="card">
            <img src={quality} alt="Ikon Jadwal" className="card-icon" />
            <h3>Jaminan kepastian jadwal/tanggal keberangkatan</h3>
          </div>
          <div className="card">
            <img src={trophy} alt="Ikon Pembimbing" className="card-icon" />
            <h3>Pembimbing & Muthowif berpengalaman</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
