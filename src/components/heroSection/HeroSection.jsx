import services_card_6 from "../../images/services-card-6.jpg"
import logo from "../../images/logo.png"
import logo_sokol from "../../images/logo-sokol.png"
import services_card_3 from "../../images/services-card-3.jpg"
import services_card_4 from "../../images/services-card-4.jpg"
import services_card_5 from "../../images/services-card-5.jpg"
import services_card_2 from "../../images/services-card-2.jpg"
import services_card_1 from "../../images/services-card-1.jpg"
import arrow1 from "../../images/icons/arrow-type-1.svg"
import "./heroSection.css"

const HeroSection = () => {
    return (
        <section class="hero-section">
            <div class="container container--size-md hero-section__container">
                <div class="row hero-section__row">
                    <div class="hero-section__col hero-section__col--content row__col--9">
                        <div class="hero-section__content">
                            <h1 class="hero-section__title">IT-поддержка для вашего онлайн-бизнеса</h1>
                            <div class="content hero-section__text">
                                <p>Объединившись с IT компанией "Сокол", мы предлагаем вам широкий спектр IT-услуг для вашего бизнеса.</p>
                            </div>
                            <div class="d-lg-block hero-section__brand">
                                <div class="hero-section__brand-item">
                                    <picture class="hero-section__brand-picture">
                                        <img src={logo} alt="Рантье" width="162" height="162" />
                                    </picture>
                                </div>
                                <div class="hero-section__brand-item">
                                    <picture class="hero-section__brand-picture">
                                        <img src={logo_sokol} alt="Сокол" width="162" height="162" />
                                    </picture>
                                </div>
                            </div>
                            <a href="#cta-section" class="btn btn--size-md btn--theme-accent-fill js-link-anchor hero-section__btn">
                                <span class="btn__inner">
                                    <span class="btn__title">Связаться</span>
                                    <span class="btn__icon btn__icon--dir-rtl">
                                        <svg class="u-icon">
                                            <use xlinkHref={arrow1}></use>
                                        </svg>
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="row__col--3 d-lg-none hero-section__col hero-section__col--brands">
                        <div class="hero-section__brand">
                            <div class="hero-section__brand-item">
                                <picture class="hero-section__brand-picture">
                                    <img src={logo} alt="Рантье" width="162" height="162" />
                                </picture>
                            </div>
                            <div class="hero-section__brand-item">
                                <picture class="hero-section__brand-picture">
                                    <img src={logo_sokol} alt="Сокол" width="162" height="162" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hero-section__services">
                    <div class="hero-section__services-col">
                        <article class="hero-section__services-card services-card services-card--size-1">
                            <picture class="bg-color bg-color--theme-darkgrey bg-color--opacity-75 services-card__picture">
                                <img src={services_card_1} alt="Разработка систем с веб-интерфейсом" />
                            </picture>
                            <div class="services-card__inner">
                                <div class="services-card__content">
                                    <h3 class="services-card__title">Разработка систем с веб-интерфейсом</h3>
                                    <p class="services-card__text">Создание веб-систем с удобным интерфейсом, оптимизированных под нужды вашего бизнеса.</p>
                                </div>
                            </div>
                            <div class="services-card__dropdown">
                                <ul class="services-card__dropdown-list">
                                    <li>
                                        <a href="#" class="services-card__link">
                                            <span class="services-card__link-title">Создание и оптимизация лендингов и мультилендингов</span>
                                            <svg class="u-icon services-card__link-icon">
                                                <use xlinkHref="../../images/icons/icons.svg#arrow-type-4"></use>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="services-card__link">
                                            <span class="services-card__link-title">Разработка интернет-магазинов</span>
                                            <svg class="u-icon services-card__link-icon">
                                                <use xlinkHref="../../images/icons/icons.svg#arrow-type-4"></use>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="services-card__link">
                                            <span class="services-card__link-title">Разработка веб-сайтов под ключ</span>
                                            <svg class="u-icon services-card__link-icon">
                                                <use xlinkHref="../../images/icons/icons.svg#arrow-type-4"></use>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="services-card__link">
                                            <span class="services-card__link-title">Интеграция и настройка CRM и ERP систем</span>
                                            <svg class="u-icon services-card__link-icon">
                                                <use xlinkHref="../../images/icons/icons.svg#arrow-type-4"></use>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="services-card__link">
                                            <span class="services-card__link-title">Разработка корпоративных порталов и&nbsp;систем управления контентом (CMS)</span>
                                            <svg class="u-icon services-card__link-icon">
                                                <use xlinkHref="../../images/icons/icons.svg#arrow-type-4"></use>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </div>
                    <div class="hero-section__services-col">
                        <article class="hero-section__services-card services-card services-card--size-2">
                            <picture class="bg-color bg-color--theme-darkgrey bg-color--opacity-75 services-card__picture">
                                <img src={services_card_2} alt="Разработка дизайна" />
                            </picture>
                            <div class="services-card__inner">
                                <div class="services-card__content">
                                    <h3 class="services-card__title">Разработка дизайна</h3>
                                    <p class="services-card__text">Создаем веб-дизайн и интерфейса, отвечающие требованиям современных пользователей.</p>
                                </div>
                            </div>
                            <div class="services-card__dropdown">
                                <ul class="services-card__dropdown-list">
                                    <li>
                                        <a href="#" class="services-card__link">
                                            <span class="services-card__link-title">Веб-дизайн и&nbsp;разработка пользовательского интерфейса</span>
                                            <svg class="u-icon services-card__link-icon">
                                                <use xlinkHref="../../images/icons/icons.svg#arrow-type-4"></use>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </div>
                    <div class="hero-section__services-col">
                        <article class="hero-section__services-card services-card services-card--size-2">
                            <picture class="bg-color bg-color--theme-darkgrey bg-color--opacity-75 services-card__picture">
                                <img src={services_card_3} alt="Обслуживание IT-инфраструктуры" />
                            </picture>
                            <div class="services-card__inner">
                                <div class="services-card__content">
                                    <h3 class="services-card__title">Обслуживание<br />IT-инфраструктуры</h3>
                                    <p class="services-card__text">Надежная поддержка и&nbsp;обслуживание<br />IT-инфраструктуры и&nbsp;стабильная работа системы.</p>
                                </div>
                            </div>
                            <div class="services-card__dropdown">
                                <ul class="services-card__dropdown-list">
                                    <li>
                                        <a href="#" class="services-card__link">
                                            <span class="services-card__link-title">Техническая поддержка и обслуживание IT&nbsp;-&nbsp;инфраструктуры</span>
                                            <svg class="u-icon services-card__link-icon">
                                                <use xlinkHref="images/icons/icons.svg#arrow-type-4"></use>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </div>
                    <div class="hero-section__services-col">
                        <article class="hero-section__services-card services-card services-card--size-1">
                            <picture class="bg-color bg-color--theme-darkgrey bg-color--opacity-75 services-card__picture">
                                <img src={services_card_4} alt="Разработка мобильных приложений" />
                            </picture>
                            <div class="services-card__inner">
                                <div class="services-card__content">
                                    <h3 class="services-card__title">Разработка мобильных приложений</h3>
                                    <p class="services-card__text">Создание инновационных приложений, отвечающих требованиям современного рынка.</p>
                                </div>
                            </div>
                            <div class="services-card__dropdown">
                                <ul class="services-card__dropdown-list">
                                    <li>
                                        <a href="#" class="services-card__link">
                                            <span class="services-card__link-title">Разработка Android приложений</span>
                                            <svg class="u-icon services-card__link-icon">
                                                <use xlinkHref="images/icons/icons.svg#arrow-type-4"></use>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="services-card__link">
                                            <span class="services-card__link-title">Разработка IOS приложений</span>
                                            <svg class="u-icon services-card__link-icon">
                                                <use xlinkHref="images/icons/icons.svg#arrow-type-4"></use>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </div>
                    <div class="hero-section__services-col">
                        <article class="hero-section__services-card services-card services-card--size-3">
                            <picture class="bg-color bg-color--theme-darkgrey bg-color--opacity-75 services-card__picture">
                                <img src={services_card_5} alt="Разработка умных систем" />
                            </picture>
                            <div class="services-card__inner">
                                <div class="services-card__content">
                                    <h3 class="services-card__title">Разработка умных систем</h3>
                                    <p class="services-card__text">Создание интелектуальных систем и программно аппаратных решений для оптимизации бизнес-процессов.</p>
                                </div>
                            </div>
                            <div class="services-card__dropdown">
                                <ul class="services-card__dropdown-list">
                                    <li>
                                        <a href="#" class="services-card__link">
                                            <span class="services-card__link-title">Разработка ИИ систем</span>
                                            <svg class="u-icon services-card__link-icon">
                                                <use xlinkHref="images/icons/icons.svg#arrow-type-4"></use>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="services-card__link">
                                            <span class="services-card__link-title">Разработка программно-аппаратных систем</span>
                                            <svg class="u-icon services-card__link-icon">
                                                <use xlinkHref="images/icons/icons.svg#arrow-type-4"></use>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </div>
                    <div class="hero-section__services-col">
                        <article class="hero-section__services-card services-card services-card--size-3">
                            <picture class="bg-color bg-color--theme-darkgrey bg-color--opacity-75 services-card__picture">
                                <img src={services_card_6} alt="Интернет-реклама" />
                            </picture>
                            <div class="services-card__inner">
                                <div class="services-card__content">
                                    <h3 class="services-card__title">Интернет-реклама</h3>
                                    <p class="services-card__text">Услуги интернет-рекламы, включая SEO-продвижение и управление рекламными компаниями в социальных сетях.</p>
                                </div>
                            </div>
                            <div class="services-card__dropdown">
                                <ul class="services-card__dropdown-list">
                                    <li>
                                        <a href="#" class="services-card__link">
                                            <span class="services-card__link-title">SEO-продвижение и оптимизация сайтов</span>
                                            <svg class="u-icon services-card__link-icon">
                                                <use xlinkHref="images/icons/icons.svg#arrow-type-4"></use>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="services-card__link">
                                            <span class="services-card__link-title">Услуги SMM-специалиста под ключ</span>
                                            <svg class="u-icon services-card__link-icon">
                                                <use xlinkHref="images/icons/icons.svg#arrow-type-4"></use>
                                            </svg>
                                        </a>
                                    </li>
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