import React from "react";
import TextField from '@material-ui/core/TextField';
import Paper from "@material-ui/core/es/Paper/Paper";
import './Login.css';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Button, Typography} from "@material-ui/core";
import Link from "@material-ui/core/Link";

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};
        this.handleLogin = this.handleLogin.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleLogin() {
        if (this.state.username === localStorage.getItem('username') && this.state.password === localStorage.getItem('password')) {
            localStorage.setItem('page', 'home');
            console.log('Logged');
        }
        this.setState({
            username: "",
            password: ""
        });
    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <Paper className="paper">
                <Typography variant="h4" color="primary">Task Planner</Typography>
                <AssignmentIcon color="primary" style={{ fontSize: 60 }}/>
                <form className="form" onSubmit={this.handleLogin}>
                    <TextField required label="Username" margin="normal" variant="filled" onChange={this.handleUsernameChange}/>
                    <br/>
                    <TextField required type="password" label="Password" margin="normal" variant="filled" onChange={this.handlePasswordChange}/>
                    <br/>
                    <Button type="submit" variant="outlined" color="primary">Login</Button>
                </form>
                <br/>
                <Link href="#" variant="body2">Create Account</Link>
            </Paper>
        );
    }
}