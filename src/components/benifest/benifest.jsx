
import React from "react";
import { useState } from "react";
import { ReactComponent as Close } from "../../images/icons/close.svg";
const Benifest = () =>{
  const items = {

  };
  const [openIndex, setOpenIndex] = React.useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

        return(
        <section className="benefits-section">
            <div className="container container--size-md benefits-section__container">
              <h2 className="benefits-section__title">За что нас ценят?</h2>
              <div className="benefits-section__list">
              {/* {[1, 2, 3, 4, 5].map((index) => (
                <article className={`benefits-section__list-card faq-card ${openIndex === index ? 'is-show' : ''}`} onClick={() => handleToggle(index)}>
                  <div className="faq-card__header">
                    <button type="button" className="faq-card__btn js-faq-card-toggle ">
                      <h3 className="faq-card__title">Работа с любой сложностью проекта</h3>
                    </button>
                    <svg className="u-icon faq-card__icon">
                    <Close />
                    </svg>
                  </div>
                  <div className="faq-card__dropdown">
                    <div className="content faq-card__text">
                      <p>Мы ценимся за способность успешно справляться с проектами любой сложности, независимо от их сложности и объема. Наша компания обладает опытом и ресурсами, чтобы реализовать даже самые сложные задачи, обеспечивая высокий уровень качества и профессионализма.</p>
                    </div>
                  </div>
                </article>
                <article className={`benefits-section__list-card faq-card ${openIndex === index ? 'is-show' : ''}`} onClick={() => handleToggle(index)}>
                  <div className="faq-card__header">
                    <button type="button" className="faq-card__btn js-faq-card-toggle">
                      <h3 className="faq-card__title">Сотрудничество после выполнения работы</h3>
                    </button>
                    <svg className="u-icon faq-card__icon">
                      <Close />
                    </svg>
                  </div>
                  <div className="faq-card__dropdown">
                    <div className="content faq-card__text">
                      <p>Мы ценимся за способность успешно справляться с проектами любой сложности, независимо от их сложности и объема. Наша компания обладает опытом и ресурсами, чтобы реализовать даже самые сложные задачи, обеспечивая высокий уровень качества и профессионализма.</p>
                    </div>
                  </div>
                </article>
                <article className={`benefits-section__list-card faq-card ${openIndex === index ? 'is-show' : ''}`} onClick={() => handleToggle(index)}>
                  <div className="faq-card__header">
                    <button type="button" className="faq-card__btn js-faq-card-toggle">
                      <h3 className="faq-card__title">Комплексное решение проблемы заказчика</h3>
                    </button>
                    <svg className="u-icon faq-card__icon">
                    <Close />
                    </svg>
                  </div>
                  <div className="faq-card__dropdown">
                    <div className="content faq-card__text">
                      <p>Мы ценимся за способность успешно справляться с проектами любой сложности, независимо от их сложности и объема. Наша компания обладает опытом и ресурсами, чтобы реализовать даже самые сложные задачи, обеспечивая высокий уровень качества и профессионализма.</p>
                    </div>
                  </div>
                </article>
                <article className={`benefits-section__list-card faq-card ${openIndex === index ? 'is-show' : ''}`} onClick={() => handleToggle(index)}>
                  <div className="faq-card__header">
                    <button type="button" className="faq-card__btn js-faq-card-toggle">
                      <h3 className="faq-card__title">Опытные специалисты</h3>
                    </button>
                    <svg className="u-icon faq-card__icon">
                    <Close />
                    </svg>
                  </div>
                  <div className="faq-card__dropdown">
                    <div className="content faq-card__text">
                      <p>Нас ценят за опыт наших специалистов, которые обладают глубокими знаниями и большим опытом в своей области. Это позволяет нам предоставлять высококачественные услуги и решать сложные задачи для наших клиентов.</p>
                    </div>
                  </div>
                </article>
                <article className={`benefits-section__list-card faq-card ${openIndex === index ? 'is-show' : ''}`} onClick={() => handleToggle(index)}>
                  <div className="faq-card__header">
                    <button type="button" className="faq-card__btn js-faq-card-toggle">
                      <h3 className="faq-card__title">Использование современных технологий</h3>
                    </button>
                    <svg className="u-icon faq-card__icon">
                    <Close />
                    </svg>
                  </div>
                  <div className="faq-card__dropdown">
                    <div className="content faq-card__text">
                      <p>Мы ценимся за способность успешно справляться с проектами любой сложности, независимо от их сложности и объема. Наша компания обладает опытом и ресурсами, чтобы реализовать даже самые сложные задачи, обеспечивая высокий уровень качества и профессионализма.</p>
                    </div>
                  </div>
                </article>
                <article className={`benefits-section__list-card faq-card ${openIndex === index ? 'is-show' : ''}`} onClick={() => handleToggle(index)}>
                  <div className="faq-card__header">
                    <button type="button" className="faq-card__btn js-faq-card-toggle">
                      <h3 className="faq-card__title">Мы не работаем на вас, мы работаем с вами</h3>
                    </button>
                    <svg className="u-icon faq-card__icon">
                    <Close />
                    </svg>
                  </div>
                  <div className="faq-card__dropdown">
                    <div className="content faq-card__text">
                      <p>Мы ценимся за способность успешно справляться с проектами любой сложности, независимо от их сложности и объема. Наша компания обладает опытом и ресурсами, чтобы реализовать даже самые сложные задачи, обеспечивая высокий уровень качества и профессионализма.</p>
                    </div>
                  </div>
                </article>
                ))} */}
              </div>
            </div>
          </section>
    )
}

export default Benifest;