import React, { Component } from 'react'
import {
    element,
    func,
    oneOf,
    oneOfType,
    number,
    string,
    object,
    bool
} from 'prop-types'
import styled from 'styled-components'

const InputWrapper = styled.div`
    position: relative;
    width: ${props => (props.fullWidth ? '100%' : 'initial')};
`
const Input = styled.input`
    font-size: 14px;
    width: 100%;
    padding: 0.375rem 0.75rem;
    border-radius: 3px;
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid rgb(228, 231, 234);

    :focus { outline: none; }
    :hover { -webkit-appearance: none; margin: 0; }
    &.error { border: 1px solid red; }

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    :-internal-autofill-selected {
        background: transparent;
        -webkit-box-shadow: 0 0 0 30px white inset;
    }
    
    :-webkit-autofill,
    :-webkit-autofill:hover, 
    :-webkit-autofill:focus {
        background: transparent;
        -webkit-box-shadow: 0 0 0 30px white inset;
    }

`
const Label = styled.label`
    pointer-events: none;
    transition: 0.3s ease all;
`
const HelpBlock = styled.div`
    display: block;
    margin-top: 4px;
    font-size: 12px;
    span { display: block; }
    &.error {
        color: #fff;
    }
    span.error {
        color: rgb(149, 14, 14);
    }
`

class InputText extends Component {

    static propTypes = {
        /* Field default value */
        value: oneOfType([string, number]),
        /* Callback function calling with current value */
        onChange: func,
        /* Label for field */
        label: oneOfType([string, element]),
        /* Error message */
        error: string,
        /* Hint message */
        hint: string,
        /** Type of input */
        type: oneOf(['email', 'number', 'password', 'search', 'text']),
        /* Input placeholder */
        placeholder: string,
        /* Input name */
        name: string,
        /* Input class */
        className: string,
        /* Input custom styles */
        style: oneOfType([object, string]),
        /**
         * Make input white
         */
        fullWidth: bool
    }

    static defaultProps = {
        type: 'text'
    }

    state = {
        inputFocused: false
    }

    render() {
        const { 
            type, 
            name, 
            label, 
            onChange, 
            className, 
            error,
            placeholder,
            hint,
            value,
            fullWidth
        } = this.props

        return (
            <InputWrapper >
                {label ? <Label>{label}</Label> : null}
                <Input
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    onChange={onChange}
                    value={value}
                />
                {error || hint ? (
                    <HelpBlock className={className}>
                        {error ? <span className="error">{error}</span>  : null}
                        {hint ? <span className="hint">{hint}</span> : null}
                    </HelpBlock>
                ) : null}
            </InputWrapper>
        )
    }
}

export default InputText