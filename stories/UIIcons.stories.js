import React from 'react'
import { storiesOf } from '@storybook/react'
import Icons from '../src/UIIcon/Icons'
import UIIcon from '../src/UIIcon'

storiesOf('Icon UI', module)
	.add('Icons', () => {

		return Icons.map( (icon,i) => {
			return (
				<div style={{display:'inline-block',marginLeft:20,marginBottom:10}} key={i}>
					<UIIcon type={icon.name} size={50} />
					<span style={{display:'flex',alignItems:'center',justifyContent:'center'}}>{icon.name}</span>
				</div>
			)
		})	
		
	})
