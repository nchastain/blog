import React, { Component } from 'react'

class ProjectSection extends Component {
    render() {
        const text = (
            <div className='project-text-block'>
                <div className='project-section-title'>{this.props.title}</div>
                <div className='project-section-text'>{this.props.text}</div>
            </div>
        )
        const image = (
            <img className='project-section-image' src={this.props.image} />
        )
        let layoutSwitch = (image_position) => {
            switch (image_position) {
                case 'left':
                    return <div className='project-section-row image_left'>{image}{text}</div>
                case 'center':
                    return <div className='project-section-row image_center'>{image}{text}</div>
                case 'full-width':
                    return <div className='project-section-row image_full'>{image}{text}</div>
                case 'right':
                default:
                    return <div className='project-section-row image_right'>{text}{image}</div>
            }
        }
        return (
            <div className='project-section' style={this.props.styles}>
                {layoutSwitch(this.props.image_position)}
            </div>
        )
    }
}

export default ProjectSection