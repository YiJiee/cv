import React from 'react';
import SchoolIcon from '@material-ui/icons/School';

const headerSplitterStyle = {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gridTemplateRows: "1fr",
    alignItems: "center"
}

export default function Education(props) {
    return (
        <div id="education" ref={props.propsRef}>
            <div id="educationText">
                <div style={headerSplitterStyle}>
                    <h2>National University of Singapore</h2>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <h3>Bachelor of Computing in Computer Science (with Honours*)</h3>
                    <h4 style={{textAlign: "right"}}>Aug 2018 - May 2022</h4>
                </div>
                <ul>
                    <h4>Some notable classes that I have taken as an undergraduate in NUS:</h4>
                    <li>CS3211 - Parallel and Concurrent Programming</li>
                    <li>CS3241 - Computer Graphics</li>
                    <li>CS3243 - Introduction to Artificial Intelligence</li>
                    <li>CS3244 - Machine Learning</li>
                    <li>CS3245 - Information Retrieval</li>
                    <li>CS4243 - Computer Vision & Pattern Recognition</li>
                    <li>... More to be added as I study further!</li>
                </ul>
            </div>
            <div style={{textAlign:"center"}}>
                <SchoolIcon style={{ fontSize: 300 }}/>
                <h2>Education</h2>
            </div>
        </div>
    )
}
