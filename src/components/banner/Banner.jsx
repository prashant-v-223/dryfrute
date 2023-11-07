import React, { useMemo } from "react";
import Link from "next/link";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { banner1Data } from "../../data/bannerData";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

const Banner = () => {
  const bannerSlideSetting = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      loop: true,
      autoplay: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: ".swiper-pagination1",
        clickable: true,
      },
    };
  },[])
  return (
    <>
      <div className="banner-section">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12">
              <Swiper {...bannerSlideSetting} className="swiper banner1-slider">
                <div className="swiper-wrapper">
                  {banner1Data.map((e) => {
                    const {
                      id,
                      banner_img,
                      title,
                      description,
                      discount,
                      blackFriday,
                    } = e;
                    return (
                      <SwiperSlide className="swiper-slide" key={id}>
                        <div className="banner-wrapper w-100">
                          <div className="banner-right-wrapper w-100">
                            <div className="banner-right-img w-100">
                              {blackFriday ? (
                                <img
                                  src="/assets/img/home1/banner-right-tag.png"
                                  alt=""
                                  className="discount-tag"
                                />
                              ) : (
                                <></>
                              )}
                              <img
                                src={banner_img}
                                alt=""
                                className="banner-right-bg"
                              />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </div>
                <div className="swiper-pagination1" />
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
