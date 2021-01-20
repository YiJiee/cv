import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
import {Box, makeStyles} from "@material-ui/core";
import workExperienceData from "../data/workExperience/workExperience.json";

const useStyles = makeStyles((theme) => ({
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}));

const leftItemStyle = {
    justifyContent: "flex-start",
    paddingLeft:"40px",
    paddingRight: "40px",
    display: "flex",
    height: "150px",
    alignItems: "center",
    textAlign: "left",
}

export default function WorkExperience(props) {
    const classes = useStyles();

    return (
        <div id="workExperience" ref={props.propsRef}>
            <h1>Work Experience</h1>
            {
                workExperienceData.work_experience.map((exp, index) => (<div style={leftItemStyle} key={`work-exp-${index}`}>
                    <h2 style={{paddingRight: "20px"}}>{index + 1}</h2>
                    <Card style={{width: "100%"}}>
                        <div className="workexpCard">
                            <CardActionArea>
                                <CardContent>
                                    <Box className={classes.row}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {exp.title}
                                        </Typography>
                                        <Typography>
                                            {exp.duration}
                                        </Typography>
                                    </Box>
                                    {
                                        exp.description.map((desc, index) => (
                                            <Typography variant="body2" component="p" key={`${exp.title}-${index}`}>
                                                {desc}
                                            </Typography>))
                                    }
                                </CardContent>
                            </CardActionArea>
                        </div>
                    </Card>
                </div>))
            }
        </div>
    )
}