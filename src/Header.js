import React from 'react'

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="#" alt="logo of the restaurant, showing a lemon" />
      </div>
      <nav>
        <ul>
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
