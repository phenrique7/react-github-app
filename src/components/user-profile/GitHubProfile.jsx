import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../assets/css/sass/user-profile/github-profile.module.scss';
import UserInfo from './UserInfo';
import RepoList from './RepoList';

function GitHubProfile({ userData, unsubscribeUser }) {
  const {
    name,
    username,
    avatar,
    bio,
    followers,
    following,
    orgs,
    repos,
  } = userData;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.profileContainer}>
        <UserInfo
          name={name}
          username={username}
          avatar={avatar}
          bio={bio}
          followers={followers}
          following={following}
          repositories={repos.length}
          organizations={orgs}
          githubHref={`https://github.com/${username}`}
          unsubscribeUser={unsubscribeUser}
        />
        <RepoList repos={repos} />
      </div>
    </div>
  );
}

GitHubProfile.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    avatar: PropTypes.string,
    bio: PropTypes.any,
    followers: PropTypes.number,
    following: PropTypes.number,
    orgs: PropTypes.array,
    repos: PropTypes.array,
  }).isRequired,
  unsubscribeUser: PropTypes.func.isRequired,
};

export default GitHubProfile;
