import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../assets/css/sass/index.global.scss';
import '../../node_modules/normalize.css/normalize.css';
import '../../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../../node_modules/@blueprintjs/core/lib/css/blueprint.css';

import { Welcome } from '@storybook/react/demo';
import SearchButton from '../components/search-user/SearchButton';
import Avatar from '../components/Avatar';
import GithubAvatar from '../assets/images/github-mark.png';
import SearchForm from '../components/search-user/SearchForm';

storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('SearchButton')} />);

storiesOf('Search Button', module)
  .add('normal', () => <SearchButton isLoading={false} onClick={action('clicked')} />)
  .add('loading', () => <SearchButton isLoading onClick={() => {}} />);

storiesOf('Avatar', module)
  .add('github avatar', () => (
    <Avatar
      src={GithubAvatar}
      alt="Github avatar"
      shadow={1}
    />
  ))
  .add('profile avatar', () => (
    <Avatar
      src="http://demo.geekslabs.com/materialize/v2.1/layout03/images/avatar.jpg"
      alt="Profile avatar"
      shadow={2}
    />
  ));

storiesOf('Search Form', module)
  .add('standard', () => <SearchForm />);
