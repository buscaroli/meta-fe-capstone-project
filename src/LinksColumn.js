import React from 'react'

function LinksColumn({ data, pos }) {
  // console.log(data[pos].title)
  // data[pos].links.map((link) => console.log(link.address))

  const links = data[pos].links.map((link) => {
    return (
      <div className="footerLink">
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
