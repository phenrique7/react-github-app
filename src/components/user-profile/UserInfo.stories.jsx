import React from 'react';
import { storiesOf } from '@storybook/react';
import axios from 'axios';
import { compose, withHandlers, withState } from 'recompose';
import UserInfo from './UserInfo';
import UserOrganizations from './UserOrganizations';
import RepoCard from './RepoCard';

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
              avatar: org.avatar_url,
              name: org.login,
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
  ));
