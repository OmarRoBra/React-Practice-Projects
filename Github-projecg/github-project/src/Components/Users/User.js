import React from 'react'
import UserItems from './Usersitem'
import Spiner from  '../spiner'

const User =({users,loading})=> {
    if(loading){
       return( <Spiner/>)
    }else{
        return (
            <div className="container" style={userStyle}>
                {users.map(user=>(
                    <UserItems key={user.id} user={user}/>
                ))}
            </div>
        )
    }
    
       
    
}
//Aplica un estilo al mapeo y renderizado de los elementos y les aplica unefecto de grid cada  3 
const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'

}
export default User
