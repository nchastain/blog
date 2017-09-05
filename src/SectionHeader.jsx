import React, { Component } from 'react'

class SectionHeader extends Component {
    render() {
        return (
            <div className='section-header'>
                <div className='section-header-dash' />
                <div className='section-header-title'>{this.props.title}</div>
                <div className='section-header-dash' />
            </div>
        )
    }
}

export default SectionHeader