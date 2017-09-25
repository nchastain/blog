import React, { Component } from 'react'
import PostSnippet from './PostSnippet'
import SectionHeader from './SectionHeader'


class BlogContainer extends Component {
    render() {
        return (
            <div className='blog-container section'>
                <SectionHeader title={this.props.section_title} background='white' color='rgb(25,25,112)' />
                <div className='blog-entries-container'>
                    {this.props.posts.map(post => <PostSnippet key={post.sys.id} post={post} />)}
                </div>
            </div>
        )
    }
}

export default BlogContainer