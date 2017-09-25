import React, { Component } from 'react'
import BlogContainer from './BlogContainer'
import ProjectsContainer from './ProjectsContainer'
import AboutSnippet from './AboutSnippet'
import axios from 'axios'

class Home extends Component {
    constructor() {
        super()
        this.state = {posts: []}
    }

    componentWillMount() {
        axios.get(`https://cdn.contentful.com/spaces/bekml1p7o6ns/entries?access_token=435ca1e0994eecafa8a195d99b0ef15749377826182bc31c9af6d1efe4cf261b`)
        .then(response => {
            this.setState({posts: response.data.items})
        })
    }

    render() {
        return (
            <div>
                <AboutSnippet />
                <BlogContainer section_title='Posts' posts={this.state.posts || []} />
                <ProjectsContainer />
            </div>
        )
    }
}

export default Home