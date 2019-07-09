import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PrimaryButton = styled.button`
    display: flex;
    color: #FFF;
    background-color: #FAA426;
    border-color: #FAA426;
    border-radius: 4px;
    font-weight: 600;
    font-size: 11px;
    padding: 5px 10px;
    height: 32px;
    line-height: 1.5;
    letter-spacing: .1rem;
    text-transform: uppercase;
    width: ${props => (props.fullWidth ? '100%' : 'initial')};
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    user-select: none;
    vertical-align: middle;
    :hover {        
        color: #FFF;
        background-color: #fcc112;
        border-color: #fcc112;
    }
    :focus { outline: none; }
    :disabled {
        opacity: .5;
        cursor: not-allowed;
        color: #393939;
    }
`

class Button extends Component {

    static propTypes = {
        children: PropTypes.node,
        handleClick: PropTypes.func,
        disabled: PropTypes.bool,
        fullWidth: PropTypes.bool
    }

    render() {
        const { children, handleClick, disabled } = this.props
        return (
            <PrimaryButton
                {...this.props}
                onClick={handleClick} 
                disabled={disabled}>
                {children}
            </PrimaryButton>
        )
    }
}

export default Button