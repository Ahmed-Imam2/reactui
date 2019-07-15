import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import UIIcon from '../UIIcon'
import Backdrop from '../Backdrop'

const Wrapper = styled.div`
    display: flex;
    position: relative;
    @media only screen and (max-width: 415px){
       justify-content:flex-start;    
    }

    :focus {
        box-shadow: 0 0 0 0.2rem rgba(175, 181, 186, 0.5);
        border: 0
    }
    :hover {
        cursor: pointer;
    }
`
const DefaultDisplayWrapper = styled.div`
    background: #9a2d2d;
    width:100%;
    padding: 3px 0px 3px 10px;
    border-radius: 2px;
    display:flex;
    justify-content: flex-end;
    flex-direction: row;
    position: relative;
    svg,label {
        color:white;
    }
`
const DropdownContent = styled.div`
    position: absolute;
    right:0px;
    top: 30px;
`
const Arrow = styled.div`
    width: 20px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 84%;
    svg {
        margin-left: 0px !important;
        margin-top: 0px !important;
    }
`
const Title = styled.span`
    position: relative;
    margin-right: 25px;
    align-items: center;
    display: flex;
    
`

class Dropdown extends Component {

    static propTypes = {
        children: PropTypes.node,
        title: PropTypes.node,
        isOpen: PropTypes.bool
    }

    state = {
        isOpen: false
    }

    toggleDropdown = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    handleBackdrop = () => {
        this.setState({ isOpen: false })
    }

    render() {
        const { isOpen } = this.state
        const { children, title } = this.props
        let backdrop
        if (isOpen) backdrop = <Backdrop handleClick={this.handleBackdrop} />
        
        return (
            <Wrapper onClick={this.toggleDropdown} className="dropdown-wrapper">
                <DefaultDisplayWrapper className="dropdown-header">
                    <Title className="dropdown-title">{title}</Title>
                    <Arrow className="dropdown-arrows">
                        {isOpen 
                        ? <UIIcon size={10} type="carretCircleUp" /> 
                        : <UIIcon size={10} type="carretDown" />}
                    </Arrow>
                </DefaultDisplayWrapper>
                {isOpen &&
                    <DropdownContent className="dropdown-content">
                        {children}
                    </DropdownContent>
                }
                {backdrop}
            </Wrapper>
        )
    }
}

export default Dropdown