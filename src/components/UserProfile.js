import Menu from "./Menu";
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Redirect } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
export class UserProfile extends  React.Component {
    constructor(props) {
        super(props);   
        this.state={name:"",email:localStorage.getItem("email"),password:"",secondPassword:"",confirm:false,back:false}
        this.handleName = this.handleName.bind(this); 
        this.handleEmail = this.handleEmail.bind(this); 
        this.handlePassword = this.handlePassword.bind(this); 
        this.handleRepiPassword = this.handleRepiPassword.bind(this); 
        this.handleSave = this.handleSave.bind(this);   
        this.handleBack = this.handleBack.bind(this);          
    }
    handleBack(e) {     
      this.setState({ back: true });    
    } 
    handleName(e) {
        this.setState({
            name: e.target.value
        });
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
    handleRepiPassword(e) {
        this.setState({
            secondPassword: e.target.value
        });
    }
    handleSave(e){
      e.preventDefault();
      if ((!this.state.name.length ||!this.state.email.length || !this.state.password.length) && this.state.password===this.state.secondPassword){
        return;
      }
      localStorage.setItem("name",this.state.name);
      localStorage.setItem("password",this.state.password);
      localStorage.setItem("email",this.state.email);
      this.setState(prevState => ({        
        name:"",
        password: "",
        email: "",
        secondPassword:"",           
      }));
      this.setState({
        confirm: true
      })
    }
    render() {
      if(this.state.back){     
        return <Redirect to={{
          pathname: '/main',
         }}
         />
      }
        const divStyle = {
            width:"200"    
        }; 
        const fistyle = {         
          position: "absolute",
          top: "40px",
          right:"30px"  
        }; 
        if(this.state.confirm){          
          return <Redirect to={{
            pathname: '/main',
           }}
           />
        }

        return (
            <div>
                <ArrowBackIcon style={fistyle} onClick={this.handleBack}></ArrowBackIcon>
                <Menu />
                <br/>
                <br/>
                <AccountBoxIcon style={{fontSize: 100}} color="primary"/>
                <br/>
                <br/>
                <div>
                  <TextField
                    style={divStyle}
                    value={this.state.name}
                    id="email"              
                    type="text"
                    label="Name"
                    onChange={this.handleName}       
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <br/>
                  <br/>
                  <TextField
                    style={divStyle}
                    value={this.state.email}
                    id="email"              
                    type="text"
                    label="Email"
                    onChange={this.handleEmail}       
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <br/>
                  <br/>
                  <TextField
                    style={divStyle}
                    value={this.state.password}
                    id="pass"              
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
                    style={divStyle}
                    value={this.state.secondPassword}
                    id="second"              
                    type="password"
                    label="Confirm password"
                    onChange={this.handleRepiPassword}       
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <br/>
                  <br/>
                  <Button variant="contained" color="primary" onClick={this.handleSave}>
                    save
                  </Button>                    
                </div>
            </div>

        );
    }

}