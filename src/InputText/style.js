import styled from 'styled-components'

export const InputWrapper = styled.div`
    position: relative;
    max-width: 170px;
`
export const Input = styled.input`
    font-size: 13px;
    width: 100%;
    padding: 10px;
    border-radius: 3px;
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    height: 36px;
    border: 1px solid black;

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
export const Label = styled.label`
    pointer-events: none;
    transition: 0.3s ease all;
`
export const HelpBlock = styled.div`
    display: block;
    margin-bottom: 10px;
    font-size: 12px;
    &.error {
        color: ${props => props.theme.colors.white};
    }
    span.error {
        color: rgb(149, 14, 14);
    }
`