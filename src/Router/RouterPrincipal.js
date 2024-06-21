import React from 'react'
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import Content from '../Components/Content'

const RouterPrincipal = () => {
  return (
    <BrowserRouter>
    <div>
        <ul>
            <button><Link to="/Home">Home</Link></button>
            <button><Link to="/Profile">Profile</Link></button>
            <button><Link to="/Contact">Contact</Link></button>
            <button><Link to="/CV">CV</Link></button>
            <button><Link to="/RickMorty">RickMorty</Link></button>
        </ul>
    </div>
    </BrowserRouter>
  )
}

export default RouterPrincipal
