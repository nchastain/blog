import React, { Component } from 'react'
import capsuleImage from '.././assets/capsule_image_1.png'
import capsuleImage2 from '.././assets/capsule_image_2.png'
import capsuleImage3 from '.././assets/capsule_image_3.png'
import capsuleImage4 from '.././assets/capsule_image_4.png'
import capsuleImage5 from '.././assets/capsule_image_5.png'
import capsuleImage6 from '.././assets/capsule_image_6.png'
import capsuleImage7 from '.././assets/capsule7.png'
import yogaVideo from '.././assets/yoga_video.png'
import mediaLayers from '.././assets/group4.png'
import capsuleIcon from '.././assets/capsule_logo.png'
import ProjectSection from './ProjectSection'
import { ProjectBasics } from './ProjectBasics'


const progress = (
    <div>
        <p className='portfolio-text'>
        Many goal management apps suffer from an overly prescriptive definition of progress. In extreme cases, they offer only a '+1' incrementer for progress entry. 
        </p>
        <p className='portfolio-text'>
        On the other extreme of this spectrum, some apps are so open that they are effectively note-taking applications, with goals serving as de facto tags and references to goal-setting and progress present only in their messaging.
        </p>
        <p className='portfolio-text'>
        Capsule's unique value proposition is that it is flexible enough to accomodate both qualitative and quantitative progress:
        <span style={{color: 'rgb(208, 25, 45)'}}> experiences</span>,<span style={{color: 'rgb(242, 144, 51)'}}> habits</span>,<span style={{color: 'rgb(245, 222, 133)'}}> milestones</span>,<span style={{color: 'rgb(43, 170, 59)'}}> progress (strict quantities for unit-based goals)</span>,<span style={{color: 'rgb(77, 146, 223)'}}> notes</span>,<span style={{color: 'rgb(176, 158, 251)'}}> views (photo and video uploads)</span> and<span style={{color: 'rgb(254, 192, 249)'}}> journal entries</span>.
        </p>
    </div>
)

const media_rich = (
    <div>
        <p className='portfolio-text'>
            Each project can contain not only text entries, but also: images of books you've read while researching water conservation, videos of your attempts at a flat land backflip, a video diary explaining your next hypothesis, or other uses of multimedia. 
        </p>
        <p className='portfolio-text'>
            Capsule's interface organizes these entries not only by the goal to which they belong, but also by day, tag and media type.
        </p>
    </div>
)

const past = (
    <div>
        <p className='portfolio-text'>
            Past progress entries can be reviewed either within the context of a project or within daily capsules. From this screen, users can see at a glance general trends in progress, and navigate to specific days or months.
        </p>
        <p className='portfolio-text'>
            Capsule images default to nature photography but are replaced with 'views' from the day once the user has uploaded one or more image-based progress entry for that day.
        </p>
    </div>
)

const projects_one_place = (
    <div>
        <p className='portfolio-text'>
            See all of your projects at a glance, as well as progress bars on projects with quantifiable endpoints. 
        </p>
        <p className='portfolio-text'>
            Completed projects can be accessed later through the use of the 'completed' menu option, leaving current goals in focus. 
        </p>
    </div>
)

const recording_progress = (
    <div>
        <p className='portfolio-text'>
            Recording any type of progress is as simple as clicking the '+' Quick Add button from the bottom menu, which is contextually aware of the project or day you are viewing. 
        </p>
        <p className='portfolio-text'>
            Creating and saving a progress entry has been streamlined with background saving, allowing the user to quickly return to what he was doing before creating the progress entry. 
        </p>
    </div>
)

export const Capsule = (props) => {
    return (
        <div>
            <div className='page-container'>
                <div className='post-container'>
                    <div className='top-project-title'>
                        <img src={capsuleIcon} className='top-project-image' style={{borderRadius: '50px'}} />
                        <div className='post-title' style={{paddingLeft: '5px'}}>Capsule</div>
                    </div>
                    <div className='pullout-description'>
                    iPhone application for updating goals with notes, photos, milestones and other entries detailing progress accumulated over the course of each day. 
                    </div>
                </div>
            </div>
            <ProjectBasics
                styles={{backgroundColor: 'rgba(26, 26, 55, 1)'}}
                role='Sole designer and developer'
                time='100 hours'
                tools='React Native, HTML, CSS, Firebase, Node, Sketch, Trello'
                link='No web link (mobile app)'
                code='https://github.com/nchastain/Capsule'
            />
            <ProjectSection
                styles={{ backgroundColor: 'rgb(25,25,112)' }}
                image={capsuleImage}
                title='Track progress, no matter how you define it'
                text={progress}
                image_position='right'
            />
            <ProjectSection
                styles={{ backgroundColor: 'white', color: 'rgb(25, 25, 112)' }}
                image={yogaVideo}
                text={media_rich}
                title='Build media-rich containers for goals'
                image_position='left'
            />
            <ProjectSection
                styles={{ backgroundColor: 'rgb(25,25,112)' }}
                image={capsuleImage2}
                text={past}
                title={`Review progress in daily capsules`}
                image_position='right'
            />
            <ProjectSection
                styles={{ backgroundColor: 'white', color: 'rgb(25, 25, 112)' }}
                image={capsuleImage7}
                title='Manage your projects in one place'
                text={projects_one_place}
                image_position='left'
            />
            <ProjectSection
                styles={{ backgroundColor: 'rgb(25,25,112)' }}
                image={capsuleImage4}
                title='Record progress instantly'
                text={recording_progress}
                image_position='right'
            />
        </div>
    )
}