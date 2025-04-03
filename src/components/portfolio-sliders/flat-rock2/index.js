import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.css";
function Flatrock2() {
  return (
    <div className="slider-container">
      <div className="slider-section">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="sliderimage">
              <img src="flatrock2.png" alt="imag1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sliderimage">
              <img src="/swiper2.png" alt="img2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sliderimage">
              <img src="/swiper3.png" alt="imag1" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
export default Flatrock2;
