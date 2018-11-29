import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from './Avatar';
import GithubAvatar from '../assets/images/github-mark.png';

storiesOf('Avatar', module)
  .add('github avatar', () => (
    <Avatar
      src={GithubAvatar}
      alt="Github avatar"
    />
  ))
  .add('profile avatar', () => (
    <Avatar
      src="http://demo.geekslabs.com/materialize/v2.1/layout03/images/avatar.jpg"
      alt="Profile avatar"
      shadow={2}
    />
  ));
