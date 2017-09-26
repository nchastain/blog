import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import TagContainer from './TagContainer'
import moment from 'moment'

class PostSnippet extends Component {
    render() {
        const post = this.props.post
        console.log(post)
        return (
            <div className='outer-blog-entry'>
                <img src='https://unsplash.it/1190/200/?random' className='blog-entry-image' />
                <div className='blog-entry'>
                    <Link to={`/posts/${post.sys.id}`} className='blog-entry-title-block'>
                        <div className='blog-entry-title'>
                            <div>{post.fields.title}</div>
                            <span className='date-label'>{moment(post.sys.created_at).format('MM/DD/YYYY')}</span>
                        </div>
                        <div className='blog-entry-description'>
                            {post.fields.lede}
                        </div>
                    </Link>
                    <div className='blog-info-container'>
                        <Button
                            text='read'
                            backgroundColor='transparent'
                            color='rgba(25,25,112,1)'
                            border={true}
                        />
                        <TagContainer tags={post.fields.tags || []} />
                    </div>
                </div>
            </div>
        )
    }
}

export default PostSnippet