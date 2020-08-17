import React from 'react'

export default function SideMenu(props) {
  const { closeMenu } = props;
  return (
    <aside className="sidebar">

      <h2>Shopping Catagories</h2>
      <button className="close-menu-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <a href="index.html">Shirts</a>
        </li>

        <li>
          <a href="index.html">Pants</a>
        </li>
      </ul>

    </aside>
  )
}
