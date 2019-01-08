import React, {Component} from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login</a></li>;
            default: 
                return [
                    <li key="1" style={{margin : '0 10px'}}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>
            ];
        }
    }

    render() {
        return(
            <nav>
                <ul>
                    {this.renderContent()}
                </ul>
            </nav>
        );
    }
}

export default Header;