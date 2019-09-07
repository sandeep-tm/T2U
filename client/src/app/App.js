import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Login from '../component/Login.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.setState = {
            user: null,
            contacts: []
        };
    }
    addContacts(User, Contacts) {

    }
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Route path="/" component={Login} addContacts={this.addContacts}></Route>
                </BrowserRouter>
            </div>
        );
    };
}

export default App;