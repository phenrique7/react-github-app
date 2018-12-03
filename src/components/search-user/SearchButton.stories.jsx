import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import SearchButton from './SearchButton';

storiesOf('Search Button', module)
  .add('normal', () => <SearchButton isLoading={false} onClick={action('clicked')} />)
  .add('loading', () => <SearchButton isLoading onClick={() => {}} />);
