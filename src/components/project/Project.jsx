import React, { useRef, useEffect, useState } from "react"
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
        const projectLayoutSliderInitElement = document.querySelector('.js-project-services-slider-init');
        if (projectLayoutSliderInitElement) {
            const projectLayoutSliderInit = new Swiper('.js-project-services-slider-init', {
                slidesPerView: 'auto',
                centeredSlides: true,
                loop: false,
                initialSlide: 0,
                observeParents: true,
                observer: true,
                spaceBetween: 0,
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
                        const activeSlideProject = this.slides[this.activeIndex];
                    }
                }
            })
            sliderRef.current = projectLayoutSliderInit
        }

        return () => {
            if (sliderRef.current) {
                sliderRef.current.destroy();
            }
        }
    }, [])

    useEffect(() => {
        const updateActiveBullet = () => {
            const activeIndex = sliderRef.current.activeIndex;
            const paginationBullets = document.querySelectorAll('.serviceBulletProject');
            
            paginationBullets.forEach((bullet, index) => {
                if (index === activeIndex) {
                    bullet.classList.add('swiper-pagination-bullet-active');
                } else {
                    bullet.classList.remove('swiper-pagination-bullet-active');
                }
            });
        };
    
        sliderRef.current.on('slideChange', updateActiveBullet);
        return () => {
            sliderRef.current.off('slideChange', updateActiveBullet);
        };

        updateActiveBullet();
    }, []);

    const [currentSlideId, setCurrentSlideId] = useState(1);

    const handleSlideChange = (swiper) => {
        const currentSlide = el[swiper.activeIndex];
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
            const slideIndex = el.findIndex(item => item.id === slideId);
            if (slideIndex !== -1) {
                sliderRef.current.slideTo(slideIndex);
                setCurrentSlideId(slideId);
            }
        }
    };



    const el = [
        {
            "id": 1,
            "name": "1Ирий",
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
            "name": "2Ирий",
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
            "name": "3Ирий",
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
            "name": "4Ирий",
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
                            <div className="swiper-slide project-services-section__slider-slide" data-our-workflow-slide-project={item.id}>
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

                        <button onClick={handlePrevClick1} type="button" className="swiper-button swiper-button--theme-gray swiper-button-prev js-project-services-slider-btn-prev">
                            <svg className="u-icon">
                                <Arrow2 />
                            </svg>
                        </button>
                        <div className="swiper-pagination">
                            {el.map((item) => (
                                <span value={item.id} onClick={() => handlePaginationClick(sliderRef, item.id)} className={item.id === currentSlideId ?"serviceBulletProject swiper-pagination-bullet-active swiper-pagination-bullet swiper-pagination-bullet-project": "serviceBulletProject swiper-pagination-bullet swiper-pagination-bullet-project"}></span>
                            ))}
                        </div>
                        <button onClick={handleNextClick1} type="button" className="swiper-button swiper-button--theme-gray swiper-button-next js-project-services-slider-btn-next">
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
