import React, { Component } from 'react'
import { number, oneOf } from 'prop-types'
import Icon from 'react-icon-base'
import Icons from './Icons'

class UIIcon extends Component {

    static propTypes = {
        size: number,
        type: oneOf(Icons.map(item => item.name)).isRequired
    }

    VIEWBOX = type =>  Icons.filter(item => item.name === type)[0].viewBox   
    
    renderPaths = type=>  Icons.filter(item => item.name === type )[0].path
     
    render() {
        const { type, ...props } = this.props
        const viewBox = this.VIEWBOX(type)
        return (
            <Icon viewBox={viewBox} {...props}>
                {this.renderPaths(type)}
            </Icon>
        )
    }
}

export default UIIcon