import React, { Component,Fragment } from 'react'
import Spinner from '../spiner'
import {Link} from 'react-router-dom'
export class oneUser extends Component {

    componentDidMount(){
        this.props.getUser(this.props.match.params.login)
    }
    render() {
        const {name,avatar_url,bio,blog,company,followers,following,public_gists,
            public_repos,html_url,login,hireable,location }=this.props.user

        const {loading}=this.props
        
        if(loading) return <Spinner />;
                return (
           <Fragment>        
            <div>
                <Link to='/' className='btn btn-light'>Back to Search</Link>
                <div className="card grid-2">
                    <div className="all-center">
                     <img src={avatar_url}  className="round-img " style={{width:'150px' }}/>
                <p>Location: {location}</p>
                    </div>
                   <div>
                       {bio && <Fragment>
                           <h3>Bio: </h3>
                       <p>{bio}</p>
                           </Fragment>}
                       <a href={html_url} className="btn btn-dark">Visit GitHub Profile</a>  

                       <ul>
                           <li>
                             {login && <Fragment>
                             <strong>Username:</strong> {login}
                             </Fragment>}
                           </li>
                           <li>
                               {company && <Fragment>
                               <strong>Compañia:</strong> {company}
                               </Fragment>}
                           </li>
                           <li>
                               {blog && <Fragment>
                               <strong>Website:</strong> {blog}
                               </Fragment>}
                           </li>
                       </ul>  
                   </div>
                </div>
            </div>

            <div className="card text-center">
              <div className="badge badge-primary">Followers: {followers}</div>
              <div className="badge badge-success">Following: {following}</div>
              <div className="badge badge-danger">Public Repos: {public_repos}</div>
              <div className="badge badge-dark">Public gists: {public_gists}</div>
            </div>
            </Fragment> 
        )
    }
}

export default oneUser
