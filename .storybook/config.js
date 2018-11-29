import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import GeneralDecorator from '../src/stories/GeneralDecorator';

addDecorator(story => <GeneralDecorator>{story()}</GeneralDecorator>);

const req = require.context('../src/components', true, /\.stories\.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
