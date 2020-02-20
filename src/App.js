import React, { Component } from 'react';
import './App.css';
import {Login} from "./components/Login";
import NavigationDrawer from "./components/NavigationDrawer";

class App extends Component {

    constructor(props) {
        super(props);
        localStorage.setItem('username','nico');
        localStorage.setItem('password','nico1');
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