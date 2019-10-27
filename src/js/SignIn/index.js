import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NavBar from '../NavBar';
import SignUp from './SignUp.js';
import Login from './Login.js';
import NotFound from '../NotFound';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: '',
            emailInput: '',
            passwordInput: '',
            firstNameInput: '',
            lastNameInput: '',
            errorCode: '',
        }
        this.resolveClick = this.resolveClick.bind(this);
        this.signUpUser = this.signUpUser.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    resolveClick(type, var1='') {
        if (type === "Dashboard") {
            if (true) { //TODO: check token
                this.setState({redirect: '/dashboard'});
            }
        } else if (type === "Login") {
            console.log(this.state);
            this.signUpUser("Login");
        } else if (type === "SignUp") {
            console.log(this.state);
            this.signUpUser("Email");
        }
    }

    signUpUser(type=false) {
        if (type == "Google") {
            var provider = new this.props.firebase.auth.GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
            this.props.firebase.auth().languageCode = 'en';
            provider.setCustomParameters({
                'login_hint': 'user@example.com'
            });
            this.props.firebase.auth().signInWithPopup(provider).then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
              }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                console.log(errorMessage);
                // ...
              });
        } else if (type === "Email") {
            this.props.firebase.auth().createUserWithEmailAndPassword(this.state.emailInput, this.state.passwordInput).then(()=>{
                console.log('SIGNEDUP');
            }).catch((error) => {
                this.setState({errorCode: error.code});
            });
        } else if (type === "Login") {
            this.props.firebase.auth().signInWithEmailAndPassword(this.state.emailInput, this.state.passwordInput).catch((error) => {
                this.setState({errorCode: error.code});
            });
        }
        
    }

    updateState(type, val) {
        if (type === "emailInput") {
            this.setState({emailInput: val});
        } else if (type === "passwordInput") {
            this.setState({passwordInput: val});
        } else if (type === "firstNameInput") {
            this.setState({firstNameInput: val});
        } else if (type === "lastNameInput") {
            this.setState({lastNameInput: val});
        }
    }

    render() {
        if (this.state.redirect !== '') {
            return (
                <Redirect push to={this.state.redirect}></Redirect>
            )
        } else {
            if (this.props.viewId === "signup") {
                return (
                    <div>
                        <NavBar current={'SignIn'} firebase={this.props.firebase}/>
                        <SignUp 
                            firebase={this.props.firebase} 
                            updateState={this.updateState}
                            resolveClick={this.resolveClick}
                            errorCode={this.state.errorCode}/>
                    </div>
                )
            } else if (this.props.viewId === "login") {
                return (
                    <div>
                        <NavBar current={'SignIn'} firebase={this.props.firebase}/>
                        <Login 
                            firebase={this.props.firebase} 
                            updateState={this.updateState} 
                            resolveClick={this.resolveClick}
                            errorCode={this.state.errorCode}/>
                    </div>
                )
            } else {
                return (
                    <NotFound />
                )
            }
        }
    }
}

export default SignIn;