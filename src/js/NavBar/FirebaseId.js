import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class FirebaseId extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: '',
        }
    }

    render() {
        if (this.props.firebase.auth().currentUser) {
            return (
                <Grid container xs='1'>
                    <Typography variant="h6">{"ID: " + this.props.firebase.auth().currentUser.uid}</Typography>
                </Grid>
            )
        } else {
            return (
                <Grid container xs='1'>
                    <Typography variant="h6">{"ID: no-user"}</Typography>
                </Grid>
            )
        }
        
    }
}

export default FirebaseId;