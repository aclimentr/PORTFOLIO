import './App.css';
import React from 'react'
import invincible from "./images/invincible.png"
import RouterPrincipal from './Router/RouterPrincipal';
import Content from './Components/Content';
import Aside from './Components/Aside';
import Nav from './Components/Nav';

function App() {
  
  
  return (
    
    //* APP *
    <div className="App">
      <header className="header">
        <img src={invincible} alt="invencible" className="fotoinvencible"/>
        <h1 className="titulo">Alvaro Climent Román is currently working on this webpage</h1>
      </header>

    {/* NAV */}
      
      <Nav/>
      <Content/>
      <Aside/>
      {/* FOOTER */}

      <footer className="footer">
          FOOTER
      </footer>
    </div>
  );
}

export default App;
