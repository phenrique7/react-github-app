import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../assets/css/sass/user-profile/github-profile.module.scss';

function GitHubProfile({ username, unsubscribeUser }) {
  return (
    <div className={styles.mainPanel}>
      <p>
        {`${username}'s profile page`}
      </p>
      <button
        type="button"
        onClick={() => {
          window.localStorage.removeItem('github-username');
          unsubscribeUser();
        }}
      >
        Try another
      </button>
    </div>
  );
}

GitHubProfile.propTypes = {
  username: PropTypes.string.isRequired,
  unsubscribeUser: PropTypes.func.isRequired,
};

export default GitHubProfile;
