import React from 'react'
import { storiesOf } from '@storybook/react'
import Icons from '../src/SportsIcon/Icons'
import SportsIcon from '../src/SportsIcon'

storiesOf('Icons Sports', module)
	.add('Soccer Icon', () => {

		return Icons.map( (sport,i) => {
			return (
				<div style={{display:'inline-block',marginLeft:20,marginBottom:10}}>
					<SportsIcon type={sport.name} size={50} key={i} />
					<span style={{display:'flex',alignItems:'center',justifyContent:'center'}}>{sport.name}</span>
				</div>
			)
		})

	})

