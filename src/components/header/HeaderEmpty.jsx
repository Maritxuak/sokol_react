

import headerlogo from '../../images/logo.png'
const HeaderEmpty = () => {
    return (
        <header className="header--theme-sticky header">
            <div className="container container--size-md header_container">
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
                                <a href="mailto:it@rentier.world" className="header__contacts-link">it@rentier.world</a>
                            </li>
                            <li className="header__contacts-item">
                                <a href="tel:+89994839500" className="header__contacts-link">8 (999) 483 95 00</a>
                            </li>
                        </ul>
                    </div>
                    <a href="#cta-section" className="js-link-anchor btn btn--size-md btn--theme-accent-fill header__btn-action">
                        <span className="btn__inner">
                            <span className="btn__title">Обсудить идею</span>
                        </span>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default HeaderEmpty;