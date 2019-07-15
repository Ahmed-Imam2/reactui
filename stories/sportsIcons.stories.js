import React from 'react'
import { storiesOf } from '@storybook/react'

import SportsIcon from '../src/SportsIcon'

storiesOf('Icons Sports', module)
	.add('Soccer Icon', () => {

		const sportsIcons = [
			'soccer',
			'basketball',
			'esports',
			'boxing',
			'tennis',
			'volleyball',
			'baseball', 
			'aussieRules', 
			'americanfootball',
			'icehockey',
			'cricket',
			'golf',
			'numbergames',
			'placeholder',
			'badminton',
			'rubgy',
			'dogracing',
			'horseracing',
			'virtualsports',
			'motorsports',
			'allsports'
		]
		return sportsIcons.map( sport => {
			return (
				<div style={{display:'inline-block',marginLeft:20,marginBottom:10}}>
					<SportsIcon type={sport} size={50} key={`SportIcon_${sport}`} />
					<span style={{display:'flex',alignItems:'center',justifyContent:'center'}}>{sport}</span>
				</div>
			)
		})

	})

