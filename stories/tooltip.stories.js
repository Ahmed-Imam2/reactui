import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Tooltip from '../src/Tooltip'

storiesOf('Tooltip', module)
        .add('Tooltip', () => 
                <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                    <Tooltip text = 'Right' tooltipText = 'Hello, I am your right tooltip' position = 'right' />
                    <Tooltip  style={{marginTop:50}} text = 'Top' tooltipText = 'agf' position = 'bottom' />
                </div>
            
            
            
            
        )
        


    