import "./header.css";
import React, { useState } from "react";
import headerlogo from "../../images/logo.png";
const Header = () => {
  const [scroll, setScroll] = React.useState(0);
  const [click, setClick] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <header
      className={
        scroll < 300
          ? "header--theme-sticky header"
          : "header--theme-sticky header is-sticky"
      }
    >
      <div className="container container--size-md header__container">
        <div className="header__inner">
          <a href="/" className="logo header__logo">
            <picture className="logo__img">
              <img src={headerlogo} alt="Рантье" width="68" height="68" />
            </picture>
            <span className="logo__text">
              <span className="logo__title">Рантье</span>
            </span>
          </a>
          <div className="header__dropdown">
            <ul className="header__contacts">
              <li className="header__contacts-item">
                <a
                  href="mailto:cokol@gmail.com"
                  className="header__contacts-link"
                >
                  Cokol@gmail.com
                </a>
              </li>
              <li className="header__contacts-item">
                <a href="tel:+89994839500" className="header__contacts-link">
                  8 (999) 483 95 00
                </a>
              </li>
            </ul>
          </div>
          <a
            href="#cta-section"
            className="js-link-anchor btn btn--size-md btn--theme-accent-fill header__btn-action"
          >
            <span className="btn__inner">
              <span className="btn__title">Обсудить идею</span>
            </span>
          </a>
        </div>
      </div>

      <div className="container container--size-md header__container-nav">
        <div className="header__inner">
          <a href="/" className="logo header__logo">
            <picture className="logo__img">
              <img src={headerlogo} alt="Рантье" width="68" height="68" />
            </picture>
          </a>
          <div className="header__dropdown">
            <nav className="header__nav" role="navigation">
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <a href="#main" className="header__nav-link">
                    Услуги
                  </a>
                </li>
                <li className="header__nav-item">
                  <a href="#benifest" className="header__nav-link">
                    За что нас ценят?
                  </a>
                </li>
                <li className="header__nav-item">
                  <a href="#our-workflow" className="header__nav-link">
                    Как мы работаем?
                  </a>
                </li>
                <li className="header__nav-item">
                  <a href="#cooperation" className="header__nav-link">
                    Условия сотрудничества
                  </a>
                </li>
                <li className="header__nav-item">
                  <a href="#projects" className="header__nav-link">
                    Проекты
                  </a>
                </li>
              </ul>
            </nav>
            <ul className="d-lg-block header__contacts">
              <li className="header__contacts-item">
                <a
                  href="mailto:cokol@gmail.com"
                  className="header__contacts-link"
                >
                  Cokol@gmail.com
                </a>
              </li>
              <li className="header__contacts-item">
                <a href="tel:+89994839500" className="header__contacts-link">
                  8 (999) 483 95 00
                </a>
              </li>
            </ul>
          </div>
          <a
            href="#cta-section"
            className="js-link-anchor btn btn--size-md btn--theme-accent-fill header__btn-action"
          >
            <span className="btn__inner">
              <span className="btn__title">Обсудить идею</span>
            </span>
          </a>

          <button
            type="button"
            className={
              !click
                ? "js-header-toggle d-xl-block header__toggle"
                : "js-header-toggle d-xl-block header__toggle is-active"
            }
            onClick={() => setClick(!click)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className={click ? "modal" : "modal-hidden"}>
        <div className="modal-contents">
          <nav className="header_list" role="navigation">
            <ul className="header_nav-list mobile">
              <li className="header__nav-item d-flex justify-content-center">
                <a href="#main" onClick={ () => setClick(!click)} className="header__nav-link">
                  Услуги
                </a>
              </li>
              <li className="header__nav-item d-flex justify-content-center">
                <a href="#benifest" onClick={ () => setClick(!click)} className="header__nav-link">
                  За что нас ценят?
                </a>
              </li>
              <li className="header__nav-item d-flex justify-content-center">
                <a href="#our-workflow" onClick={ () => setClick(!click)} className="header__nav-link">
                  Как мы работаем?
                </a>
              </li>
              <li className="header__nav-item d-flex justify-content-center">
                <a href="#cooperation" onClick={ () => setClick(!click)} className="header__nav-link">
                  Условия сотрудничества
                </a>
              </li>
              <li className="header__nav-item d-flex justify-content-center">
                <a href="#projects" onClick={ () => setClick(!click)} className="header__nav-link">
                  Проекты
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
