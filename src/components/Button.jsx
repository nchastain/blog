import React, { Component } from 'react'
import classnames from 'classnames'

class Button extends Component {
    render() {
        const classes = {
            'button-hollow': true,
            'left': this.props.icon_position === 'left'
        }
        return (
            <div className={classnames(classes)}>
                {this.props.icon_position === 'left' && <div className='button-icon left'>{this.props.icon || '\u203A'}</div>}
                <div className='button-text'>{this.props.text}</div>
                {(this.props.icon_position === 'right' || !this.props.icon_position) && <div className='button-icon right'>{this.props.icon || '\u203A'}</div>}
            </div>
        )
    }
}

export default Button