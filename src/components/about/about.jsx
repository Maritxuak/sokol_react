import about1 from "../../images/about-section-img-1.jpg"
import "./about.css"
const About = () =>{
    return(
        <>
        <section className="about-section">
            <div className="container container--size-md about-section__container">
              <div className="row about-section__row">
                <div className="row__col--7 about-section__col about-section__col--content">
                  <div className="about-section__content">
                    <h2 className="about-section__title">Переход в онлайн - с нами просто и надежно</h2>
                    <div className="content about-section__text">
                      <p>IT Компания "Сокол" предлагает комплексные решения для вашего бизнеса, помогая вам успешно перенести свой оффлайн бизнес в онлайн-среду. Мы специализируемся на веб-разработке, маркетинге и поддержке IT-инфраструктуры, предоставляя вам все необходимые инструменты и&nbsp;знания для эффективного функционирования вашего бизнеса в онлайн-мире.</p>
                    </div>
                  </div>
                </div>
                <div className="row__col--5 about-section__col about-section__col--media">
                  <div className="about-section__media">
                    <picture className="about-section__picture">
                      <img src={about1} alt="Переход в онлайн - с нами просто и надежно" />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    )
}

export default About;