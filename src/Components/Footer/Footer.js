import React from 'react'
import LinksColumn from '../LinksColumn/LinksColumn'

const linksData = [
  {
    title: 'Doormat Navigation',
    links: [
      {
        name: 'Home',
        address: 'address1',
      },
      {
        name: 'About',
        address: 'address2',
      },
      {
        name: 'Menu',
        address: 'address3',
      },
      {
        name: 'Reservations',
        address: 'address4',
      },
      {
        name: 'Order Online',
        address: 'address5',
      },
      {
        name: 'Login',
        address: 'address6',
      },
    ],
  },
  {
    title: 'Contact',
    links: [
      {
        name: 'Phone Number',
        address: 'address1',
      },
      {
        name: 'e-Mail',
        address: 'address2',
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
    <footer>
      <div className="logo">
        <img src="#" alt="logo of the restaurant with a lemon" />
      </div>
      <div className="linksContainer">
        <LinksColumn data={linksData} pos="0" />
        <LinksColumn data={linksData} pos="1" />
        <LinksColumn data={linksData} pos="2" />
      </div>
    </footer>
  )
}

export default Footer
