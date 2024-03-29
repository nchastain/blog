import React, { Component } from 'react'
import BackLink from './BackLink'
import ProjectSection from './ProjectSection'
import { Capsule } from './Capsule'
import Onion from './Onion'
import { project_slug_map } from '.././utilities'

class Project extends Component {
    componentWillMount() {
        window.scrollTo(0, 0);
    }

    retrieveProject() {
        switch (this.props.match.params.slug) {
            case 'capsule':
                return <Capsule />
            case 'theonion':
                return <Onion />
            default:
                return null
        }
    }

    render() {
        return (
            <div>
                {this.retrieveProject()}
            </div>
        )
    }
}

export default Project