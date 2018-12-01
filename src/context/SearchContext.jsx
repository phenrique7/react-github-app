import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from '@blueprintjs/core';
import GitHubUser from '../services/github-user';
import {
  getItemStorage,
  isEmptyObject,
  removeItemStorage,
  setItemStorage,
} from '../utils';
import styles from '../assets/css/sass/app.module.scss';

const SearchContext = React.createContext();

class SearchProvider extends React.Component {
  constructor(props) {
    super(props);

    this.userData = {};
    this.userFetched = getItemStorage('github-username');

    if (
      typeof this.userFetched === 'string'
      && this.userFetched.length > 0
      && isEmptyObject(this.userData)
    ) {
      this.state = {
        userFetched: this.userFetched,
        loading: true,
      };
    } else {
      this.state = {
        userFetched: this.userFetched,
        loading: false,
      };
    }

    this.subscribeUser = this.subscribeUser.bind(this);
    this.unsubscribeUser = this.unsubscribeUser.bind(this);
  }

  componentDidMount() {
    const { loading } = this.state;

    if (loading) {
      const user = new GitHubUser(this.userFetched);

      user.getUserData((data, error) => {
        if (isEmptyObject(data)) {
          if (error.message === 'Network Error') {
            console.error('Network Error');
          } else {
            console.error('Username not found');
          }

          removeItemStorage(this.userFetched);
        } else {
          setTimeout(() => {
            this.subscribeUser(data);
          }, 1500);
        }
      });
    }
  }

  subscribeUser(userData) {
    setItemStorage('github-username', userData.username);
    this.userData = { ...userData };

    this.setState({
      userFetched: userData.username,
      loading: false,
    });
  }

  unsubscribeUser() {
    removeItemStorage('github-username');
    this.userData = {};

    this.setState({ userFetched: null });
  }

  render() {
    const { children } = this.props;
    const { userFetched, loading } = this.state;

    return (
      <SearchContext.Provider
        value={{
          userFetched,
          userData: this.userData,
          subscribeUser: this.subscribeUser,
          unsubscribeUser: this.unsubscribeUser,
        }}
      >
        {loading ? (
          <div className={styles.spinner}>
            <Spinner />
          </div>
        ) : children}
      </SearchContext.Provider>
    );
  }
}

const SearchConsumer = SearchContext.Consumer;

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SearchProvider, SearchConsumer, SearchContext };
