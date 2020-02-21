import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Redirect } from "react-router-dom";
import axios from 'axios';
export class CreateAccount extends Component {  
    constructor(props) {
        super(props);
        this.state = { email: "", password:"",nombre:"",secondPassword:"",isLogged: JSON.parse(localStorage.getItem("isLogged"))};
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);   
        this.handleNombre = this.handleNombre.bind(this);  
        this.handleSecondPassword = this.handleSecondPassword.bind(this);   
    }
    handleEmail(e) {
        e.preventDefault();
        this.setState({
            email: e.target.value
        });
    }
    handleNombre(e) {
        e.preventDefault();
        this.setState({
            nombre: e.target.value
        });
    }

    handlePassword(e) {
        e.preventDefault();
        this.setState({
            password: e.target.value
        });
    }
    handleSecondPassword(e) {
        e.preventDefault();
        this.setState({
            secondPassword: e.target.value
        });
    }
    handleLogin(e) {        
        e.preventDefault();  
        if(!this.state.email || !this.state.nombre || !this.state.password || this.state.password != this.state.secondPassword){
            return
        }
        const user={
            id:Math.random(),
            name:this.state.nombre,
            email:this.state.email,
            password:this.state.password
        }
        const self= this;
        console.log(user)
        axios.post('http://localhost:8080/User',user)
          .then(function (response) {
                localStorage.setItem("email", user.email);  
                localStorage.setItem("id", user.id);  
                localStorage.setItem("isLogged", "true");    
                self.setState({isLogged: true});       
        })
        .catch(function (error) {
            alert(error);
        });         
               
       
    }
    render(){
        if(this.state.isLogged===true){             
            return <Redirect to={{
                pathname: '/main',
            }}
            />
        }
        return(
            <div>       
                <div>          
                <h2>Create Account</h2>
                <form>
                    <TextField                
                    id="name"                        
                    label="Nombre"
                    type="text"
                    value={this.state.nombre}
                    onChange={this.handleNombre}                 
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />                   
                    <br/>
                    <br/>
                    <TextField                 
                    value={this.state.email}
                    id="texto"              
                    type="email"
                    label="Email"            
                    onChange={this.handleEmail}       
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                    <br/>
                    <br/>
                    <TextField
                    value={this.state.password}                 
                    id="password"              
                    type="password"
                    label="Password"
                    onChange={this.handlePassword}        
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />      
                    <br/>
                    <br/>
                    <TextField
                    value={this.state.secondPassword}
                   
                    id="secondPassword"              
                    type="password"
                    label="Repeat Password"
                    onChange={this.handleSecondPassword}        
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />                                   
                    <br/>
                    <br/>                       
                    
                    <Button variant="contained" color="primary" onClick={this.handleLogin}>
                        Create Account
                    </Button>
                </form>         
                </div>        
          </div>    

        );       
    }
}
export default CreateAccount;