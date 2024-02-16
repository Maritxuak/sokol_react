import about1 from "../../images/about-section-img-1.jpg"

const About = () =>{
    return(
        <>
        <section class="about-section">
            <div class="container container--size-md about-section__container">
              <div class="row about-section__row">
                <div class="row__col--7 about-section__col about-section__col--content">
                  <div class="about-section__content">
                    <h2 class="about-section__title">Переход в онлайн - с нами просто и надежно</h2>
                    <div class="content about-section__text">
                      <p>IT Компания "Сокол" предлагает комплексные решения для вашего бизнеса, помогая вам успешно перенести свой оффлайн бизнес в онлайн-среду. Мы специализируемся на веб-разработке, маркетинге и поддержке IT-инфраструктуры, предоставляя вам все необходимые инструменты и&nbsp;знания для эффективного функционирования вашего бизнеса в онлайн-мире.</p>
                    </div>
                  </div>
                </div>
                <div class="row__col--5 about-section__col about-section__col--media">
                  <div class="about-section__media">
                    <picture class="about-section__picture">
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