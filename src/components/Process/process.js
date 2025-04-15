import { Link } from "react-router-dom";
import "./process.css";

function Process() {
  return (
    <>
      <div className="process-container">
        <h2>Architectural Design</h2>
        <div className="process-container process-container2">
          <p>
            At our firm, we take a structured and client-focused approach to
            custom home design and construction. <br />
            From the first meeting to the final handoff, every step is tailored
            to meet your vision, lifestyle, and budget.
          </p>
          <ul>
            <li>
              Conceptual Design
              <p>
                The process begins with a deep dive into your goals,
                preferences, and inspirations. In this phase, we establish the
                framework for your custom home, creating initial sketches and
                spatial layouts. Our team works closely with you to define the
                overall vision and ensure that it aligns with your needs.
              </p>
            </li>
            <li>
              Schematic Design
              <p>
                Building on the conceptual design, we further refine the layout
                and form of your home. This phase involves exploring
                architectural styles, massing, and spatial relationships. Our
                goal is to develop a clear and cohesive design direction that
                reflects your vision.
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
        </div>
        <hr className="hr" />
        <p className="upper-text">
          Like one of our plans but want some changes?
          <br /> We’ll tailor it to your needs!
        </p>

        <Link to="../contact">
          <button className="contact-btn">Contact Us!</button>
        </Link>
        <hr className="hr" />
        <div className="seconde-list-container process-container">
          <h2>Construction overview</h2>
          <ul>
            <li>
              Pre-Construction{" "}
              <p>
                Once the design is finalized and construction documents are
                complete, we move into pre-construction. This includes preparing
                and submitting plans for permits and initiating the competitive
                bidding process with our trusted trade partners. We use this
                phase to finalize your construction budget, establish timelines,
                and lock in material lead times.
              </p>
            </li>
            <li>
              Breaking Ground
              <p>
                {" "}
                As soon as permits are approved and bids are received, we’re
                ready to break ground. Your dedicated project manager will
                coordinate all aspects of the build—from site prep to final
                finishes—ensuring quality control, clear communication, and
                timely execution every step of the way.
              </p>
            </li>
            <li>
              Selections & Sourcing{" "}
              <p>
                We guide you through selecting appliances, cabinets, tile,
                flooring, fixtures, and lighting—leveraging our partnerships
                with reputable suppliers to offer high-quality options at
                competitive pricing.
              </p>
            </li>
            <li>
              Construction Walkthroughs{" "}
              <p>
                Throughout the build, you'll have scheduled walkthroughs at key
                milestones such as framing, mechanical rough-ins, and trim
                stages. These walkthroughs give you a chance to experience the
                progress first-hand and confirm that every detail aligns with
                your expectations.
              </p>
            </li>
            <li>
              Final Walkthrough & Home Orientation
              <p>
                {" "}
                At completion, we’ll conduct a detailed final walkthrough and
                provide a full home orientation. Our goal is to ensure you feel
                confident and excited stepping into your new home—knowing it was
                built with care, precision, and your vision at the center.
              </p>
            </li>
          </ul>
          <h2 className="text-underline">
            By entrusting us with your project, you can focus on envisioning
            your dream home while we bring it to life!
          </h2>
        </div>
      </div>
    </>
  );
}
export default Process;
