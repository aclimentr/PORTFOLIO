import React from 'react'
import {BrowserRouter, Link, Routes, Route, NavLink} from 'react-router-dom'
import Cv from '../Components/Cv'
import Contact from '../Components/Contact'
import Home from '../Components/Home'
import Aside from '../Components/Aside'
import Footer from '../Components/Footer'
import invincible from "../images/invincible.png"
import '../App.css';
import Rickmorty from '../Components/Rickmorty'


const RouterPrincipal = () => {
  return (
    <BrowserRouter className="browser">
    <div className="App">
        <header className="header">
          <img src={invincible} alt="invencible" className="fotoinvencible"/>
          <h1 className="titulo">Alvaro Climent Román is currently working on this webpage</h1>
        </header>

        
      {/* NAV */}
      <nav className="nav">
          <ul className="Div-nav">
            <li><NavLink to="/Home" className="navlink">Home</NavLink></li>
            <li><NavLink to="/Rickmorty" className="navlink">Rickmorty</NavLink></li>
            <li><NavLink to="/CV" className="navlink">CV</NavLink></li>
            <li><NavLink to="/RickMorty" className="navlink">RickMorty</NavLink></li>
          </ul>
      </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Cv" element={<Cv/>}/>
          <Route path="/Rickmorty" element={<Rickmorty/>}/>
        </Routes>
    
        <Aside/>
        <Footer/>
    </div>

    </BrowserRouter>
  )
}

export default RouterPrincipal
