import services_card_6 from "../../images/services-card-6.jpg"
import logo from "../../images/logo.png"
import React from "react"
import logo_sokol from "../../images/logo-sokol.png"
import services_card_3 from "../../images/services-card-3.jpg"
import services_card_4 from "../../images/services-card-4.jpg"
import services_card_5 from "../../images/services-card-5.jpg"
import services_card_2 from "../../images/services-card-2.jpg"
import services_card_1 from "../../images/services-card-1.jpg"
import arrow1 from "../../images/icons/arrow-type-1.svg"
import "./heroSection.css"
import { ReactComponent as Arrow4 } from "../../images/icons/arrow-type-4.svg";
import { ReactComponent as Arrow1 } from "../../images/icons/arrow-type-1.svg";
import axios from 'axios';
import { useState, useEffect } from "react";
const HeroSection = ({ apiGet }) => {

    const [dignities, setDignities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [openCardId, setOpenCardId] = useState(null);

    const handleCardClick = (id) => {
        setOpenCardId(id);
    };

    useEffect(() => {
        const fetchDignities = async () => {
            try {
                const response = await apiGet.get('/read/services');
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

    if (isLoading) {
        return <div>Loading...</div>;
    }
console.log(dignities)
    return (
        <section className="hero-section">
            <div className="container container--size-md hero-section__container">
                <div className="row hero-section__row">
                    <div className="hero-section__col hero-section__col--content row__col--9">
                        <div className="hero-section__content">
                            <h1 className="hero-section__title">IT-поддержка для вашего онлайн-бизнеса</h1>
                            <div className="content hero-section__text">
                                <p>Объединившись с IT компанией "Сокол", мы предлагаем вам широкий спектр IT-услуг для вашего бизнеса.</p>
                            </div>
                            <div className="d-lg-block hero-section__brand">
                                <div className="hero-section__brand-item">
                                    <picture className="hero-section__brand-picture">
                                        <img src={logo} alt="Рантье" width="162" height="162" />
                                    </picture>
                                </div>
                                <div className="hero-section__brand-item">
                                    <picture className="hero-section__brand-picture">
                                        <img src={logo_sokol} alt="Сокол" width="162" height="162" />
                                    </picture>
                                </div>
                            </div>
                            <a href="#cta-section" className="btn btn--size-md btn--theme-accent-fill js-link-anchor hero-section__btn">
                                <span className="btn__inner">
                                    <span className="btn__title">Связаться</span>
                                    <span className="btn__icon btn__icon--dir-rtl">
                                        <svg className="u-icon">
                                            <Arrow1 />
                                        </svg>
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="row__col--3 spec d-lg-none hero-section__col hero-section__col--brands">
                        <div className="hero-section__brand">
                            <div className="hero-section__brand-item">
                                <picture className="hero-section__brand-picture">
                                    <img src={logo} alt="Рантье" width="162" height="162" />
                                </picture>
                            </div>
                            <div className="hero-section__brand-item">
                                <picture className="hero-section__brand-picture">
                                    <img src={logo_sokol} alt="Сокол" width="162" height="162" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-section__services">
                    <div className="hero-section__services-col">
                        <article className="hero-section__services-card services-card services-card--size-1">
                            <picture className="bg-color bg-color--theme-darkgrey bg-color--opacity-75 services-card__picture">
                                <img src={services_card_1} alt="Разработка систем с веб-интерфейсом" />
                            </picture>
                            <div className="services-card__inner">
                                <div className="services-card__content">
                                    <h3 className="services-card__title">Разработка систем с веб-интерфейсом</h3>
                                    <p className="services-card__text">Создание веб-систем с удобным интерфейсом, оптимизированных под нужды вашего бизнеса.</p>
                                </div>
                            </div>
                            <div className="services-card__dropdown">
                                <ul className="services-card__dropdown-list">
                                    {dignities.filter((item) => item.category === "1").map((item) => (
                                        <li>
                                            <a href="#" className="services-card__link">
                                                <span className="services-card__link-title">{item.name}</span>
                                                <svg className="u-icon services-card__link-icon">
                                                    <Arrow4 />
                                                </svg>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    </div>
                    <div className="hero-section__services-col">
                        <article className="hero-section__services-card services-card services-card--size-2">
                            <picture className="bg-color bg-color--theme-darkgrey bg-color--opacity-75 services-card__picture">
                                <img src={services_card_2} alt="Разработка дизайна" />
                            </picture>
                            <div className="services-card__inner">
                                <div className="services-card__content">
                                    <h3 className="services-card__title">Разработка дизайна</h3>
                                    <p className="services-card__text">Создаем веб-дизайн и интерфейса, отвечающие требованиям современных пользователей.</p>
                                </div>
                            </div>
                            <div className="services-card__dropdown">
                                <ul className="services-card__dropdown-list">
                                {dignities.filter((item) => item.category === "2").map((item) => (
                                    <li>
                                        <a href="#" className="services-card__link">
                                            <span className="services-card__link-title">{item.name}</span>
                                            <svg className="u-icon services-card__link-icon">
                                                
                                            </svg>
                                        </a>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </article>
                    </div>
                    <div className="hero-section__services-col">
                        <article className="hero-section__services-card services-card services-card--size-2">
                            <picture className="bg-color bg-color--theme-darkgrey bg-color--opacity-75 services-card__picture">
                                <img src={services_card_3} alt="Обслуживание IT-инфраструктуры" />
                            </picture>
                            <div className="services-card__inner">
                                <div className="services-card__content">
                                    <h3 className="services-card__title">Обслуживание<br />IT-инфраструктуры</h3>
                                    <p className="services-card__text">Надежная поддержка и&nbsp;обслуживание<br />IT-инфраструктуры и&nbsp;стабильная работа системы.</p>
                                </div>
                            </div>
                            <div className="services-card__dropdown">
                                <ul className="services-card__dropdown-list">
                                {dignities.filter((item) => item.category === "3").map((item) => (
                                    <li>
                                        <a href="#" className="services-card__link">
                                            <span className="services-card__link-title">{item.name}</span>
                                            <svg className="u-icon services-card__link-icon">
                                                
                                            </svg>
                                        </a>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </article>
                    </div>
                    <div className="hero-section__services-col">
                        <article className="hero-section__services-card services-card services-card--size-1">
                            <picture className="bg-color bg-color--theme-darkgrey bg-color--opacity-75 services-card__picture">
                                <img src={services_card_4} alt="Разработка мобильных приложений" />
                            </picture>
                            <div className="services-card__inner">
                                <div className="services-card__content">
                                    <h3 className="services-card__title">Разработка мобильных приложений</h3>
                                    <p className="services-card__text">Создание инновационных приложений, отвечающих требованиям современного рынка.</p>
                                </div>
                            </div>
                            <div className="services-card__dropdown">
                                <ul className="services-card__dropdown-list">
                                {dignities.filter((item) => item.category === "4").map((item) => (
                                    <li>
                                        <a href="#" className="services-card__link">
                                            <span className="services-card__link-title">{item.name}</span>
                                            <svg className="u-icon services-card__link-icon">
                                                <Arrow4 />
                                            </svg>
                                        </a>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </article>
                    </div>
                    <div className="hero-section__services-col">
                        <article className="hero-section__services-card services-card services-card--size-3">
                            <picture className="bg-color bg-color--theme-darkgrey bg-color--opacity-75 services-card__picture">
                                <img src={services_card_5} alt="Разработка умных систем" />
                            </picture>
                            <div className="services-card__inner">
                                <div className="services-card__content">
                                    <h3 className="services-card__title">Разработка умных систем</h3>
                                    <p className="services-card__text">Создание интелектуальных систем и программно аппаратных решений для оптимизации бизнес-процессов.</p>
                                </div>
                            </div>
                            <div className="services-card__dropdown">
                                <ul className="services-card__dropdown-list">
                                {dignities.filter((item) => item.category === "5").map((item) => (
                                    <li>
                                        <a href="#" className="services-card__link">
                                            <span className="services-card__link-title">Разработка ИИ систем</span>
                                            <svg className="u-icon services-card__link-icon">
                                                <Arrow4 />
                                            </svg>
                                        </a>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </article>
                    </div>
                    <div className="hero-section__services-col">
                        <article className="hero-section__services-card services-card services-card--size-3">
                            <picture className="bg-color bg-color--theme-darkgrey bg-color--opacity-75 services-card__picture">
                                <img src={services_card_6} alt="Интернет-реклама" />
                            </picture>
                            <div className="services-card__inner">
                                <div className="services-card__content">
                                    <h3 className="services-card__title">Интернет-реклама</h3>
                                    <p className="services-card__text">Услуги интернет-рекламы, включая SEO-продвижение и управление рекламными компаниями в социальных сетях.</p>
                                </div>
                            </div>
                            <div className="services-card__dropdown">
                                <ul className="services-card__dropdown-list">
                                {dignities.filter((item) => item.category === "6").map((item) => (
                                    <li>
                                        <a href="#" className="services-card__link">
                                            <span className="services-card__link-title">SEO-продвижение и оптимизация сайтов</span>
                                            <svg className="u-icon services-card__link-icon">
                                                <Arrow4 />
                                            </svg>
                                        </a>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;