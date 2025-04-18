import "./home.css";

function Home() {
  return (
    <div className="home-swiper">
      <div className="sliderimage2">
        <img
          loading="eager"
          src="/bisely4.jpg"
          alt="Slide 1"
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}

export default Home;
