import { ReactComponent as Checked } from "../../images/icons/checked.svg";
import { ReactComponent as FileAttach } from "../../images/icons/file-attach.svg";
import { ReactComponent as Close } from "../../images/icons/close.svg";
import React from "react";
import { useState } from "react";
import PhoneFileValidation from "../../PhoneFileValidation";
import PropTypes from "prop-types";
import PhoneInput from "react-phone-input-2";

const CtaSection = ({ apiGet }) => {
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);
  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{11}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const [inputContent, setInputContent] = useState("");

  const handleiInputChange = (event) => {
    setInputContent(event.target.value);
  };

  const [click, setClick] = React.useState(true);

  const [selected, setSelected] = useState(null);

  const options = [
    { label: "Создание и оптимизация лендингов и мультилендингов", value: "1" },
    { label: "Разработка веб-сайтов под ключ", value: "2" },
    { label: "Разработка интернет-магазинов", value: "3" },
    { label: "Интеграция и настройка CRM и ERP систем", value: "4" },
    {
      label: "Разработка корпоративных порталов и систем управления",
      value: "5",
    },
    {
      label: "Разработка корпоративных порталов и систем управления",
      value: "6",
    },
    {
      label: "Разработка корпоративных порталов и систем управления",
      value: "7",
    },
    {
      label: "Разработка корпоративных порталов и систем управления",
      value: "8",
    },
  ];

  const handleSelect = (option) => {
    setSelected(option);
  };

  //form
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [send, setSend] = useState(false);
  const [dis, setDis] = useState(true);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("category", selected.label);
    formData.append("number_phone", PhoneNumber);
    event.preventDefault();

    if (!inputContent) {
      formData.delete("dsc");
    } else {
      formData.append("dsc", inputContent);
    }

    console.log("Данные для отправки:");
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    if (file) {
      formData.append("document", file);
    }
    console.log("Данные для отправки:");
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    try {
      const response = await fetch(
        "http://localhost:8000/api/create/FeedBack",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setSend(true)
        setDis(false)
        console.log("Запись успешно создана!");
      } else {
        console.error("Ошибка при создании записи");
      }
    } catch (error) {
      console.error("Произошла ошибка:", error);
    }
  };

  const [activeForm, setActiveForm] = useState(false);

  return (
    <>
      <section id="cta-section" className="cta-section">
        <div className="container container--size-md cta-section__container">
          <div className="cta-section__block">
            <div className="row cta-section__block-row">
              <div className="row__col--6 cta-section__block-col cta-section__block-col--content">
                <div className="cta-section__block-content">
                  <h2 className="cta-section__block-title">
                    С Вас задача - с&nbsp;нас{" "}
                    <span className="color-accent">решение!</span>
                  </h2>
                  <div className="content cta-section__block-text">
                    <p>
                      Заполните форму, мы свяжемся с вами, проконсультируем и
                      обсудим ваш проект
                    </p>
                  </div>
                </div>
              </div>
              <div className="row__col--6 cta-section__block-col cta-section__block-col--form">
                <form
                  onSubmit={handleSubmit}
                  action="#"
                  className="cta-section__form">
                  <div className="u-control cta-section__form-line">
                    <input
                      type="text"
                      onChange={handleNameChange}
                      name="username"
                      value={name}
                      className="u-input u-input--theme-white u-input--size-md u-control__input"
                      placeholder=""
                    />
                    <p className="u-control__placeholder">
                      <span className="u-control__placeholder-title">Имя</span>
                    </p>
                  </div>
                  <div className="u-control cta-section__form-line phone">
                    <div className="iti iti--allow-dropdown">
                      <label className="u-input u-input--theme-white u-input--size-md u-input--iti u-control__input is-active-country phone">
                        <PhoneInput
                          name="number_phone"
                          country={"ru"}
                          value={PhoneNumber}
                          onChange={handleChange}
                          inputProps={{
                            required: true,
                          }}
                        />
                      </label>
                      {!valid && (
                        <p className="error">
                          Введите действительный номер телефона.
                        </p>
                      )}
                    </div>
                    <p className="u-control__placeholder">
                      <span className="u-control__placeholder-title"></span>
                    </p>
                  </div>
                  <div className="u-control cta-section__form-line">
                    <input
                      type="text"
                      name="name_company"
                      required
                      className="u-input u-input--theme-white u-input--size-md u-control__input"
                      placeholder=""
                    />
                    <p className="u-control__placeholder">
                      <span className="u-control__placeholder-title">
                        Компания
                      </span>
                    </p>
                  </div>
                  <div className="js-attach-file u-control cta-section__form-line">
                    <label className="u-control__file">
                      <svg className="u-icon u-control__icon">
                        <FileAttach />
                      </svg>
                      <input
                        type="file"
                        name="document"
                        className="u-control__file-el"
                        value=""
                        onChange={handleFileChange}
                      />
                      <span className="u-input u-input--theme-white u-input--size-md u-control__file-input"></span>
                      <p className="u-control__placeholder">
                        <span className="u-control__placeholder-title">
                          {file ? file.name : "Файл с информацией о проекте"}
                        </span>
                      </p>
                      <button
                        type="button"
                        className="js-attach-file-remove u-control__file-remove">
                        <svg className="u-icon">
                          <Close />
                        </svg>
                      </button>
                    </label>
                  </div>
                  <div
                    className={
                      selected === null
                        ? "cta-section__form-line u-control"
                        : "cta-section__form-line u-control is-select-active"
                    }>
                    <select
                      name="category"
                      id="js-select-init"
                      className="cta-section__form-select"
                      onChange={(e) => {
                        const selectedOption = options.find(
                          (option) => option.value === e.target.value
                        );
                        setSelected(selectedOption);
                      }}>
                      <option
                        required
                        value="Не выбрано"
                        selected="selected"
                        disabled="disabled"></option>
                      <option value="Создание и оптимизация лендингов и мультилендингов">
                        Создание и оптимизация лендингов и мультилендингов
                      </option>
                      <option value="Разработка веб-сайтов под ключ">
                        Разработка веб-сайтов под ключ
                      </option>
                      <option value="Разработка интернет-магазинов">
                        Разработка интернет-магазинов
                      </option>
                      <option value="Интеграция и настройка CRM и ERP систем">
                        Интеграция и настройка CRM и ERP систем
                      </option>
                      <option value="Разработка корпоративных порталов и систем управления">
                        Разработка корпоративных порталов и систем управления
                      </option>
                      <option value="Разработка корпоративных порталов и систем управления">
                        Разработка корпоративных порталов и систем управления
                      </option>
                      <option value="Разработка корпоративных порталов и систем управления">
                        Разработка корпоративных порталов и систем управления
                      </option>
                      <option value="Разработка корпоративных порталов и систем управления">
                        Разработка корпоративных порталов и систем управления
                      </option>
                      <option value="Разработка корпоративных порталов и систем управления">
                        Разработка корпоративных порталов и систем управления
                      </option>
                      <option value="Разработка корпоративных порталов и систем управления">
                        Разработка корпоративных порталов и систем управления
                      </option>
                      <option value="Разработка корпоративных порталов и систем управления">
                        Разработка корпоративных порталов и систем управления
                      </option>
                      <option value="Разработка корпоративных порталов и систем управления">
                        Разработка корпоративных порталов и систем управления
                      </option>
                      <option value="Разработка корпоративных порталов и систем управления">
                        Разработка корпоративных порталов и систем управления
                      </option>
                      <option value="Разработка корпоративных порталов и систем управления">
                        Разработка корпоративных порталов и систем управления
                      </option>
                      <option value="Разработка корпоративных порталов и систем управления">
                        Разработка корпоративных порталов и систем управления
                      </option>
                      <option value="Разработка корпоративных порталов и систем управления">
                        Разработка корпоративных порталов и систем управления
                      </option>
                      <option value="Разработка корпоративных порталов и систем управления">
                        Разработка корпоративных порталов и систем управления
                      </option>
                      <option value="Разработка корпоративных порталов и систем управления">
                        Разработка корпоративных порталов и систем управления
                      </option>
                      <option value="Разработка корпоративных порталов и систем управления">
                        Разработка корпоративных порталов и систем управления
                      </option>
                    </select>
                    <div
                      className={
                        click
                          ? "nice-select cta-section__form-select"
                          : "nice-select cta-section__form-select open"
                      }
                      tabIndex="0"
                      onClick={() => setClick(!click)}>
                      <span
                        className={`${selected ? selected.value : ""} current`}>
                        {selected ? selected.label : ""}
                      </span>
                      <div className="nice-select-dropdown">
                        {
                          <ul className="list">
                            {options.map((option) => (
                              <li
                                key={option.value}
                                onClick={() => handleSelect(option)}
                                className="option selected disabled focus">
                                {option.label}
                              </li>
                            ))}
                          </ul>
                        }
                      </div>
                    </div>
                    <p className="u-control__placeholder">
                      <span className="u-control__placeholder-title">
                        Что вас интересует?
                      </span>
                    </p>
                  </div>
                  <div className="u-control cta-section__form-line">
                    <textarea
                      name="dsc"
                      className={
                        inputContent === ""
                          ? "u-input u-input--theme-white u-input cta-section__form-line textareasection"
                          : "u-input u-input--theme-white u-input cta-section__form-line textareasection textareaactive"
                      }
                      id=""
                      cols="20"
                      rows="5"
                      value={inputContent}
                      onChange={handleiInputChange}></textarea>
                    <p className="u-control__placeholder">
                      <span className="u-control__placeholder-title">
                        Описание
                      </span>
                    </p>
                  </div>
                  <div className="u-checkbox cta-section__form-privacy">
                    <label className="u-checkbox__label">
                      <input
                        type="checkbox"
                        className="u-checkbox__control"
                        required
                        value="Персональные данные"
                      />
                      <span className="u-checkbox__inner">
                        <span className="u-checkbox__icon">
                          <svg className="u-icon">
                            <Checked />
                          </svg>
                        </span>
                        <span className="u-checkbox__title">
                          Согласен на обработку персональных данных
                        </span>
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className={
                      send
                        ? "btn btn--size-md btn--theme-accent-fill cta-section__form-btn success"
                        : "btn btn--size-md btn--theme-accent-fill cta-section__form-btn"
                    }
                    disabled={!selected || !name || !PhoneNumber || !dis}
                    >
                    <span className="btn__inner">
                      <span className="btn__title">{send ? 'Отправленно' :'Отправить'}</span>
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
