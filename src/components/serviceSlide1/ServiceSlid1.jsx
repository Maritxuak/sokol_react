

import { ReactComponent as Arrow2 } from "../../images/icons/arrow-type-2.svg";
import React, { useRef, useCallback, useEffect, useState } from "react";
import Swiper from "swiper";
import { SelectItemIdProvider } from "../provider/Provider"

const ServiceSlidFirst = ({ idActive, setIdActive, apiGet, id, dignities = [], object }) => {
    let sliderKey = 1;
    console.log("айди", id)

    const [isLoading, setIsLoading] = useState(true);
    const [openCardId, setOpenCardId] = useState(null);

    // const handleCardClick = (id) => {
    //     setOpenCardId(id);
    // };
    // useEffect(() => {
    //     const fetchDignities = async () => {
    //         try {
    //             const response = await apiGet.get('/read/dcsCatServices/');
    //             if (response.data) {
    //                 const formattedDignities = response.data.map((item) => ({
    //                     id: item.id,
    //                     name: item.name,
    //                     category: item.category,
    //                     dsc: item.dsc,
    //                     included_in_the_service: item.included_in_the_service,
    //                 }));
    //                 setDignities(formattedDignities);
    //             } else {
    //                 console.error('Объект data не определен');
    //             }
    //             setIsLoading(false);
    //         } catch (error) {
    //             console.error(error);
    //             setIsLoading(false);
    //         }
    //     };

    //     fetchDignities();
    // }, []);




    const sliderRef3 = useRef(null);
    const handleBulletClick = (element) => {
        const slideId = parseInt(element);
        const slideIndex = sliderKey;

        if (slideIndex !== -1) {
            sliderRef3.current.slideTo(slideIndex);
            setCurrentSlideId(slideId);
        }
    };

    const handleIdActive = useCallback((pop) => {
        setIdActive(pop)
    }, [idActive]);
    const swiperInstance = sliderRef3.current;
    const handlePrevClick1 = (swiper) => {
        const currentSlide = document.querySelector('.swiper-slide-active');
        const currentSlideIndex = parseInt(currentSlide.getAttribute('serviceSlide'));
    
        const prevSlideIndex = currentSlideIndex === 1 ? sliderKey - 1 : currentSlideIndex - 1;
    
        swiper.slideTo(prevSlideIndex - 1);
        setCurrentSlideId(prevSlideIndex);
    };
    
    const handleNextClick1 = (swiper) => {
        const currentSlide = document.querySelector('.swiper-slide-active');
        const currentSlideIndex = parseInt(currentSlide.getAttribute('serviceSlide'));
    
        const nextSlideIndex = currentSlideIndex === sliderKey - 1 ? 1 : currentSlideIndex + 1;
    
        swiper.slideTo(nextSlideIndex - 1);
        setCurrentSlideId(nextSlideIndex);
    };
    const updatePaginationBulletClasses = (swiper) => {
        const bullets = document.querySelectorAll('.js-services-swiper-pagination-1 .swiper-pagination-bullet');
        let currentIndex = sliderKey;

        bullets.forEach((bullet, index) => {
            if (index === currentIndex) {
                bullet.classList.add('swiper-pagination-bullet-active');
            } else {
                bullet.classList.remove('swiper-pagination-bullet-active');
            }
        });
    };

    useEffect(() => {
        const servicesLayoutSliderInit1Element = document.querySelector('.js-services-layout-slider-init-1');

        if (servicesLayoutSliderInit1Element) {
            const servicesLayoutSliderInit1 = new Swiper('.js-services-layout-slider-init-1', {
                autoHeight: true,
                slidesPerView: 1,
                spaceBetween: 0,
                loop: false,
                allowTouchMove: false,
                pagination: {
                    el: '.js-services-swiper-pagination-1',
                    type: 'bullets',
                    clickable: true,
                },

                on: {
                    slideChange: function () {
                        const activeSlide = this.slides[this.activeIndex];
                        const activeSlideIndex = activeSlide.getAttribute('serviceSlide');
                        setCurrentSlideId(activeSlideIndex);
                        updatePaginationBulletClasses(this);
                    }
                }
            });

            sliderRef3.current = servicesLayoutSliderInit1;

            const blockLeft = document.querySelector('.js-services-slider-btn-prev-1');
            const blockRight = document.querySelector('.js-services-slider-btn-next-1');

            if (blockLeft && blockRight) {
                if (!blockLeft.onclick) {
                    blockLeft.addEventListener('click', () => handlePrevClick1(sliderRef3.current));
                }
                if (!blockRight.onclick) {
                    blockRight.addEventListener('click', () => handleNextClick1(sliderRef3.current));
                }
            }
        }

        return () => {
            if (sliderRef3.current) {
                sliderRef3.current.destroy();
            }
        };
    }, []);


    const [currentSlideId, setCurrentSlideId] = useState(1);

    const handlePaginationClick = (sliderRef, sliderKey) => {
        sliderRef.slideTo(sliderKey - 1);
        setCurrentSlideId(sliderKey);
    };



    const sliderRef = useRef(null);

    return (
        <SelectItemIdProvider>
            <div id="services-layout-1" className={idActive === 1 ? `row services-layout__row-main is-show` : "row services-layout__row-main"}>
                <div className="row__col--12 services-layout__main-col services-layout__main-col--title">
                    <h2 className="services-layout__main-title">{dignities.name} Что входит в услугу</h2>
                </div>
                <div className="row__col--6 services-layout__main-col services-layout__main-col--nav">
                    <ul className="services-layout__main-nav">

                        {dignities.map((item) => (
                            item.included_in_the_service.filter((service) => service.category === "1").map((service) => (
                                <li className="services-layout__main-nav-item" key={sliderKey}>
                                    <button onClick={() => handlePaginationClick(sliderRef3, sliderKey)} value={sliderKey} type="button" className={service.sliderKey === currentSlideId ? "serviceBullet js-services-slider-btn-nav-1 services-layout__main-nav-btn is-active" : "serviceBullet js-services-slider-btn-nav-1 services-layout__main-nav-btn"}>{service.name}</button>
                                </li>
                            ))
                        ))}

                    </ul>
                </div>
                <div className="row__col--6 services-layout__main-col services-layout__main-col--slider">
                    <div className="services-layout__main-slider-wrapper">
                        <div className="js-services-layout-slider-init-1 services-layout__main-slider">
                            <div className="swiper-wrapper">
                                {dignities.map((item) => (
                                    item.included_in_the_service.filter((service) => service.category === "1").map((service) => (
                                        <div key={sliderKey} className={"swiper-slide services-layout__main-slider-slide"} serviceSlide={sliderKey++}>
                                            <article className="services-layout__main-slider-item">
                                                <h3 className="services-layout__main-slider-item-title">{service.name}</h3>
                                                <div className="content services-layout__main-slider-item-text">
                                                    <p>{service.dsc}</p>
                                                </div>
                                            </article>
                                        </div>
                                    ))
                                ))}


                            </div>
                        </div>
                        <div className="slider-control services-layout__main-slider-control">
                            <button type="button" className=" js-services-slider-btn-prev-1 swiper-button swiper-button--theme-gray swiper-button-prev swiper-button-disabled'" onClick={() => handlePrevClick1(sliderRef)}>
                                <svg className="u-icon">
                                    <Arrow2 />
                                </svg>
                            </button>

                            <div className="js-services-swiper-pagination-1 swiper-pagination">
                                {dignities.map((item) => (
                                    item.included_in_the_service.filter((service) => service.category === "1").map((service) => (
                                        <span
                                            key={sliderKey}
                                            className={service.id === currentSlideId ? "serviceBullet2 swiper-pagination-bullet swiper-pagination-bullet-active" : "serviceBullet2 swiper-pagination-bullet"}
                                            onClick={() => handlePaginationClick(sliderRef3, sliderKey)}
                                        ></span>
                                    ))
                                ))}
                            </div>

                            <button type="button" className=" js-services-slider-btn-next-1 swiper-button swiper-button--theme-gray swiper-button-next" onClick={() => handleNextClick1(sliderRef)}>
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
}

export default ServiceSlidFirst;