import React, { Component } from 'react'
import BackLink from './BackLink'
import axios from 'axios'


class Post extends Component {
    constructor() {
        super()
        this.state = {post: {}}
    }

    componentWillMount() {
        axios.get(`https://cdn.contentful.com/spaces/bekml1p7o6ns/entries/${this.props.match.params.post_id}?access_token=435ca1e0994eecafa8a195d99b0ef15749377826182bc31c9af6d1efe4cf261b`)
        .then(response => {
            console.log(response.data)
            this.setState({post: response.data})
        })
    }

    render() {
        if (Object.keys(this.state.post).length === 0) return null
        return (
            <div>
                <div className='page-container'>
                    <BackLink />
                    <div className='post-container'>
                        <div className='post-title'>{this.state.post.fields.title}</div>
                        <div className='pullout-description'>{this.state.post.fields.topParagraph}</div>
                    </div>
                </div>
                <div className='post-body'>
                    {this.state.post.fields.body}
                </div>
            </div>
        )
    }
}

export default Post