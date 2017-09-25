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
            <div className='blog-entry'>
                <Link to={`/posts/${post.sys.id}`} className='blog-entry-title-block'>
                    <div className='blog-entry-title'>
                        <div>{post.fields.title}</div>
                        <Button
                            text='read'
                            backgroundColor='transparent'
                            color='rgba(25,25,112,1)'
                            no_border={true}
                        />
                    </div>
                    <div className='blog-entry-description'>
                        {post.fields.lede}
                        <span className='date-label'>{moment(post.sys.created_at).format('MM/DD/YYYY')}</span>
                    </div>
                </Link>
                <TagContainer tags={post.fields.tags || []} />
            </div>
        )
    }
}

export default PostSnippet