
import React from "react";
import { useState, useEffect } from "react";
import { ReactComponent as Close } from "../../images/icons/close.svg";
import axios from 'axios';

const Benifest = ({apiGet}) => {
  const [dignities, setDignities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openCardId, setOpenCardId] = useState(null);

  const handleCardClick = (id) => {
    setOpenCardId(id === openCardId ? null : id);
  };

  useEffect(() => {
    const fetchDignities = async () => {
      try {
        const response = await apiGet.get('/read/dignities/');
        if (response.data) {
          const formattedDignities = response.data.map((item) => ({
            id: item.id,
            name: item.name,
            dsc: item.dsc,
            
          }));
          setDignities(formattedDignities);
        } else {
          console.error('Объект data не определен');
        }
        setIsLoading(false);
      } catch (error) {
        
        setIsLoading(false);
      }
    };

    fetchDignities();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section id="benifest" className="benefits-section">
      <div className="container container--size-md benefits-section__container">
        <h2 className="benefits-section__title">За что нас ценят?</h2>
        {dignities.map((item) => (
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
                <p>{item.dsc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Benifest;