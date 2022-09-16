import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, logoutUser, signinUser, fetchUser } from '../redux/auth/actionCreators';
import Home from './Home/Home';
import Login from './Auth/Login';
import SignIn from './Auth/SignIn';
import Profile from './User/Profile';
import DesktopNav from './DesktopNav';

const mapStateToProps = state => {
  return {
    auth: state.auth,
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: (creds) => dispatch(loginUser(creds)),
  signinUser: (creds) => dispatch(signinUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  fetchUser: () => { dispatch(fetchUser())},
});

class Main extends Component {

  componentDidMount() {
    if (this.props.auth.isAuthenticated) this.props.fetchUser();
  }
  
  componentDidUpdate(prevState) {
    if (prevState.auth.isAuthenticated !== this.props.auth.isAuthenticated && this.props.auth.isAuthenticated) {
      this.props.fetchUser();
    }
  }
  
  render() {
    
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.props.auth.isAuthenticated
          ? <Component {...props} />
          : <Redirect to={{
              pathname: '/',
              state: { from: props.location }
            }} />
      )} />
    );

    return (
      <div>
        <Router>
          <DesktopNav auth={this.props.auth} user={this.props.user} />
          <Switch>
              <Route exact path='/' component={() => <Home />} />
              <PrivateRoute exact path='/profile' component={() => <Profile auth={this.props.auth} user={this.props.user} general={this.props.general} logoutUser={this.props.logoutUser} />} />
              <Route path='/login' component={() => <Login auth={this.props.auth} loginUser={this.props.loginUser} logoutUser={this.props.logoutUser} loginSocialUser={this.props.loginSocialUser} />} />
              <Route path='/signin' component={() => <SignIn auth={this.props.auth} signinUser={this.props.signinUser} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
