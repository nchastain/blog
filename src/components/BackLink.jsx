import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

class BackLink extends Component {
    render() {
        return (
            <Link to='/' className='back-link'>
                <Button
                    text='Go home'
                    color='rgba(25,25,112,1)'
                    icon_position='left'
                    icon={'\u2039'}
                    no_border={false}
                />
            </Link>
        )
    }
}

export default BackLink