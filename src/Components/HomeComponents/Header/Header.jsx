import React from 'react'
import {Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const isActiveCallback = ({isActive}) => {
      return isActive ? 'nav-link active' : 'nav-link'
    }

  return (
        <header className='main-header'>
          <div className='header-container'>
          
            <Link to ='/' className='logo-link'>
              
              <img 
                src="/bb.png" 
                alt="Juan Diego's Store Logo" 
                className= "logo-image"
                style = {{maxWidth: '180px'}}
              />
              <h1 className='store-title'>JUAN DIEGO'S STORE</h1>
              
            </Link>
      
            <nav className='main-nav'>
            <NavLink
                to={'/login'}
                className = {isActiveCallback}
            >
                Ingreso
            </NavLink>
            <NavLink
              to={'/register'}
              className = {isActiveCallback}
            >
              Registro
            </NavLink>
          </nav>
        </div>
      </header>
  
  )  
}

export default Header
