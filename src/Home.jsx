import React, { Component } from 'react'
import BlogContainer from './BlogContainer'
import ProjectCard from './ProjectCard'
import SectionHeader from './SectionHeader'
import whiteCapsule from './assets/white_capsule.png'
import capsuleIcon from './assets/capsule_logo.png'
import alternateSbIcon from './assets/different_sb_icon.png'
import whiteSb from './assets/white_sb_text.png'
import allieIcon from './assets/allie_logo_sep22.png'
import allieText from './assets/allie_text.png'
import onionIcon from './assets/onion.png'
import onionText from './assets/onion_text.png'
import bliveLogo from './assets/white_blive_logo.png'
import bliveText from './assets/blive_text_red.png'

class Home extends Component {
    render() {
        return (
            <div>
                <div className='section' style={{ backgroundColor: 'white' }}>
                    <BlogContainer />
                </div>
                <div className='section' style={{ backgroundColor: '#eee' }}>
                    <div id="projects-section" className="section" style={{ backgroundColor: '#eee' }}>
                        <SectionHeader title='Projects' />
                        <div className='projects-container'>
                            <ProjectCard
                                image={capsuleIcon}
                                textLogo={whiteCapsule}
                                slug='capsule'
                                description='A mobile application for tracking progress and meaningful life experiences. Add notes, milestones, pictures and other entries to daily capsules and easily follow your progress trajectories.'
                            />
                            <ProjectCard
                                image={alternateSbIcon}
                                textLogo={whiteSb}
                                slug='snowballot'
                                description='A 30-second poll creation Web app flexible enough to incorporate YouTube players, photos, and other embeddable media directly into each choice.'
                            />
                            <ProjectCard
                                image={allieIcon}
                                textLogo={allieText}
                                slug='allie'
                                description='A travel-hacking blog featuring tips on maximizing points and miles rewards for affordable international travel.'
                            />
                            <ProjectCard
                                image={onionIcon}
                                textLogo={onionText}
                                slug='theonion'
                                description='A satirical comedy outlet where I wrote headlines, articles, features and other content to keep the wheels of ad-based commerce rolling.'
                            />
                            <ProjectCard
                                image={bliveLogo}
                                textLogo={bliveText}
                                slug='blive'
                                description='A video management tool for OTT (over-the-top) TV applications. Organizes videos for Chromecast, Roku, FireTV and AppleTV in a platform-agnostic Web app.'
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home