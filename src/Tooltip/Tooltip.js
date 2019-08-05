
import React from 'react'
import Tooltip from './style'


export default (props) => {
    const {position, text , tooltipText} = props
    const tooltipWidth = tooltipText.length <=4 ? tooltipText.length * 15 : tooltipText.length * 9

    return (
        <Tooltip width={tooltipWidth} position ={position}>
            
              <span className= 'tooltip'>{text}
                    <span className= 'tooltiptext'>{tooltipText}</span>
              </span>
             
        </Tooltip>
    )
}
