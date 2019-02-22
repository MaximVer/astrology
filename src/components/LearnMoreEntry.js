import React, {Component} from 'react';
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";

class LearnMoreEntry extends Component {

    render() {
        return (
            <div>
                {this.props.learnMoreEntry ? (
                    <div>
                        <Grid
                            container
                            direction="row"
                        >
                            <Grid item xs={12} sm={6}>
                                <div style={styles.gridImage}>
                                    <img style={styles.img}
                                         alt="learn more"
                                         src={this.props.learnMoreEntry.fields.image.fields.file.url}/>
                                </div>
                            </Grid>

                            < Grid item xs={12} sm={6}>
                                <div style={styles.gridImage}>
                                    <div style={styles.text}>
                                        <Typography variant="h4" style={styles.h4}>
                                            {this.props.learnMoreEntry.fields.title}
                                        </Typography>
                                        <Typography variant="body1" style={styles.body1}>
                                            {this.props.learnMoreEntry.fields.description}
                                        </Typography>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                ) : null}
            </div>
        );
    }
}

const styles = {
    gridImage: {
        textAlign: "center",
        marginTop: "30%",
        marginBottom: "10%"
    },
    img: {
        minWidth: "40%",
        maxWidth: "50%",
        display: "inline-block"
    },
    gridText: {
        textAlign: "center",
        marginTop: "30%",
        marginBottom: "10%"
    },
    text: {
        display: "inline-block",
        padding: "5%"
    },
    h4: {
        color: "#ffffff"
    },
    body1: {
        color: "#bfbfbf",
        paddingTop: "5%",
        fontSize: "16px"
    }
};

export default LearnMoreEntry;