import React from 'react'
import { Link } from 'react-router-dom'
import "./Errorpage.css"
export default function Errorpage() {
  return (
    <div>
      
       <div className="logo3">
       <img src="../../../img/error.svg" alt="" />
            </div>
            <h1>Oops! this page is unknown or does not exist </h1>
          <p>Sorry about that, but the page you are looking for is'nt available.</p>
  
          <Link to='/'><button class="btn4">Go Back Home</button></Link>
    </div>
  )
}

