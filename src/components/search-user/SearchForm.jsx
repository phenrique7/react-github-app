import React from 'react';
import { Classes } from '@blueprintjs/core';
import cn from 'classnames';
import Avatar from '../Avatar';
import GithubAvatar from '../../assets/images/github-mark.png';
import styles from '../../assets/css/sass/search-user/search-form.module.scss';
import SearchButton from './SearchButton';

class SearchForm extends React.Component {
  render() {
    return (
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <Avatar
            src={GithubAvatar}
            alt="Github avatar"
          />
          <h2 className={styles.formTitle}>
            React Github App
          </h2>
          <input
            type="text"
            className={cn(Classes.INPUT, styles.formInput)}
            dir="auto"
            placeholder="Enter a github username"
          />
          <SearchButton
            isLoading={false}
            onClick={() => {}}
          />
        </form>
      </div>
    );
  }
}

export default SearchForm;
