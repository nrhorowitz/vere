import React from 'react';


const Visualizer = require('react-audio-visualizer');
 
<Visualizer model={ <model> } /></model>

class VisualizerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: '',
        }
        this.resolveClick = this.resolveClick.bind(this);
    }
}