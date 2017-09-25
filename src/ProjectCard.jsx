import React, { Component } from 'react'
import Facebook from './assets/facebook-logo.png'
import capsuleIcon from './assets/capsule_logo.png'
import { Link } from 'react-router-dom'

class ProjectCard extends Component {
    render() {
        return (
            <Link to={`/projects/${this.props.slug}`} className="project" id="airbnb-project">
                <img src={this.props.image} className='project-image' />
                <span className="project-title"><img className="project-logo" src={this.props.textLogo || Facebook} /></span>
                <span className="project-description">
                    <span className="description-text-container">
                        <img className="description-logo" src={this.props.textLogo || Facebook} />
                        <div>{this.props.description}</div>
                    </span>
                    <span className="btn pill"><a className="brief-link" href="/projects">Read brief</a></span>
                </span>
		    </Link>
        )
    }
}

export default ProjectCard