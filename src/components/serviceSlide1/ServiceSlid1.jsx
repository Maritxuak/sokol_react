import { ReactComponent as Arrow2 } from "../../images/icons/arrow-type-2.svg";
import React, { useRef, useCallback, useEffect, useState } from "react";
import Swiper from "swiper";
import { SelectItemIdProvider } from "../provider/Provider";

const ServiceSlidFirst = ({
  idActive,
  setIdActive,
  apiGet,
  id,
  dignities = [],
  object,
}) => {
  let sliderKey = 1;
  let paginationKey = 1;
  let pagination = 1;

  const sliderRef1 = useRef([]);

  const handlePrevClick1 = () => {
    sliderRef1.current.slidePrev();
  };
  const handleNextClick1 = () => {
    sliderRef1.current.slideNext();
  };

  useEffect(() => {
    const servicesLayoutSliderInit1Element = document.querySelector(
      ".js-services-layout-slider-init-1"
    );
    if (servicesLayoutSliderInit1Element) {
      const servicesLayoutSliderInit1 = new Swiper(
        ".js-services-layout-slider-init-1",
        {
          autoHeight: true,
          slidesPerView: 1,
          spaceBetween: 0,
          loop: false,
          allowTouchMove: false,
          pagination: {
            el: ".js-services-swiper-pagination-2",
            type: "bullets",
            clickable: true,
          },
          on: {
            slideChange: function () {
              const activeSlide = this.slides[this.activeIndex];
              if (activeSlide) {
                const activeSlideIndex = activeSlide.getAttribute("serviceSlide");
                setActiveSlide(activeSlideIndex);
              }
            },
          },
        }
      );

      sliderRef1.current = servicesLayoutSliderInit1;
    }

    return () => {
      if (sliderRef1.current) {
        sliderRef1.current.destroy();
      }
    };
  }, []);

  const [activeButton, setActiveButton] = useState(1);
  const [activeSlide, setActiveSlide] = useState(1);
  const [currentSlideId, setCurrentSlideId] = useState(1);

  const handleClick = (item, activeIdSlide) => {
    console.log("item", item);
    console.log("активный слайд", activeIdSlide.current.activeIndex);
    sliderRef1.current.slideTo(item - 1);
    setCurrentSlideId(item);
  };


  console.log("activeSlide", activeSlide);
  console.log("activeButton", activeButton);
  return (
    <SelectItemIdProvider>
      <div
        id="services-layout-1"
        className={
          idActive === 1
            ? `row services-layout__row-main is-show`
            : "row services-layout__row-main"
        }>
        <div className="row__col--12 services-layout__main-col services-layout__main-col--title">
          <h2 className="services-layout__main-title">
            {dignities.name} Что входит в услугу?
          </h2>
        </div>
        <div className="row__col--6 services-layout__main-col services-layout__main-col--nav">
          <ul className="services-layout__main-nav">
            {dignities.map((item) =>
              item.included_in_the_service
                .filter((service) => service.category === "1")
                .map((service) => {
                  const paggination = pagination;
                  pagination++;
                  return (
                    <li
                      className="services-layout__main-nav-item"
                    >
                      <button
                        onClick={() => handleClick(paggination, sliderRef1)}
                        type="button"
                        className={paggination - 1 ===
                          sliderRef1.current.activeIndex ? "serviceBullet js-services-slider-btn-nav-1 services-layout__main-nav-btn is-active" : "serviceBullet js-services-slider-btn-nav-1 services-layout__main-nav-btn"}>
                        {service.name}
                      </button>
                    </li>
                  );
                })
            )}
          </ul>
        </div>
        <div className="row__col--6 services-layout__main-col services-layout__main-col--slider">
          <div className="services-layout__main-slider-wrapper">
            <div className="js-services-layout-slider-init-1 services-layout__main-slider">
              <div className="swiper-wrapper">
                {dignities.map((item) =>
                  item.included_in_the_service
                    .filter((service) => service.category === "1")
                    .map((service) => {
                      return (
                        <div
                          key={sliderKey}
                          className={
                            "swiper-slide services-layout__main-slider-slide"
                          }
                          serviceSlide={sliderKey++}>
                          <article className="services-layout__main-slider-item">
                            <h3 className="services-layout__main-slider-item-title">
                              {service.name}
                            </h3>
                            <div className="content services-layout__main-slider-item-text">
                              <p>{service.dsc}</p>
                            </div>
                          </article>
                        </div>
                      );
                    })
                )}
              </div>
            </div>
            <div className="slider-control services-layout__main-slider-control">
              <button
                type="button"
                className=" js-services-slider-btn-prev-1 swiper-button swiper-button--theme-gray swiper-button-prev"
                onClick={() => handlePrevClick1(sliderRef1)}>
                <svg className="u-icon">
                  <Arrow2 />
                </svg>
              </button>

              <div className="js-services-swiper-pagination-1 swiper-pagination">
                {dignities.map((item) =>
                  item.included_in_the_service
                    .filter((service) => service.category === "1")
                    .map((service) => {
                      const pagginationKey = paginationKey;
                      paginationKey++;
                      return (
                        <span
                          key={pagginationKey}
                          className={
                            pagginationKey - 1 ===
                              sliderRef1.current.activeIndex
                              ? "serviceBullet2 swiper-pagination-bullet swiper-pagination-bullet-active"
                              : "serviceBullet2 swiper-pagination-bullet"
                          }
                          onClick={() =>
                            handleClick(pagginationKey, sliderRef1)
                          }></span>
                      );
                    })
                )}
              </div>

              <button
                type="button"
                className="js-services-slider-btn-next-1 swiper-button swiper-button--theme-gray swiper-button-next"
                onClick={() => handleNextClick1(sliderRef1)}>
                <svg className="u-icon">
                  <Arrow2 />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </SelectItemIdProvider>
  );
};

export default ServiceSlidFirst;
