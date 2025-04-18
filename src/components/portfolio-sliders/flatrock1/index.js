import "./index.css";

function Flatrock1() {
  let images = [
    "bisely1.jpg",
    "bisely3.jpg",
    "bisely4.jpg",
    "img11.png",
    "img12.png",
    "img13.png",
    "img14.png",
    "img15.png",
  ];
  return (
    <div className="slider-container">
      {/* <h5>Flatrock</h5> */}
      <div className="flex-container">
        <ul>
          {images.map((items) => (
            <li className="pageImages">
              <div className="image-slider">
                <img src={items} alt={items} loading="eager" />
              </div>
            </li>
          ))}
        </ul>
        <div className="content">
          <div className="heading-container">
            <h5>Flatrock</h5>
            <h3>
              2-story residence with finished basement | 4,080 sf <br />4
              bedroom, 4.5 bath
            </h3>
            <hr />
          </div>
          <h3>
            Flatrock is a thoughtfully designed custom home that celebrates
            open-plan living and spatial continuity.
            <br />{" "}
            <h3>
              At the heart of the design is a mono stringer floating staircase
              with solid walnut treads—an architectural focal point that
              enhances the vertical openness of the two-story great room. A
              modern fireplace anchors the living space, featuring a clean-lined
              hearth that offers the option for integrated seating or custom
              cushions—blurring the line between function and design. Natural
              light floods the interior through expansive windows and an 8'x8'
              sliding glass door that connects the great room to the outdoor
              living area, creating a seamless indoor-outdoor experience.
            </h3>
            <br />
            <h3>
              {" "}
              An exposed structural steel beam spans the main living space,
              offering a subtle visual divide between the great room and the
              kitchen island and dining area. This element adds both definition
              and industrial character to the open plan. In the kitchen, the
              area around the range is purposefully minimal, allowing the
              full-height backsplash to become a visual statement. The space is
              equipped with a complete chef’s kitchen, balancing aesthetics with
              high performance. Upstairs, each secondary bedroom features its
              own en-suite bathroom, offering privacy and convenience—ideal for
              modern family living or hosting guests.
            </h3>
          </h3>
        </div>
      </div>
    </div>
  );
}
export default Flatrock1;
