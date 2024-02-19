
import Swiper from "swiper"
import React, {useRef, useEffect} from "react"
import project_services_section_slider_img_1 from "../../images/project-card-1.jpg"
import project_services_section_slider_img_2 from "../../images/project-card-2.jpg"
import project_services_section_slider_img_3 from "../../images/project-card-1.jpg"
import project_services_section_slider_img_4 from "../../images/project-card-2.jpg"
import project_services_section_slider_img_5 from "../../images/project-card-1.jpg"
import { ReactComponent as Arrow2 } from "../../images/icons/arrow-type-2.svg";

const ProjectServicesSection = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
      const projectServicesSliderElement = document.querySelector('.js-project-services-slider-init');
  
      if (projectServicesSliderElement) {
        const projectServicesSlider = new Swiper('.js-project-services-slider-init', {
          observeParents: true,
          observer: true,
          slidesPerView: 'auto',
          spaceBetween: 0,
          centeredSlides: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.js-project-services-slider-btn-next',
            prevEl: '.js-project-services-slider-btn-prev',
          },
          on: {
            slideChange: function () {
              const activeSlide = this.slides[this.activeIndex];
              const activeSlideIndex = activeSlide.getAttribute('data-our-workflow-slide');
              const graphs = document.querySelectorAll('.our-workflow-section__road-graph');
  
              graphs.forEach(graph => {
                const graphIndex = graph.getAttribute('data-our-workflow-graph');
                if (graphIndex === activeSlideIndex) {
                  graph.classList.add('is-show');
                } else {
                  graph.classList.remove('is-show');
                }
              });
            },
          },
        });
  
        sliderRef.current = projectServicesSlider;
      }
  
      document.querySelector('.js-project-services-slider-btn-next').addEventListener('click', () => {
        sliderRef.current.slideNext();
      });
  
      document.querySelector('.js-project-services-slider-btn-prev').addEventListener('click', () => {
        sliderRef.current.slidePrev();
      });
  
      return () => {
        if (sliderRef.current) {
          sliderRef.current.destroy();
        }
      };
    }, []);

    return (
        <section className="project-services-section">
            <div className="container container--size-md project-services-section__container">
                <h2 className="project-services-section__title">Проектные успехи</h2>
                <div className="js-project-services-slider-init project-services-section__slider swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide project-services-section__slider-slide">
                            <picture className="bg-color bg-color--theme-darkgrey bg-color--opacity-55 project-services-section__slider-picture">
                                <img src={project_services_section_slider_img_1} alt="Цифровое воссоединение" />
                            </picture>
                            <div className="project-services-section__slider-content">
                                <div className="project-services-section__slider-title">Цифровое<br />воссоединение</div>
                                <a href="#" className="btn btn--size-md btn--theme-accent-fill project-services-section__slider-btn">
                                    <span className="btn__inner">
                                        <span className="btn__title">Подробнее</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="swiper-slide project-services-section__slider-slide">
                            <picture className="bg-color bg-color--theme-darkgrey bg-color--opacity-55 project-services-section__slider-picture">
                                <img src={project_services_section_slider_img_2} alt="IT-инновации в синхроне" />
                            </picture>
                            <div className="project-services-section__slider-content">
                                <div className="project-services-section__slider-title">IT-инновации в<br />синхроне</div>
                                <a href="#" className="btn btn--size-md btn--theme-accent-fill project-services-section__slider-btn">
                                    <span className="btn__inner">
                                        <span className="btn__title">Подробнее</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="swiper-slide project-services-section__slider-slide">
                            <picture className="bg-color bg-color--theme-darkgrey bg-color--opacity-55 project-services-section__slider-picture">
                                <img src={project_services_section_slider_img_3} alt="Инновационное решение" />
                            </picture>url
                            <div className="project-services-section__slider-content">
                                <div className="project-services-section__slider-title">Инновационное<br />решение</div>
                                <a href="#" className="btn btn--size-md btn--theme-accent-fill project-services-section__slider-btn">
                                    <span className="btn__inner">
                                        <span className="btn__title">Подробнее</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="swiper-slide project-services-section__slider-slide">
                            <picture className="bg-color bg-color--theme-darkgrey bg-color--opacity-55 project-services-section__slider-picture">
                                <img src={project_services_section_slider_img_4} alt="Цифровое преображение" />
                            </picture>
                            <div className="project-services-section__slider-content">
                                <div className="project-services-section__slider-title">Цифровое<br />преображение</div>
                                <a href="#" className="btn btn--size-md btn--theme-accent-fill project-services-section__slider-btn">
                                    <span className="btn__inner">
                                        <span className="btn__title">Подробнее</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="swiper-slide project-services-section__slider-slide">
                            <picture className="bg-color bg-color--theme-darkgrey bg-color--opacity-55 project-services-section__slider-picture">
                                <img src={project_services_section_slider_img_5} alt="Синергия цифровой трансформации" />
                            </picture>
                            <div className="project-services-section__slider-content">
                                <div className="project-services-section__slider-title">Синергия цифровой<br />трансформации</div>
                                <a href="#" className="btn btn--size-md btn--theme-accent-fill project-services-section__slider-btn">
                                    <span className="btn__inner">
                                        <span className="btn__title">Подробнее</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="slider-control project-services-section__slider-control">
                        
                        <button type="button" className="swiper-button swiper-button--theme-gray swiper-button-prev js-project-services-slider-btn-prev">
                            <svg className="u-icon">
                                <Arrow2 />
                            </svg>
                        </button>
                        <div className="swiper-pagination"></div>
                        <button type="button" className="swiper-button swiper-button--theme-gray swiper-button-next js-project-services-slider-btn-next">
                            <svg className="u-icon">
                            <Arrow2 />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectServicesSection;