import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Project from './components/Project'
import Post from './components/Post'
import AboutPage from './components/AboutPage'
import TagPage from './components/TagPage'
import white_personal_logo from './assets/White_Logo.png'
import black_personal_logo from './assets/Black_Logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='nav-bar'>
          <div className='link'>
              <img src={white_personal_logo} width={'40px'} />
          </div>
          <div className='link-container'>
              <div className='link'>About</div>
              <div className='link'>Posts</div>
              <div className='link'>Projects</div>
              <div className='link'>Contact</div>
          </div>
        </div>
        <main>
          <Route exact path='/' component={Home} />
          <Route path='/projects/:slug' component={Project} />
          <Route path='/posts/:post_id' component={Post} />
          <Route path='/tags/:tag_id' component={TagPage} />
          <Route path='/about' component={AboutPage} />
        </main>
      </div>
    );
  }
}

export default App;
