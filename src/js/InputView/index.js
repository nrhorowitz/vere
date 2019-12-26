import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NavBar from '../NavBar';
import Player from './Player.js';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
//https://www.npmjs.com/package/react-audio-visualizer

class InputView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: '',
        }
        this.resolveClick = this.resolveClick.bind(this);
        this.showWave = this.showWave.bind(this);
    }

    showWave() {
        window.onload = function() {
            var ctx = new AudioContext();
            var audio = document.getElementById('myAudio');
            var audioSrc = ctx.createMediaElementSource(audio);
            var analyser = ctx.createAnalyser();
            // we have to connect the MediaElementSource with the analyser 
            audioSrc.connect(analyser);
            // we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)
            audioSrc.connect(ctx.destination);
            // frequencyBinCount tells you how many values you'll receive from the analyser
            var frequencyData = new Uint8Array(analyser.frequencyBinCount);
           
            // we're ready to receive some data!
            // loop
            function renderFrame() {
               window.requestAnimationFrame(renderFrame);
               // update data in frequencyData
               analyser.getByteFrequencyData(frequencyData);
               // render frame based on values in frequencyData
               console.log(frequencyData)
               //console.log(analyser)
            }
            //audio.start();
            audio.play();
            renderFrame();
          };
          window.onload()
    }

    resolveClick(type) {
        if (type === "Dashboard") {
            if (true) { //TODO: check token
                this.setState({redirect: '/dashboard'});
            }
        } else if (type === "ShowWave") {
            if (true) { //TODO: check file
                this.showWave();
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
                    <NavBar current={'InputView'} firebase={this.props.firebase}/>
                    <Typography variant="h1">INPUTVIEW</Typography>
                    <Typography variant="h1">{"ID: " + this.props.viewId}</Typography>
                    
                    <Button variant='contained' color='primary' onClick={()=>this.resolveClick("ShowWave")}>GENERATE</Button>
                    <audio id="myAudio" src="../../twice.mp3"></audio>
                </div>
            )
        }
    }
}

export default InputView;