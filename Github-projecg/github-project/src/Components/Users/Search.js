import React, { Component,Fragment } from 'react'


export class Search extends Component {
    state={
        text:''
    };
    presionar=e=>{
        e.preventDefault();
        if(this.state.text===''){
            this.props.setAlert('Enter something','light')
        }else{
            this.props.searchUsers(this.state.text);
            this.setState({text:''})
        }
        
    }
    presionarBorrar=e=>{
        e.preventDefault();
        this.props.clearUsers();
    }
    changeText=e=>{
       this.setState({text:e.target.value})
    }
    render() {
        return (
            <div  className="container">
                <form onSubmit={this.presionar} className="form">
                    <input type="text" name="text" placeholder="search" value={this.state.text} onChange={this.changeText}></input>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"></input>
                </form>
                {this.props.showClear && <btn onClick={this.presionarBorrar} className="btn btn-danger btn-block">Clear</btn>}
                
            </div>
        )
    }
}

export default Search
