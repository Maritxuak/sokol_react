
import headerlogo from '../../images/logo.png'
const Header = () => {
    return (
<header class="@@el header">
  <div class="container container--size-md header__container">
    <div class="header__inner">
      <a href="/" class="logo header__logo">
        <picture class="logo__img">
          <img src={headerlogo} alt="Рантье" width="68" height="68" />
        </picture>
        <span class="logo__text">
          <span class="logo__title">Рантье</span>
        </span>
      </a>
      <div class="header__dropdown">
        <ul class="header__contacts">
          <li class="header__contacts-item">
            <a href="mailto:cokol@gmail.com" class="header__contacts-link">Cokol@gmail.com</a>
          </li>
          <li class="header__contacts-item">
            <a href="tel:+89994839500" class="header__contacts-link">8 (999) 483 95 00</a>
          </li>
        </ul>
      </div>
      <a href="#cta-section" class="js-link-anchor btn btn--size-md btn--theme-accent-fill header__btn-action">
        <span class="btn__inner">
          <span class="btn__title">Обсудить идею</span>
        </span>
      </a>
    </div>
  </div>


  
  <div class="container container--size-md header__container-nav">
    <div class="header__inner">
      <a href="/" class="logo header__logo">
        <picture class="logo__img">
          <img src={headerlogo} alt="Рантье" width="68" height="68" />
        </picture>
      </a>
      <div class="header__dropdown">
        <nav class="header__nav" role="navigation">
          <ul class="header__nav-list">
            <li class="header__nav-item">
              <a href="#" class="header__nav-link">О компании</a>
            </li>
            <li class="header__nav-item">
              <a href="#" class="header__nav-link is-active">Услуги</a>
            </li>
            <li class="header__nav-item">
              <a href="#" class="header__nav-link">Специалисты</a>
            </li>
            <li class="header__nav-item">
              <a href="#" class="header__nav-link">Подход</a>
            </li>
            <li class="header__nav-item">
              <a href="#" class="header__nav-link">Репутация</a>
            </li>
            <li class="header__nav-item">
              <a href="#" class="header__nav-link">Проекты</a>
            </li>
            <li class="header__nav-item">
              <a href="#" class="header__nav-link">Консультация</a>
            </li>
          </ul>
        </nav>
        <ul class="d-lg-block header__contacts">
          <li class="header__contacts-item">
            <a href="mailto:cokol@gmail.com" class="header__contacts-link">Cokol@gmail.com</a>
          </li>
          <li class="header__contacts-item">
            <a href="tel:+89994839500" class="header__contacts-link">8 (999) 483 95 00</a>
          </li>
        </ul>
      </div>
      <a href="#cta-section" class="js-link-anchor btn btn--size-md btn--theme-accent-fill header__btn-action">
        <span class="btn__inner">
          <span class="btn__title">Обсудить идею</span>
        </span>
      </a>
      <button type="button" class="js-header-toggle d-lg-block header__toggle">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>
</header>
    )
}

export default Header;