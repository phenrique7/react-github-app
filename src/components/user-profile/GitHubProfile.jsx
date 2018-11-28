import React from 'react';

function GitHubProfile(props) {
  return (
    <div>
      <p>
        {`${props.username}'s profile page`}
      </p>
      <button
        type="button"
        onClick={props.unsubscribeUser}
      >
        Try another
      </button>
    </div>
  );
}

export default GitHubProfile;
