import React, { Component } from 'react'
import BackLink from './BackLink'
import ProjectSection from './ProjectSection'
import { project_slug_map } from '.././utilities'

class Project extends Component {
    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <div className='page-container'>
                    <BackLink />
                    <div className='post-container'>
                        <div className='post-title'>{project_slug_map[this.props.match.params.slug]}</div>
                        <div className='pullout-description'>This is an example of a pull-out description.</div>
                    </div>
                </div>
                <ProjectSection 
                    styles={{backgroundColor: 'rgb(25,25,112)'}}
                    image='http://unsplash.it/800/350'
                    text='Lorem ipsum blah blah blah'
                    title='Some feature'
                    image_position='right'
                />
                <ProjectSection 
                    styles={{backgroundColor: 'white', color: 'rgb(25, 25, 112)'}}
                    image='http://unsplash.it/800/350'
                    text='Lorem ipsum blah blah blah'
                    title='Some feature'
                    image_position='left'
                />
                <ProjectSection 
                    styles={{backgroundColor: 'rgb(25,25,112)'}}
                    image='http://unsplash.it/800/350'
                    text='Lorem ipsum blah blah blah'
                    title='Some feature'
                    image_position='right'
                />
                <ProjectSection 
                    styles={{backgroundColor: 'white', color: 'rgb(25, 25, 112)'}}
                    image='http://unsplash.it/800/350'
                    text='Lorem ipsum blah blah blah'
                    title='Some feature'
                    image_position='left'
                />
            </div>
        )
    }
}

export default Project