import './App.css';
import React from 'react'
import invincible from "./images/invincible.png"


function App() {
  
  
  return (
    //* APP *
    <div className="App">
      <header className="header">
        <img src={invincible} alt="invencible" className="fotoinvencible" id="img"/>
        <h1 className="titulo">Alvaro Climent Román is currently working on this</h1>
      </header>

    {/* NAV */}
      <nav className="nav">
        <div className="Div-nav">
          <input type="button" id="btn1" value="home"/>
          <input type="button" id="btn2" value="profile"/>
          <input type="button" id="btn3" value="projects"/>
          <input type="button" id="btn4" value="CV"/>
        </div>
      </nav>
      {/* CONTENT */}
      <content className="content">
      <section className="cards">
        <article className="card1">
          <h4>Project</h4>
          <button>Open</button>
          <button>Download</button>
        </article>
        <article className="card2">
          <h4>Project 2</h4>
          <button>Open</button>
          <button>Download</button>
        </article>
        <article className="card3">
          <h4>Project 3</h4>
          <button>Open</button>
          <button>Download</button>
        </article>
      </section>
      </content>

      {/* LATERAL */}
      <aside className="lateral">
        <div className="search">
          <h3>Buscador</h3>
          <form>
            <input type="text" placeholder="Buscar"/>
            <input type="submit" placeholder="Enviar"/>
          </form>

        </div>

      </aside>
      
      {/* FOOTER */}

      <footer className="footer">
FOOTER
      </footer>
    </div>
  );
}

export default App;
