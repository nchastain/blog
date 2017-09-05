import React, { Component } from 'react'
import BlogEntry from './BlogEntry'
import SectionHeader from './SectionHeader'

class BlogContainer extends Component {
    render() {
        return (
            <div className='blog-container'>
                <SectionHeader title='Posts' />
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