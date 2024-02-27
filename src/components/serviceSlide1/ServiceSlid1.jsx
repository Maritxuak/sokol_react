

import { ReactComponent as Arrow2 } from "../../images/icons/arrow-type-2.svg";
import React, { useRef, useCallback, useEffect, useState } from "react";
import Swiper from "swiper";


const ServiceSlidFirst = ({ idActive, setIdActive, actualId = [], apiGet }) => {    const activeId = actualId;
    const [dignities, setDignities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [openCardId, setOpenCardId] = useState(null);
    console.log("actualId", activeId)
    const handleCardClick = (id) => {
        setOpenCardId(id);
    };
    useEffect(() => {
        const fetchDignities = async () => {
            try {
                const response = await apiGet.get('/read/dcsCatServices/');
                if (response.data) {
                    const formattedDignities = response.data.map((item) => ({
                        id: item.id,
                        name: item.name,
                        category: item.category,
                        dsc: item.dsc,
                        included_in_the_service: item.included_in_the_service,
                    }));
                    setDignities(formattedDignities);
                } else {
                    console.error('Объект data не определен');
                }
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        fetchDignities();
    }, []);





    const sliderRef3 = useRef(null);

    const handleBulletClick = (element) => {
        sliderRef3.current.slideTo(parseInt(element) - 1);
        setCurrentSlideId(parseInt(element));
    };

    const handleIdActive = useCallback((pop) => {
        setIdActive(pop)
    }, [idActive]);



    const handlePrevClick1 = () => {
        const prevSlideId = currentSlideId === 1 ? dignities.length : currentSlideId - 1;
        sliderRef3.current.slideTo(prevSlideId - 1);
        setCurrentSlideId(prevSlideId);
    };

    const handleNextClick1 = () => {
        const nextSlideId = currentSlideId === dignities.length ? 1 : currentSlideId + 1;
        sliderRef3.current.slideTo(nextSlideId - 1);
        setCurrentSlideId(nextSlideId);
    };


    const updatePaginationBulletClasses = (swiper) => {
        const bullets = document.querySelectorAll('.js-services-swiper-pagination-1 .swiper-pagination-bullet');
        bullets.forEach((bullet, index) => {
            if (index === swiper.activeIndex) {
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
                    dignities: '.js-services-swiper-pagination-1',
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

    const handleSlideChange = (swiper) => {
        const currentSlide = dignities[swiper.activeIndex];
        setCurrentSlideId(currentSlide.id);
    };

    const handlePaginationClick = (sliderRef3, id) => {
        sliderRef3.current.slideTo(id - 1);
        setCurrentSlideId(id);
    };



    const sliderRef = useRef(null);

    // slide2




    return (
        <>
            <div id="services-layout-1" className={idActive === 1 ? `row services-layout__row-main is-show` : "row services-layout__row-main"}>
                <div className="row__col--12 services-layout__main-col services-layout__main-col--title">
                    <h2 className="services-layout__main-title">Что входит в услугу</h2>
                </div>
                <div className="row__col--6 services-layout__main-col services-layout__main-col--nav">
                    <ul className="services-layout__main-nav">
                        {dignities.filter((item) => actualId.includes(item.id)).map((item) => (
                            <li className="services-layout__main-nav-item" key={item.id}>
                                <button onClick={() => handlePaginationClick(sliderRef3, item.id)} value={item.id} type="button" className={item.id === currentSlideId ? "serviceBullet js-services-slider-btn-nav-1 services-layout__main-nav-btn is-active" : "serviceBullet js-services-slider-btn-nav-1 services-layout__main-nav-btn"}>{item.name}</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="row__col--6 services-layout__main-col services-layout__main-col--slider">
                    <div className="services-layout__main-slider-wrapper">
                        <div className="js-services-layout-slider-init-1 services-layout__main-slider">
                            <div className="swiper-wrapper">
                                {dignities.filter((item) => actualId.includes(item.id)).map((item) => (
                                    <div key={item.id} className={"swiper-slide services-layout__main-slider-slide"} serviceSlide={item.id}>
                                        <article className="services-layout__main-slider-item">
                                            <h3 className="services-layout__main-slider-item-title">{item.name}</h3>
                                            <div className="content services-layout__main-slider-item-text">
                                                <p>{item.dsc}</p>
                                            </div>
                                        </article>
                                    </div>
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
                                {dignities.filter((item) => actualId.includes(item.id)).map((item) => (
                                    <span
                                        key={item.id}
                                        className={item.id === currentSlideId ? "serviceBullet2 swiper-pagination-bullet swiper-pagination-bullet-active" : "serviceBullet2 swiper-pagination-bullet"}
                                        onClick={() => handlePaginationClick(sliderRef3, item.id)}
                                    ></span>
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
        </>
    );
}

export default ServiceSlidFirst;