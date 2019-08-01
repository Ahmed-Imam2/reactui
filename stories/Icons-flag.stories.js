import React from 'react'
import { storiesOf } from '@storybook/react'
import Flags from '../src/FlagIcon/Flags'
import FlagIcon from '../src/FlagIcon'

storiesOf('Icon Flags', module)
		.add('Flag Icon', () => {

			return Flags.map( (flag,i) => {
				return (
					<div style={{display:'inline-block',marginLeft:20,marginBottom:10}} key={i}>
						<FlagIcon type={flag.name} size={50} />
						<span style={{display:'flex',alignItems:'center',justifyContent:'center'}}>{flag.name}</span>
					</div>
				)
			})
		})