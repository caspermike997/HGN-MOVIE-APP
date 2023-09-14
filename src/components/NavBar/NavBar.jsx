import React from 'react'
import './NavBar.css'
import {icons} from '../../assets/icons' 

const NavBar = () => {
  return (

    <div>
        <nav className="nav">
        <div className="icon">
          <img src="src\assets\tv.svg" alt="icon" />
          <p>MovieBox</p>
        </div>

        <div className="search">
        <input type="text" placeholder="What do you want to watch?" />
        <span src="">{icons.search}</span>
        </div>

        <div className="signIn">
        <p> SignIn </p>
        <img src="src\assets\Menu.svg" alt="menu icon" />
        </div>

        </nav>
    
      <div className="continer-2">
        <h1>John Wick 3 : <br /> Parabellum</h1>

        <div className="icons2">
          <div className="img1">
          <img src="src\assets\imb.svg" alt="imb" />
          <p>86.0 / 100</p>
          </div>

          <div className="img2">
          <img src="src\assets\PngItem_1381056 1.svg" alt="png" />
          <p>97%</p>
          </div>
        </div>

        <p>John Wick is on the run after killing a member <br />of the international assassins' guild, and with <br /> a $14 million price tag on his head, he is the <br /> target of hit men and women everywhere.</p>

        <div className="box-1">
           <div className="watch">
           <span>{icons.play}</span>
           WATCH TRAILER
           </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar