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
import snowballotLogo from './assets/snowballot_logo_light.png'
import snowballotLogo2 from './assets/SnowballotLogo819.png'
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
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '20px', paddingRight: '20px'}}>
              <div className='intro-text'>I am a product manager living in Brooklyn. My parents named me after this Web site.</div>
              <div id="top-header-inner">
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
              <ProjectCard />
              <ProjectCard/>
              <ProjectCard />
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
