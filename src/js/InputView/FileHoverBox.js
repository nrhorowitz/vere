import React from 'react';
import Typography from '@material-ui/core/Typography';
import './index.css';

class FileHoverBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.fileHover) {
            return (
                <div className="upload-box-hover">
                    <Typography id='inputDrop' variant='h1'>HOVER DROP</Typography>
                </div>
            )
        } else {
            return (
                <div className="upload-box">
                    <Typography id='inputDrop' variant='h1'>DROP</Typography>
                </div>
            )
        }
    }
}

export default FileHoverBox;