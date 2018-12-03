import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@blueprintjs/core';
import styles from '../../assets/css/sass/user-profile/repo-card.module.scss';

function RepoCard(props) {
  const {
    repoName,
    repoUrl,
    repoDescription,
    repoLanguage,
    repoStars,
    repoForks,
  } = props;

  return (
    <div className={styles.repoCard}>
      <h5>
        <a href={repoUrl}>
          {repoName}
        </a>
      </h5>
      <p>{repoDescription}</p>
      <div className={styles.repoStats}>
        {repoLanguage && (
          <span>
            {repoLanguage}
          </span>
        )}
        {repoStars !== 0 && (
          <a href={`${repoUrl}/stargazers`}>
            <Icon icon="star" iconSize={13} />
            &nbsp;&nbsp;
            {repoStars}
          </a>
        )}
        {repoForks !== 0 && (
          <a href={`${repoUrl}/network`}>
            <Icon icon="fork" iconSize={13} />
            &nbsp;&nbsp;
            {repoForks}
          </a>
        )}
      </div>
    </div>
  );
}

RepoCard.defaultProps = {
  repoDescription: '',
  repoLanguage: '',
  repoStars: 0,
  repoForks: 0,
};

RepoCard.propTypes = {
  repoName: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
  repoDescription: PropTypes.string,
  repoLanguage: PropTypes.string,
  repoStars: PropTypes.number,
  repoForks: PropTypes.number,
};

export default RepoCard;
