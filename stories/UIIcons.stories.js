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
			'underMaintenance',
			'allGames',
			'favorites',
			'match5',
			'miniGames',
            'otherGames',
            'parlor',
            'poker',
            'scratchCard',
            'slot',
            'table',
            'topGames',
			'rightChevron',
			'leftChevron'
		]

		return icons.map( icon => {
			return (
				<div style={{display:'inline-block',marginLeft:20,marginBottom:10}} key={`Icon_${icon}`}>
					<UIIcon type={icon} size={50} />
					<span style={{display:'flex',alignItems:'center',justifyContent:'center'}}>{icon}</span>
				</div>
			)
		})	
		
	})
