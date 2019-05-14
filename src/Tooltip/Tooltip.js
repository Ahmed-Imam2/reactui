
import React from 'react'
import {
    element,
    func,
    oneOfType,
    string,
    object
} from 'prop-types'
import styled from 'styled-components'
const Tooltip = styled.div`
    label{
        color: #950e0e;
        font-weight:bold;    
    }
    position:absolute;
    background:white;
    width:120px;
    margin-top:-50px;
    margin-left:35px;
    padding:5px;
    border-radius:3px;
 `
const Arrow = styled.div`
    margin-top:5px;
    margin-left:80px;
    width: 0; 
    height: 0; 
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    position:absolute;
    border-top: 10px solid #fff;
`

export default (props) => {
    return (
        <Tooltip style={{ display: props.show ? props.show : 'none' }}>
                <label>{props.message}</label>
                <Arrow style={{ display: props.show ? props.show : 'none' }}/>
        </Tooltip>
    )
}
