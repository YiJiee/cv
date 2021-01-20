import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";

export default class WorkExperience extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const leftItemStyle = {
            justifyContent: "flex-start", 
            paddingLeft:"40px", 
            paddingRight: "40px",
            display: "flex",
            height: "150px",
            alignItems: "center",
            textAlign: "left",
        }
        return (
            <div id="workExperience" ref={this.props.propsRef}>
                <h1>Work Experience</h1>
                <div style={leftItemStyle}>
                    <h2 style={{paddingRight:"20px"}}>1</h2>
                    <Card style={{width: "100%"}}>
                    <div class="workexpCard">
                        <CardActionArea>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Full-stack Mobile Application Developer for Healthcare Platform (SIP) (Full-time)
                            </Typography>
                            <Typography variant="body2" component="p">
                                Developed a mobile application from scratch using ReactNative for frontend and Python Flask for backend.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </div>
                    </Card>
                </div>
                <div style={leftItemStyle}>
                    <h2 style={{paddingRight:"20px"}}>2</h2>
                    <Card style={{width: "100%"}}>
                        <div class="workexpCard">
                            <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Tutor, National University of Singapore, Singapore (Part Time)
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Guided and managed a group of Computer Science freshmen on a  course (CS1101S) about programming methodology.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </div>
                    </Card>
                </div>
                <div style={leftItemStyle}>
                    <h2 style={{paddingRight:"20px"}}>3</h2>
                    <Card style={{width: "100%"}}>
                        <div class="workexpCard">
                            <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Intern, Institute of Molecular Cell Biology, Singapore (Full-time)
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Assistant for a bioinformatics researcher.
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Helped with experiments and consolidated data  using HOMER bioinformatics software.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}