import React from 'react';
import { Router, navigate } from '@reach/router';
import SearchForm from './components/search-user/SearchForm';
import GitHubProfile from './components/user-profile/GitHubProfile';
import { SearchProvider, SearchConsumer } from './context/SearchContext';
import styles from './assets/css/sass/app.module.scss';

function SearchUser() {
  return (
    <SearchConsumer>
      {({ username, subscribeUser }) => {
        if (username) {
          navigate(`/${username}`);
        }

        return (
          <div className={styles.searchContainer}>
            <SearchForm subscribeUser={subscribeUser} />
          </div>
        );
      }}
    </SearchConsumer>
  );
}

function UserProfile() {
  return (
    <SearchConsumer>
      {({ username, unsubscribeUser }) => {
        if (!username) {
          navigate('/');
        }

        return (
          <GitHubProfile
            username={username}
            unsubscribeUser={unsubscribeUser}
          />
        );
      }}
    </SearchConsumer>
  );
}

function App() {
  return (
    <SearchProvider>
      <Router className={styles.router}>
        <SearchUser path="/" />
        <UserProfile path="/:username" />
      </Router>
    </SearchProvider>
  );
}

export default App;
