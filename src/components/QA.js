import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful'
import {data} from "../env";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const client = contentful.createClient({
    space: data.SPACE_ID,
    accessToken: data.ACCESS_TOKEN
});


class QA extends Component {
    state = {
        qa: [],
        searchString: ''
    };
    getQA = () => {
        client.getEntries({
            content_type: 'qa',
            query: this.state.searchString
        }).then((response) => {
            this.setState({qa: response.items});
            console.log(response);
        }).catch((error) => {
            console.log("Error occurred while fetching Entries");
            console.error(error)
        })
    };
    onSearchInputChange = (event) => {
        console.log("Search changed ..." + event.target.value);
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getQA()
    };

    constructor() {
        super();
        this.getQA()
    }

    render() {
        return (
            <div style={styles.root}>
                <TextField
                    style={{padding: 24}}
                    id="searchInput"
                    placeholder="Поиск вопроса или ответа..."
                    margin="normal"
                    onChange={this.onSearchInputChange}
                />
                {
                    this.state.qa ? (
                        <div>
                            {
                                this.state.qa.map((qa) => (
                                    <ExpansionPanel>
                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                            <Typography>{qa.fields.title}</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography>
                                                {qa.fields.text}
                                            </Typography>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                ))
                            }
                        </div>
                    ) : "No QA's posts today..."
                }
            </div>
        )
    }
}

const styles = {
    root: {
        backgroundColor: "#eec19d"
    }
};

export default QA;