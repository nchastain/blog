import React, { Component } from 'react'
import Tag from './Tag'

class TagContainer extends Component {
    render() {
        return (
            <div className='post-tag-container'>
                {this.props.tags.map(tag => <Tag key={tag} tag={tag} />)}
            </div>
        )
    }
}

export default TagContainer