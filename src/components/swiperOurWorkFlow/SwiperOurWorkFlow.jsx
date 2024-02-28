import React, { useEffect, useRef, useState } from "react"
import Swiper from 'swiper';
import terms_cooperation_1 from "../../images/terms-cooperation-img-1.jpg"
import { ReactComponent as ServiceType1 } from "../../images/icons/services-type-1.svg";
import { ReactComponent as ServiceType2 } from "../../images/icons/services-type-2.svg";
import { ReactComponent as ServiceType3 } from "../../images/icons/services-type-3.svg";

const SwiperOurWorkFlow = () => {

    const sliderRef = useRef(null)

    const [idActive,setIdActive] = useState(0)

    const [currentSlideId, setCurrentSlideId] = useState(1);

    const updatePaginationBulletClasses = (swiper) => {
        const bullets = document.querySelectorAll('.terms-cooperation__services-list .js-terms-cooperation-slider-btn-nav');
        bullets.forEach((bullet, index) => {
            if (index === swiper.activeIndex) {
                bullet.classList.add('swiper-pagination-bullet-active');
            } else {
                bullet.classList.remove('swiper-pagination-bullet-active');
            }
        });
    };

    useEffect(() => {
        const ourworkflowelement = document.querySelector('.js-terms-cooperation-slider-init');

        if(ourworkflowelement) {
            const ourworkswiper = new Swiper('.js-terms-cooperation-slider-init', {
                slidesPerView: 1,
                allowTouchMove: false,
                centeredSlides: true,
                loop: false,
                autoHeight: true,
                initialSlide: 0,
                observeParents: true,
                observer: true,
                spaceBetween: 0,
                pagination: {
                    dignities: '.terms-cooperation__services-list',
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
            sliderRef.current = ourworkswiper;
        }
        return () => {
            if (sliderRef.current) {
                sliderRef.current.destroy();
            }
        };

    }, [])

    const handlePaginationClick = (id) => {
        if (sliderRef.current) {
            sliderRef.current.slideTo(id - 1);
            setCurrentSlideId(id);
        }
    };
    return (
        <div className="row terms-cooperation__row">
            <div className="row__col--7 terms-cooperation__col terms-cooperation__col--content">
                <div className="terms-cooperation__content">
                    <h3 className="terms-cooperation__title">Условия сотрудничества</h3>
                    <div className="content terms-cooperation__text">
                        <p>Данный раздел содержит информацию о критериях и ограничениях, по которым мы не можем принимать определенные запросы или клиентов. Здесь перечмслены условия сотрудничества, которые помогут вам понять, подходят ли ваши запросы для сотрудничества.</p>
                    </div>
                    <div className="terms-cooperation__services">
                        <div className="terms-cooperation__services-list">
                            <button type="button" className="none js-terms-cooperation-slider-btn-nav terms-cooperation__services-item " onClick={() => handlePaginationClick(2)}>
                                  <span className="terms-cooperation__services-item-icon">
                                      <svg className="u-icon">
                                          <ServiceType1 />
                                      </svg>
                                  </span>
                                  <span className="terms-cooperation__services-item-title">Конкретное<br />решение</span>
                              </button>
                              <button type="button" className="js-terms-cooperation-slider-btn-nav terms-cooperation__services-item " onClick={() => handlePaginationClick(2)}>
                                  <span className="terms-cooperation__services-item-icon">
                                      <svg className="u-icon">
                                          <ServiceType1 />
                                      </svg>
                                  </span>
                                  <span className="terms-cooperation__services-item-title">Конкретное<br />решение</span>
                              </button>
                              <button type="button" className="js-terms-cooperation-slider-btn-nav terms-cooperation__services-item" onClick={() => handlePaginationClick(3)}>
                                  <span className="terms-cooperation__services-item-icon">
                                      <svg className="u-icon">
                                          <ServiceType2 />
                                      </svg>
                                  </span>
                                  <span className="terms-cooperation__services-item-title">Лендинг</span>
                              </button>
                              <button type="button" className="js-terms-cooperation-slider-btn-nav terms-cooperation__services-item" onClick={() => handlePaginationClick(4)}>
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
                            <div class="swiper-slide slide_our_work">
                                <picture className="terms-cooperation__main-services-card-picture">
                                        <img src={terms_cooperation_1} alt="Условия сотрудничества" />
                                    </picture>
                            </div>
                            <div class="swiper-slide slide_our_work">
                                <article className="terms-cooperation__main-services-card-content">
                                    <h3 className="terms-cooperation__main-services-card-title">Вам нужно конкретное решение</h3>
                                    <div className="content terms-cooperation__main-services-card-text">
                                        <p>Наша компания специализируется на анализе и улучшении уже существующих проектов, поэтому, если у вас конкретная проблема или задача, которую требуется решить, связанная с веб-продуктом, мы готовы обсудить возможное сотрудничество для достижения ваших целей.</p>
                                    </div>
                                </article>
                            </div>
                            <div class="swiper-slide slide_our_work">
                                <article className="terms-cooperation__main-services-card-content">
                                    <h3 className="terms-cooperation__main-services-card-title">Вам нужен лендинг</h3>
                                    <div className="content terms-cooperation__main-services-card-text">
                                        <p>Наша компания специализируется на крупных проектах и решении определенных проблем уже существующих сайтов. Из-за нашей специализации, мы не можем взяться за создание лендинга, который является более компактным и ограниченным по функционалу, чем типичный веб-продукт, над которым мы работаем.</p>
                                    </div>
                                </article>
                            </div>
                            <div class="swiper-slide slide_our_work">
                                <article className="terms-cooperation__main-services-card-content">
                                    <h3 className="terms-cooperation__main-services-card-title">Вам нужен сайт-визитка</h3>
                                    <div className="content terms-cooperation__main-services-card-text">
                                        <p>Наши услуги сфокусированы на комплексных проектах и оптимизации уже существующих сайтов с целью максимизации их эффективности. Создание сайта-визитки, как правило, не требует такого уровня задействования, который мы предлагаем, поэтому мы не можем взяться за данную задачу.</p>
                                    </div>
                                </article>
                            </div>

                            
                            {/*     <div className="swiper-slide terms-cooperation__main-services-card">
                                    <picture className="terms-cooperation__main-services-card-picture">
                                        <img src={terms_cooperation_1} alt="Условия сотрудничества" />
                                    </picture>
                             </div>
                             <div className={slide === 1 ? "swiper-slide terms-cooperation__main-services-card swiper-slide-active" : "swiper-slide terms-cooperation__main-services-card"}>
                                 <div className="terms-cooperation__main-services-card-content">
                                     <h3 className="terms-cooperation__main-services-card-title">Вам нужно конкретное решение</h3>
                                     <div className="content terms-cooperation__main-services-card-text">
                                         <p>Наша компания специализируется на анализе и улучшении уже существующих проектов, поэтому, если у вас конкретная проблема или задача, которую требуется решить, связанная с веб-продуктом, мы готовы обсудить возможное сотрудничество для достижения ваших целей.</p>
                                     </div>
                                 </div>
                             </div>
                             <div className={slide === 2 ? "swiper-slide terms-cooperation__main-services-card swiper-slide-active" : "swiper-slide terms-cooperation__main-services-card"}>
                                  <div className="terms-cooperation__main-services-card-content">
                                      <h3 className="terms-cooperation__main-services-card-title">Вам нужен лендинг</h3>
                                      <div className="content terms-cooperation__main-services-card-text">
                                          <p>Наша компания специализируется на крупных проектах и решении определенных проблем уже существующих сайтов. Из-за нашей специализации, мы не можем взяться за создание лендинга, который является более компактным и ограниченным по функционалу, чем типичный веб-продукт, над которым мы работаем.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className={slide === 3 ? "swiper-slide terms-cooperation__main-services-card swiper-slide-active" : "swiper-slide terms-cooperation__main-services-card"}>
                                  <div className="terms-cooperation__main-services-card-content">
                                      <h3 className="terms-cooperation__main-services-card-title">Вам нужен сайт-визитка</h3>
                                      <div className="content terms-cooperation__main-services-card-text">
                                          <p>Наши услуги сфокусированы на комплексных проектах и оптимизации уже существующих сайтов с целью максимизации их эффективности. Создание сайта-визитки, как правило, не требует такого уровня задействования, который мы предлагаем, поэтому мы не можем взяться за данную задачу.</p>
                                      </div>
                                  </div>
                                                               <img src={terms_cooperation_1} alt="Условия сотрудничества" />
                                  </picture>
                              </div>
                              <div className={slide === 1 ? "swiper-slide terms-cooperation__main-services-card swiper-slide-active" : "swiper-slide terms-cooperation__main-services-card"}>
                                  <div className="terms-cooperation__main-services-card-content">
                                      <h3 className="terms-cooperation__main-services-card-title">Вам нужно конкретное решение</h3>
                                      <div className="content terms-cooperation__main-services-card-text">
                                          <p>Наша компания специализируется на анализе и улучшении уже существующих проектов, поэтому, если у вас конкретная проблема или задача, которую требуется решить, связанная с веб-продуктом, мы готовы обсудить возможное сотрудничество для достижения ваших целей.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className={slide === 2 ? "swiper-slide terms-cooperation__main-services-card swiper-slide-active" : "swiper-slide terms-cooperation__main-services-card"}>
                                  <div className="terms-cooperation__main-services-card-content">
                                      <h3 className="terms-cooperation__main-services-card-title">Вам нужен лендинг</h3>
                                      <div className="content terms-cooperation__main-services-card-text">
                                          <p>Наша компания специализируется на крупных проектах и решении определенных проблем уже существующих сайтов. Из-за нашей специализации, мы не можем взяться за создание лендинга, который является более компактным и ограниченным по функционалу, чем типичный веб-продукт, над которым мы работаем.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className={slide === 3 ? "swiper-slide terms-cooperation__main-services-card swiper-slide-active" : "swiper-slide terms-cooperation__main-services-card"}>
                                  <div className="terms-cooperation__main-services-card-content">
                                      <h3 className="terms-cooperation__main-services-card-title">Вам нужен сайт-визитка</h3>
                                      <div className="content terms-cooperation__main-services-card-text">
                                          <p>Наши услуги сфокусированы на комплексных проектах и оптимизации уже существующих сайтов с целью максимизации их эффективности. Создание сайта-визитки, как правило, не требует такого уровня задействования, который мы предлагаем, поэтому мы не можем взяться за данную задачу.</p>
                                      </div>
                                  </div>
                                  <picture className="terms-cooperation__main-services-card-picture">
                                      <img src={terms_cooperation_1} alt="Условия сотрудничества" />
                                  </picture>
                              </div>
                              <div className={slide === 1 ? "swiper-slide terms-cooperation__main-services-card swiper-slide-active" : "swiper-slide terms-cooperation__main-services-card"}>
                                  <div className="terms-cooperation__main-services-card-content">
                                      <h3 className="terms-cooperation__main-services-card-title">Вам нужно конкретное решение</h3>
                                      <div className="content terms-cooperation__main-services-card-text">
                                          <p>Наша компания специализируется на анализе и улучшении уже существующих проектов, поэтому, если у вас конкретная проблема или задача, которую требуется решить, связанная с веб-продуктом, мы готовы обсудить возможное сотрудничество для достижения ваших целей.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className={slide === 2 ? "swiper-slide terms-cooperation__main-services-card swiper-slide-active" : "swiper-slide terms-cooperation__main-services-card"}>
                                  <div className="terms-cooperation__main-services-card-content">
                                      <h3 className="terms-cooperation__main-services-card-title">Вам нужен лендинг</h3>
                                      <div className="content terms-cooperation__main-services-card-text">
                                          <p>Наша компания специализируется на крупных проектах и решении определенных проблем уже существующих сайтов. Из-за нашей специализации, мы не можем взяться за создание лендинга, который является более компактным и ограниченным по функционалу, чем типичный веб-продукт, над которым мы работаем.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className={slide === 3 ? "swiper-slide terms-cooperation__main-services-card swiper-slide-active" : "swiper-slide terms-cooperation__main-services-card"}>
                                  <div className="terms-cooperation__main-services-card-content">
                                      <h3 className="terms-cooperation__main-services-card-title">Вам нужен сайт-визитка</h3>
                                      <div className="content terms-cooperation__main-services-card-text">
                                          <p>Наши услуги сфокусированы на комплексных проектах и оптимизации уже существующих сайтов с целью максимизации их эффективности. Создание сайта-визитки, как правило, не требует такого уровня задействования, который мы предлагаем, поэтому мы не можем взяться за данную задачу.</p>
                                      </div>
                                  </div>
                              </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SwiperOurWorkFlow;