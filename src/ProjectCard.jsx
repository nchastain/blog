import React, { Component } from 'react'
import Facebook from './assets/facebook-logo.png'

class ProjectCard extends Component {
    render() {
        return (
            <div className="project" id="airbnb-project">
                <span className="project-background" id="blive-project-1"></span>
                <span className="project-title" id="blive-project-1"><img className="project-logo" src={Facebook} /></span>
                <span className="project-description">
                    <span className="description-text-container">
                        {this.props.description}
                    </span>
                    <span className="btn pill"><a className="brief-link" href="/projects">Read brief</a></span>
                </span>
		    </div>
        )
    }
}

export default ProjectCard