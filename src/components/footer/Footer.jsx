import headerlogo from '../../images/logo.png'

const Footer = () =>{
    return(
        <footer className="footer site__footer">
  <div className="container container--size-md footer__container">
    <div className="row footer__row">
      <div className="footer__col footer__col--nav row__col--3">
        <p className="footer__title">О компании</p>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a href="#" className="footer__nav-link">О нас</a>
            </li>
            <li className="footer__nav-item">
              <a href="#" className="footer__nav-link">Вакансии</a>
            </li>
            <li className="footer__nav-item">
              <a href="#" className="footer__nav-link">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer__col footer__col--nav row__col--3">
        <p className="footer__title">О компании</p>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a href="#" className="footer__nav-link">О нас</a>
            </li>
            <li className="footer__nav-item">
              <a href="#" className="footer__nav-link">Вакансии</a>
            </li>
            <li className="footer__nav-item">
              <a href="#" className="footer__nav-link">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer__col footer__col--nav row__col--4">
        <p className="footer__title">Услуги</p>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a href="#" className="footer__nav-link">SEO-продвижение</a>
            </li>
            <li className="footer__nav-item">
              <a href="#" className="footer__nav-link">Разработка веб-сайтов под ключ</a>
            </li>
            <li className="footer__nav-item">
              <a href="#" className="footer__nav-link">Веб-дизайн и разработка</a>
            </li>
            <li className="footer__nav-item">
              <a href="#" className="footer__nav-link">Разработка интернет-магазинов</a>
            </li>
            <li className="footer__nav-item">
              <a href="#" className="footer__nav-link">Техническая поддержка</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer__col footer__col--nav row__col--2">
        <p className="footer__title">Контакты</p>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a href="tel:+" className="footer__nav-link">7 (ххх) ххх хх хх</a>
            </li>
            <li className="footer__nav-item">
              <a href="tel:+" className="footer__nav-link">7 (ххх) ххх хх хх</a>
            </li>
            <li className="footer__nav-item">
              <a href="mailto:" className="footer__nav-link">Почта</a>
            </li>
            <li className="footer__nav-item">
              <a href="#" className="footer__nav-link">Телеграм</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer__col footer__col--copyright row__col--12">
        <div className="footer__bottom">
          <a href="/" className="logo footer__bottom-logo">
            <picture className="logo__img">
              <img src={headerlogo} alt="Рантье" width="68" height="68" />
            </picture>
          </a>
          <nav className="footer__bottom-subnav">
            <ul className="footer__bottom-subnav-list">
              <li className="footer__bottom-subnav-item">
                <a href="#" className="footer__bottom-subnav-link">Пользовательские соглашения</a>
              </li>
              <li className="footer__bottom-subnav-item">
                <a href="#" className="footer__bottom-subnav-link">Политика конфиденциальности</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</footer>
    )
}

export default Footer;