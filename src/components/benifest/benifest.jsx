
import React from "react";
import { useState } from "react";
import { ReactComponent as Close } from "../../images/icons/close.svg";


const Benifest = () =>{

  const [openCardId, setOpenCardId] = useState(null);

  const handleCardClick = (id) => {
    setOpenCardId(id === openCardId ? null : id);
  };

  const el = [
    {
      "id": 1,
      "name": "Работа с любой сложностью проекта",
      "description": "Мы ценимся за способность успешно справляться с проектами любой сложности, независимо от их сложности и объема. Наша компания обладает опытом и ресурсами, чтобы реализовать даже самые сложные задачи, обеспечивая высокий уровень качества и профессионализма."
    },
    { 
      "id": 2,
      "name": "Сотрудничество после выполнения работы",
      "description": "Мы ценимся за способность успешно справляться с проектами любой сложности, независимо от их сложности и объема. Наша компания обладает опытом и ресурсами, чтобы реализовать даже самые сложные задачи, обеспечивая высокий уровень качества и профессионализма."
    },
    {
      "id": 3,
      "name": "Комплексное решение проблемы заказчика",
      "description": "Мы ценимся за способность успешно справляться с проектами любой сложности, независимо от их сложности и объема. Наша компания обладает опытом и ресурсами, чтобы реализовать даже самые сложные задачи, обеспечивая высокий уровень качества и профессионализма." 
    },
    {
      "id": 4,
      "name": "Опытные специалисты",
      "description": "Мы ценимся за способность успешно справляться с проектами любой сложности, независимо от их сложности и объема. Наша компания обладает опытом и ресурсами, чтобы реализовать даже самые сложные задачи, обеспечивая высокий уровень качества и профессионализма." 
    },
    {
      "id": 5,
      "name": "Использование современных технологий",
      "description": "Мы ценимся за способность успешно справляться с проектами любой сложности, независимо от их сложности и объема. Наша компания обладает опытом и ресурсами, чтобы реализовать даже самые сложные задачи, обеспечивая высокий уровень качества и профессионализма." 
    },
    {
      "id": 6,
      "name": "Мы не работаем на вас, мы работаем с вами",
      "description": "Мы ценимся за способность успешно справляться с проектами любой сложности, независимо от их сложности и объема. Наша компания обладает опытом и ресурсами, чтобы реализовать даже самые сложные задачи, обеспечивая высокий уровень качества и профессионализма." 
    }
  ];

        return(
        <section className="benefits-section">
            <div className="container container--size-md benefits-section__container">
              <h2 className="benefits-section__title">За что нас ценят?</h2>
              <div className="benefits-section__list"><div/>
              {el.map((item) => (
                <article key={item.id} className={`benefits-section__list-card faq-card ${openCardId === item.id ? 'is-show' : ''}`} onClick={() => handleCardClick(item.id)}>
                <div className="faq-card__header">
                    <button type="button" className="faq-card__btn js-faq-card-toggle ">
                      <h3 className="faq-card__title">{item.name}</h3>
                    </button>
                    <svg className="u-icon faq-card__icon">
                    <Close />
                    </svg>
                  </div>
                  <div className="faq-card__dropdown">
                    <div className="content faq-card__text">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </article>
              ))}
              </div>
            </div>
          </section>
    )
}

export default Benifest;