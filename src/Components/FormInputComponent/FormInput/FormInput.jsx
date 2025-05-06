import React from 'react'
import './FormInput.css';

const FormInput = ({ type = 'text', label, placeholder }) => {
    return (
      <div className="form-input">
        {label && <label>{label}</label>}
        <input type={type} placeholder={placeholder} />
      </div>
    );
  };

export default FormInput
