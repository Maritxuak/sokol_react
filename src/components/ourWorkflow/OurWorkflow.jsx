import React, {useEffect, useRef } from "react"
import "./ourWorkflow.css"
import Swiper from 'swiper';
import terms_cooperation_1 from "../../images/terms-cooperation-img-1.jpg"
import info_card_1 from "../../images/info-card-1.jpg"
import our_workflow_road_graph_1 from "../../images/our-workflow-road-graph-1.svg"
import our_workflow_road_graph_2 from "../../images/our-workflow-road-graph-2.svg"
import our_workflow_road_graph_3 from "../../images/our-workflow-road-graph-3.svg"
import our_workflow_road_graph_4 from "../../images/our-workflow-road-graph-4.svg"
import our_workflow_road_map_desktop from "../../images/our-workflow-road-map-desktop.svg"
import {ReactComponent as Client} from "../../images/icons/client.svg"
import { ReactComponent as Arrow2 } from "../../images/icons/arrow-type-2.svg";
import { ReactComponent as ServiceType1 } from "../../images/icons/services-type-1.svg";
import { ReactComponent as ServiceType2 } from "../../images/icons/services-type-2.svg";
import { ReactComponent as ServiceType3 } from "../../images/icons/services-type-3.svg";


const OurWorkflow = () => {
    const sliderRef = useRef(null);
    useEffect(() => {
      const ourWorkflowSliderElement = document.querySelector('.swiper-container');
    
      if (ourWorkflowSliderElement) {
        const ourWorkflowSlider = new Swiper('.swiper-container', {
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
          navigation:true,
          navigation: {
            nextEl: '.swip-btn-next',
            prevEl: '.swip-btn-prev',
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
        sliderRef.current = ourWorkflowSlider;
      }
      document.querySelector('.js-our-workflow-slider-btn-next').addEventListener('click', () => {
        sliderRef.current.slideNext();
      });
      
      document.querySelector('.js-our-workflow-slider-btn-prev').addEventListener('click', () => {
        sliderRef.current.slidePrev();
      });
      return () => {
        if (sliderRef.current) {
          sliderRef.current.destroy();
        }
      };
    }, []);
  
    return (
        <section className="our-workflow-section">
            <div className="container container--size-md our-workflow-section__container">
                <h2 className="our-workflow-section__title">Как мы работаем</h2>
                <div className="our-workflow-section__road">
                    <picture className="our-workflow-section__road-map">
                        <source media="(max-width: 1199px)" srcset="images/our-workflow-road-map-mobile.svg" width="320" height="320" />
                        <img src={our_workflow_road_map_desktop} alt="Как мы работаем" width="994" height="234" />
                    </picture>
                    <div className="our-workflow-section__road-graph-wrap">
                        <picture className="our-workflow-section__road-graph our-workflow-section__road-graph--1" data-our-workflow-graph="slide-1">
                            <img src={our_workflow_road_graph_1} alt="Обсуждение проекта" width="438" height="123" />
                        </picture>
                        <picture className="our-workflow-section__road-graph our-workflow-section__road-graph--2" data-our-workflow-graph="slide-2">
                            <img src={our_workflow_road_graph_2} alt="Концепт, функционнальные требования" width="599" height="123" />
                        </picture>
                        <picture className="our-workflow-section__road-graph our-workflow-section__road-graph--3" data-our-workflow-graph="slide-3">
                            <img src={our_workflow_road_graph_3} alt="UX\UI дизайн, alpha версия, beta версия" width="651" height="356" />
                        </picture>
                        <picture className="our-workflow-section__road-graph our-workflow-section__road-graph--4" data-our-workflow-graph="slide-4">
                            <img src={our_workflow_road_graph_4} alt="Seo-продвижение, поддержка продукта" width="491" height="123" />
                        </picture>
                    </div>
                    <div className="our-workflow-section__road-client">
                        <svg className="u-icon our-workflow-section__road-client-img">
                            <Client />
                        </svg>
                        <div className="our-workflow-section__road-client-title">Клиент</div>
                    </div>
                    <div className="our-workflow-section__road-title-wrap">
                        <div className="our-workflow-section__road-title our-workflow-section__road-title--1">Обсуждение проекта</div>
                        <div className="our-workflow-section__road-title our-workflow-section__road-title--2">Концепт</div>
                        <div className="our-workflow-section__road-title our-workflow-section__road-title--3">Функциональные<br />требования</div>
                        <div className="our-workflow-section__road-title our-workflow-section__road-title--4">Дизайн</div>
                        <div className="our-workflow-section__road-title our-workflow-section__road-title--5">Поддержка продукта</div>
                        <div className="our-workflow-section__road-title our-workflow-section__road-title--6">Seo-продвижение</div>
                        <div className="our-workflow-section__road-title our-workflow-section__road-title--7">Beta версия</div>
                        <div className="our-workflow-section__road-title our-workflow-section__road-title--8">Alpha версия</div>
                    </div>
                    <div className="our-workflow-section__road-subtitle-wrap">
                        <div className="our-workflow-section__road-subtitle our-workflow-section__road-subtitle--1">Консалтинг</div>
                        <div className="our-workflow-section__road-subtitle our-workflow-section__road-subtitle--2">Исследование</div>
                        <div className="our-workflow-section__road-subtitle our-workflow-section__road-subtitle--3">Проектирование</div>
                        <div className="our-workflow-section__road-subtitle our-workflow-section__road-subtitle--4">UX\UI</div>
                        <div className="our-workflow-section__road-subtitle our-workflow-section__road-subtitle--5">Гарантия</div>
                        <div className="our-workflow-section__road-subtitle our-workflow-section__road-subtitle--6">Маркетинг</div>
                        <div className="our-workflow-section__road-subtitle our-workflow-section__road-subtitle--7">Разработка</div>
                    </div>
                </div>
            </div>
            <div className="swiper-container js-our-workflow-slider-init our-workflow-section__slider our-workflow-slider">
                <div className="slider-control our-workflow-section__slider-control">
                    <button type="button" className="swip-btn-prev swiper-button swiper-button--theme-gray swiper-button-prev js-our-workflow-slider-btn-prev">
                        <svg className="u-icon">
                            <Arrow2 />
                        </svg>
                    </button>
                    <span className="swiper-pagination">
                    <span className="swiper-pagination-bullet"></span>
                    <span className="swiper-pagination-bullet"></span>
                    <span className="swiper-pagination-bullet"></span>
                    <span className="swiper-pagination-bullet"></span>
                    <span className="swiper-pagination-bullet"></span>
                    <span className="swiper-pagination-bullet"></span>
                    <span className="swiper-pagination-bullet"></span>
                    <span className="swiper-pagination-bullet"></span>
                    </span>
                    <button type="button" className="swip-btn-next swiper-button swiper-button--theme-gray swiper-button-next js-our-workflow-slider-btn-next">
                        <svg className="u-icon">
                            <Arrow2 />
                        </svg>
                    </button>
                </div>
                <div className="swiper-wrapper">
                    <div className="swiper-slide our-workflow-slider__slide our-workflow-slider__slide--theme-1" data-our-workflow-slide="slide-1">
                        <div className="our-workflow-slider__slide-row">
                            <div className="our-workflow-slider__slide-content">
                                <div className="our-workflow-slider__slide-title">Обсуждение проекта</div>
                                <div className="our-workflow-slider__slide-suptitle">Мы уделяем особое внимание удобству и внешнему виду любых интерфейсов, как для ваших внешних пользователей (клиентов), так и для внутренних (сотрудников).</div>
                                <div className="content our-workflow-slider__slide-text">
                                    <p>Мы верим, что хороший пользовательский опыт способен снижать издержки на внедрение любых решений, сокращать звонки на горячую линию и убеждать людей пользоваться дистанционным сервисом, экономя при этом деньги и время.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide our-workflow-slider__slide our-workflow-slider__slide--theme-2" data-our-workflow-slide="slide-2">
                        <div className="our-workflow-slider__slide-row">
                            <div className="our-workflow-slider__slide-content">
                                <div className="our-workflow-slider__slide-title">Концепт</div>
                                <div className="our-workflow-slider__slide-suptitle">Мы уделяем особое внимание удобству и внешнему виду любых интерфейсов, как для ваших внешних пользователей (клиентов), так и для внутренних (сотрудников).</div>
                                <div className="content our-workflow-slider__slide-text">
                                    <p>Мы верим, что хороший пользовательский опыт способен снижать издержки на внедрение любых решений, сокращать звонки на горячую линию и убеждать людей пользоваться дистанционным сервисом, экономя при этом деньги и время.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide our-workflow-slider__slide our-workflow-slider__slide--theme-3" data-our-workflow-slide="slide-2">
                        <div className="our-workflow-slider__slide-row">
                            <div className="our-workflow-slider__slide-content">
                                <div className="our-workflow-slider__slide-title">Функционнальные требования</div>
                                <div className="our-workflow-slider__slide-suptitle">Мы уделяем особое внимание удобству и внешнему виду любых интерфейсов, как для ваших внешних пользователей (клиентов), так и для внутренних (сотрудников).</div>
                                <div className="content our-workflow-slider__slide-text">
                                    <p>Мы верим, что хороший пользовательский опыт способен снижать издержки на внедрение любых решений, сокращать звонки на горячую линию и убеждать людей пользоваться дистанционным сервисом, экономя при этом деньги и время.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide our-workflow-slider__slide our-workflow-slider__slide--theme-4" data-our-workflow-slide="slide-3">
                        <div className="our-workflow-slider__slide-row">
                            <div className="our-workflow-slider__slide-content">
                                <div className="our-workflow-slider__slide-title">UX\UI дизайн</div>
                                <div className="our-workflow-slider__slide-suptitle">Мы уделяем особое внимание удобству и внешнему виду любых интерфейсов, как для ваших внешних пользователей (клиентов), так и для внутренних (сотрудников).</div>
                                <div className="content our-workflow-slider__slide-text">
                                    <p>Мы верим, что хороший пользовательский опыт способен снижать издержки на внедрение любых решений, сокращать звонки на горячую линию и убеждать людей пользоваться дистанционным сервисом, экономя при этом деньги и время.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide our-workflow-slider__slide our-workflow-slider__slide--theme-5" data-our-workflow-slide="slide-3">
                        <div className="our-workflow-slider__slide-row">
                            <div className="our-workflow-slider__slide-content">
                                <div className="our-workflow-slider__slide-title">Alpha версия</div>
                                <div className="our-workflow-slider__slide-suptitle">Мы уделяем особое внимание удобству и внешнему виду любых интерфейсов, как для ваших внешних пользователей (клиентов), так и для внутренних (сотрудников).</div>
                                <div className="content our-workflow-slider__slide-text">
                                    <p>Мы верим, что хороший пользовательский опыт способен снижать издержки на внедрение любых решений, сокращать звонки на горячую линию и убеждать людей пользоваться дистанционным сервисом, экономя при этом деньги и время.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide our-workflow-slider__slide our-workflow-slider__slide--theme-6" data-our-workflow-slide="slide-3">
                        <div className="our-workflow-slider__slide-row">
                            <div className="our-workflow-slider__slide-content">
                                <div className="our-workflow-slider__slide-title">Beta версия</div>
                                <div className="our-workflow-slider__slide-suptitle">Мы уделяем особое внимание удобству и внешнему виду любых интерфейсов, как для ваших внешних пользователей (клиентов), так и для внутренних (сотрудников).</div>
                                <div className="content our-workflow-slider__slide-text">
                                    <p>Мы верим, что хороший пользовательский опыт способен снижать издержки на внедрение любых решений, сокращать звонки на горячую линию и убеждать людей пользоваться дистанционным сервисом, экономя при этом деньги и время.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide our-workflow-slider__slide our-workflow-slider__slide--theme-7" data-our-workflow-slide="slide-4">
                        <div className="our-workflow-slider__slide-row">
                            <div className="our-workflow-slider__slide-content">
                                <div className="our-workflow-slider__slide-title">Seo-продвижение</div>
                                <div className="our-workflow-slider__slide-suptitle">Мы уделяем особое внимание удобству и внешнему виду любых интерфейсов, как для ваших внешних пользователей (клиентов), так и для внутренних (сотрудников).</div>
                                <div className="content our-workflow-slider__slide-text">
                                    <p>Мы верим, что хороший пользовательский опыт способен снижать издержки на внедрение любых решений, сокращать звонки на горячую линию и убеждать людей пользоваться дистанционным сервисом, экономя при этом деньги и время.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide our-workflow-slider__slide our-workflow-slider__slide--theme-8" data-our-workflow-slide="slide-4">
                        <div className="our-workflow-slider__slide-row">
                            <div className="our-workflow-slider__slide-content">
                                <div className="our-workflow-slider__slide-title">Поддержка продукта</div>
                                <div className="our-workflow-slider__slide-suptitle">Мы уделяем особое внимание удобству и внешнему виду любых интерфейсов, как для ваших внешних пользователей (клиентов), так и для внутренних (сотрудников).</div>
                                <div className="content our-workflow-slider__slide-text">
                                    <p>Мы верим, что хороший пользовательский опыт способен снижать издержки на внедрение любых решений, сокращать звонки на горячую линию и убеждать людей пользоваться дистанционным сервисом, экономя при этом деньги и время.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container container--size-md our-workflow-section__container">
                <article className="info-card our-workflow-section__artificial-intelligence">
                    <div className="row info-card__inner">
                        <div className="row__col--5 info-card__col info-card__col--media">
                            <div className="info-card__media">
                                <picture className="info-card__picture">
                                    <img src={info_card_1} alt="Искусственный интеллект для персонализации контента" />
                                </picture>
                            </div>
                        </div>
                        <div className="row__col--7 info-card__col info-card__col--content">
                            <div className="info-card__content">
                                <h3 className="info-card__title">Искусственный интеллект для персонализации контента</h3>
                                <div className="content info-card__text">
                                    <p>Мы применяем технологии искусственного интеллекта для автоматической настройки контента сайта в соответствии с потребностями и предпочтениями каждого посетителя, обеспечивая уникальный пользовательский опыт.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="our-workflow-section__terms-cooperation terms-cooperation">
                    <div className="row terms-cooperation__row">
                        <div className="row__col--7 terms-cooperation__col terms-cooperation__col--content">
                            <div className="terms-cooperation__content">
                                <h3 className="terms-cooperation__title">Условия сотрудничества</h3>
                                <div className="content terms-cooperation__text">
                                    <p>Данный раздел содержит информацию о критериях и ограничениях, по которым мы не можем принимать определенные запросы или клиентов. Здесь перечмслены условия сотрудничества, которые помогут вам понять, подходят ли ваши запросы для сотрудничества.</p>
                                </div>
                                <div className="terms-cooperation__services">
                                    <div className="terms-cooperation__services-list">
                                        <button type="button" className="js-terms-cooperation-slider-btn-nav terms-cooperation__services-item">
                                            <span className="terms-cooperation__services-item-icon">
                                                <svg className="u-icon">
                                                    <ServiceType1 />
                                                </svg>
                                            </span>
                                            <span className="terms-cooperation__services-item-title">Конкретное<br />решение</span>
                                        </button>
                                        <button type="button" className="js-terms-cooperation-slider-btn-nav terms-cooperation__services-item">
                                            <span className="terms-cooperation__services-item-icon">
                                                <svg className="u-icon">
                                                    <ServiceType2 />
                                                </svg>
                                            </span>
                                            <span className="terms-cooperation__services-item-title">Лендинг</span>
                                        </button>
                                        <button type="button" className="js-terms-cooperation-slider-btn-nav terms-cooperation__services-item">
                                            <span className="terms-cooperation__services-item-icon">
                                                <svg className="u-icon">
                                                    <ServiceType3 />
                                                </svg>
                                            </span>
                                            <span className="terms-cooperation__services-item-title">Сайт-визитка</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row__col--5 terms-cooperation__col terms-cooperation__col--media">
                            <div className="terms-cooperation__main">
                                <div className="js-terms-cooperation-slider-init terms-cooperation__main-services">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide terms-cooperation__main-services-card">
                                            <picture className="terms-cooperation__main-services-card-picture">
                                                <img src={terms_cooperation_1} alt="Условия сотрудничества" />
                                            </picture>
                                        </div>
                                        <div className="swiper-slide terms-cooperation__main-services-card">
                                            <div className="terms-cooperation__main-services-card-content">
                                                <h3 className="terms-cooperation__main-services-card-title">Вам нужно конкретное решение</h3>
                                                <div className="content terms-cooperation__main-services-card-text">
                                                    <p>Наша компания специализируется на анализе и улучшении уже существующих проектов, поэтому, если у вас конкретная проблема или задача, которую требуется решить, связанная с веб-продуктом, мы готовы обсудить возможное сотрудничество для достижения ваших целей.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide terms-cooperation__main-services-card">
                                            <div className="terms-cooperation__main-services-card-content">
                                                <h3 className="terms-cooperation__main-services-card-title">Вам нужен лендинг</h3>
                                                <div className="content terms-cooperation__main-services-card-text">
                                                    <p>Наша компания специализируется на крупных проектах и решении определенных проблем уже существующих сайтов. Из-за нашей специализации, мы не можем взяться за создание лендинга, который является более компактным и ограниченным по функционалу, чем типичный веб-продукт, над которым мы работаем.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide terms-cooperation__main-services-card">
                                            <div className="terms-cooperation__main-services-card-content">
                                                <h3 className="terms-cooperation__main-services-card-title">Вам нужен сайт-визитка</h3>
                                                <div className="content terms-cooperation__main-services-card-text">
                                                    <p>Наши услуги сфокусированы на комплексных проектах и оптимизации уже существующих сайтов с целью максимизации их эффективности. Создание сайта-визитки, как правило, не требует такого уровня задействования, который мы предлагаем, поэтому мы не можем взяться за данную задачу.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default OurWorkflow;