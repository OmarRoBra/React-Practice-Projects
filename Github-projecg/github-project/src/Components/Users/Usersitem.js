import React from 'react'
import {Link} from 'react-router-dom'

 const Usersitem =props=> {
  
    
        const{login,avatar_url,html_url}=props.user;

        return (
            <div  className='card text-center'>
            <img src={avatar_url} alt='' className='round-img' style={{width:'60px'}}></img>
            <h2>{login}</h2>
            <Link to={`/user/${login}`} className='btn btn-dark my-1 '>More</Link>
               
            </div>
        )
    
}

export default Usersitem

