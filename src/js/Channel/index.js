import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NavBar from '../NavBar';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";


class Channel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: '',
        }
        this.resolveClick = this.resolveClick.bind(this);
    }

    resolveClick(type) {
        if (type === "Dashboard") {
            if (true) { //TODO: check token
                this.setState({redirect: '/dashboard'});
            }
        }
    }

    render() {
        if (this.state.redirect !== '') {
            return (
                <Redirect push to={this.state.redirect}></Redirect>
            )
        } else {
            return (
                <div>
                    <NavBar current={'Channel'} firebase={this.props.firebase}/>
                    <Typography variant="h1">CHANNEL</Typography>
                    <Typography variant="h1">{"ID: " + this.props.viewId}</Typography>
                    
                </div>
            )
        }
    }
}

export default Channel;