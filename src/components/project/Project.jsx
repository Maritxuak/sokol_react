import React, { useRef, useEffect, useState } from "react";
import project_services_section_slider_img_1 from "../../images/project-card-1.jpg";
import project_services_section_slider_img_2 from "../../images/project-card-2.jpg";
import project_services_section_slider_img_3 from "../../images/project-card-1.jpg";
import project_services_section_slider_img_4 from "../../images/project-card-2.jpg";
import project_services_section_slider_img_5 from "../../images/project-card-1.jpg";
import { ReactComponent as Arrow2 } from "../../images/icons/arrow-type-2.svg";
import { useParams, Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import Swiper from "swiper";
import axios from "axios";
const ProjectServicesSection = ({ apiGet }) => {
  const [selectedSlideId, setSelectedSlideId] = useState(null);

  const [dignities, setDignities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openCardId, setOpenCardId] = useState(null);

  const handleCardClick = (id) => {
    setSelectedSlideId(id === selectedSlideId ? null : id);
  };

  const handleDetailsClick = async () => {
    if (selectedSlideId) {
      try {
        const response = await apiGet.get(`/read/project/${selectedSlideId}`);
      } catch (error) {
        console.error("Ошибка при получении информации о проекте:", error);
      }
    }
  };

  useEffect(() => {
    const fetchDignities = async () => {
      try {
        const response = await apiGet.get("/read/project/");

        if (response.data) {
          const formattedDignities = response.data.map((item) => ({
            id: item.id,
            name: item.name,
            category_services: item.category_services,
            bw_preview_photo: item.bw_preview_photo,
            c_preview_photo: item.c_preview_photo,
            title_photo: item.title_photo,
            dsc_realization: item.title_photo,
            photo_realization: item.photo_realization,
            quotes: item.quotes,
          }));
          setDignities(formattedDignities);
          console.log("dignities", dignities);
        } else {
          console.error("Объект data не определен");
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchDignities();
  }, [apiGet]);

  const sliderRef = useRef(null);

  useEffect(() => {
    const projectLayoutSliderInitElement = document.querySelector(
      ".js-project-services-slider-init"
    );
    if (projectLayoutSliderInitElement) {
      const projectLayoutSliderInit = new Swiper(
        ".js-project-services-slider-init",
        {
          slidesPerView: "auto",
          centeredSlides: true,
          loop: false,
          initialSlide: 0,
          observeParents: true,
          observer: true,
          spaceBetween: 0,
          autoHeight: false,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".js-project-services-slider-btn-next",
            prevEl: ".js-project-services-slider-btn-prev",
          },
          on: {
            slideChange: function () {
              const activeSlideProject = this.slides[this.activeIndex];
            },
          },
        }
      );

      sliderRef.current = projectLayoutSliderInit;
    }

    return () => {
      if (sliderRef.current) {
        sliderRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const updateActiveBullet = () => {
      const activeIndex = sliderRef.current.activeIndex;
      const paginationBullets = document.querySelectorAll(
        ".serviceBulletProject"
      );

      paginationBullets.forEach((bullet, index) => {
        if (index === activeIndex) {
          bullet.classList.add("swiper-pagination-bullet-active");
        } else {
          bullet.classList.remove("swiper-pagination-bullet-active");
        }
      });
    };

    if (sliderRef.current) {
      sliderRef.current.on("slideChange", updateActiveBullet);

      updateActiveBullet();
    }

    return () => {
      if (sliderRef.current) {
        sliderRef.current.off("slideChange", updateActiveBullet);
      }
    };
  }, [dignities]);

  const [currentSlideId, setCurrentSlideId] = useState(1);

  const handleSlideChange = (swiper) => {
    const currentSlide = dignities[swiper.activeIndex];
    setCurrentSlideId(currentSlide.id);
  };

  const handleNextClick1 = () => {
    if (sliderRef.current) {
      sliderRef.current.slideNext();
    }
  };

  const handlePrevClick1 = () => {
    if (sliderRef.current) {
      sliderRef.current.slidePrev();
    }
  };
  const handlePaginationClick = (sliderRef, slideId) => {
    if (sliderRef.current) {
      const slideIndex = dignities.findIndex((item) => item.id === slideId);
      if (slideIndex !== -1) {
        sliderRef.current.slideTo(slideIndex);
        setCurrentSlideId(slideId);
      }
    }
  };

  return (
    <>
    {dignities.length === 0 ? null : (
      <section id="projects" className="project-services-section">
          <div className="container container--size-md project-services-section__container">
            <h2 className="project-services-section__title">
              Проектные успехи
            </h2>
            <div className="js-project-services-slider-init project-services-section__slider swiper">
              <div className="swiper-wrapper">
                {dignities.map((item) => (
                  <div
                    key={item.id}
                    className="swiper-slide project-services-section__slider-slide"
                    data-our-workflow-slide-project={item.id}
                  >
                    <picture className="bg-color bg-color--theme-darkgrey bg-color--opacity-55 project-services-section__slider-picture">
                      <img
                        src={item.bw_preview_photo}
                        alt="Цифровое воссоединение"
                      />
                    </picture>
                    <div className="project-services-section__slider-content">
                      <div className="project-services-section__slider-title">
                        {item.name}
                      </div>
                      <Link
                        key={item.id}
                        to={`/project/${item.id}`}
                        className="btn btn--size-md btn--theme-accent-fill project-services-section__slider-btn"
                        onClick={handleDetailsClick}
                      >
                        <span className="btn__inner">
                          <span className="btn__title">Подробнее</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="slider-control project-services-section__slider-control">
                <button
                  onClick={handlePrevClick1}
                  type="button"
                  className="swiper-button swiper-button--theme-gray swiper-button-prev js-project-services-slider-btn-prev"
                >
                  <svg className="u-icon">
                    <Arrow2 />
                  </svg>
                </button>
                <div className="swiper-pagination">
                  {dignities.map((item) => (
                    <span
                      key={item.id}
                      value={item.id}
                      onClick={() => handlePaginationClick(sliderRef, item.id)}
                      className={
                        item.id === currentSlideId
                          ? "serviceBulletProject swiper-pagination-bullet-active swiper-pagination-bullet swiper-pagination-bullet-project"
                          : "serviceBulletProject swiper-pagination-bullet swiper-pagination-bullet-project"
                      }
                    ></span>
                  ))}
                </div>
                <button
                  onClick={handleNextClick1}
                  type="button"
                  className="swiper-button swiper-button--theme-gray swiper-button-next js-project-services-slider-btn-next"
                >
                  <svg className="u-icon">
                    <Arrow2 />
                  </svg>
                </button>
              </div>
            </div>
          </div>
      </section>
    )}
    </>
  );
};

export default ProjectServicesSection;
