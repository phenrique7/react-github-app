import React from 'react';
import { Classes, Intent, Toast } from '@blueprintjs/core';
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
      isValidInput: true,
    };

    this.handleDismissToast = this.handleDismissToast.bind(this);
  }

  handleDismissToast() {
    this.setState({ toastFade: 'out' });
    setTimeout(() => {
      this.setState({ isValidInput: true });
    }, 500);
  }

  handleChange(ev) {
    this.setState({ value: ev.target.value });
  }

  submitForm(ev) {
    ev.preventDefault();

    const { value } = this.state;

    if (value.trim() === '') {
      this.setState({
        isValidInput: false,
        toastFade: 'in',
      });
    }
  }

  render() {
    const { value, isValidInput, toastFade } = this.state;

    return (
      <div className={styles.formContainer}>
        {!isValidInput && (
          <div className={styles.toastContainer}>
            <Toast
              intent={Intent.DANGER}
              icon="warning-sign"
              message="Username can't be empty."
              className={toastFade === 'in' ? styles.fadeIn : styles.fadeOut}
              timeout={4000}
              onDismiss={this.handleDismissToast}
            />
          </div>)
        }
        <form
          className={styles.form}
          onSubmit={this.submitForm.bind(this)}
        >
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
