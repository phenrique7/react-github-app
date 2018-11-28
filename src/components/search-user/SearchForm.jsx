import React from 'react';
import { Classes, Intent, Toast } from '@blueprintjs/core';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import SearchButton from './SearchButton';
import GitHubUser from '../../services/github-user';
import GithubAvatar from '../../assets/images/github-mark.png';
import styles from '../../assets/css/sass/search-user/search-form.module.scss';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      isValidInput: true,
      loading: false,
    };

    this.handleShowToast = this.handleShowToast.bind(this);
    this.handleDismissToast = this.handleDismissToast.bind(this);
  }

  handleShowToast(message) {
    this.toastMessage = message;

    this.setState({
      isValidInput: false,
      toastFade: 'in',
    });
  }

  handleDismissToast() {
    this.setState({ toastFade: 'out' });

    setTimeout(() => {
      this.setState(state => ({ isValidInput: !state.isValidInput }));
    }, 500);
  }

  handleChange(ev) {
    this.setState({ value: ev.target.value });
  }

  submitForm(ev) {
    ev.preventDefault();

    const { value: username } = this.state;
    const { subscribeUser } = this.props;

    if (username.trim() === '') {
      this.handleShowToast("Username can't be empty");
    } else {
      this.setState(state => ({ loading: !state.loading }));

      const user = new GitHubUser(username);

      user
        .getUserData()
        .then((res) => {
          console.log(res);
          subscribeUser(username);
        })
        .catch(() => {
          this.handleShowToast('Username not found');
          this.setState(state => ({
            value: '',
            loading: !state.loading,
          }));
        });
    }
  }

  render() {
    const {
      value,
      isValidInput,
      toastFade,
      loading,
    } = this.state;

    return (
      <div className={styles.formContainer}>
        {!isValidInput && (
          <div className={styles.toastContainer}>
            <Toast
              intent={Intent.DANGER}
              icon="warning-sign"
              message={this.toastMessage}
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
            React GitHub App
          </h2>
          <input
            type="text"
            className={cn(Classes.INPUT, styles.formInput)}
            dir="auto"
            placeholder="Enter a github username"
            onChange={this.handleChange.bind(this)}
            value={value}
          />
          <SearchButton isLoading={loading} />
        </form>
      </div>
    );
  }
}

SearchForm.propTypes = {
  subscribeUser: PropTypes.func.isRequired,
};

export default SearchForm;
