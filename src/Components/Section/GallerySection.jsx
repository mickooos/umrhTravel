import jamaahOne from "../../assets/images/jmh.jpg";
import jamaahTwo from "../../assets/images/jmh2.jpg";
import jamaahThree from "../../assets/images/jmh3.jpg";
import jamaahFour from "../../assets/images/jmh4.jpg";
import jamaahFive from "../../assets/images/jmh5.jpg";
import jamaahSix from "../../assets/images/jmh6.jpg";
import jamaahSeven from "../../assets/images/jmh7.jpg";
import jamaahEight from "../../assets/images/jmh8.jpg";
import jamaahNine from "../../assets/images/jmh9.jpg";

function GallerySection() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <p className="section-subtitle">News</p>
        <h2 className="h2 section-title">
          Sampainya Jamaah Annisa Travel di Mekkah
        </h2>
        <p className="section-text">
          Saat tiba di Mekkah, jamaah Annisa Travel disambut dengan penuh
          kehormatan dan kenyamanan. Kami memastikan setiap langkah perjalanan
          ibadah mereka berjalan lancar, aman, dan penuh berkah.
        </p>

        <ul className="gallery-list">
          <li className="gallery-item">
            <figure className="gallery-image">
              <img src={jamaahThree} alt="Gallery image" />
            </figure>
          </li>

          <li className="gallery-item">
            <figure className="gallery-image">
              <img src={jamaahFive} alt="Gallery image" />
            </figure>
          </li>

          <li className="gallery-item">
            <figure className="gallery-image">
              <img src={jamaahOne} alt="Gallery image" />
            </figure>
          </li>

          <li className="gallery-item">
            <figure className="gallery-image">
              <img src={jamaahFour} alt="Gallery image" />
            </figure>
          </li>

          <li className="gallery-item">
            <figure className="gallery-image">
              <img src={jamaahTwo} alt="Gallery image" />
            </figure>
          </li>

          <li className="gallery-item">
            <figure className="gallery-image">
              <img src={jamaahSix} alt="Gallery image" />
            </figure>
          </li>

          <li className="gallery-item">
            <figure className="gallery-image">
              <img src={jamaahSeven} alt="Gallery image" />
            </figure>
          </li>

          <li className="gallery-item">
            <figure className="gallery-image">
              <img src={jamaahEight} alt="Gallery image" />
            </figure>
          </li>

          <li className="gallery-item">
            <figure className="gallery-image">
              <img src={jamaahNine} alt="Gallery image" />
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default GallerySection;
