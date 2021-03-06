import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./../styles/App.css";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import BookmarksPage from "./pages/BookmarksPage";
import LocalApi from "./../apis/local";
import PrivateRoute from "./PrivateRoute";
import { setAuthToken } from "./../actions";
import { connect } from "react-redux";
import ReactGA from "react-ga"
import withTracker from "./google_analytics/withTracker";


class App extends Component {
    
    render() {
        const { token } = this.props;
        
        return (
            <BrowserRouter>
                <div>
                    {token && <button onClick={() => {this.props.setAuthToken(null)}}>Logout</button>}
                    <Switch>
                        <Route exact path="/" component={withTracker(HomePage)} />
                        {/* <Route exact path="/register" render={(props) => {
                            return <RegisterPage {...props} onRegisterFormSubmit={this.onRegisterFormSubmit} />
                        }} /> */}
                        <Route exact path="/" component={withTracker(RegisterPage)} /> 
                        <Route exact path="/login" component={withTracker(LoginPage)} />
                        <PrivateRoute exact path="/bookmarks" component={withTracker(BookmarksPage)} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        token: state.auth.token
    }
}

ReactGA.initialize('UA-132349651-1');
ReactGA.pageview(window.location.pathname + window.location.search);


export default connect(mapStateToProps, { setAuthToken })(App);
