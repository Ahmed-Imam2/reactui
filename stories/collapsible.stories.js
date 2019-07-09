import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Collapsible from '../src/Collapsible'

storiesOf('Collapsible', module)
        .add('Collapse', () => 
            <Collapsible 
                open={false}
                count={2}
                title="Collapsible Titsle" >
                <div>
                    asdasss
                </div>
            </Collapsible>
        )
