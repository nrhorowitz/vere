import React from 'react';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

class NotFound extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: '',
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
                    <Typography variant="h1">TODO: PAGE NOT FOUND</Typography>
                    
                </div>
            )
        }
    }
}

export default NotFound;