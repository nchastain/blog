import React, { Component } from 'react'
import Facebook from './assets/facebook-logo.png'
import capsuleIcon from './assets/capsule_logo.png'

class ProjectCard extends Component {
    render() {
        return (
            <div className="project" id="airbnb-project">
                <img src={this.props.image} className='project-image' />
                <span className="project-title"><img className="project-logo" src={this.props.textLogo || Facebook} /></span>
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