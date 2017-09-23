import React, { Component } from 'react'
import './App.css'
import Grid from './Grid'
import GridItem from './GridItem'
import BlogContainer from './BlogContainer'
import Header from './Header'
import SectionHeader from './SectionHeader'
import capsuleLogo from './assets/whitelogo.png'
import whiteCapsule from './assets/white_capsule.png'
import capsuleIcon from './assets/capsule_logo.png'
import sbIcon from './assets/sb_logo.png'
import alternateSbIcon from './assets/different_sb_icon.png'
import whiteSb from './assets/white_sb_text.png'
import snowballotLogo from './assets/snowballot_logo_light.png'
import snowballotLogo2 from './assets/SnowballotLogo819.png'
import allieIcon from './assets/allie_logo_sep22.png'
import allieText from './assets/allie_text.png'
import onionIcon from './assets/onion.png'
import onionText from './assets/onion_text.png'
import MediumIcon from './assets/medium.png'
import FacebookLogo from './assets/facebook.png'
import GithubLogo from './assets/github.png'
import TwitterLogo from './assets/twitter.png'
import EmailIcon from './assets/mail.png'
import YouTubeIcon from './assets/youtube.png'
import transparentCapsuleLogo from './assets/TransparentCapsuleLogo.png'
import bliveLogo from './assets/blive_logo.png'
import ProjectCard from './ProjectCard'
import Facebook from './assets/facebook-logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='section about-section'>
          <SectionHeader title='About' background='rgba(0,0,0,0)' color='white' />
          <div className='intro-container'>
            <div className='intro-text'>I am a product manager living in Brooklyn. <span id='second-line'>My parents named me after this Web site.</span></div>
            <div id="social-links-container">
              <img className="icon" id="medium" src={MediumIcon} />
              <img className="icon" id="facebook" src={FacebookLogo} />
              <img className="icon" id="github" src={GithubLogo} />
              <img className="icon" id="twitter" src={TwitterLogo} />
              <img className="icon" id="email" src={EmailIcon} />
              <img className="icon" id="youtube" src={YouTubeIcon} />
            </div>
          </div>
        </div>
        <div className='section' style={{backgroundColor: 'white'}}>
          <BlogContainer />
        </div>
        <div className='section' style={{backgroundColor: '#eee'}}>
          <div id="projects-section" className="section" style={{backgroundColor: '#eee', marginTop: '20px'}}>
            <SectionHeader title='Projects' />
            <div className='projects-container'>
              <ProjectCard
                image={capsuleIcon}
                textLogo={whiteCapsule} 
              />
              <ProjectCard 
                image={alternateSbIcon}
                textLogo={whiteSb}
              />
              <ProjectCard
                image={allieIcon}
                textLogo={allieText}
              />
              <ProjectCard 
                image={onionIcon}
                textLogo={onionText}
              />
              <ProjectCard />
              <ProjectCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
