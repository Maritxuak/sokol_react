
import projectLayoutImg from "../../images/project-layout-img.jpg"
import projectLayoutImg1 from "../../images/project-layout-img-1.jpg"
import projectLayoutImg2 from "../../images/project-layout-img-2.jpg"
import reviewsCard1 from "../../images/reviews-card-1.svg"
import reviewsCard2 from "../../images/reviews-card-2.svg"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
const ProjectLayout = ({ apiGet }) => {
  const { id } = useParams()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const [dignities, setDignities] = useState([]); // Изменено на dignities
  const [object, setObject] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
  }, [dignities]);

  // const newArray = dignities.qoutes.map((item) => (
  //   console.log(item.id)
  // ));

  useEffect(() => {
    const fetchDignities = async () => {
      try {
        const response = await apiGet.get(`/read/project/${id}/`);
        setDignities([response.data])
        setObject(response.data)

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchDignities();
  }, []);

  return (
    <section className="project-layout">
      <div className="project-layout__poster-wrapper">
        <span className="bg-color bg-color--theme-darkgrey bg-color--opacity-25"></span>
        <picture className="project-layout__picture pic">
          <img src={object.title_photo} alt="" />
        </picture>
      </div>
      <div className="container container--size-md project-layout__container">

        <h1 className="project-layout__title">{object.name}</h1>

        <article className="row project-layout__card">
          <div className="row__col--4 project-layout__card-col project-layout__card-col--title">
            <h2 className="project-layout__card-title">О проекте</h2>
          </div>
          <div className="row__col--8 project-layout__card-col project-layout__card-col--content">
            <div className="project-layout__card-content">
              <div className="content project-layout__card-text">
                {object.dsc_project}
              </div>
            </div>
          </div>
        </article>
        <article className="row project-layout__card">
          <div className="row__col--4 project-layout__card-col project-layout__card-col--title">
            <h2 className="project-layout__card-title">Задача</h2>
          </div>
          <div className="row__col--8 project-layout__card-col project-layout__card-col--content">
            <div className="project-layout__card-content">
              <div className="content project-layout__card-text">
                {object.dsc_task}
              </div>
            </div>
          </div>
        </article>
        <picture className="project-layout__picture">
          <img src={object.photo_task} alt="" />
        </picture>
        <article className="row project-layout__card">
          <div className="row__col--4 project-layout__card-col project-layout__card-col--title">
            <h2 className="project-layout__card-title">Реализация</h2>
          </div>
          <div className="row__col--8 project-layout__card-col project-layout__card-col--content">
            <div className="project-layout__card-content">
              <div className="content project-layout__card-text">
                <ul>
                  {object.dsc_realization}
                </ul>
              </div>
            </div>
          </div>
        </article>
        <picture className="project-layout__picture">
          <img src={object.photo_realization} alt="" />
        </picture>
        <article className="row project-layout__card">
          <div className="row__col--4 project-layout__card-col project-layout__card-col--title">
            <h2 className="project-layout__card-title">Цитаты</h2>
          </div>
          <div className="row__col--8 project-layout__card-col project-layout__card-col--content">
            <div className="project-layout__card-content">
              <div className="project-layout__card-reviews">
                <div className="reviews-card project-layout__card-reviews-item">
                  {dignities.map((item) => (
                    item.quotes.filter((itemQuotes) => itemQuotes.category === "1").map((itemQuotes) =>
                      <div className="reviews-card project-layout__card-reviews-item">
                        <div className="reviews-card__inner">
                          <header className="reviews-card__header">
                            <div className="reviews-card__header-media">
                              <picture className="reviews-card__header-avatar">
                                <img src={reviewsCard1} alt="Александр Усович" />
                              </picture>
                            </div>
                            <div className="reviews-card__header-content">
                              <p className="reviews-card__header-name">{itemQuotes.username}</p>
                              <p className="reviews-card__header-position">{itemQuotes.post}</p>
                            </div>
                          </header>
                          <div className="reviews-card__content">
                            <div className="content reviews-card__text">
                              <p>{itemQuotes.quotes}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  ))}
                  {dignities.map((item) => (
                    item.quotes.filter((itemQuotes) => itemQuotes.category === "2").map((itemQuotes) =>
                      <div className="reviews-card project-layout__card-reviews-item">
                        <div className="reviews-card__inner">
                          <header className="reviews-card__header">
                            <div className="reviews-card__header-media">
                              <picture className="reviews-card__header-avatar">
                                <img src={reviewsCard2} alt="Александр Усович" />
                              </picture>
                            </div>
                            <div className="reviews-card__header-content">
                              <p className="reviews-card__header-name">{itemQuotes.username}</p>
                              <p className="reviews-card__header-position">{itemQuotes.post}</p>
                            </div>
                          </header>
                          <div className="reviews-card__content">
                            <div className="content reviews-card__text">
                              <p>{itemQuotes.quotes}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  ))}


                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ProjectLayout;