import React, { Component } from 'react'
import {
    element,
    func,
    oneOfType,
    string,
    object
} from 'prop-types'
import { 
    InputWrapper,
    Input,
    Label,
    HelpBlock
} from '../InputText/style'
import StaticIcons from '../StaticIcons'

import styled from 'styled-components'

const PasswordWrapper = styled(InputWrapper)`
    svg {
        position: absolute;
        right: 9px;
        top: 5px;
        :hover { cursor: pointer; }
    }
`
export default class InputPassword extends Component {

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
        /* Input class */
        className: string,
        /* Input custom styles */
        style: oneOfType([object, string]),
        /* AutoComplete */
        autoComplete: string
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
            className, 
            error,
            style,
            placeholder,
            autoComplete 
        } = this.props
        
        const { passwordFieldType } = this.state
        return (
            <PasswordWrapper>
                <Label>{label}</Label>
                <InputWrapper>
                    <Input
                        placeholder={placeholder}
                        style={style}
                        type={passwordFieldType}
                        name={name}
                        onChange={onChange}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        className={className}
                        autoComplete={autoComplete}
                    />
                    {passwordFieldType === 'password' ?
                        <StaticIcons
                            type="eyeSlash"
                            style={{paddingBottom:11,paddingLeft:10}}
                            size={23} 
                            onClick={this.togglePassword} />
                        :
                        <StaticIcons 
                            type="eye"
                            style={{paddingBottom:11,paddingLeft:10}}
                            size={23} 
                            onClick={this.togglePassword} />
                    }
                </InputWrapper>
                {error ? (
                    <HelpBlock className={className}>
                        {error ? error  : null}
                    </HelpBlock>
                ) : null}
            </PasswordWrapper>
        )
    }
}