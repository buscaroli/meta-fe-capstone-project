import React from 'react'
import styles from './LinksColumn.module.css'

function LinksColumn({ data, pos }) {
  const links = data[pos].links.map((link) => {
    return (
      <div style={{ listStyle: 'none' }} key={link.address}>
        <a
          style={{ color: '#EDEFEE', textDecoration: 'none' }}
          href={link.address}
          target="_blank"
          rel="noreferrer"
        >
          {link.name}
        </a>
      </div>
    )
  })

  return (
    <div className={styles.linksColumn}>
      <h6 className={styles.title}>{data[pos].title}</h6>
      {links}
    </div>
  )
}

export default LinksColumn
