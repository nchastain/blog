import React, { Component } from 'react'
import BlogEntry from './BlogEntry'

class BlogContainer extends Component {
    render() {
        return (
            <div className='blog-container'>
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