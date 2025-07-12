import { FaDatabase, FaArrowDown } from "react-icons/fa";
import "../assets/styles/Hero.css";
import RotatingText from "../components/RotatingText";
import avatar_portfolio from "../assets/img/avatar_portfolio.png";

const Hero = () => {
  const scrollToMain = () => {
    document.getElementById("main-portfolio")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const titleSkills = [
    "Full Stack Developer",
    "Back-End Developer",
    "Front-End Developer",
    "SQL Database",
    "Mobile Developer",
  ];

  return (
    <section className="hero">
      <div className="hero_background">
        <div className="hero_blob hero_blob--cyan"></div>
        <div className="hero_blob hero_blob--emerald"></div>
        <div className="hero_blob hero_blob--violet"></div>
      </div>

      <div className="hero_content">
        <div className="hero_profile">
          <div className="hero_avatar-container">
            <img
              src={avatar_portfolio}
              alt="Bernal Bogantes"
              className="hero_avatar"
            />
          </div>

          <h1 className="hero_name">Bernal Bogantes Conejo</h1>
          <RotatingText
            texts={titleSkills}
            mainClassName="hero-rotatingtext"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />

          <p className="hero_description">
            If you're looking for someone who can deliver reliable,
            high-performance solutions, I'd love to connect.
          </p>
        </div>

        <div className="hero_tech-stack">
          <div className="hero_tech-container">
            {/* Database */}
            <div className="hero_tech-item">
              <div className="hero_database">
                <FaDatabase className="hero_database-icon" />
                <span className="hero_database-label">SQL Database</span>
              </div>
            </div>

            {/* Server */}
            <div className="hero_tech-item">
              <div className="hero_server">
                <div className="hero_server-rack">
                  <div className="hero_server-unit hero_server-unit--active"></div>
                  <div className="hero_server-unit hero_server-unit--active"></div>
                  <div className="hero_server-unit hero_server-unit--standby"></div>
                  <div className="hero_server-unit hero_server-unit--inactive"></div>
                </div>
                <span className="hero_server-label">Backend</span>
              </div>
            </div>

            {/* Mobile */}
            <div className="hero_tech-item">
              <div className="hero_mobile">
                <div className="hero_mobile-screen">
                  <div className="hero_mobile-app"></div>
                  <div className="hero_mobile-bars">
                    <div className="hero_mobile-bar hero_mobile-bar--long"></div>
                    <div className="hero_mobile-bar hero_mobile-bar--medium"></div>
                    <div className="hero_mobile-bar hero_mobile-bar--short"></div>
                  </div>
                </div>
                <span className="hero_mobile-label">Mobile App</span>
              </div>
            </div>

            {/* API */}
            <div className="hero_tech-item">
              <div className="hero_api">
                <div className="hero_api-endpoints">
                  <div className="hero_api-endpoint">
                    <span className="hero_api-method hero_api-method--get">
                      GET
                    </span>
                    <span>/api/users</span>
                  </div>
                  <div className="hero_api-endpoint">
                    <span className="hero_api-method hero_api-method--post">
                      POST
                    </span>
                    <span>/api/auth</span>
                  </div>
                  <div className="hero_api-endpoint">
                    <span className="hero_api-method hero_api-method--put">
                      PUT
                    </span>
                    <span>/api/data</span>
                  </div>
                </div>
                <span className="hero_api-label">REST API</span>
              </div>
            </div>
          </div>
        </div>

        <button onClick={scrollToMain} className="hero_scroll">
          <span className="hero_scroll-text">Scroll down</span>
          <FaArrowDown className="hero_scroll-icon" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
