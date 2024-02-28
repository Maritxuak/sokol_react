
import { ReactComponent as Arrow2 } from "../../images/icons/arrow-type-2.svg";
import React, { useRef, useCallback, useEffect, useState } from "react";
import Swiper from "swiper";
import ServiceSliderSecond from "../serviceSlide2/ServiceSlid2";
import ServiceSlidFirst from "../serviceSlide1/ServiceSlid1";
import { useParams} from "react-router-dom"

const ServicesLayout = ({apiGet, actualId}) => {

    console.log(useParams())

    const {id} = useParams();

    const [idActive, setIdActive] = React.useState(0)

    const handleIdActive = useCallback((pop) => {
        setIdActive(pop)
    }, [idActive]);

    const [dignities, setDignities] = useState([]); // Изменено на dignities

    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      console.log("dignities1", dignities);
    }, [dignities]);

    useEffect(() => {
        const fetchDignities = async () => {
            try {
                const response = await apiGet.get('/read/dcsCatServices/');
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
                        <ServiceSlidFirst dignities={dignities} id={id} idActive={idActive} apiGet={apiGet}/>
                        
                        <ServiceSliderSecond idActive={idActive} setIdActive={setIdActive}/>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ServicesLayout;