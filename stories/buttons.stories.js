import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

/** Button Component */
import Button from '../src/Button'
/** ButtonIcon Component */
import ButtonIcon from '../src/ButtonIcon'

storiesOf('Buttons', module)
		.add('Normal Button', () => 
		<Button handleClick={action('clicked')} fullWidth={false}>
			Click Me
		</Button>)
		.add('Disabled Button ', () => 
		<Button handleClick={action('clicked')} disabled={true} fullWidth={false}>
			Click Me
		</Button>)
		
storiesOf('Buttons with Icon', module)
		.add('With Icon', () => 
		<ButtonIcon 
				handleClick={action('clicked')} 
				fullWidth={false}
				icon="iconLocked"
				iconPosition="right"
				>
			Icon Button
		</ButtonIcon>)
		.add('With Icon & Disabled', () => 
		<ButtonIcon 
				handleClick={action('clicked')} 
				disabled={true} 
				fullWidth={false}
				icon="iconLocked"
				iconPosition="left"
				>
			Icon Button
		</ButtonIcon>)