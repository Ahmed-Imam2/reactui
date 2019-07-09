import React from 'react'
import { storiesOf } from '@storybook/react'

import FlagIcon from '../src/FlagIcon'

storiesOf('Icon Flags', module)
		.add('Flag Icon', () => {
			return (
				<div>
						<span style={{display:'block'}}>
							flagkm: <FlagIcon type='flagkm' size={50} />
						</span>
						<span style={{display:'block'}}>
							flagen: <FlagIcon type='flagen' size={50} />
						</span>
						<span style={{display:'block'}}>
							flagja: <FlagIcon type='flagja' size={50} />
						</span>
						<span style={{display:'block'}}>
							flagko: <FlagIcon type='flagko' size={50} />
						</span>
						<span style={{display:'block'}}>
							flagms: <FlagIcon type='flagms' size={50} />
						</span>
						<span style={{display:'block'}}>
							flagth: <FlagIcon type='flagth' size={50} />
						</span>
						<span style={{display:'block'}}>
							flagmy: <FlagIcon type='flagmy' size={50} />
						</span>
						<span style={{display:'block'}}>
							flaglo: <FlagIcon type='flaglo' size={50} />
						</span>
						<span style={{display:'block'}}>
							flagvi: <FlagIcon type='flagvi' size={50} />
						</span>
						<span style={{display:'block'}}>
							flagid: <FlagIcon type='flagid' size={50} />
						</span>
						<span style={{display:'block'}}>
							flagzhTW: <FlagIcon type='flagzhTW' size={50} />
						</span>
						<span style={{display:'block'}}>
							flagzhCN: <FlagIcon type='flagzhCN' size={50} />
					</span>
				</div>
			)
		})