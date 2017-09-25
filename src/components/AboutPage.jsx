import React, { Component } from 'react'
import BackLink from './BackLink'

class AboutPage extends Component {
    render() {
        return (
            <div className='page-container'>
                <BackLink />
                <div className='about-container'>
                    About
                </div>
            </div>
        )
    }
}

export default AboutPage