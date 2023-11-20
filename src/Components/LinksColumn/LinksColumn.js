import React from 'react'

function LinksColumn({ data, pos }) {
  const links = data[pos].links.map((link) => {
    return (
      <div key={link.address} className="footerLink">
        <a href={link.address}>{link.name}</a>
      </div>
    )
  })

  return (
    <div className="linksColumn">
      <h6 className="title">{data[pos].title}</h6>
      {links}
    </div>
  )
}

export default LinksColumn
