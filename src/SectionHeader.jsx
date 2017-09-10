import React, { Component } from 'react'

class SectionHeader extends Component {
    render() {
        return (
            <div className='section-header-container' style={{backgroundColor: this.props.background}}>
                <div className='section-header' style={{color: this.props.color}}>{this.props.title.toUpperCase()}</div>
            </div>
        )
    }
}

export default SectionHeader