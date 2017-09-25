import React, { Component } from 'react'

class GridItem extends Component {
    render() {
        const itemStyles = {
            color: this.props.color || 'black'
        }
        return (
            <div className='grid-item' style={itemStyles} >
                {this.props.children}
            </div>
        )
    }
}

export default GridItem