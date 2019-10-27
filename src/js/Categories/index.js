import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NavBar from '../NavBar';
import Album from './Categories.js';
import Loading from '../Loading';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";


class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: '',
        }
        this.resolveClick = this.resolveClick.bind(this);
        this.loading = this.loading.bind(this);
    }

    resolveClick(type) {
        if (type === "Dashboard") {
            if (true) { //TODO: check token
                this.setState({redirect: '/dashboard'});
            }
        }
    }

    loading() {
        const dependencies = ['edm-concerts'];
        for (var i in dependencies) {
            if (!this.props.data('categories', dependencies[i])) {
                return true;
            }
        }
        return false;
    }

    render() {
        if (this.state.redirect !== '') {
            return (
                <Redirect push to={this.state.redirect}></Redirect>
            )
        } else if (this.loading()) {
            return (
                <Loading />
            )
        } else {
            return (
                <div>
                    <NavBar current={'Categories'} firebase={this.props.firebase}/>
                    <Album
                        
                    />
                </div>
            )
        }
    }
}

export default Categories;