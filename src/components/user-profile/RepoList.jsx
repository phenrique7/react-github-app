import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { compose, withHandlers, withState } from 'recompose';
import matchSorter from 'match-sorter';
import { Classes } from '@blueprintjs/core';
import RepoCard from './RepoCard';
import styles from '../../assets/css/sass/user-profile/repo-list.module.scss';

function RepoList(props) {
  const { reposState: repos, handleFilterUpdate } = props;

  return (
    <div className={styles.repoListContainer}>
      <div className={styles.repoListHeader}>
        <h4>Repositories</h4>
        <input
          type="text"
          className={Classes.INPUT}
          placeholder="Find a  repository..."
          dir="auto"
          onChange={handleFilterUpdate}
        />
      </div>
      <div className={styles.repoList}>
        {repos.map(repo => (
          <RepoCard
            key={shortid.generate()}
            repoName={repo.name}
            repoUrl={repo.url}
            repoDescription={repo.description}
            repoLanguage={repo.language}
            repoStars={repo.stars}
            repoForks={repo.forks}
          />
        ))}
      </div>
    </div>
  );
}

RepoList.defaultProps = {
  handleFilterUpdate: () => {},
};

RepoList.propTypes = {
  reposState: PropTypes.array.isRequired,
  handleFilterUpdate: PropTypes.func,
};

export default compose(
  withState(
    'reposState',
    'setRepos',
    props => props.repos,
  ),
  withHandlers({
    handleFilterUpdate: props => ({ target: { value } }) => {
      let matchingRepos = [...props.repos];

      if (value) {
        matchingRepos = matchSorter(props.repos, value, {
          keys: [
            'name',
            {
              maxRanking: matchSorter.rankings.SIMPLE_MATCH,
              key: 'language',
            },
            {
              maxRanking: matchSorter.rankings.CONTAINS,
              key: 'description',
            },
          ],
        });
      }

      props.setRepos(matchingRepos);
    },
  }),
)(RepoList);
