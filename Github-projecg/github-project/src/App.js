import React,{Fragment, Component} from 'react';
import Navbar from './Components/Navbar'
import './App.css';
import User from './Components/Users/User'
import axios from 'axios'
import Search from './Components/Users/Search'
import Alert from './Components/alert'
import OneUser from './Components/Users/oneUser'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

class App extends Component {
  state={
    users:[],
    user:{},
    loading:false,
    alert:null
  }

  /* async componentDidMount(){
    this.setState({loading:true})
   const res= await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_SECRET}`)
  this.setState({loading:false, users:res.data})
  } */

  searchUsers=async text =>{
    this.setState({loading:true})
    const res= await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_SECRET}`)
    this.setState({loading:false, users:res.data.items})
    console.log(res)
  }
  clearUsers=()=>{
    this.setState({users:[]})
  }
  setAlert=(msg,type)=>{
   this.setState({alert:{msg,type}})
   setTimeout(()=>this.setState({alert:null}),5000)
  }
  getUser=async userName =>{
    this.setState({loading:true})
    const res= await axios.get(`https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_SECRET}`)
    this.setState({loading:false, user:res.data  })
    console.log(res)
  }
 render(){
  return (
    <Router>
    
      <div>
      <Navbar  tittle='GithubFinder'/> 
      <div  className="container">
      <Alert  alert={this.state.alert}/>

      <Switch> 
        <Route exact path='/' render={props=>(
          <Fragment>
      <Search loading={this.state.loading} searchUsers={this.searchUsers} clearUsers={this.clearUsers}
       showClear={this.state.users.length>0 ? true : false  }
       setAlert={this.setAlert}/>

       <User loading={this.state.loading} users={this.state.users}/>
          </Fragment>
        )}>

        </Route>
        <Route exact path='/user/:login' render={props=>(
          <OneUser {...props} getUser={this.getUser} user={this.state.user}/>
        )} />

        
        
      </Switch>
     
      </div>
      </div>
   
    
    </Router>
  );
 }
  
}

export default App;
