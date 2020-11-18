import React,{Fragment} from 'react'
import spinner from './sp.gif'

export const spiner = () => {
    return (
        <Fragment>
            <img src={spinner} alt='loading...' style={{width:200, margin:'auto', display:'block'}}></img>
        </Fragment>
    )
}
export default spiner 
