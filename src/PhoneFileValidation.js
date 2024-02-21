import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-input-2'


const PhoneFileValidation = () => {
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true);
    const handleChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value))
    }

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\d{11}$/;
        return phoneNumberPattern.test(phoneNumber);
    }
    return (
        <div className="iti iti--allow-dropdown">
            <label className="u-input u-input--theme-white u-input--size-md u-input--iti u-control__input is-active-country">
                <PhoneInput
                country={'ru'}
                value = {PhoneNumber}
                onChange={handleChange}
                inputProps={{
                    required: true,
                }}
                />
            </label>
            {! valid && <p className="error">Введите действительный номер телефона.</p>}
        </div>
    );
};


PhoneFileValidation.propTypes = {

};


export default PhoneFileValidation;
