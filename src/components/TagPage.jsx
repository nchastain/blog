import React, { Component } from 'react'
import BlogContainer from './BlogContainer'
import BackLink from './BackLink'
import axios from 'axios'

class TagPage extends Component {
    
    constructor() {
        super()
        this.state = {taggedPosts: []}
    }

    componentWillMount() {
        axios.get(`https://cdn.contentful.com/spaces/bekml1p7o6ns/entries?access_token=435ca1e0994eecafa8a195d99b0ef15749377826182bc31c9af6d1efe4cf261b&content_type=post&fields.tags[in]=${this.props.match.params.tag_id}`)
        .then(response => {
            this.setState({tagged_posts: response.data.items})
        })
    }

    render() {
        return (
            <div>
                <BackLink />
                <BlogContainer section_title={`Posts Tagged "${this.props.match.params.tag_id}"`} posts={this.state.tagged_posts || []} />
            </div>
        )
    }
}

export default TagPage