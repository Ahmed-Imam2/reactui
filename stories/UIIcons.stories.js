import React from 'react'
import { storiesOf } from '@storybook/react'

import UIIcon from '../src/UIIcon'

storiesOf('Icon UI', module)
	.add('Icons', () => {

		const icons = [
			'close',
			'info',
			'circleDown',
			'circleUp',
			'eyeSlash',
			'eye',
			'star',
			'field',
			'signal',
			'carretCircleUp',
			'carretDown',
			'syncAlt',
			'group',
			'user',
			'logout',
			'settings',
			'trash',
			'leftArrow',
			'arrowDown',
			'arrowUp',
			'preloader',
			'error',
			'check',
			'gift',
			'history',
			'notepad',
			'esports',
			'boxing',
			'live',
			'spinner',
			'warning',
			'circleUpLight',
			'circleDownLight',
			'rightArrowHead',
			'doubleAngleArrowRight',
			'spinnerWhite',
			'iconLocked',
			'trophy',
			'notfound',
			'restrictedIconLocked',
			'notAllowed',
			'warningTriagle',
			'underMaintenance'
		]

		return icons.map( icon => {
			return (
				<div style={{display:'inline-block',marginLeft:20,marginBottom:10}}>
					<UIIcon type={icon} size={50} key={`Icon_${icon}`}/>
					<span style={{display:'flex',alignItems:'center',justifyContent:'center'}}>{icon}</span>
				</div>
			)
		})	
		
	})
