import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BackdropWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
`

export default class Backdrop extends Component {
    
    static propTypes = {
        handleClick: PropTypes.func.isRequired
    }

    render() {
        const { handleClick } = this.props
        return <BackdropWrapper onClick={handleClick} />
    }
}
