import React from 'react'
import { storiesOf } from '@storybook/react'

import SportsIcon from '../src/SportsIcon'

storiesOf('Icons Sports', module)
		.add('Soccer Icon', () => <SportsIcon type='soccer'/> )
		.add('Basketball Icon', () => <SportsIcon type='basketball'/> )

