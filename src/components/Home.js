import React from 'react'
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
    <div className='conatiner'>
    <h3>Hello Click on the button below to Book the tickets</h3>
    
    <Link to='/Movies'><button type="button" class="btn btn-info">Book here</button></Link>
    
    
    </div>
  )
}
