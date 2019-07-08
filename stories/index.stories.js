import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

/** SportIcon Component */
import SportsIcon from '../src/SportsIcon'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('SportsIcon', module)
  .add('Soccer Icon', () => <SportsIcon type='soccer'/> )
  .add('Basketball Icon', () => <SportsIcon type='basketball'/> )