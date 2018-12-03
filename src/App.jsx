import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchForm from './components/search-user/SearchForm';
import GitHubProfile from './components/user-profile/GitHubProfile';
import { SearchProvider, SearchConsumer } from './context/SearchContext';
import styles from './assets/css/sass/app.module.scss';

function App() {
  return (
    <Router>
      <SearchProvider className={styles.provider}>
        <SearchConsumer>
          {({ userFetched }) => (
            <Switch>
              <Route
                exact
                path="/"
                render={() => <SearchForm userFetched={userFetched} />}
              />
              <Route
                path="/:username"
                render={() => <GitHubProfile userFetched={userFetched} />}
              />
            </Switch>
          )}
        </SearchConsumer>
      </SearchProvider>
    </Router>
  );
}

export default App;
