import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import FormInput from '../../FormInputComponent/FormInput/FormInput'
import PasswordInput from '../../FormInputComponent/PasswordInput/PasswordInput'
import './Login.css'

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Lógica de login aquí
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          
          <h2>Iniciar Sesión</h2>
          
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <FormInput 
            label="Email" 
            type="email" 
            placeholder="ejemplo@correo.com"
          />
          <PasswordInput 
            label="Contraseña" 
            placeholder="Ingresa tu contraseña"
          />
          
          <div className="form-options">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Recordar mi cuenta</label>
            </div>
            <NavLink 
              to="/forgot-password" 
              className="forgot-password"
              activeClassName="active"
            >
              ¿Olvidaste tu contraseña?
            </NavLink>
          </div>
          
          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
          
          <div className="signup-link">
            ¿No tienes una cuenta?{' '}
            <Link to="/register" className="signup-link-text">
              Regístrate
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login