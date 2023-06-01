import React from 'react'
import { Link } from 'react-router-dom'
import sour from './ticketImg'
export const Navbar = () => {
  return (
         <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
        <Link class="navbar-brand" to='/'>
        <img src= {sour} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
        Movie Tickets
        </Link>
        </div>
        </nav>
    
  )
}
