import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FirebaseId from './FirebaseId.js';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: '',
        }
        this.resolveClick = this.resolveClick.bind(this);
    }

    resolveClick(type) {
        if (type === "Dashboard") {
            if (this.props.current !== "Dashboard") {
                this.setState({redirect: '/dashboard'});
            }
        } else if (type === "Landing") {
            if (this.props.current !== "Landing") {
                this.setState({redirect: '/'});
            }
        } else if (type === "Checkout") {
            if (this.props.current !== "Checkout") {
                this.setState({redirect: '/checkout'});
            }
        } else if (type === "Categories") {
            if (this.props.current !== "Categories") {
                this.setState({redirect: '/categories'});
            }
        } else if (type === "Channel") {
            if (this.props.current !== "Channel") {
                this.setState({redirect: '/channel?id=TODO_PREVIOUS_VIEWED'});
            }
        } else if (type === "SignIn") {
            if (this.props.current !== "SignIn") {
                this.setState({redirect: '/signin?id=login'});
            }
        } else if (type === "MapView") {
            if (this.props.current !== "MapView") {
                this.setState({redirect: '/mapview?id=TODO_DEFAULT_NODE_YOURSELF'});
            }
        } else if (type === "Logout") {
            this.props.firebase.auth().signOut();
        }
    }

    render() {
        if (this.state.redirect !== '') {
            return (
                <Redirect push to={this.state.redirect}></Redirect>
            )
        } else {
            return (
                <Grid container>
                    <FirebaseId firebase={this.props.firebase}/>
                    <Grid container xs='1'>
                        <Button variant="contained" color="secondary" onClick={()=>this.resolveClick("Landing")}>LANDING</Button>
                    </Grid>
                    <Grid container xs='1'>
                        <Button variant="contained" color="secondary" onClick={()=>this.resolveClick("Dashboard")}>DASHBOARD</Button>
                    </Grid>
                    <Grid container xs='1'>
                        <Button variant="contained" color="secondary" onClick={()=>this.resolveClick("Checkout")}>CHECKOUT</Button>
                    </Grid>
                    <Grid container xs='1'>
                        <Button variant="contained" color="secondary" onClick={()=>this.resolveClick("Categories")}>CATEGORIES</Button>
                    </Grid>
                    <Grid container xs='1'>
                        <Button variant="contained" color="secondary" onClick={()=>this.resolveClick("Channel")}>CHANNEL</Button>
                    </Grid>
                    <Grid container xs='1'>
                        <Button variant="contained" color="secondary" onClick={()=>this.resolveClick("SignIn")}>SIGN IN</Button>
                    </Grid>
                    <Grid container xs='1'>
                        <Button variant="contained" color="secondary" onClick={()=>this.resolveClick("Logout")}>LOGOUT</Button>
                    </Grid>
                    <Grid container xs='1'>
                        <Button variant="contained" color="secondary" onClick={()=>this.resolveClick("MapView")}>MAPVIEW</Button>
                    </Grid>
                </Grid>
            )
        }
    }
}

export default NavBar;