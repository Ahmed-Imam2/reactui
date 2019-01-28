import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ParagraphWrapper = styled.p`
  line-height: 1.5;
  font-weight: ${props => (props.light ? '300' : '500')};
  font-size: ${props =>
    typeof props.size === 'number' ? `${props.size}px` : props.size};
  color: ${props => (props.color ? `#${props.color}` : '#000')};
  text-align: ${props => props.align};
  ${props => props.theme.paragraph && props.theme.paragraph.defaultStyle};
`

export default class Paragraph extends Component {
    static propTypes = {
        /**
         * Content of the paragraph
         */
        children: PropTypes.node.isRequired,
        /**
         * Font size in px, or a CSS value to use.
         */
        size: PropTypes.oneOfType([ PropTypes.number, PropTypes.string]),
        /**
         * Enables light text
         */
        light: PropTypes.bool,
        /**
         * Text Color
         */
        color: PropTypes.oneOfType([ PropTypes.number, PropTypes.string]),
        /**
         * Sets text alignment.
         */
        align: PropTypes.string
    }

    static defaultProps = {
        size: 'inherit',
        align: 'inherit'
    }

    render() {
        const { children, ...props } = this.props
        return <ParagraphWrapper {...props}>{children}</ParagraphWrapper>
    }
}