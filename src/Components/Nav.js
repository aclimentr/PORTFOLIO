import React from 'react'
import '../App.css';

const Nav = () => {
  return (
    <nav className="nav">
        <div className="Div-nav">
          <input type="button" id="btn1" value="home"/>
          <input type="button" id="btn2" value="profile"/>
          <input type="button" id="btn3" value="projects"/>
          <input type="button" id="btn4" value="CV"/>
        </div>
        {/* <div className="Div-nav">
          <RouterPrincipal/>
        </div> */}
      </nav>
  )
}

export default Nav
