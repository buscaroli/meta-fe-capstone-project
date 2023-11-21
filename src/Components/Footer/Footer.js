import React from 'react'
import LinksColumn from '../LinksColumn/LinksColumn'
import styles from './Footer.module.css'
import logoFooter from '../../assets/logo_footer_white.png'

const linksData = [
  {
    title: 'Doormat Navigation',
    links: [
      {
        name: 'Home',
        address: '/',
      },
      {
        name: 'About',
        address: '/',
      },
      {
        name: 'Menu',
        address: '#menu',
      },
      {
        name: 'Reservations',
        address: '',
      },
      {
        name: 'Order Online',
        address: '',
      },
      {
        name: 'Login',
        address: '',
      },
    ],
  },
  {
    title: 'Contact',
    links: [
      {
        name: 'phone: (+44)0714-123456',
        address: 'tel:123456',
      },
      {
        name: 'email: contact@little-lemon.biz',
        address: 'mailto: contact@lil-lemon.biz',
      },
    ],
  },
  {
    title: 'Social Media Links',
    links: [
      {
        name: 'Facebook',
        address: 'https://www.facebook.com',
      },
      {
        name: 'Instagram',
        address: 'https://www.instagram.com',
      },
      {
        name: 'LinkedIn',
        address: 'https://www.linkedin.com',
      },
      {
        name: 'YouTube',
        address: 'https://www.youtube.com',
      },
    ],
  },
]

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.logoContainer}>
        <img
          className={styles.logo}
          src={logoFooter}
          alt="logo of the restaurant with a lemon"
        />
      </div>
      <div className={styles.linksContainer}>
        <LinksColumn data={linksData} pos="0" />
        <LinksColumn data={linksData} pos="1" />
        <LinksColumn data={linksData} pos="2" />
      </div>
    </footer>
  )
}

export default Footer
