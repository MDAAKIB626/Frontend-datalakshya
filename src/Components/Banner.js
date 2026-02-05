import "./Banner.css";
import banner from "./homeimages20/bannerimg.jpeg";

export default function Banner() {
  return (
    <section className="banner" id="home">
      <div className="banner-left" data-aos="fade-right">
        <h1 className="hero-title typing">
          Welcome to <span className="dl-data">Data</span>{" "}
          <span className="dl-lakshya">Lakshya!</span>
        </h1>

        <h6 className="hero-subtitle">
          Empowering Minds with Data and AI
        </h6>

        <button className="banner-btn">
          Start Your Journey at Data Lakshya
        </button>
      </div>

      <div className="banner-right" data-aos="fade-left">
        <div className="banner-card">
          <img src={banner} alt="Data Lakshya Founder" />
        </div>
      </div>
    </section>
  );
}
