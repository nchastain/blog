import React, { Component } from 'react'
import BlogEntry from './BlogEntry'
import SectionHeader from './SectionHeader'

class BlogContainer extends Component {
    render() {
        return (
            <div className='blog-container'>
                <SectionHeader title='Posts' background='white' color='rgb(25,25,112)' />
                <div className='blog-entries-container'>
                    <BlogEntry />
                    <BlogEntry />
                    <BlogEntry />
                    <BlogEntry />
                    <BlogEntry />
                </div>
            </div>
        )
    }
}

export default BlogContainer