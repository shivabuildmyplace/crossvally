import "./index.css";
function Flatrock2() {
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
            <h5>Bisley</h5>
            <h3>
              2-story residence with finished basement | 3,732 SF
              <br />4 bedroom, 4.5 bath
            </h3>
            <hr />
          </div>
          <h3>
            Bisley is a transitional custom home that blends traditional
            character with contemporary openness. The two-story great room
            features a fireplace that rises the full height of the space,
            establishing a timeless focal point and bringing a sense of vertical
            elegance to the main living area.
            <br />{" "}
            <h3>
              Natural light gently shapes the interiors, pouring into the great
              room through large windows and filtering through to the upper
              level. A window at the stair landing brings light into the
              vertical core of the home, while the open loft above offers both a
              visual connection to the living space below and a sense of
              openness that balances comfort with volume.
              <br /> The finished basement features two exposed structural
              beams, adding a touch of industrial character that contrasts with
              the home's tailored finishes—bringing texture and visual interest
              to the lower level.
            </h3>
            <br />
          </h3>
        </div>
      </div>
    </div>
  );
}
export default Flatrock2;
