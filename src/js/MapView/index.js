import React from 'react';
import Graph from './graph.js';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NavBar from '../NavBar';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";


class MapView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: '',
            fromId: '',
            toId: '',
            graphData: [],
            paths: [],
        }
        this.resolveClick = this.resolveClick.bind(this);
    }

    componentWillMount() {
        const idArray = this.props.viewId.split("<p>");
        this.setState({fromId: idArray[0]});
        if (idArray.length == 2) {
            this.setState({toId: idArray[1]});
        }
        const graphData = this.props.pullGraphData();
        this.setState({graphData: graphData});
        const paths = this.generatePaths(graphData, idArray[0], idArray[1]);
        this.setState({paths: paths});
    }

    generatePaths(graphData, fromId, toId) {
        console.log(graphData);
        console.log(fromId, toId);
        //TODO: return list of paths
        return [];
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
                    <NavBar current={'MapView'} firebase={this.props.firebase}/>
                    <Typography variant="h1">MAPVIEW</Typography>
                    
                </div>
            )
        }
    }
}

export default MapView;