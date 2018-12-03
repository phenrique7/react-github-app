import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserInfo from './UserInfo';
import RepoList from './RepoList';
import styles from '../../assets/css/sass/user-profile/github-profile.module.scss';
import { hasUserFetched } from '../../utils';

function GitHubProfile({ userFetched }) {
  if (!hasUserFetched(userFetched)) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.profileContainer}>
        <UserInfo />
        <RepoList />
      </div>
    </div>
  );
}

GitHubProfile.defaultProps = {
  userFetched: '',
};

GitHubProfile.propTypes = {
  userFetched: PropTypes.string,
};

export default GitHubProfile;
