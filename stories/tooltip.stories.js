import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Tooltip from '../src/Tooltip'

storiesOf('Tooltip', module)
        .add('Tooltip', () => 
                <div style={{display:'flex', flexDirection:'column',width:50,margin:50, background:'red' }}>
                     <label>Hello</label>   
                     <Tooltip   text = '1234' tooltipText = {1234} position = 'top' />
                     <Tooltip   text = '12' tooltipText = '1ddddd2' position = 'right' />
                     <Tooltip   text = '12' tooltipText = '1gfdgfd2' position = 'top' />
                    <Tooltip   text = '12' tooltipText = '1235654' position = 'bottom' />
            
                </div>
            
            
            
            
        )
        


    