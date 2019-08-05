import React from 'react'
import { storiesOf } from '@storybook/react'

import InputText from '../src/InputText'
import InputPassword from '../src/InputPassword'
import InputSelect from '../src/InputSelect'

storiesOf('Input Text', module)
	.add('Text Input', () => {

			return (
				<InputText 
					onChange={(e) => console.log(e)} 
					type='text'
					label='Label'
					hint='Hint'
					error='Error messages'
					placeholder='Username'
				/>
			)
	})
	.add('Password Input', () => {

		return (
			<InputPassword 
				onChange={(e) => console.log(e)}
				label='Password field'
				error='Error messages'
				hint="Hint"
				placeholder='Password'
			/>
		)
	})
	.add('Select Input', () => {
		const options = [
			{name: 'Sample Option 1',value: 1},
			{name: 'Sample Option 2',value: 2},
			{name: 'Sample Option 3',value: 3}
		]
		return (
			<InputSelect 
				label={'Select label'}
				name="select"
                value={3}
                handleChange={(e) => console.log(e)}
                options={options}
			/>
		)
	})
