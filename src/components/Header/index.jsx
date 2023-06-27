// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaGalacticRepublic } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import './header.css'

const Header = () => {
  return (
    <header className='wrapper-header'>
      <div className='wrapper-logo'>
        <FaGalacticRepublic size={32} color='corimson' /> SyawalJR
      </div>
      <nav className='wrapper-nav'>
        <ul className='list-nav'>
          <li className='nav-item'>
            <NavLink to={'/'}>Dashboard</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to={'/shop'}>Shop</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to={'/about'}>About</NavLink>
          </li>
          <li className='nav-item'><button>Login</button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header