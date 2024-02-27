import Swiper from "swiper";
import { ReactComponent as Arrow2 } from "../../images/icons/arrow-type-2.svg";
import React, { useRef, useCallback, useEffect, useState } from "react";

const ServiceSliderSecond = ({idActive, setIdActive}) => {
    const sliderRef1 = useRef(null);
    
    const handleBulletClick = (element) => {
        sliderRef1.current.slideTo(parseInt(element) - 1);
        setCurrentSlideId(parseInt(element));
    };

    const handleIdActive = useCallback((pop) => {
        setIdActive(pop)
    }, [idActive]);



    const handlePrevClick1 = () => {
        const prevSlideId = currentSlideId === 1 ? el.length : currentSlideId - 1;
        sliderRef1.current.slideTo(prevSlideId - 1);
        setCurrentSlideId(prevSlideId);
    };

    const handleNextClick1 = () => {
        const nextSlideId = currentSlideId === el.length ? 1 : currentSlideId + 1;
        sliderRef1.current.slideTo(nextSlideId - 1);
        setCurrentSlideId(nextSlideId);
    };


    const updatePaginationBulletClasses = (swiper) => {
        const bullets = document.querySelectorAll('.js-services-swiper-pagination-2 .swiper-pagination-bullet');
        bullets.forEach((bullet, index) => {
            if (index === swiper.activeIndex) {
                bullet.classList.add('swiper-pagination-bullet-active');
            } else {
                bullet.classList.remove('swiper-pagination-bullet-active');
            }
        });
    };

    useEffect(() => {
        const servicesLayoutSliderInit1Element = document.querySelector('.js-services-layout-slider-init-2');

        if (servicesLayoutSliderInit1Element) {
            const servicesLayoutSliderInit1 = new Swiper('.js-services-layout-slider-init-2', {
                autoHeight: true,
                slidesPerView: 1,
                spaceBetween: 0,
                loop: false,
                allowTouchMove: false,
                pagination: {
                    el: '.js-services-swiper-pagination-2',
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

            sliderRef1.current = servicesLayoutSliderInit1;

            const blockLeft = document.querySelector('.js-services-slider-btn-prev-2');
            const blockRight = document.querySelector('.js-services-slider-btn-next-2');

            if (blockLeft && blockRight) {
                if (!blockLeft.onclick) {
                    blockLeft.addEventListener('click', () => handlePrevClick1(sliderRef1.current));
                }
                if (!blockRight.onclick) {
                    blockRight.addEventListener('click', () => handleNextClick1(sliderRef1.current));
                }
            }

        }

        return () => {
            if (sliderRef1.current) {
                sliderRef1.current.destroy();
            }
        };
    }, []);


    const [currentSlideId, setCurrentSlideId] = useState(1);

    const handleSlideChange = (swiper) => {
        const currentSlide = el[swiper.activeIndex];
        setCurrentSlideId(currentSlide.id);
    };

    const handlePaginationClick = (sliderRef1, id) => {
        sliderRef1.current.slideTo(id - 1);
        setCurrentSlideId(id);
    };



    const sliderRef = useRef(null);


    
    const el = [
        {
            id: 1,
            title: "1Создание уникального дизайна",
            description: "Исследование целевой аудитории помогает компаниям разработать более целевые и эффективные стратегии продвижения продукта, создать более убедительные сообщения и предложения, а также улучшить опыт пользователей, что в свою очередь способствует увеличению конверсии и удержанию клиентов."
        },
        {
            id: 2,
            title: "2Интеграция с CRM системой для управления контактами ЦА.",
            description: "Исследование целевой аудитории помогает компаниям разработать более целевые"
        },
        {
            id: 3,
            title: "3Тестирование и анализ эффективности лендинга",
            description: "Исследование целевой аудитории помогает компаниям разработать более целевые и эффективные стратегии продвижения продукта, создать более убедительные сообщения и предложения, а также улучшить опыт пользователей, что в свою очередь способствует увеличению конверсии и удержанию клиентов."
        },
        {
            id: 4,
            title: "4Тестирование и анализ эффективности лендинга",
            description: "Исследование целевой аудитории помогает компаниям разработать более целевые и эффективные стратегии продвижения продукта, создать более убедительные сообщения и предложения, а также улучшить опыт пользователей, что в свою очередь способствует увеличению конверсии и удержанию клиентов."
        },
        {
            id: 5,
            title: "5Тестирование и анализ эффективности лендинга",
            description: "Исследование целевой аудитории помогает компаниям разработать более целевые и эффективные стратегии продвижения продукта, создать более убедительные сообщения и предложения, а также улучшить опыт пользователей, что в свою очередь способствует увеличению конверсии и удержанию клиентов."
        },
        {
            id: 6,
            title: "6Тестирование и анализ эффективности лендинга",
            description: "Исследование целевой аудитории помогает компаниям разработать более целевые и эффективные стратегии продвижения продукта, создать более убедительные сообщения и предложения, а также улучшить опыт пользователей, что в свою очередь способствует увеличению конверсии и удержанию клиентов."
        },
        {
            id: 7,
            title: "7Тестирование и анализ эффективности лендинга",
            description: "Исследование целевой аудитории помогает компаниям разработать более целевые и эффективные стратегии продвижения продукта, создать более убедительные сообщения и предложения, а также улучшить опыт пользователей, что в свою очередь способствует увеличению конверсии и удержанию клиентов."
        },
        {
            id: 8,
            title: "8Тестирование и анализ эффективности лендинга",
            description: "Исследование целевой аудитории помогает компаниям разработать более целевые и эффективные стратегии продвижения продукта, создать более убедительные сообщения и предложения, а также улучшить опыт пользователей, что в свою очередь способствует увеличению конверсии и удержанию клиентов."
        },
        {
            id: 9,
            title: "9Тестирование и анализ эффективности лендинга",
            description: "Исследование целевой аудитории помогает компаниям разработать более целевые и эффективные стратегии продвижения продукта, создать более убедительные сообщения и предложения, а также улучшить опыт пользователей, что в свою очередь способствует увеличению конверсии и удержанию клиентов."
        },
        {
            id: 10,
            title: "10Тестирование и анализ эффективности лендинга",
            description: "Исследование целевой аудитории помогает компаниям разработать более целевые и эффективные стратегии продвижения продукта, создать более убедительные сообщения и предложения, а также улучшить опыт пользователей, что в свою очередь способствует увеличению конверсии и удержанию клиентов."
        },

    ]

    return (
        <div id="services-layout-2" className={idActive === 2 ? `row services-layout__row-main is-show` : "row services-layout__row-main"}>
                            <div className="row__col--22 services-layout__main-col services-layout__main-col--title">
                                <h2 className="services-layout__main-title">Что входит в услугу</h2>
                            </div>
                            <div className="row__col--6 services-layout__main-col services-layout__main-col--nav">
                                <ul className="services-layout__main-nav">
                                    {el.map((item) => (
                                        <li className="services-layout__main-nav-item" key={item.id}>
                                            <button onClick={() => handlePaginationClick(sliderRef1, item.id)} value={item.id} type="button" className={item.id === currentSlideId ? "serviceBullet js-services-slider-btn-nav-2 services-layout__main-nav-btn is-active" : "serviceBullet js-services-slider-btn-nav-2 services-layout__main-nav-btn"}>{item.title}</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="row__col--6 services-layout__main-col services-layout__main-col--slider">
                                <div className="services-layout__main-slider-wrapper">
                                    <div className="js-services-layout-slider-init-2 services-layout__main-slider">
                                        <div className="swiper-wrapper">
                                            {el.map((item) => (
                                                <div className={"swiper-slide services-layout__main-slider-slide"} serviceSlide={item.id}>
                                                    <article className="services-layout__main-slider-item">
                                                        <h3 className="services-layout__main-slider-item-title">{item.title}</h3>
                                                        <div className="content services-layout__main-slider-item-text">
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </article>
                                                </div>

                                            ))}
                                        </div>
                                    </div>
                                    <div className="slider-control services-layout__main-slider-control">
                                        <button type="button" className=" js-services-slider-btn-prev-2 swiper-button swiper-button--theme-gray swiper-button-prev swiper-button-disabled'" onClick={() => handlePrevClick1(sliderRef)}>
                                            <svg className="u-icon">
                                                <Arrow2 />
                                            </svg>
                                        </button>

                                        <div className="js-services-swiper-pagination-2 swiper-pagination">
                                            {el.map((item) => (
                                                <span
                                                    key={item.id}
                                                    className={item.id === currentSlideId ? "serviceBullet2 swiper-pagination-bullet swiper-pagination-bullet-active" : "serviceBullet2 swiper-pagination-bullet"}
                                                    onClick={() => handlePaginationClick(sliderRef1, item.id)}
                                                ></span>
                                            ))}
                                        </div>

                                        <button type="button" className=" js-services-slider-btn-next-2 swiper-button swiper-button--theme-gray swiper-button-next" onClick={() => handleNextClick1(sliderRef)}>
                                            <svg className="u-icon">
                                                <Arrow2 />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
    );
}
export default ServiceSliderSecond;