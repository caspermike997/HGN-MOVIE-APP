import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer-container">
        <div className="footer-icons">
        <span>{icons.facebook}</span>
        <span>{icons.instagram}</span>
        <span>{icons.twitter}</span>
        <span>{icons.youtube}</span>
        </div>

        <div className="fotter-content">
            <h3 className="Footer-text">Conditions of Use</h3>
            <h3>Privacy & Policy</h3>
            <h3>Press Room</h3>
        </div>

        <div>
            <h2>  © 2021 MovieBox by Adriana Eka Prayudha  </h2>
        </div>
    </footer>
  )
}

export default Footer