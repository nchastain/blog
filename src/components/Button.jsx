import React, { Component } from 'react'
import classnames from 'classnames'

class Button extends Component {
    render() {
        const styles = {
            backgroundColor: this.props.backgroundColor && this.props.backgroundColor,
            color: this.props.color && this.props.color,
            border: this.props.border ? `2px solid ${this.props.color}` : '0px',
        }
        const classes = {
            'button-hollow': true,
            'no-hover': this.props.no_hover,
            'left': this.props.icon_position === 'left'
        }
        return (
            <div className={classnames(classes)} style={styles}>
                {this.props.icon_position === 'left' && <div className='button-icon left'>{this.props.icon || '\u203A'}</div>}
                <div className='button-text'>{this.props.text}</div>
                {(this.props.icon_position === 'right' || !this.props.icon_position) && <div className='button-icon right'>{this.props.icon || '\u203A'}</div>}
            </div>
        )
    }
}

export default Button