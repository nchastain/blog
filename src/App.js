import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Project from './components/Project'
import Post from './components/Post'
import AboutPage from './components/AboutPage'
import Navbar from './components/Navbar'
import TagPage from './components/TagPage'
import white_personal_logo from './assets/White_Logo.png'
import black_personal_logo from './assets/Black_Logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
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
