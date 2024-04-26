
import { ReactComponent as Arrow2 } from "../../images/icons/arrow-type-2.svg";
import React, { useRef, useCallback, useEffect, useState } from "react";
import Swiper from "swiper";
import ServiceSliderSecond from "../serviceSlide2/ServiceSlid2";
import ServiceSlidFirst from "../serviceSlide1/ServiceSlid1";
import { useParams} from "react-router-dom"

const ServicesLayout = ({apiGet, actualId}) => {

    const {id} = useParams();

    const [idActive, setIdActive] = React.useState(0)

    const handleIdActive = useCallback((pop) => {
        setIdActive(pop)
    }, [idActive]);

    const [dignities, setDignities] = useState([]);
    console.log(dignities);
    const [object, setObject] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDignities = async () => {
          try {
            const response = await apiGet.get(`/read/services/${id}/`);
            setDignities([response.data])
            setObject(response.data)
    
            setIsLoading(false);
          } catch (error) {
            setIsLoading(false);
          }
        };
    
        fetchDignities();
      }, []);
    // useEffect(() => {
    //   const fetchDignities = async () => {
    //       try {
    //         console.log('id:', id);
    //           const response = await apiGet.get(`/read/services/${id}/`);
    //           console.log("response", response.data)
    //           setDignities(response.data)
    
    //           setIsLoading(false);
    //       } catch (error) {
    //           setIsLoading(false);
    //       }
    //   };
    
    //   fetchDignities();
    // }, []);

    return (
        <>
            <section className="services-layout site__services-layout">
                <div className="container container--size-md services-layout__container">
                    <h1 className="services-layout__title">{object.name}</h1>
                    <div className="row services-layout__row-content">
                        <div className="row__col--6 services-layout__col services-layout__col--item">
                            <article className="services-layout__item">
                                <p className="services-layout__item-suptitle">Разработка систем с веб-интерфейсом</p>
                                <h3 className="services-layout__item-title">{object.name}</h3>
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
                                            <span className="btn__title">Что входит в услугу?</span>
                                        </span>
                                    </a>

                                </div>
                            </article>
                        </div>
                        <div className="row__col--6 services-layout__col services-layout__col--content">
                            <div className="content services-layout__description">
                                {object.dsc}
                            </div>
                        </div>
                    </div>
                    <div className="services-layout__main">
                        <ServiceSlidFirst dignities={dignities} object={object} id={id} idActive={idActive} apiGet={apiGet}/>
                        
                        <ServiceSliderSecond dignities={dignities} object={object} idActive={idActive} setIdActive={setIdActive}/>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ServicesLayout;