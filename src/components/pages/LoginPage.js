import React, { Component } from "react";
import LoginForm from "./../forms/LoginForm";

class RegisterPage extends Component {
    render() {

        return(
            <div>
                <h1>Login</h1>
                <LoginForm onRegisterFormSubmit={this.props.onRegisterFormSubmit} />
            </div>
        );
    }
}

export default RegisterPage;