import React, { Component } from 'react'
import {login} from  './actions/actionCreators'
import { connect } from 'react-redux'
import './style/LoginStyle.css'
class Login extends Component
{
    state ={
        userName : "",
        password : ""
    }
    clickHandler = () =>{
        if(this.state.userName === "user" && this.state.password === "user")
        {
            this.props.login(this.state.userName);
        }
        
    }
    handleUserNameChange = (event) =>
    {
        this.setState({
            userName : event.target.value
        })
        
    }
    handlePasswordChange = (event) =>
    {
        this.setState({
            password : event.target.value
        })
    }
    render()
    {
        console.log("login render method");
        return( 
            
            <div className="login-container">
                <span className = "login-text">Login</span>
                <span className = "login-userName-text">Name : </span><input className = "login-userName-input"type="text" value={this.state.userName} onChange={this.handleUserNameChange}></input>
                <span className = "login-password-text">Password : </span><input className = "login-password-input"type = "text" value = {this.state.password} onChange = {this.handlePasswordChange}></input>
                <button className = "login-button"onClick={()=>this.clickHandler()}>Login</button>
            </div>
        )
    }
}

const mapDispatchToProps= (dispatch)=>{
    return{
        login: (inputName)=>{dispatch(login(inputName))}
    }
}
export default connect(null,mapDispatchToProps)(Login);