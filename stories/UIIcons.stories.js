import React from 'react'
import { storiesOf } from '@storybook/react'

import UIIcon from '../src/UIIcon'

storiesOf('Icon UI', module)
		.add('spinner Icon', () => <UIIcon type='spinner' size={50} /> )
