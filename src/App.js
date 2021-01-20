import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import { Scrollbars } from 'react-custom-scrollbars';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.homeRef = React.createRef();
    this.aboutMeRef = React.createRef();
    this.educationRef = React.createRef();
    this.workExpRef = React.createRef();
    this.projectsRef = React.createRef();
  }

  scrollToRef = ref => {
    console.log(ref)
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  render() {
    return (
      <div id="AppGridContainer">
        <Paper square>
          <Tabs
            centered
            value={null}
            indicatorColor="primary"
            textColor="primary"
            onChange={null}
          >
            <Tab label="Home" onClick={()=>this.scrollToRef(this.homeRef)} />
            <Tab label="About me" onClick={()=>this.scrollToRef(this.aboutMeRef)}/>
            <Tab label="Education" onClick={()=>this.scrollToRef(this.educationRef)}/>
            <Tab label="Projects" onClick={()=>this.scrollToRef(this.projectsRef)} />
            <Tab label="Work experience" onClick={()=>this.scrollToRef(this.workExpRef)}/>
          </Tabs>
        </Paper>
        <Scrollbars id="AppGridItems">
          <Header propsRef={this.homeRef} />
          <AboutMe propsRef={this.aboutMeRef}/>
          <Education propsRef={this.educationRef}/>
          <Projects propsRef={this.projectsRef}/>
          <WorkExperience propsRef={this.workExpRef}/>
        </Scrollbars>
      </div>
    )
  }
}
