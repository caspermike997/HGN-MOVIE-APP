import React from 'react'
import { icons } from '../../assets/icons'
import './movies.css'

const Movies = () => {



  return (
    //  <div className='featured-head'>
    //     <div className='mov'>
            
    //     <div>
    //     <h2 className='fm'>Featured Movie</h2>
    //     </div>

    //     <div className='sm'>
    //     <a href="#"> see more </a>
    //     {icons.arrow}
    //     </div>
        
    //     </div>


    // </div>



    <div className="container-movies">
      <div className="feature-more">
        <h2>Featured Movie</h2>
        <p className='see'>
          <a href="#">See more</a> <span>{icons.arrow}</span>
        </p>
      </div>
      {/* <ul>
        {displayMoviesUI()}
      </ul> */}

     
    </div>
  )
}

export default Movies