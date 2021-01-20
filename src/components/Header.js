import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="header" ref={this.props.propsRef}>
                <div id="headerOverlay" />
                <div id="headerText">
                    <h1>Lim Yi Jie, Undergraduate</h1>
                    <h2>National University of Singapore</h2>
                    <h3>Computer Science (Hons)</h3>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <GitHubIcon onClick={() => window.open("https://github.com/YiJiee")}
                                    style={{cursor: 'pointer'}} />
                        <div style={{padding: 6}} />
                        <LinkedInIcon onClick={() => window.open("https://www.linkedin.com/in/yijie-lim-a02b93192/")}
                                      style={{cursor: 'pointer'}}/>
                    </div>
                </div>
                <img src={"images/homepageBackground.jpg"} alt="bgImg" width="100%" height="300px" />
            </div>
        )
    }
}