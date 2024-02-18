
import Swiper from "swiper"
import project_services_section_slider_img_1 from "../../images/project-services-section-slider-img-1.jpg"
import project_services_section_slider_img_2 from "../../images/project-services-section-slider-img-2.jpg"
import project_services_section_slider_img_3 from "../../images/project-services-section-slider-img-3.jpg"
import project_services_section_slider_img_4 from "../../images/project-services-section-slider-img-4.jpg"
import project_services_section_slider_img_5 from "../../images/project-services-section-slider-img-5.jpg"
import { ReactComponent as Arrow2 } from "../../images/icons/arrow-type-2.svg";
const ProjectServicesSection = () => {
    const swiper = new Swiper('.swiper', {
        navigation:{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
      });
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
                            </picture>
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