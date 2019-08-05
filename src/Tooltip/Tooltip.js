
import React from 'react'
import Tooltip from './style'


export default (props) => {
    const {position, text , tooltipText, style} = props
    return (
        <Tooltip style={style} position ={position}>
              <span className= 'tooltip'>{text}
                    <span className= 'tooltiptext'>{tooltipText}</span>
              </span>
             
        </Tooltip>
    )
}
