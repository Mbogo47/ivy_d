import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import "../../../assets/scss/heroswiper.scss";
import { Link } from "react-router-dom";
import FindPets from "./FindPets";
import AdPreview from "../../PostYourAdd/components/AdPreviewListing.js"
import { useTranslation } from "react-i18next";

// swiper css
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// import Hero images
import heroImage1 from "../../../assets/images/home/hero-image-1.jpg";
import heroImage2 from "../../../assets/images/home/hero-image-2.jpg";
import heroImage3 from "../../../assets/images/home/hero-image-3.jpg";
import heroImage4 from "../../../assets/images/home/hero-image-4.jpg";


const HeroSwiper = () => {
  const [swiper, setSwiper] = useState(null);

  const heroSwiper = [
    {
      id: 1,
      heroImage: heroImage2,
    },
    {
      id: 2,
      heroImage: heroImage1,
    },
    {
      id: 3,
      heroImage: heroImage3,
    },
    {
      id: 4,
      heroImage: heroImage4,
    },
  ];

  SwiperCore.use([Autoplay, Pagination]);

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };
 const { t } = useTranslation();
  return (
    <React.Fragment>
      <div className="hero-section">
        <Swiper
          loop={true}
          slidesPerView={1}
          autoHeight={true}
          pagination={{ clickable: true }}
          className="swiper-main"
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          <div className="swiper-wrapper">
            {(heroSwiper || []).map((heroSwiperDetails, key) => (
              <SwiperSlide key={key}>
                <img
                  src={heroSwiperDetails.heroImage}
                  alt=""
                  className="swiper-img"
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div className="background"></div>

        <div className="hero-content">
          <h1>{t("heroparagraph")}</h1>
          <p>{t("heroparagraph")}</p>

          <div className="action-buttons">
            <Link to="/postyourad">
              <button className="post-ad-button">{ t("postyourad")}</button>
            </Link>
            <button className="view-ads-button">{t("viewads")}</button>
          </div>
        </div>

        <div className="swiper-buttons">
          <button onClick={handlePrev}>
            <FaAngleLeft />
          </button>
          <button onClick={handleNext}>
            <FaAngleRight />
          </button>
        </div>
      </div>
      <FindPets />
      <div className="preview">
        <AdPreview />
        <AdPreview />
      </div>
    </React.Fragment>
  );
};

export default HeroSwiper;
