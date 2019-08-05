import React, { Component } from 'react'
import { number, oneOf } from 'prop-types'
import Icon from 'react-icon-base'
import Flags from './Flags'

class FlagIcon extends Component {
    static propTypes = {
        size: number,
        type: oneOf(Flags.map(item => item.name)).isRequired
    }

    VIEWBOX = type =>  Flags.filter(item => item.name === type)[0].viewBox   
    renderPaths = type=>  Flags.filter(item => item.name === type )[0].path

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

export default FlagIcon