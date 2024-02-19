
import { ReactComponent as Checked } from "../../images/icons/checked.svg"
import { ReactComponent as FileAttach } from "../../images/icons/file-attach.svg"
import { ReactComponent as Close } from "../../images/icons/close.svg"
const CtaSection = () => {

  return (
    <>
      <section id="cta-section" className="cta-section">
        <div className="container container--size-md cta-section__container">
          <div className="cta-section__block">
            <div className="row cta-section__block-row">
              <div className="row__col--6 cta-section__block-col cta-section__block-col--content">
                <div className="cta-section__block-content">
                  <h2 className="cta-section__block-title">С Вас задача - с&nbsp;нас <span className="color-accent">решение!</span></h2>
                  <div className="content cta-section__block-text">
                    <p>Заполните форму, мы свяжемся с вами, проконсультируем и обсудим ваш проект</p>
                  </div>
                </div>
              </div>
              <div className="row__col--6 cta-section__block-col cta-section__block-col--form">
                <form action="#" className="cta-section__form">
                  <div className="u-control cta-section__form-line">
                    <input type="text" name="cta_name" className="u-input u-input--theme-white u-input--size-md u-input--status-error u-control__input" placeholder="" value="" />
                    <p className="u-control__placeholder">
                      <span className="u-control__placeholder-title">Имя</span>
                    </p>
                  </div>
                  <div className="u-control cta-section__form-line">
                    <div id="your-destination-element"></div>
                    <input type="tel" name="cta_phone" id="js-phone-mask" className="u-input u-input--theme-white u-input--size-md u-input--iti u-control__input" required placeholder="" />
                    <p className="u-control__placeholder">
                      <span className="u-control__placeholder-title"></span>
                    </p>
                  </div>
                  <div className="u-control cta-section__form-line">
                    <input type="text" name="cta_company" className="u-input u-input--theme-white u-input--size-md u-control__input" placeholder="" />
                    <p className="u-control__placeholder">
                      <span className="u-control__placeholder-title">Компания</span>
                    </p>
                  </div>
                  <div className="js-attach-file u-control cta-section__form-line">
                    <label className="u-control__file">
                      <svg className="u-icon u-control__icon">
                        <FileAttach />
                      </svg>
                      <input type="file" name="cta_file" className="u-control__file-el" value="" />
                      <span className="u-input u-input--theme-white u-input--size-md u-control__file-input"></span>
                      <p className="u-control__placeholder">
                        <span className="u-control__placeholder-title">Файл с информацией о проекте</span>
                      </p>
                      <button type="button" className="js-attach-file-remove u-control__file-remove">
                        <svg className="u-icon">
                          <Close />
                        </svg>
                      </button>
                    </label>
                  </div>
                  <div class="cta-section__form-line u-control">
                    <select name="cta_appeal" id="js-select-init" class="cta-section__form-select">
                      <option value="Не выбрано" selected="selected" disabled="disabled"></option>
                      <option value="Создание и оптимизация лендингов и мультилендингов">Создание и оптимизация лендингов и мультилендингов</option>
                      <option value="Разработка веб-сайтов под ключ">Разработка веб-сайтов под ключ</option>
                      <option value="Разработка интернет-магазинов">Разработка интернет-магазинов</option>
                      <option value="Интеграция и настройка CRM и ERP систем">Интеграция и настройка CRM и ERP систем</option>
                      <option value="Разработка корпоративных порталов и систем управления">Разработка корпоративных порталов и систем управления</option>
                      <option value="Разработка корпоративных порталов и систем управления">Разработка корпоративных порталов и систем управления</option>
                      <option value="Разработка корпоративных порталов и систем управления">Разработка корпоративных порталов и систем управления</option>
                      <option value="Разработка корпоративных порталов и систем управления">Разработка корпоративных порталов и систем управления</option>
                      <option value="Разработка корпоративных порталов и систем управления">Разработка корпоративных порталов и систем управления</option>
                      <option value="Разработка корпоративных порталов и систем управления">Разработка корпоративных порталов и систем управления</option>
                      <option value="Разработка корпоративных порталов и систем управления">Разработка корпоративных порталов и систем управления</option>
                      <option value="Разработка корпоративных порталов и систем управления">Разработка корпоративных порталов и систем управления</option>
                      <option value="Разработка корпоративных порталов и систем управления">Разработка корпоративных порталов и систем управления</option>
                      <option value="Разработка корпоративных порталов и систем управления">Разработка корпоративных порталов и систем управления</option>
                      <option value="Разработка корпоративных порталов и систем управления">Разработка корпоративных порталов и систем управления</option>
                      <option value="Разработка корпоративных порталов и систем управления">Разработка корпоративных порталов и систем управления</option>
                      <option value="Разработка корпоративных порталов и систем управления">Разработка корпоративных порталов и систем управления</option>
                      <option value="Разработка корпоративных порталов и систем управления">Разработка корпоративных порталов и систем управления</option>
                      <option value="Разработка корпоративных порталов и систем управления">Разработка корпоративных порталов и систем управления</option>
                    </select>
                    <p class="u-control__placeholder">
                      <span class="u-control__placeholder-title">Что вас интересует?</span>
                    </p>
                  </div>
                  <div className="u-checkbox cta-section__form-privacy">
                    <label className="u-checkbox__label">
                      <input type="checkbox" name="cta_privacy" className="u-checkbox__control" required value="Персональные данные" />
                      <span className="u-checkbox__inner">
                        <span className="u-checkbox__icon">
                          <svg className="u-icon">
                            <Checked />
                          </svg>
                        </span>
                        <span className="u-checkbox__title">Согласен на обработку персональных данных</span>
                      </span>
                    </label>
                  </div>
                  
                  <button type="submit" className="btn btn--size-md btn--theme-accent-fill cta-section__form-btn" disabled>
                    <span className="btn__inner">
                      <span className="btn__title">Отправить</span>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaSection;