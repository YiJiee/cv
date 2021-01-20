import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
import {resolveImagePath} from "../../functions/path";

export default class Planus extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Card id="planusCard">
                <div class="projectCard">
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="PlaNUS demo"
                        height="200"
                        src={resolveImagePath("images/planusdemo.png")}
                        title="PlaNUS demo"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            PlaNUS
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h2">
                            Orbital 2019
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Isn't planning your college journey extremely tedious since information is 
                            scattered all over the place? Use our PlaNUS to
                            easily identify courses that you have to take and manage your university classes
                            all in one place! Additionally, a sample study plan will be provided to serve as 
                            a guideline!
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </div>
                </Card>
        )
    }
}