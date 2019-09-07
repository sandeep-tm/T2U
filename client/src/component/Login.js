import React, { Component } from "react";
import { FormTextbox, FormButton } from '../cmns/ToolsStock';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formcontrol: {
                userName: {
                    id: 'iuname',
                    type: 'text',
                    value: '',
                    placeHolder: 'Enter user name...',
                    iref: null
                },
                password: {
                    id: 'ipword',
                    type: 'password',
                    value: '',
                    placeHolder: 'Enter user password...',
                    iref: null
                },
                button: {
                    id: 'iloginbtn',
                    placeHolder: 'Login'
                }
            }
        };
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }
    componentDidMount() {
        console.log(this.state);
        try {
            this.state.formcontrol.userName.iref.focus();
        } catch (error) {

        }
    }
    handleLoginSubmit(e) {
        e.preventDefault();
        
    }
    render() {
        return (
            <div className="login-container boxshawdo">
                <div className="login-box">
                    <div className="login-header">
                        Login
                    </div>
                    <div className="login-content">
                        <div>
                            <form onSubmit={this.handleLoginSubmit}>
                                <FormTextbox
                                    props={this.state.formcontrol.userName} />
                                <FormTextbox
                                    props={this.state.formcontrol.password} />
                                <FormButton
                                    props={this.state.formcontrol.button} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;