import React, { Component } from 'react'
import BlogEntry from './BlogEntry'
import SectionHeader from './SectionHeader'

class BlogContainer extends Component {
    render() {
        return (
            <div className='blog-container'>
                <SectionHeader title='Posts' background='white' color='rgb(25,25,112)' />
                <BlogEntry />
                <BlogEntry />
                <BlogEntry />
                <BlogEntry />
                <BlogEntry />
            </div>
        )
    }
}

export default BlogContainer