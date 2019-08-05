import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Collapsible from '../src/Collapsible'
import { withKnobs, object, boolean, number, text } from '@storybook/addon-knobs/react';

const icon = {
    type: `star`,
    size: 12
}

storiesOf('Collapsible', module)
        .addDecorator(withKnobs)
        .add('Collapse', () => 
            <Collapsible 
                open={boolean('open', false)}
                count={number('count', 2)}
                title={text('title', 'Collapsible Titsle')} >
                <div>
                    {text('content', 'Sample Content')}
                </div>
            </Collapsible>
        )
        .add('with Icon', () => 
            <Collapsible
                icon={object('icon', {...icon})}
                open={boolean('open', false)}
                count={number('count', 2)}
                title={text('title', 'Collapsible Titsle')} >
                <div>
                    {text('content', 'Sample Content')}
                </div>
            </Collapsible>
        )
