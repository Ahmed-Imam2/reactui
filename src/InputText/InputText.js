import React, { Component } from 'react'
import {
    element,
    func,
    oneOf,
    oneOfType,
    number,
    string,
    object
} from 'prop-types'
import {
    InputWrapper,
    Input,
    Label,
    HelpBlock
} from './style'

export default class InputText extends Component {

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
        /* Input name */
        autoComplete: string
    }

    static defaultProps = {
        type: 'text'
    }

    state = {
        inputFocused: false
    }

    onFocus = e => {
        this.setState({ inputFocused: true })

        if (this.props && this.props.onFocus)
            this.props.onFocus()
    }

    onBlur = e => {
        if(e.target.value === '')
        this.setState({inputFocused: !this.state.inputFocused })   
    }

    onKeyPress = (event) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
            if (/\+|-/.test(keyValue))
            event.preventDefault();
    }

    render() {
        const { 
            type, 
            name, 
            label, 
            onChange, 
            className, 
            error,
            style,
            placeholder,
            autoComplete,
            hint
        } = this.props

        return (
            <InputWrapper>
                <Label>{label}</Label>
                <Input
                    placeholder={placeholder}
                    style={style}
                    type={type}
                    name={name}
                    autoComplete={autoComplete}
                    onChange={onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    className={className}
                    onKeyPress={(type==='number') ? this.onKeyPress : null}
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