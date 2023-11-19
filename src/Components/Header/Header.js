import React from 'react'
import styles from './styles.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="#" alt="logo of the restaurant, showing a lemon" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            {' '}
            <a src="#">Home</a>
          </li>
          <li>
            <a src="#">About</a>
          </li>
          <li>
            <a src="#">Menu</a>
          </li>
          <li>
            <a src="#">Reservations</a>
          </li>
          <li>
            <a src="#">Order Online</a>
          </li>
          <li>
            <a src="#">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
