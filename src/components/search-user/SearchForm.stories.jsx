import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchForm from './SearchForm';

storiesOf('Search Form', module)
  .add('standard', () => <SearchForm subscribeUser={() => {}} />);
