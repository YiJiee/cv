import React from 'react';
import LayersIcon from '@material-ui/icons/Layers';

export default class AboutMe extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="aboutMe" ref={this.props.propsRef}>
                <div style={{textAlign:"center"}}>
                    <LayersIcon style={{ fontSize: 300 }}/>
                    <h2>Skills</h2>
                </div>
                <div id="aboutMeText">
                    <h2> 
                        Hello and welcome to my CV! I'm a year 3 computer science student in NUS.
                        <br/>
                        My area of interests are cross-platform development, parallel computing and AI/ML.
                    </h2>
                    <h3>I'm familiar with these technologies...</h3>
                    <ul>
                        <li>Web development using ReactJS (HTML/CSS/Python backend)</li>
                        <li>Cross-platform development using ReactNative</li>
                        <li>Python Flask</li>
                        <li>MongoDB</li>
                        <li>Git</li>
                        <li>Docker</li>
                        <li>Unix operating systems</li>
                    </ul>
                </div>
            </div>
        )
    }
}