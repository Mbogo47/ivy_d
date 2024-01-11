import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";

//swiper css
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

//Import Blog images
import AdImage1 from "../../../assets/images/ads/ad-image-1.jpg";
import AdImage2 from "../../../assets/images/ads/ad-image-2.jpg";
import AdImage3 from "../../../assets/images/ads/ad-image-3.jpg";

const AdSwiper = () => {
  const adSwiper = [
    {
      id: 1,
      AdImage: AdImage1
    },
    {
      id: 2,
      AdImage: AdImage2
    },
    {
      id: 3,
      AdImage: AdImage3
    }
  ];

  SwiperCore.use([Autoplay, Pagination]);
  return (
    <React.Fragment>
      <Swiper
        loop={true}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        autoHeight={true}
        pagination={{ clickable: true }}
      >
        <div className="swiper-wrapper">
          {(adSwiper || []).map((adSwiperDetails, key) => (
            <SwiperSlide key={key}>
              <img
                src={adSwiperDetails.AdImage}
                alt=""
                className="img-fluid rounded-3"
                style={{
                    height:"500px",
                    width:"100%",
                    objectFit:"cover"
                }}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </React.Fragment>
  );
};

export default AdSwiper;
