import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Tooltip from '../src/Tooltip'

storiesOf('Tooltip', module)
        .add('Tooltip', () => 
                <div style={{display:'flex', flexDirection:'column',justifyContent:'space-between',alignItems:'center',height:300 }}>
                     <label>Hello</label>   
                     <Tooltip   text = '12' tooltipText = '1222222eeeeeeeeeeeeeeeeeeeee' position = 'right' />
                     <Tooltip   text = '12' tooltipText = '12' position = 'left' />
                     <Tooltip   text = '12' tooltipText = '1gfdgfd2' position = 'top' />
                    <Tooltip   text = '12' tooltipText = '1235654' position = 'bottom' />
            
                </div>
            
            
            
            
        )
        


    