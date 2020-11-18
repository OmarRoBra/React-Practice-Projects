import React from 'react'
import {Link} from 'react-router-dom'

const Navbar =({tittle})=>{
    
        return (
            <nav className="navbar bg-primary"> 
                <h1>{tittle} </h1>
                <ul>
                    <li>
                       <Link to='/'>Home</Link>
                    </li>
                    <li>
                         <Link to ='/home'>xd</Link> 
                    </li>
                </ul>
            </nav>
        )
    
}

export default Navbar
