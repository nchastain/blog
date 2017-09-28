import React, { Component } from 'react'
import capsuleImage from '.././assets/capsule_image_1.png'
import capsuleImage2 from '.././assets/capsule_image_2.png'
import capsuleImage3 from '.././assets/capsule_image_3.png'
import capsuleImage4 from '.././assets/capsule_image_4.png'
import capsuleImage5 from '.././assets/capsule_image_5.png'
import capsuleImage6 from '.././assets/capsule_image_6.png'
import ProjectSection from './ProjectSection'
import { ProjectBasics } from './ProjectBasics'

export const Capsule = (props) => {
    return (
        <div>
            <div className='page-container'>
                <div className='post-container'>
                    <div className='post-title'>Capsule</div>
                    <div className='pullout-description'>
                        An iPhone application for easily updating goals and projects with notes, photos and other entries detailing progress accumulated over the course of the day.
                    </div>
                </div>
            </div>
            <ProjectBasics
                styles={{backgroundColor: 'rgba(26, 26, 55, 1)'}}
                role='Sole designer and developer'
                time='100 hours'
                tools='React Native, HTML, CSS, Firebase, Node, Sketch, Trello'
                link='http://www.google.com'
                code='http://www.github.com/nchastain'
            />
            <ProjectSection
                styles={{ backgroundColor: 'rgb(25,25,112)' }}
                image={capsuleImage}
                title='Effortlessly track every type of goal progress'
                image_position='right'
            />
            <div style={{display: 'flex', maxWidth: '1000px', padding: '20px'}}>
                <img src={capsuleImage} style={{flex: 1, height: '500px', margin: '10px'}} />
                <img src={capsuleImage2} style={{flex: 1, height: '500px', margin: '10px'}} />
                <img src={capsuleImage3} style={{flex: 1, height: '500px', margin: '10px'}} />
                <img src={capsuleImage4} style={{flex: 1, height: '500px', margin: '10px'}} />
                <img src={capsuleImage5} style={{flex: 1, height: '500px', margin: '10px'}} />
                <img src={capsuleImage6} style={{flex: 1, height: '500px', margin: '10px'}} />
            </div>
            <ProjectSection
                styles={{ backgroundColor: 'white', color: 'rgb(25, 25, 112)' }}
                image='http://unsplash.it/800/350'
                text='Lorem ipsum blah blah blah'
                title='Some feature'
                image_position='left'
            />
            <ProjectSection
                styles={{ backgroundColor: 'rgb(25,25,112)' }}
                image='http://unsplash.it/800/350'
                text='Lorem ipsum blah blah blah'
                title='Some feature'
                image_position='right'
            />
            <ProjectSection
                styles={{ backgroundColor: 'white', color: 'rgb(25, 25, 112)' }}
                image='http://unsplash.it/800/350'
                text='Lorem ipsum blah blah blah'
                title='Some feature'
                image_position='left'
            />
        </div>
    )
}