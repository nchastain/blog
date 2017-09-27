import React, { Component } from 'react'

class SectionHeader extends Component {
    render() {
        const color = 'rgb(186, 186, 212)'
        return (
            <div className='section-header-container' style={{backgroundColor: this.props.background}}>
                <div className='section-header-dash left' style={{borderBottom: `1px solid ${color}`}} />
                <div className='section-header' style={{color: this.props.color}}>
                    {this.props.title.toUpperCase()}
                </div>
                <div className='section-header-dash right' style={{borderBottom: `1px solid ${color}`}} />
            </div>
        )
    }
}

export default SectionHeader