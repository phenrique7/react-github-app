import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import SearchForm from './components/search-user/SearchForm';
import GitHubProfile from './components/user-profile/GitHubProfile';
import { SearchProvider, SearchConsumer } from './context/SearchContext';
import styles from './assets/css/sass/app.module.scss';

function SearchUser() {
  return (
    <SearchConsumer>
      {({ username, subscribeUser }) => (
        username
          ? <Redirect to={`/${username}`} />
          : (
            <div className={styles.searchContainer}>
              <SearchForm subscribeUser={subscribeUser} />
            </div>
          )
      )}
    </SearchConsumer>
  );
}

function UserProfile() {
  return (
    <SearchConsumer>
      {({ username, unsubscribeUser }) => (
        !username
          ? <Redirect to="/" />
          : (
            <GitHubProfile
              username={username}
              unsubscribeUser={unsubscribeUser}
            />
          )
      )}
    </SearchConsumer>
  );
}

function App() {
  return (
    <Router>
      <SearchProvider className={styles.provider}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <SearchUser />}
          />
          <Route
            path="/:username"
            render={() => <UserProfile />}
          />
        </Switch>
      </SearchProvider>
    </Router>
  );
}

export default App;
