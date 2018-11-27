import React from 'react';
import { Classes } from '@blueprintjs/core';
import cn from 'classnames';
import Avatar from '../Avatar';
import SearchButton from './SearchButton';
import GithubAvatar from '../../assets/images/github-mark.png';
import styles from '../../assets/css/sass/search-user/search-form.module.scss';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleChange(ev) {
    this.setState({ value: ev.target.value });
  }

  submitForm(ev) {
    ev.preventDefault();

    const { value } = this.state;

    if (value.trim() === '') {
      console.log('vazio');
    } else {
      console.log(value);
    }
  }

  render() {
    const { value } = this.state;

    return (
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={this.submitForm.bind(this)}>
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
            onChange={this.handleChange.bind(this)}
            value={value}
          />
          <SearchButton isLoading={false} />
        </form>
      </div>
    );
  }
}

export default SearchForm;
