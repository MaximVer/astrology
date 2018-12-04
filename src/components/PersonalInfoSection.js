import React from 'react';
import Paper from "@material-ui/core/Paper";
import {withStyles} from '@material-ui/core/styles';
import PersonalInfoList from "./PersonalInfoList";


const PersonalInfoSection = () => {
    return (
        <div style={styles.root}>
            <Paper elevation={24} style={styles.paper}>
                <PersonalInfoList/>
            </Paper>
        </div>
    );
};

const styles = {
    root: {
        padding: 20,
        backgroundColor: "#bbc0e5"
    },
    paper: {
        padding: 20
    }
};

export default withStyles(styles)(PersonalInfoSection);