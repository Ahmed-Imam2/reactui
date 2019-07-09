import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SelectWrapper = styled.div`
    position: relative;
`
const Select = styled.select`
    -webkit-appearance: none;
    appearance: none;    
    line-height: 21px;
    outline: 0;
    background-color: transparent;
    border: 0;
    border-radius: 0;
    border: 1px solid rgb(228, 231, 234);
    border-radius: .5em;
    color: ${props => (props.white ? '#fff' : '#000')};
    padding: 0.375rem 0.75rem;
    width: 100%;
    font-size: 14px;
    z-index: 2;
    cursor: pointer;
    box-sizing: border-box;

    :hover {
        border-color: #888;
    }
    ::-ms-expand {
        display: none;
    }
    @media (max-width: 1024px) {
        /* Necessary to prevent browsers like Mobile Safari from zooming in on text
        fields when font-size is less than 16px. */
        font-size: 16px;
    }

    option {
        color: #000;
    }

    option[disabled] {
        display: none;
    }
`
const Label = styled.label`
    pointer-events: none;
    transition: 0.3s ease all;
`
class InputSelect extends Component {

    static propTypes = {
        name: PropTypes.string,
        value: PropTypes.string,
        handleChange: PropTypes.func,
        options: PropTypes.array,
        placeholder: PropTypes.string,
        className: PropTypes.string,
        label: PropTypes.string
    }

    render() {
        const { 
            name, 
            value, 
            handleChange, 
            options, 
            placeholder, 
            className,
            style,
            label
        } = this.props

        return (
            <SelectWrapper>
                <Label>{label}</Label>
                <Select 
                    style={style}
                    className={className}
                    name={name} 
                    onChange={handleChange} 
                    value={value}>
                    {placeholder ? 
                        <option disabled>
                            {placeholder}
                        </option>
                    : null}

                    {options && options.map( (option,idx) =>{
                        return (
                            <option
                                key={`SelectComponent_${idx}${option.name}`} 
                                value={option.value}>
                                {option.name}
                            </option>
                        )
                    })}
                </Select>
            </SelectWrapper>
        )
    }
}

export default InputSelect