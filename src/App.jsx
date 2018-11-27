import React from 'react';
import { Router } from '@reach/router';
import SearchForm from './components/search-user/SearchForm';
import styles from './assets/css/sass/app.module.scss';

function SearchUser() {
  return (
    <div className={styles.searchContainer}>
      <SearchForm />
    </div>
  );
}

function UserProfile() {
  return (
    <p>
      User profile page
    </p>
  );
}

function App() {
  return (
    <Router className={styles.router}>
      <SearchUser path="/" />
      <UserProfile path="/profile" />
    </Router>
  );
}

export default App;
