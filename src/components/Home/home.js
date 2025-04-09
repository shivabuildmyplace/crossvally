import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "./home.css";

function Home() {
  return (
    <div className="home-swiper">
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        {[...Array(3)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="sliderimage2">
              <img
                src={`/home${index + 1}.jpg`}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Home;
