import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};

const BlogPost = (props) => {
    console.log(props);
    return(
        <div>
            {
                props.blogPost ? (
                    <Card>
                        <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                                   image={props.blogPost.fields.image.fields.file.url}
                                   title={props.blogPost.fields.title} />
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                {props.blogPost.fields.title}
                            </Typography>
                            <Typography component="p">
                                {props.blogPost.fields.text}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                ) : null
            }
        </div>
    );
}

export default withStyles(styles)(BlogPost);