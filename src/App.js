import React, { Component } from 'react'
import './App.css'
import Grid from './Grid'
import GridItem from './GridItem'
import BlogContainer from './BlogContainer'
import Header from './Header'
import capsuleLogo from './assets/whitelogo.png'
import whiteCapsule from './assets/white_capsule.png'
import capsuleIcon from './assets/capsule_logo.png'
import snowballotLogo from './assets/snowballot_logo_light.png'
import transparentCapsuleLogo from './assets/TransparentCapsuleLogo.png'
import bliveLogo from './assets/blive_logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BlogContainer />
        <Grid backgroundColor='#a083c4'>
          <GridItem color='#DDC6FA'>
            <img src={transparentCapsuleLogo} height='120px' />
            <div className='project-info'>
              <div className='project-title'>
                <img src={whiteCapsule} width='240px' />
              </div>
            </div>
          </GridItem>
        </Grid>
        <Grid backgroundColor='#4267b2'>
          <GridItem color='white'>
            <img src={snowballotLogo} height='120px' />
            <div className='project-info'>
              <div className='project-title' id='snowballot-title'>Snowballot</div>
            </div>
          </GridItem>
        </Grid>
        <Grid backgroundColor='rgba(170, 39, 45, 1)'>
          <GridItem color='white'>
            <img src={bliveLogo} height='70px' />
            <div className='project-info'>
              <div className='project-title'>OTT Manager</div>
            </div>
          </GridItem>
        </Grid>
      </div>
    );
  }
}

export default App;
