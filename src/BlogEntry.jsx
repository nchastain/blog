import React, { Component } from 'react'

class BlogEntry extends Component {
    render() {
        return (
            <div className='blog-entry'>
                <img src='https://unsplash.it/100/100/?random' className='blog-entry-thumbnail' />
                <div className='blog-entry-title-block'>
                    <div className='blog-entry-title'>Some blog post</div>
                    <div className='blog-entry-description'>Some blog post description about the blog post</div>
                    
                </div>
            </div>
        )
    }
}

export default BlogEntry