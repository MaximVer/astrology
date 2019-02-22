import React from 'react';
import Card from "@material-ui/core/es/Card/Card";
import CardActionArea from "@material-ui/core/es/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import Typography from "@material-ui/core/es/Typography/Typography";
import * as contentful from "contentful";
import {data} from "../env";
import Container from "react-bootstrap/es/Container";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import {withStyles} from "@material-ui/core/styles/index";


const client = contentful.createClient({
    space: data.SPACE_ID,
    accessToken: data.ACCESS_TOKEN
});

class ReviewCards extends React.Component {
    state = {
        reviews: []
    };

    getLearnMore = () => {
        client.getEntries({
            content_type: 'review'
        })
            .then((response) => {
                this.setState({reviews: response.items});
                console.log(this.state.reviews)
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
                <Container>
                    <Row>
                        {this.state.reviews.map(review => (
                            <Col sm={12} lg={4} key={review.sys.id}>
                                <Card style={styles.card} raised={true}>
                                    <CardActionArea>
                                        <CardMedia
                                            title="Contemplative Reptile"
                                            src="iframe"
                                            style={styles.media}
                                        >
                                            <VideoIframe videoUrl={review.fields.videoUrl}
                                                         reviewTitle={review.fields.reviewTitle}/>
                                        </CardMedia>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {review.fields.reviewTitle}
                                            </Typography>
                                            <Typography component="p">
                                                {review.fields.reviewText}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

const styles = {
    root: {
        backgroundColor: "#e8e2ff"
    },
    card: {
        marginTop: "8%"
    },
    media: {
        // height: "20em",
    },
};

export default withStyles(styles)(ReviewCards);

const VideoIframe = (props) => {
    return (
        <iframe src={props.videoUrl}
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title={props.reviewTitle}
                style={{width: "100%"}}
        />
    );
};