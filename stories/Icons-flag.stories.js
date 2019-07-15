import React from 'react'
import { storiesOf } from '@storybook/react'

import FlagIcon from '../src/FlagIcon'

storiesOf('Icon Flags', module)
		.add('Flag Icon', () => {
			const flags = [
				'flagkm',
				'flagen',
				'flagja',
				'flagko',
				'flagms',
				'flagth',
				'flagmy',
				'flaglo',
				'flagvi',
				'flagid',
				'flagzhTW',
				'flagzhCN'
			]
			return flags.map( flag => {
				return (
					<div style={{display:'inline-block',marginLeft:20,marginBottom:10}}>
						<FlagIcon type={flag} size={50} />
						<span style={{display:'flex',alignItems:'center',justifyContent:'center'}}>{flag}</span>
					</div>
				)
			})
		})