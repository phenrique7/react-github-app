import React from 'react';
import SearchForm from './components/search-user/SearchForm';
import styles from './assets/css/sass/app.module.scss';

function App() {
  return (
    <>
      <div className={styles.searchContainer}>
        <SearchForm />
      </div>
    </>
  );
}

export default App;
