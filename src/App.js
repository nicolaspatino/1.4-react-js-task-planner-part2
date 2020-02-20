import React, { Component } from 'react';
import './App.css';
import {Login} from "./components/Login";
import NavigationDrawer from "./components/NavigationDrawer";

class App extends Component {

    constructor(props) {
        super(props);
        localStorage.setItem('username','Sergio');
        localStorage.setItem('password','hola');
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {localStorage.getItem('page') === 'home' ?
                        <NavigationDrawer/> :
                        <Login/>
                    }
                </header>
            </div>
        );
    }
}

export default App;