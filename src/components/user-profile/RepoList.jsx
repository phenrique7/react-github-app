import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import matchSorter from 'match-sorter';
import { Classes } from '@blueprintjs/core';
import RepoCard from './RepoCard';
import styles from '../../assets/css/sass/user-profile/repo-list.module.scss';

class RepoList extends React.Component {
  constructor(props) {
    super(props);

    const { repos } = this.props;

    this.state = {
      repos,
      filter: '',
    };

    this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
  }

  handleFilterUpdate({ target: { value } }) {
    this.setState({ filter: value });
  }

  render() {
    const { repos, filter } = this.state;
    let matchingRepos = [...repos];

    if (filter) {
      matchingRepos = matchSorter(repos, filter, {
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

    return (
      <div className={styles.repoListContainer}>
        <div className={styles.repoListHeader}>
          <h4>Repositories</h4>
          <input
            type="text"
            className={Classes.INPUT}
            placeholder="Find a  repository..."
            dir="auto"
            onChange={this.handleFilterUpdate}
          />
        </div>
        <div className={styles.repoList}>
          {matchingRepos.map(repo => (
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
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
