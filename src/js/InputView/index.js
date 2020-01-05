import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NavBar from '../NavBar';
import Player from './Player.js';
import FileHoverBox from './FileHoverBox.js';
import { Receiver } from 'react-file-uploader';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
//https://www.npmjs.com/package/react-audio-visualizer

class InputView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: '',
            isReceiverOpen: false,
            file: null,
            fileHover: false,
        }
        this.resolveClick = this.resolveClick.bind(this);
    }


    resolveClick(type, v=false, fileReader=false) {
        if (type === "Dashboard") {
            if (true) { //TODO: check token
                this.setState({redirect: '/dashboard'});
            }
        } else if (type === "ResolveInput") {
            const file = this.state.file
            if (true) { //TODO: check file
                var fileReader = new FileReader();
                console.log(file)
                console.log(fileReader)
                fetch(file)
                .then(resp => resp.blob())
                .then(blob => this.resolveClick("BlobFile", blob, fileReader));
                
            }
        } else if (type === "BlobFile") {
            fileReader.readAsArrayBuffer(v).then((result) => {
                console.log(result);
            });
            console.log(fileReader)
            if (true) { //TODO: check if something actually went through

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
                    <Receiver
                        wrapperId={'inputDrop'}
                        customClass={'csstodo'}
                        style={{marginRight: '10px'}}
                        isOpen={true}
                        onDragEnter={(e)=>{this.setState({ isReceiverOpen: true });}}
                        onDragOver={(e)=>{
                            if (!this.state.fileHover) {
                                this.setState({fileHover: true});
                            }
                        }}
                        onDragLeave={(e)=>{
                            this.setState({fileHover: false});
                            this.setState({ isReceiverOpen: false });
                        }}
                        onFileDrop={(e, uploads)=>{
                            //TODO: filetype and number of files
                            //let newUploads = uploads.map(upload => {
                                // check file size
                                //if (upload.data.size > 1000 * 1000) {
                                  //return Object.assign({}, upload, { error: 'file size exceeded 1MB' });
                                //}
                            //})
                            this.setState({file: uploads[0].data});
                            this.setState({ isReceiverOpen: false });
                            this.resolveClick("ResolveInput");
                        }}
                        >
                        <div>
                            visual layer of the receiver (drag & drop panel)
                        </div>
                    </Receiver>
                    <FileHoverBox fileHover={this.state.fileHover}/>
                    <Button variant='contained' color='primary' onClick={()=>this.resolveClick("ShowWave")}>GENERATE</Button>
                    
                </div>
            )
        }
    }
}

export default InputView;