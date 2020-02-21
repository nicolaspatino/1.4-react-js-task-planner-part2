import React, { Component } from 'react';
import './App.css';
import { Login } from './components/Login';
import  Home  from './components/Home';
import  CreateAccount  from './components/CreateAccount';
import  {UserProfile}  from './components/UserProfile';
import  TodoApp from './TodoApp';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);  
    localStorage.setItem('isLogged',false);
    localStorage.setItem('username','nico@inventado.com');
    localStorage.setItem('password','nico1');
   }

  render() {
    const LoginView = () => (
      <Login />
    );

    const TodoAppView = () => (
      <TodoApp />
    );
    
    const MainView = () => (
      <Home />
    );
    const UserProfileView = () => (
      <UserProfile />
    );
    return (
      <Router>
        <div className="App">             
            <Route exact path="/" component={LoginView} />
            <Route  exact  path="/todo" component={TodoAppView} />
            <Route  exact  path="/Home" component={MainView} />
            <Route  exact  path="/profile" component={UserProfileView} />
            <Route  exact  path="/Createaccount" component={CreateAccount} />         
        </div>
      </Router>
    );
  }
}

export default App;