import React from 'react'
import FormInput from '../FormInput/FormInput';
import PasswordInput from '../PasswordInput/PasswordInput';
import './RegisterForm.css'


const RegisterForm = () => {
    return (
      <div className="register-form-container">
        <h2>Registro</h2>
        <form>
          <FormInput label="Nombre" placeholder="Ingresa tu nombre" />
          <FormInput label="Apellido" placeholder="Ingresa tu apellido" />
          <FormInput label="Email" type="email" placeholder="Ingresa tu email" />
          <FormInput label="Teléfono"  type="tel"  placeholder="Ingresa tu teléfono"/>
          <PasswordInput label="Contraseña"  placeholder="Crea una contraseña" />
          <PasswordInput label="Confirmar contraseña" placeholder="Repite tu contraseña" />
          <button type="submit">Registrarse</button>
        </form>
      </div>
    );
  };

export default RegisterForm
