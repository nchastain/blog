import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from './SectionHeader'
import MediumIcon from '.././assets/medium.png'
import FacebookLogo from '.././assets/facebook.png'
import GithubLogo from '.././assets/github.png'
import TwitterLogo from '.././assets/twitter.png'
import EmailIcon from '.././assets/mail.png'
import YouTubeIcon from '.././assets/youtube.png'
import Button from './Button'

class AboutSnippet extends Component {
    render() {
        return (
            <div className='section about-section'>
                <SectionHeader title='About' background='rgba(0,0,0,0)' color='white' />
                <div className='intro-container'>
                    <div className='intro-text'>
                        <div>I am a product manager living in Brooklyn. My parents named me after this Web site.</div>
                        <Link to='/about'>
                            <Button
                                text='More'
                                no_border={true}
                                no_hover={true}
                            />
                        </Link>
                    </div>
                    <div id="social-links-container">
                        <img className="icon" id="medium" alt='Medium icon' src={MediumIcon} />
                        <img className="icon" id="facebook" alt='Facebook icon' src={FacebookLogo} />
                        <img className="icon" id="github" alt='Github icon' src={GithubLogo} />
                        <img className="icon" id="twitter" alt='Twitter icon' src={TwitterLogo} />
                        <img className="icon" id="email" alt='e-mail icon' src={EmailIcon} />
                        <img className="icon" id="youtube" alt='YouTube icon' src={YouTubeIcon} />
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutSnippet