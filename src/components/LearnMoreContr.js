import React, {Component} from 'react';
import * as contentful from 'contentful';
import {data} from "../env";
import LearnMoreEntry from "./LearnMoreEntry";

const client = contentful.createClient({
    space: data.SPACE_ID,
    accessToken: data.ACCESS_TOKEN
});

class LearnMoreContr extends Component {
    state = {
        learnMoreEntries: []
    };

    getLearnMore = () => {
        client.getEntries({
            content_type: 'course'
        })
            .then((response) => {
                this.setState({learnMoreEntries: response.items});
                console.log(this.state.learnMoreEntries)
            })
            .catch((error) => {
                console.log("Error occurred while fetching Entries");
                console.error(error)
            })
    };

    constructor() {
        super();
        this.getLearnMore();
    }

    render() {
        return (
            <div style={styles.root}>
                {this.state.learnMoreEntries.map(learnMoreEntry => (
                        <LearnMoreEntry learnMoreEntry={learnMoreEntry} key={learnMoreEntry.sys.id}/>
                    )
                )}
            </div>
        );
    }
}

const styles = {
    root: {
        backgroundColor: "#1f252f",
    }
};

export default LearnMoreContr;