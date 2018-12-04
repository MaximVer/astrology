import React, {Component} from 'react';
import BlogPost from './BlogPost';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful'
import {data} from "../env";

const client = contentful.createClient({
    space: data.SPACE_ID,
    accessToken: data.ACCESS_TOKEN
});


class BlogsList extends Component {
    state = {
        blogPosts: [],
        searchString: ''
    };
    getBlogPosts = () => {
        client.getEntries({
            content_type: 'blogPost',
            query: this.state.searchString
        }).then((response) => {
            this.setState({blogPosts: response.items});
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
        this.getBlogPosts()
    };

    constructor() {
        super();
        this.getBlogPosts()
    }

    render() {
        return(
            <div style={styles.root}>
                {
                    this.state.blogPosts ? (
                        <div>
                            <TextField
                                style={{padding: 24}}
                                id="searchInput"
                                placeholder="Поиск поста..."
                                margin="normal"
                                onChange={this.onSearchInputChange}
                            />
                            <Grid container spacing={24} style={{padding: 24}}>
                                {
                                    this.state.blogPosts.map((currentBlog) => (
                                        <Grid item xs={12} sm={6} lg={4} xl={3} >
                                            <BlogPost blogPost={currentBlog} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </div>
                    ) : "No blog posts today..."
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

export default BlogsList;