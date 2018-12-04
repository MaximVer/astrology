import React from 'react';
import Paper from "@material-ui/core/Paper";
import {withStyles} from '@material-ui/core/styles';
import PersonalInfoList from "./PersonalInfoList";


const PersonalInfoSection = () => {
    return (
        <div style={styles.paper}>
            <Paper style={styles.paper}>
                <PersonalInfoList/>
            </Paper>
        </div>
    );
};

const styles = {
    paper: {
        padding: 20
    }
};

export default withStyles(styles)(PersonalInfoSection);