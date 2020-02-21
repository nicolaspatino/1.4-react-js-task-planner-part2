import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'
import { Redirect } from "react-router-dom";
import axios from 'axios';

import AssignmentIcon from '@material-ui/icons/Assignment';


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password:"",isLogged: JSON.parse(localStorage.getItem("isLogged")),createAccount:false };
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);  
        this.handleCreate = this.handleCreate.bind(this);
      
    }
    handleEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    handleCreate(e) {
        this.setState({
            createAccount: true
        });
    }
    handleLogin(e) {        
        e.preventDefault();
        const self= this;
        axios.get(`http://localhost:8080/User/`+this.state.email)
          .then(datos => {
            if(datos.data){
                if(datos.data.password===self.state.password){
                    localStorage.setItem("email", self.state.email);  
                    localStorage.setItem("id", datos.data.id);  
                    localStorage.setItem("isLogged", "true");  
                    self.setState({isLogged:true})
                }else{
                    alert("email o contraseñea equivocada");
                }
            } else{
                alert("email o contraseñea equivocada");
            }
          })  .catch(function (error) {
            alert("email o contraseñea equivocada");
         });       
     }
                   
       
    

    render() {
        if(this.state.isLogged===true){             
            return <Redirect to={{
                pathname: '/main',
            }}
            />
        }
        if(this.state.createAccount===true){             
            return <Redirect to={{
                pathname: '/Createaccount',
            }}
            />
        }
        const butonStyle={
            marginTop: 10
        }
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Typography variant="h4" color ="primary">Task Planner</Typography>
                        <AssignmentIcon color = "primary" style ={{ fontSize: 60}}/>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email"
                                    onChange={this.handleEmail}
                                    value={this.state.email}
                                    autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handlePassword}
                                    value={this.state.password}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className="submit"
                                style={butonStyle}
                                onClick={this.handleLogin}
                            >
                                Login
                            </Button>
                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className="submit"
                                style={butonStyle}
                                onClick={this.handleCreate}
                            >Register
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
  


}
export default Login;