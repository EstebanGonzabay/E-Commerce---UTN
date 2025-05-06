import React, {useState} from 'react'
import './PasswordInput.css'

const PasswordInput = ({label, placeholder}) => {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      <div className="password-input">
        {label && <label>{label}</label>}
        <div className="input-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder={placeholder}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="toggle-btn"
          >
            {showPassword ? 'Ocultar' : 'Mostrar'}
          </button>
        </div>
      </div>
    );
  };

export default PasswordInput
