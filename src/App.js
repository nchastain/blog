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
import transparentCapsuleLogo from './assets/TransparentCapsuleLogo.png'
import bliveLogo from './assets/blive_logo.png'
import ProjectCard from './ProjectCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='section' style={{backgroundColor: 'rgb(117, 117, 169)'}}>
          <SectionHeader title='About' background='rgb(117, 117, 169)' color='white' />
          Blach blah blach, something goes ehre
        </div>
        <div className='section' style={{backgroundColor: 'white'}}>
          <BlogContainer />
        </div>
        <div className='section' style={{backgroundColor: '#eee'}}>
          <SectionHeader title='Projects' />
          <div className='projects-container'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
