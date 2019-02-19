import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";

class HomePage extends Component {
    
    login = () => {
        ReactGA.event({
            category: 'Login',
            action: 'Someone logged in'
        });
    }
    
    render() {
        
        return (
            <div>
                <h1>Welcome To Bookmarker!</h1>
                <div>
                    <Link to="/login">
                        <button onClick={this.login}>Login</button>
                    </Link>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
            </div>
        );
    }



}

export default HomePage;