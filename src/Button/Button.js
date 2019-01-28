import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types';


export default class Button extends Component {
    static propTypes = {
        /**
         * Anything wrapped by Button
         */
        children: PropTypes.node.isRequired,
        /**
         * Disable button
         */
        disabled: PropTypes.bool,
        /**
         * Button width
         */
        fullWidth: PropTypes.bool,
        /**
         * onclick callback
         */
        onClick: PropTypes.func,
    }
    render() {
        const { children, disabled, ...props } = this.props

        return (
            <ButtonWrapper {...this.props} disabled={disabled}>
                {children}
            </ButtonWrapper>
        )
    }
}

const getPadding = props => {
    if (props.size) {
      return props.size ? '0.25rem 0.5rem' : '0.375rem 0.75rem'
    }
    return props.size ? '0.25rem 0.5rem' : '0.375rem 0.75rem'
}
  
const defaultDisabledStyle = props => {
    const disabledStyle = css`
    color: #7d7d7d;
    cursor: not-allowed;`
    console.log(props.disabled,'')
    if(props.disabled) {
        return props.disabled ? disabledStyle : ''
    }
}

const ButtonWrapper  = styled.button`
    color: #fff;
    background-color: #480000;
    border: 1px solid #480000;
    border-radius: 3px;
    box-sizing: border-box;

    align-items: center;
    display: inline-flex;
    justify-content: center;
    
    margin: 0 3px;
    width: ${props => (props.fullWidth ? '100%' : 'initial')};
    
    cursor: pointer;
    font-size: 0.76563rem;
    font-weight: 700;
    line-height: 1.5;

    outline: 0;
    text-align: center;
    text-decoration: none;
    user-select: none;
    vertical-align: middle;

    padding: ${getPadding}

    &:disabled {
        ${defaultDisabledStyle};
    }

    &:focus {
        box-shadow: 0 0 0 0.1rem rgba(101, 2, 2, 0.5);
    }

    transition: color 0.15s ease-in-out, 
                background-color 0.15s ease-in-out, 
                border-color 0.15s ease-in-out, 
                box-shadow 0.15s ease-in-out;
`