import React from 'react';
import { storiesOf } from '@storybook/react';
import axios from 'axios';
import { compose, withHandlers, withState } from 'recompose';
import UserInfo from './UserInfo';
import UserOrganizations from './UserOrganizations';
import RepoCard from './RepoCard';
import RepoList from './RepoList';

storiesOf('Profile info', module)
  .add('user info', () => (
    <div
      style={{
        backgroundColor: '#f4f3ef',
        height: 'auto',
        paddingLeft: '20px',
        paddingTop: '20px',
        paddingBottom: '20px',
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
          organizations={[]}
          unsubscribeUser={() => {}}
        />
      </div>
    </div>
  ))
  .add('organizations', () => {
    function Organizations(props) {
      const {
        organizations,
        getOrganizations,
        clearOrganizations,
      } = props;

      return (
        <div>
          <button
            type="button"
            onClick={getOrganizations}
          >
            Get user organizations
          </button>
          <button
            type="button"
            onClick={clearOrganizations}
          >
            Clear organizations
          </button>
          <UserOrganizations orgs={organizations} />
        </div>
      );
    }

    const StorieComponent = compose(
      withState('organizations', 'setOrganizations', []),
      withHandlers({
        getOrganizations: props => async () => {
          try {
            const response = await axios.get('https://api.github.com/users/kentcdodds/orgs');
            console.log('data', response.data);

            const orgs = response.data.map(org => ({
              avatar_url: org.avatar_url,
              login: org.login,
              githubUrl: `https://github.com/${org.login}`,
            }));

            props.setOrganizations(orgs);
          } catch (err) {
            console.log(err);
            props.setOrganizations([]);
          }
        },
        clearOrganizations: props => () => {
          props.setOrganizations([]);
        },
      }),
    )(Organizations);

    return (
      <div style={{ width: '33.333333%' }}>
        <StorieComponent />
      </div>
    );
  })
  .add('repo card', () => (
    <div style={{ padding: '10px' }}>
      <RepoCard
        repoName="react-testing-library"
        repoUrl="https://github.com/kentcdodds/react-testing-library"
        repoDescription="Simple and complete React DOM testing utilities that encourage good testing practices."
        repoLanguage="JavaScript"
        repoStars={4.1}
        repoForks={239}
      />
    </div>
  ))
  .add('repo list', () => {
    const repos = [
      {
        name: 'all-contributors',
        url: 'https://github.com/kentcdodds/all-contributors',
        description: 'Recognize all contributors, not just the ones who push code',
        language: 'JavaScript',
        stars: 2145,
        forks: 317,
      },
      {
        name: 'dom-testing-library',
        url: 'https://github.com/kentcdodds/dom-testing-library',
        description: 'Simple and complete DOM testing utilities that encourage good testing practices.',
        language: 'JavaScript',
        stars: 810,
        forks: 93,
      },
      {
        name: 'react-testing-library',
        url: 'https://github.com/kentcdodds/react-testing-library',
        description: 'Simple and complete React DOM testing utilities that encourage good testing practices.',
        language: 'JavaScript',
        stars: 4.1,
        forks: 239,
      },
      {
        name: 'spawn-command-with-kill',
        url: 'https://github.com/kentcdodds/spawn-command-with-kill',
        description: '',
        language: 'JavaScript',
        stars: 3,
        forks: 1,
      },
      {
        name: 'modern-react',
        url: 'https://github.com/kentcdodds/modern-react',
        description: "workshop about React's hottest new features in 16.7.0",
        language: 'JavaScript',
        stars: 163,
        forks: 25,
      },
      {
        name: 'babel-plugin-macros',
        url: 'https://github.com/kentcdodds/babel-plugin-macros',
        description: 'Enables zero-config, importable babel plugins',
        language: 'JavaScript',
        stars: 976,
        forks: 68,
      },
      {
        name: 'react-toggled',
        url: 'https://github.com/kentcdodds/react-toggled',
        description: 'Component to build simple, flexible, and accessible toggle components',
        language: 'JavaScript',
        stars: 389,
        forks: 36,
      },
    ];

    return (
      <div style={{ padding: '10px' }}>
        <RepoList userData={{ repos }} />
      </div>
    );
  });
