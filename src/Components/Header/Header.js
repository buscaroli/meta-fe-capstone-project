import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import logo from '../../assets/Logo.svg'
function Header() {
  const navigate = useNavigate()

  const handleNavigateHome = () => {
    navigate('/')
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo of the restaurant, showing a lemon" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <a
              className={styles.link}
              href="#hero"
              onClick={handleNavigateHome}
            >
              Home
            </a>
          </li>
          <li>
            <a className={styles.link} href="#about">
              About
            </a>
          </li>
          <li>
            <a className={styles.link} href="#menu">
              Menu
            </a>
          </li>
          <li>
            <a className={styles.link} href="#hero">
              Reservations
            </a>
          </li>
          <li>
            <a className={styles.link} href="#hero">
              Order Online
            </a>
          </li>
          <li>
            <a className={styles.link} href="#">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
