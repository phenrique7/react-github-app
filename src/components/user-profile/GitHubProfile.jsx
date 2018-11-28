import React from 'react';
import PropTypes from 'prop-types';

function GitHubProfile({ username, unsubscribeUser }) {
  return (
    <div>
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
