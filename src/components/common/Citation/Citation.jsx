import "./Citation.css";
// Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

// Required Modules
import { Pagination, Autoplay } from "swiper/modules";

const Citation = () => {
  return (
    <section className="citation">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={2200}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="citation-quote-container">
            <p className="citation-quote">&quot;D&apos;abord, résous le problème. Ensuite, écris le code.&quot;</p>
            <span className="citation-author">John Johnson</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="citation-quote-container">
            <p className="citation-quote">&quot;La programmation ne consiste pas à savoir, mais à découvrir.&quot;</p>
            <span className="citation-author">Chris Pine</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="citation-quote-container">
            <p className="citation-quote">&quot;L&apos;art de la programmation consiste à contrôler la complexité, pas à la créer.&quot;</p>
            <span className="citation-author">Edsger Dijkstra</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Citation;
