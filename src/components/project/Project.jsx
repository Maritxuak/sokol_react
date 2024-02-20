import React, { useRef, useEffect } from "react"
import project_services_section_slider_img_1 from "../../images/project-card-1.jpg"
import project_services_section_slider_img_2 from "../../images/project-card-2.jpg"
import project_services_section_slider_img_3 from "../../images/project-card-1.jpg"
import project_services_section_slider_img_4 from "../../images/project-card-2.jpg"
import project_services_section_slider_img_5 from "../../images/project-card-1.jpg"
import { ReactComponent as Arrow2 } from "../../images/icons/arrow-type-2.svg";
import { Pagination } from "swiper/modules"
import Swiper from 'swiper';
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
                Pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    type: 'bullets',
                },
                navigation: {
                    nextEl: '.js-project-services-slider-btn-next',
                    prevEl: '.js-project-services-slider-btn-prev',
                },
                on: {
                    slideChange: function () {
                        const activeSlide = this.slides[this.activeIndex];
                        const activeSlideIndex = activeSlide.getAttribute('data-our-workflow-slide');
                        const paginationBullets = document.querySelectorAll('.swiper-pagination-bullet');
                        paginationBullets.forEach(bullet => {
                            const bulletIndex = bullet.getAttribute('value');
                            if (bulletIndex === activeSlideIndex) {
                                bullet.classList.add('swiper-pagination-bullet-active');
                            } else {
                                bullet.classList.remove('swiper-pagination-bullet-active');
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

    const el = [
        {
            "id": 1,
            "name": "Ирий",
            "category_services": 1,
            "bw_preview_photo": project_services_section_slider_img_1,
            "c_preview_photo": { project_services_section_slider_img_1 },
            "title_photo": { project_services_section_slider_img_1 },
            "dsc_project": "описание о проекте",
            "dsc_task": "описание о задаче",
            "photo_task": { project_services_section_slider_img_1 },
            "dsc_realization": "описание о реализации",
            "photo_realization": { project_services_section_slider_img_1 },
            "quotes": [
                1,
                2
            ]
        },
        {
            "id": 2,
            "name": "Ирий",
            "category_services": 1,
            "bw_preview_photo": project_services_section_slider_img_1,
            "c_preview_photo": { project_services_section_slider_img_1 },
            "title_photo": { project_services_section_slider_img_1 },
            "dsc_project": "описание о проекте",
            "dsc_task": "описание о задаче",
            "photo_task": { project_services_section_slider_img_1 },
            "dsc_realization": "описание о реализации",
            "photo_realization": { project_services_section_slider_img_1 },
            "quotes": [
                1,
                2
            ]
        },
        {
            "id": 3,
            "name": "Ирий",
            "category_services": 1,
            "bw_preview_photo": project_services_section_slider_img_1,
            "c_preview_photo": { project_services_section_slider_img_1 },
            "title_photo": { project_services_section_slider_img_1 },
            "dsc_project": "описание о проекте",
            "dsc_task": "описание о задаче",
            "photo_task": { project_services_section_slider_img_1 },
            "dsc_realization": "описание о реализации",
            "photo_realization": { project_services_section_slider_img_1 },
            "quotes": [
                1,
                2
            ]
        },
        {
            "id": 4,
            "name": "Ирий",
            "category_services": 1,
            "bw_preview_photo": project_services_section_slider_img_1,
            "c_preview_photo": { project_services_section_slider_img_1 },
            "title_photo": { project_services_section_slider_img_1 },
            "dsc_project": "описание о проекте",
            "dsc_task": "описание о задаче",
            "photo_task": { project_services_section_slider_img_1 },
            "dsc_realization": "описание о реализации",
            "photo_realization": { project_services_section_slider_img_1 },
            "quotes": [
                1,
                2
            ]
        },
    ];






    return (
        <section className="project-services-section">
            <div className="container container--size-md project-services-section__container">
                <h2 className="project-services-section__title">Проектные успехи</h2>
                <div className="js-project-services-slider-init project-services-section__slider swiper">
                    <div className="swiper-wrapper">
                        {el.map((item) => (
                            <div className="swiper-slide project-services-section__slider-slide" data-our-workflow-slide={item.id}>
                                <picture className="bg-color bg-color--theme-darkgrey bg-color--opacity-55 project-services-section__slider-picture">
                                    <img src={item.bw_preview_photo} alt="Цифровое воссоединение" />
                                </picture>
                                <div className="project-services-section__slider-content">
                                    <div className="project-services-section__slider-title">{item.name}</div>
                                    <a href="#" className="btn btn--size-md btn--theme-accent-fill project-services-section__slider-btn">
                                        <span className="btn__inner">
                                            <span className="btn__title">Подробнее</span>
                                        </span>
                                    </a>
                                </div>
                            </div >
                        ))}
                    </div>



                    <div className="slider-control project-services-section__slider-control">

                        <button type="button" className="swiper-button swiper-button--theme-gray swiper-button-prev js-project-services-slider-btn-prev">
                            <svg className="u-icon">
                                <Arrow2 />
                            </svg>
                        </button>
                        <div className="swiper-pagination">
                            {el.map((item) => (
                                <span value={item.id} className="swiper-pagination-bullet"></span>
                            ))}
                        </div>
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
