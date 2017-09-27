import React, { Component } from 'react'
import blue_personal_logo from '.././assets/blue_logo.png'
import { Link } from 'react-router-dom'
import HamburgerMenu from 'react-hamburger-menu'

class Navbar extends Component {
    constructor() {
        super()
        this.state = {hamburgerOpen: false}
    }

    openMenu() {
        this.setState({hamburgerOpen: !this.state.hamburgerOpen})
    }

    render() {
        const links = () => {
            return (
                <div className='nav-links'>
                    <Link to='/about' className='link'>About</Link>
                    <Link to='/#posts' className='link'>Posts</Link>
                    <Link to='/#projects' className='link'>Projects</Link>
                    <Link to='/#contact' className='link'>Contact</Link>
                </div>
            )
        }
        return (
            <div className='nav-bar'>
                <div className='link'>
                    <img src={blue_personal_logo} width={'40px'} />
                    <Link to='/' className='name'>Nate&nbsp;Chastain</Link>
                </div>
                <span className='hamburger'>
                    <HamburgerMenu
                        isOpen={this.state.hamburgerOpen}
                        menuClicked={() => this.openMenu()}
                        height='20'
                        color='rgb(186, 186, 212)'
                    />
                    {this.state.hamburgerOpen && <div className='hamburger-link-container'>
                        {links()}
                    </div>}
                </span>
                <div className='link-container'>
                    {links()}
                </div>
            </div>
        )
    }
}

export default Navbar