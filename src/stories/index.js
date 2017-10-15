import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import LeftNav from '../index';

const items = [
  'About',
  'Services',
  'Clients',
  'Contact'
]

storiesOf('Left Nav', module)
  .add('story', () => <LeftNav items={items} />);
