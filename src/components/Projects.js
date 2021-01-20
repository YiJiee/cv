import React from 'react';
import Planus from './projectItems/Planus';
import HealthCarePlat from './projectItems/HealthCarePlat';
import TimeBook from './projectItems/Timebook';

export default function Projects(props) {
    return (
        <div id="projects" ref={props.propsRef}>
            <h2>Projects</h2>
            <div id="projectItems" style={{marginLeft: '3%', marginRight: '3%'}}>
                {/* should make it 3 cards per row */}
                <Planus />
                <TimeBook />
                <HealthCarePlat />
            </div>
        </div>
    )
}