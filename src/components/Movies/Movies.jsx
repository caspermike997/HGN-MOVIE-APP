import React from 'react'
import { icons } from '../../assets/icons'
import './movies.css'

const Movies = () => {



  return (
     <div className='featured-head'>
        <div className='mov'>
            
        <div>
        <h2 className='fm'>Featured Movie</h2>
        </div>

        <div className='sm'>
        <h4>see more</h4>
        {icons.arrow}
        </div>
        
        </div>


    </div>
  )
}

export default Movies