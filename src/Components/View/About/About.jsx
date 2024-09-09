import React from 'react'
import NavBar from '../../NavBar/NavBar'
import s from './About.module.css'

function About() {
  return (
    <div>
      <NavBar />
      <div className={s.conteinerAbout}>
        <div className={s.contact}>
          <h1>About Marvel Comics App</h1>
          <p>
            Welcome to the Marvel Comics App, your ultimate gateway to the world of superheroes, villains, and epic adventures! This app is designed to give you a comprehensive experience of everything Marvel, from your favorite comic characters to iconic storylines.
          </p>
        </div>
        <div>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide Marvel fans and comic enthusiasts with an interactive platform to explore the Marvel Universe. Whether you're looking to discover new heroes or relive classic battles, we've got it all.
          </p>
        </div>
        <div>
          <h2>Features</h2>
          <ul>
            <li>Explore the vast library of Marvel characters.</li>
            <li>Read detailed biographies of your favorite heroes and villains.</li>
            <li>Discover comic book series and key events.</li>
            <li>Stay updated with the latest Marvel news.</li>
          </ul>
        </div>
        <div>
          <h2>About Marvel</h2>
          <p>
            Marvel Comics is one of the largest and most influential comic book companies in the world. Known for creating iconic characters like Spider-Man, Iron Man, Captain America, and the X-Men, Marvel continues to captivate fans with its rich storytelling and ever-expanding universe.
          </p>
        </div>
        <div className={s.contact}>
          <h2>Get in Touch</h2>
          <p>
            Have questions or feedback? We'd love to hear from you! Reach out to us through our <a href="/contact">contact page</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About