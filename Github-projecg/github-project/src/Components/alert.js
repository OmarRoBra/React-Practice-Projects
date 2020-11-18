import React from 'react'

 const alert = ({alert}) => {
    return (
        alert !== null &&(
            <div className={`alert alert-${alert.type}`}> 
            <i>{alert.msg}</i>
            </div>
        )
    )
}

export default alert
