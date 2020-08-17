import React from 'react';
import Header from "./header";
import Footer from "./footer";
import Main from "./main";
import SideMenu from "./sideMenu";


export default function AppContainer() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add('open');
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove('open');
  }
  return (
    <div className="grid-container">
      <Header openMenu={openMenu} />
      <SideMenu closeMenu={closeMenu} />
      <Main />
      <Footer />
    </div>
  )
}
