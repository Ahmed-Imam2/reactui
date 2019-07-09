import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import UIIcon from '../UIIcon'

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

    ${props => (props.iconPosition === 'left'
        ? `svg {
            margin-top: 2px;
            margin-right: 5px
        }`
        : `svg {
            margin-top: 2px;
            margin-right: 5px
        }`
    )}
    ${props => (props.iconPosition === 'right'
        ? `flex-direction: row-reverse;
            svg {
                margin-top: 2px;
                margin-left: 5px
            }`
        : `svg {
            margin-top: 2px;
            margin-right: 5px
        }`
    )}
`

class ButtonIcon extends Component {

    static propTypes = {
        children: PropTypes.node,
        handleClick: PropTypes.func,
        disabled: PropTypes.bool,
        fullWidth: PropTypes.bool,
        icon: PropTypes.string,
        iconPosition: PropTypes.string
    }

    render() {
        const { children, handleClick, disabled, icon } = this.props
        return (
            <PrimaryButton
                {...this.props}
                onClick={handleClick} 
                disabled={disabled}>
                <UIIcon type={icon} />
                {children}
            </PrimaryButton>
        )
    }
}

export default ButtonIcon