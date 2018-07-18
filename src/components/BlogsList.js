import React, {Component} from 'react';
import BlogPost from './BlogPost';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful'
const SPACE_ID = 'pqvqz7pi9hj3'
const ACCESS_TOKEN = 'c7c0a476f3f6fb05cdc898e4ac37dc4079a04667f061dbf10c40b1c641c6baad'
const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})


class BlogsList extends Component {
    state = {
        blogPosts: [],
        searchString: ''
    }

    constructor() {
        super()
        this.getBlogPosts()
    }

    getBlogPosts = () => {
        client.getEntries({
            content_type: 'blogPost',
            query: this.state.searchString
        }).then((response) => {
            this.setState({blogPosts: response.items})
            console.log(response);
        }).catch((error) => {
                console.log("Error occurred while fetching Entries")
                console.error(error)
            })
    }

    onSearchInputChange = (event) => {
        console.log("Search changed ..." + event.target.value)
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getBlogPosts()
    }

    render() {
        return(
            <div>
                {
                    this.state.blogPosts ? (
                        <div>
                            <TextField
                                style={{padding: 24}}
                                id="searchInput"
                                placeholder="Search for posts"
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

export default BlogsList;