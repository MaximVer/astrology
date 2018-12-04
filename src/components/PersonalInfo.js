import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const PersonalInfo = (props) => {
    console.log(props);
    return(
        <div style={{height: '100%'}}>
            { props.course ? (
                <Card style={{height: '100%', position: 'relative'}}>
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                               image={props.course.fields.image.fields.file.url}
                               title={props.course.fields.title}
                    />
                    <CardContent style={{paddingBottom: '12%'}}>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.course.fields.title}
                        </Typography>
                        <Typography component="p">
                            {props.course.fields.description}
                        </Typography>
                    </CardContent>
                    <CardActions style={{position: 'absolute', bottom: '0px'}}>
                        <Button size="small" color="primary" href={props.course.fields.url} target="_blank">
                            Go To Course
                        </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
};
export default PersonalInfo