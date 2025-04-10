import { Link } from "react-router-dom";
import "./process.css";

function Process() {
  return (
    <>
      <div className="process-container">
        <h2>Design Process</h2>
        <p>
          At our firm, we take a structured and client-focused approach to
          custom home design and construction. <br />
          From the first meeting to the final handoff, every step is tailored to
          meet your vision, lifestyle, and budget.
        </p>
        <ul>
          <li>
            Conceptual Design
            <p>
              The process begins with a deep dive into your goals, preferences,
              and inspirations. In this phase, we establish the framework for
              your custom home, creating initial sketches and spatial layouts.
              Our team works closely with you to define the overall vision and
              ensure that it aligns with your needs.
            </p>
          </li>
          <li>
            Schematic Design
            <p>
              Building on the conceptual design, we further refine the layout
              and form of your home. This phase involves exploring architectural
              styles, massing, and spatial relationships. Our goal is to develop
              a clear and cohesive design direction that reflects your vision.
            </p>
          </li>
          <li>
            Design Development
            <p>
              With the schematic design approved, we transition to the design
              development phase. Here, we focus on refining details, selecting
              materials, and incorporating engineering systems. Our experience
              navigating material availability and market volatility ensures
              that we can advise on choices that align with your style and
              budget while minimizing delays.
            </p>
          </li>
          <li>
            Construction Documentation
            <p>
              In the final design phase, we produce detailed construction
              documents that include floor plans, elevations, sections,
              schedules and specifications. These comprehensive documents
              provide the roadmap for construction.
            </p>
          </li>
        </ul>
        <hr className="hr" />
        <p className="upper-text">
          Like one of our plans but want some changes? We’ll tailor it to your
          needs!
        </p>

        <Link to="../contact">
          <button className="contact-btn">Contact Us!</button>
        </Link>
        <hr className="hr" />
        <div className="seconde-list-container">
          <h2>Construction Process:</h2>
          <ul>
            <li>
              We guide you through selecting appliances, cabinets, tile,
              flooring, fixtures, and lighting options, leveraging our
              partnerships with trusted companies to secure competitive pricing.
            </li>
            <li>
              Throughout the process, your dedicated project manager ensures
              that timelines are met, and superior craftsmanship is maintained.
              You’ll have several walkthroughs at key stages of the build,
              giving you the opportunity to review progress and ensure every
              detail aligns with your vision.
            </li>
            <li>
              At the completion of your home, we conduct a final walkthrough and
              provide a detailed orientation, ensuring you are completely
              satisfied with the result.
            </li>
          </ul>
          <h3>
            By entrusting us with your project, you can focus on envisioning
            your dream home while we bring it to life!
          </h3>
        </div>
      </div>
    </>
  );
}
export default Process;
