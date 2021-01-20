import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
import {Avatar} from "@material-ui/core";

export default class TimeBook extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Card id="timebookCard">
                <div class="projectCard" >
                    <CardActionArea style={{height: "100%"}}>
                        <CardMedia
                        component="img"
                        alt="TimeBook demo"
                        height="200"
                        image={"images/timebookdemo.png"}
                        title="TimeBook demo"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            TimeBook
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h2">
                            Software Engineering Project
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Want to organise a group meeting with your friends or colleagues but have no
                            idea when is everyone available? TimeBook is an easy-to-use group meeting application
                            that helps you keep track of you and your friend's time tables so that you can easily
                            identify a common free time for a meet up!
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </div>
                </Card>
        )
    }
}