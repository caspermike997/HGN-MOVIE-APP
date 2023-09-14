import React from 'react'
import "./Footer.css"
import {icons} from '../../assets/icons'

const Footer = () => {

  const date = new Date();


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
            @ {date.getFullYear()} MovieBox by Casper Defi
        </div>
    </footer>
  )
}

export default Footer