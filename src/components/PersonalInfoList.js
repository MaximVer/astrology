import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import * as contentful from 'contentful'
import PersonalInfo from './PersonalInfo'
import {data} from '../env'

const client = contentful.createClient({
    space: data.SPACE_ID,
    accessToken: data.ACCESS_TOKEN
});

class PersonalInfoList extends Component {
    state = {
        courses: [],
        searchString: ''
    };
    getCourses = () => {
        client.getEntries({
            content_type: 'course',
            query: this.state.searchString
        })
            .then((response) => {
                this.setState({courses: response.items});
                console.log(this.state.courses)
            })
            .catch((error) => {
                console.log("Error occurred while fetching Entries");
                console.error(error)
            })
    };

    constructor() {
        super();
        this.getCourses()
    }

    render() {
        return (
            <div>
                { this.state.courses ? (
                    <div>
                        <Grid container spacing={24}
                              justify='space-between'
                              direction='row'
                              alignItems='stretch'>
                            { this.state.courses.map(currentCourse => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <PersonalInfo course={currentCourse}/>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No courses found" }
            </div>
        )
    }
}

export default PersonalInfoList;
