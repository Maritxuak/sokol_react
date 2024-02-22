
import React from "react";
import { useState, useEffect } from "react";
import { ReactComponent as Close } from "../../images/icons/close.svg";
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
});
const getAllDignities = async () => {
  try {
    const response = await axiosInstance.get('/read/dignities');
    if (response.data) {
      console.log(response.data);
      return response.data.map((item) => ({
        id: item.id,
        name: item.name,
        dsc: item.dsc,
      }))
    }else{
      console.error('Объект data не определен');
    }
  } catch (error) {
    console.error(error);
  }
};

const Benifest = () => {
  const [dignities, setDignities] = useState([]);
  const [openCardId, setOpenCardId] = useState(null);

  const handleCardClick = (id) => {
    setOpenCardId(id);
  };

  useEffect(() => {
    const fetchDignities = async () => {
      const dignities = await getAllDignities();
      setDignities(dignities);
    };

    fetchDignities().then((dignities) => {
      setDignities(dignities);
    });
  }, []);

  return (
    <section className="benefits-section">
      {/* <div className="container container--size-md benefits-section__container">
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
      </div> */}
    </section>
  );
};

export default Benifest;