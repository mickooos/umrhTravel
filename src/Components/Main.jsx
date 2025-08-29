import HeroSection from "./Section/HeroSection";
import AboutUs from "./Section/AboutUs";
import PackageSection from "./Section/PackageSection";
import GallerySection from "./Section/GallerySection";
import Activity from "./Section/Activity";
import ContactSection from "./Section/ContactSection";

function HomePage() {
  return (
    <>
      <main>
        <article>
          <HeroSection />
          <AboutUs />
          <Activity />
          <PackageSection />
          <GallerySection />
          <ContactSection />
        </article>
      </main>
    </>
  );
}

export default HomePage;
