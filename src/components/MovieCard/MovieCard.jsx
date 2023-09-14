import React from 'react'
import {icons} from '../../assets/icons'
import './Movie.css'




const Movie = () => {


  return (
    <div className='Movie-container'>
        <div className='poster-card'>
            <div className='poster-flex'>

            <div className="tv-series">
            <h3>TV SERIES</h3>
            </div>

            <div className="heart">
            <span>{icons.heart}</span>
            </div>
                
            </div>

        </div>

        <div>
            <h4>USA 2016 - Current </h4>
        </div>

        <div>
            <h2>Stranger Things</h2>
        </div>

        <div className="icons4">
          <div className="img1">
          <img src="src\assets\imb.svg" alt="imb" />
          <p>86.0 / 100</p>
          </div>

          <div className="img2">
          <img src="src\assets\PngItem_1381056 1.svg" alt="png" />
          <p>97%</p>
          </div>
        </div>

        <div>
            <h4>Action, Adventure / Horror</h4>
        </div>
    </div>
  )
}

export default Movie