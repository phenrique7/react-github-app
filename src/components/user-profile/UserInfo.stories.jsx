import React from 'react';
import { storiesOf } from '@storybook/react';
import UserInfo from './UserInfo';

storiesOf('Profile info', module)
  .add('general', () => (
    <div
      style={{
        backgroundColor: '#f4f3ef',
        height: '100%',
        paddingLeft: '20px',
        paddingTop: '20px',
      }}
    >
      <div style={{ width: '33.333333%' }}>
        <UserInfo
          name="Kent C. Dodds"
          username="kentcdodds"
          avatar="https://demos.creative-tim.com/paper-dashboard-pro-react/static/media/mike.aab414f7.jpg"
          bio="Aqui vai ficar a bio do usuário I like the way you work it No diggity"
          followers={7209}
          repositories={253}
          following={39}
          githubHref="https://github.com/kentcdodds"
        />
      </div>
    </div>
  ))
  .add('organizations', () => {
    // axios.get('https://api.github.com/users/kentcdodds/orgs')

    const organizations = () => {
      console.log('ok');
    };

    return (
      <div>
        <button type="button" onClick={organizations}>
          Get organizations
        </button>
      </div>
    );
  });
