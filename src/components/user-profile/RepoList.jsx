import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { compose, withHandlers, withState } from 'recompose';
import matchSorter from 'match-sorter';
import { Classes, NonIdealState } from '@blueprintjs/core';
import RepoCard from './RepoCard';
import withContext from '../../context/WithContext';
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
        {repos.length > 0 ? repos.map(repo => (
          <RepoCard
            key={shortid.generate()}
            repoName={repo.name}
            repoUrl={repo.url}
            repoDescription={repo.description}
            repoLanguage={repo.language}
            repoStars={repo.stars}
            repoForks={repo.forks}
          />
        )) : (
          <NonIdealState
            icon="search"
            title="No search results"
            description="Your search didn't match any repositories."
          />
        )}
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

const enhanced = compose(
  withState(
    'reposState',
    'setRepos',
    ({ userData }) => userData.repos,
  ),
  withHandlers({
    handleFilterUpdate: ({ userData, ...props }) => ({ target: { value } }) => {
      let matchingRepos = [...userData.repos];

      if (value) {
        matchingRepos = matchSorter(userData.repos, value, {
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

export default withContext(enhanced);
