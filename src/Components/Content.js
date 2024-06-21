import React from 'react'
import '../App.css';
import Aside from './Aside';


const Content = () => {
  return (
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
  )
}

export default Content
