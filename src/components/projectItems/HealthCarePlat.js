import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";

export default class HealthCarePlat extends React.Component {
    constructor(props) {
        super(props)
    }
    //Image height must be 200
    render() {
        return (
            <Card id="hcpCard" >
                <div class="projectCard">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="hcp demo"
                        height="200"
                        image={null}
                        title="Healthcare demo"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Healthcare Platform App (SIP)
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                        Cross-platform mobile application
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Collaboration with healthcare service provider to develop a cross-platform (android and iOS) mobile application that
                        aims to improve the management of diabetes with the help of modern applications. The features that I have developed
                        include food logging and graph plots. Click on this card to find out more!
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </div>
                </Card>
        )
    }
}