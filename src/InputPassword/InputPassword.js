import React, { Component } from 'react'
import {
    element,
    func,
    oneOfType,
    string,
    object,
    bool
} from 'prop-types'
import UIIcon from '../UIIcon'
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
const PasswordWrapper = styled(InputWrapper)`
    svg {
        position: absolute;
        right: 9px;
        top: 5px;
        :hover { cursor: pointer; }
    }
`
class InputPassword extends Component {

    static propTypes = {
        /* Callback function calling with current value */
        onChange: func,
        /* Label for field */
        label: oneOfType([string, element]),
        /* Error message */
        error: string,
        /* Input placeholder */
        placeholder: string,
        /* Input name */
        name: string,
        /* Input custom styles */
        style: oneOfType([object, string]),
        /* AutoComplete */
        autoComplete: bool,
        /* Value */
        value: string,
        hint: string,
        className: string
    }

    state = {
        passwordFieldType: 'password'
    }
    
    togglePassword = () => {
        this.setState({
            passwordFieldType: this.state.passwordFieldType === 'password' ? 'input' : 'password'
        })
    }

    render() {
        const { 
            name, 
            label, 
            onChange, 
            error,
            placeholder,
            autoComplete,
            value,
            hint,
            className
        } = this.props

        const { passwordFieldType } = this.state
        return (
            <PasswordWrapper>
                {label ? <Label>{label}</Label> : null}
                <InputWrapper>
                    <Input
                        placeholder={placeholder}
                        type={passwordFieldType}
                        name={name}
                        onChange={onChange}
                        autoComplete={autoComplete}
                        value={value}
                    />
                    {passwordFieldType === 'password' ?
                        <UIIcon
                            type="eyeSlash"
                            size={20} 
                            onClick={this.togglePassword} />
                        :
                        <UIIcon 
                            type="eye"
                            size={20} 
                            onClick={this.togglePassword} />}
                </InputWrapper>
                {error || hint ? (
                    <HelpBlock className={className}>
                        {error ? <span className="error">{error}</span>  : null}
                        {hint ? <span className="hint">{hint}</span> : null}
                    </HelpBlock>
                ) : null}
            </PasswordWrapper>
        )
    }
}

export default InputPassword