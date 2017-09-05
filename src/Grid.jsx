import React, { Component } from 'react'
import classnames from 'classnames'

class Grid extends Component {
    render() {
        const gridClasses = {
            grid: true,
        }
        const gridStyles = {
            backgroundColor: this.props.backgroundColor || 'white'
        }
        return (
            <div className={classnames(gridClasses)} style={gridStyles}>
                {this.props.children}
            </div>
        )
    }
}

export default Grid