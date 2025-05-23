import { Link } from "react-router-dom";
import "./Louisville.css";
function Louisville() {
  return (
    <div className="louisville-container">
      <div className="text">
        <h1>Louisville Homearama 2025</h1>
        <p>
          <span className="span-header">
            We’re excited to be part of{" "}
            <a
              href="https://www.homearama.com/"
              target="_blank"
              rel="noreferrer"
            >
              Homearama{" "}
            </a>
            this year!
          </span>

          <br />
          <div className="map-container">
            <div>
              <p>
                Come tour both of our featured homes and experience the
                craftsmanship, thoughtful design, and attention to detail that
                sets our work apart. Each home showcases a unique architectural
                style and a curated mix of materials, finishes, and floor plan
                ideas to inspire your future build. Whether you're looking for
                design inspiration or ready to start your custom home journey,
                we’d love to meet you in person and walk you through what we do
                best. Stay tuned for event dates, home locations, and sneak
                peeks—coming soon!
              </p>
              <h3>Event Dates and Hours</h3>
              <div className="timing-container">
                <div>
                  <h3>Dates</h3>
                  <ul>
                    <li>September 5, 6, 7 </li>
                    <li>September 12, 13, 14 </li>
                    <li>September 19, 20, 21</li>
                  </ul>
                </div>
                <div>
                  <h3>Hours:</h3>
                  <ul>
                    <li>Fridays: 5-8 pm </li>
                    <li>Saturdays: 10 am - 6 pm</li>
                    <li>Sundays: 1-6 pm</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div style={{ width: "100%" }}>
                <iframe
                  width="100%"
                  height="300"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=16707%20Bisley%20Place,%20Louisville,%20KY,%20USA+(Bisley%20Place,%20Louisville,%20KY,%20USA)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  title="Bisley Place Location Map"
                >
                  <a href="https://www.gps.ie/collections/drones/">
                    drone quadcopter
                  </a>
                </iframe>
              </div>
            </div>
          </div>
        </p>

        <div className="flex-one">
          <Link to="/flatrock">
            <div className="image-container">
              <img src="/bisely4.jpg" alt="homeimage" />
              <div className="rotate-text">
                <h3>FlatRock</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex-one">
          <Link to="/flatrock2">
            <div className="image-container">
              <img src="/bisely2.jpg" alt="homeimage" />
              <div className="rotate-text">
                <h3>Bisley</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Louisville;
