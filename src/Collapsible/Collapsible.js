import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UIIcon from '../UIIcon'
import styled from 'styled-components'


const CollapsibleWrapper = styled.div`
    color: #000;
    position: relative;
    background-color: #ECE3E3;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    width: ${props => (props.fullWidth ? '100%' : 'initial')};
    margin: 5px auto 0;
    @media only screen and (max-width: 1024px) {
        background-color: #480000;
        margin: 0px;
    }
`
const CollapsibleHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    
    background: #8F0D0D;
    padding: 4px 10px;
    border-radius: 5px 5px 0 0;
    
    &.closed { transition: all .5s ease-in-out;}
    .icons { padding-top: 0px; padding-bottom: 2px; color: #fff; }
    :hover { cursor: pointer; }
    
    @media only screen and (max-width: 1024px) {
        &.closed { border-left: 4px solid #E83E39; }
        background: #480000;
        padding: 8px 15px;
        border-radius: 0;
    }
`
const CollapsibleHeaderTitle = styled.h3`
    font-size: 14px; 
    margin:0;
    
    label {
        display: none;
        padding: 0 5px;
        margin-left: 10px;
        background: #F1AF12; 
        text-align: center;
        color: black; 
        font-size:13px;
        border-radius: 5px;
    }
    @media only screen and (max-width: 1024px){ 
        label { display: inline-block; }
    }
`
const CollapsibleContent = styled.div`
    display: block;
    &.false { display: block !important; }
    background: #ECE3E3;
    font-size: .8em;
    transition: all .5s ease-in-out;
    p { margin: 0 0 1em; }
    h2 {
        font-size: 1.1em;        
        line-height: 1.1em;
        margin: 8px 0;
    }
    &.false.closed { display: none !important; }
    transition: ease 600ms all;
    border-radius: 0 0 5px 5px;
    a:last-child span { border-bottom: none; }

    @media only screen and (max-width: 1024px) {
        margin-left: 3px;
        margin-right: 5px;
        display: none;
        &.true { display: block !important; }
    }
`

class Collapsible extends Component {

    static propTypes = {
        title: PropTypes.node,
        open: PropTypes.bool,
        children: PropTypes.node,
        fullWidth: PropTypes.bool,
        count: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }

    state = { open: this.props.open }

    toggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        
        const { title, children, fullWidth, count, icon } = this.props
        const { open } = this.state
        
        return (
            <CollapsibleWrapper fullWidth={fullWidth} >
                <CollapsibleHeader
                    open={open}
                    className={open ? 'closed' : ''} 
                    onClick={this.toggle}>
                        
                    { icon ? <UIIcon {...icon} /> : null }
                    <CollapsibleHeaderTitle>
                        {title}
                        <label>{count}</label>
                    </CollapsibleHeaderTitle>

                    <div className="icons">
                        {!open ? <UIIcon type="circleUpLight" /> : <UIIcon type="circleDownLight" />}
                    </div>
                </CollapsibleHeader>
                <CollapsibleContent className={`${open} ${!open ? 'closed' : ''}`}>
                    {children}
                </CollapsibleContent>
                
            </CollapsibleWrapper>
        )
    }
}


export default Collapsible