import React from 'react'
import '../App.css';

const Aside = () => {
  return (
    <aside className="lateral">
        <div className="search">
          <h3>Buscador</h3>
          <form>
            <input type="text" placeholder="Buscar"/>
            <input type="submit" placeholder="Enviar"/>
          </form>
        </div>
      </aside>
  )
}

export default Aside
