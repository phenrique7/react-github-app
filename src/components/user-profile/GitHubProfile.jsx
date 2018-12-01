import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../assets/css/sass/user-profile/github-profile.module.scss';

function GitHubProfile({ userData, unsubscribeUser }) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.profileContainer}>
        <p>
          {`${userData.name}'s profile page`}
        </p>
        <button
          type="button"
          onClick={() => { unsubscribeUser(); }}
        >
          Try another
        </button>
      </div>
    </div>
  );
}

GitHubProfile.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    avatar: PropTypes.string,
    bio: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
    orgs: PropTypes.array,
    repos: PropTypes.array,
  }).isRequired,
  unsubscribeUser: PropTypes.func.isRequired,
};

export default GitHubProfile;
