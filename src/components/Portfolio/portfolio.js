import { Link } from "react-router-dom";

import "./portfolio.css";

function Portfolio() {
  return (
    <>
      <div className="portfolio-container">
        <div className="text">
          <h2>RESIDENTIAL</h2>
          <h5>Houses</h5>
        </div>
        <div className="portfolio-image-section">
          <Link to="../flatrock" className="link">
            <div className="flatrock">
              <img src="/home1.jpg" alt="flatrock" />
              <h2>Flatrock</h2>
            </div>
          </Link>
          <Link to="../flatrock2" className="link">
            <div className="flatrock">
              <img src="/bisely1.jpg" alt="flatrock2" />
              <h2>Bisley</h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Portfolio;
