
import { ReactComponent as Arrow2 } from "../../images/icons/arrow-type-2.svg";
import React, { useRef, useCallback, useEffect, useState } from "react";
import Swiper from "swiper";
import ServiceSliderSecond from "../serviceSlide2/ServiceSlid2";
import ServiceSlidFirst from "../serviceSlide1/ServiceSlid1";
const ServicesLayout = () => {

    const [idActive, setIdActive] = React.useState(0)

    const handleIdActive = useCallback((pop) => {
        setIdActive(pop)
    }, [idActive]);

    



    // slide2
    
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

    const el2 = [
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
        <>
            <section className="services-layout site__services-layout">
                <div className="container container--size-md services-layout__container">
                    <h1 className="services-layout__title">Создание и оптимизация лендингов и мультилендингов</h1>
                    <div className="row services-layout__row-content">
                        <div className="row__col--6 services-layout__col services-layout__col--item">
                            <article className="services-layout__item">
                                <p className="services-layout__item-suptitle">Разработка систем с веб-интерфейсом</p>
                                <h3 className="services-layout__item-title">Создание и оптимизация лендингов и&nbsp;мультилендингов</h3>
                                <p className="services-layout__item-suptitle">Кол-во часов работы</p>
                                <p className="services-layout__item-price">от 70 до 130ч</p>
                                <div className="services-layout__item-btns">
                                    <a href="#services-layout-1" className={idActive === 1 ? `js-services-layout-nav btn btn--size-md btn--theme-gray-outline services-layout__item-btn is-active` : "js-services-layout-nav btn btn--size-md btn--theme-gray-outline services-layout__item-btn"} onClick={() => handleIdActive(1)}>
                                        <span className="btn__inner">
                                            <span className="btn__title">Как это вам поможет?</span>
                                        </span>
                                    </a>

                                    <a href="#services-layout-2" className={idActive === 2 ? `js-services-layout-nav btn btn--size-md btn--theme-gray-outline services-layout__item-btn is-active` : "js-services-layout-nav btn btn--size-md btn--theme-gray-outline services-layout__item-btn"} onClick={() => handleIdActive(2)}>
                                        <span className="btn__inner">
                                            <span className="btn__title">Это поможет</span>
                                        </span>
                                    </a>

                                </div>
                            </article>
                        </div>
                        <div className="row__col--6 services-layout__col services-layout__col--content">
                            <div className="content services-layout__description">
                                <p>При заказе данной услуги специалисты проведут анализ вашего текущего лендинга, и&nbsp;работу с мультилендингами.</p>
                                <p>В результате вы получите оптимизированный и эффективный лендинг, способствующий повышению конверсии и привлечению целевой аудитории.</p>
                            </div>
                        </div>
                    </div>
                    <div className="services-layout__main">
                        <ServiceSlidFirst idActive={idActive}/>
                        
                        <ServiceSliderSecond idActive={idActive} setIdActive={setIdActive}/>
                        {/* <div id="services-layout-2" className={idActive === 2 ? `row services-layout__row-main is-show` : "row services-layout__row-main"}>
                            <div className="row__col--12 services-layout__main-col services-layout__main-col--title">
                                <h2 className="services-layout__main-title">Как это вам поможет</h2>
                            </div>
                            <div className="row__col--6 services-layout__main-col services-layout__main-col--nav">
                                <ul className="services-layout__main-nav">
                                    {el2.map((item) => (
                                        <li className="services-layout__main-nav-item">
                                            <button onClick={() => handlePaginationClick2(sliderRef2, item.id)} value={item.id} type="button" className={item.id === 1 ? "is-active serviceBullet23 js-services-slider-btn-nav-2 services-layout__main-nav-btn" : " serviceBullet23 js-services-slider-btn-nav-2 services-layout__main-nav-btn"}>{item.title}</button>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                            <div className="row__col--6 services-layout__main-col services-layout__main-col--slider">
                                <div className="services-layout__main-slider-wrapper">
                                    <div className="js-services-layout-slider-init-2 services-layout__main-slider">
                                        <div className="swiper-wrapper">
                                            {el2.map((item) => (
                                                <div className="swiper-slide services-layout__main-slider-slide" serviceSlide2={item.id}>
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
                                        <button type="button" className="js-services-slider-btn-prev-2 swiper-button swiper-button--theme-gray swiper-button-prev" onClick={handlePrevClick2}>
                                            <svg className="u-icon">
                                                <Arrow2 />
                                            </svg>
                                        </button>
                                        <div className="js-services-swiper-pagination-2 swiper-pagination">
                                            {el2.map((item) => (
                                                <span className={item.id === currentSlideId ? "serviceBullet22 swiper-pagination-bullet swiper-pagination-bullet-active" : "serviceBullet22 swiper-pagination-bullet"} onClick={() => handlePaginationClick(sliderRef, item.id)} value={item.id}></span>
                                            ))}
                                        </div>
                                        <button type="button" className="js-services-slider-btn-next-2 swiper-button swiper-button--theme-gray swiper-button-next" onClick={handleNextClick2}>
                                            <svg className="u-icon">
                                                <Arrow2 />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
}
export default ServicesLayout;