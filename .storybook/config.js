import React from 'react';
import { configure } from '@storybook/react';
import '../src/assets/css/sass/index.global.scss';
import '../node_modules/normalize.css/normalize.css';
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';

const req = require.context('../src/components', true, /\.stories\.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
