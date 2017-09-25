import React, { Component } from 'react'
import FA from 'react-fontawesome'
import { Link } from 'react-router-dom'

class Tag extends Component {
    render() {
        return (
            <Link to={`/tags/${this.props.tag}`} className='post-tag'>
                <FA className='fa' name='tag' />
                <div>{this.props.tag}</div>
            </Link>
        )
    }
}

export default Tag