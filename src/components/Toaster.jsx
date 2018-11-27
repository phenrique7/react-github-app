import React from 'react';
import { Intent, Toast } from '@blueprintjs/core';
import PropTypes from 'prop-types';
import styles from '../assets/css/sass/toaster.module.scss';

class Toaster extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isToastVisible: props.isActive,
    };

    this.handleToast = this.handleToast.bind(this);
  }

  handleToast() {
    this.setState(state => ({ isToastVisible: !state.isToastVisible }));
  }

  render() {
    const { isToastVisible } = this.state;

    return (
      <>
        {isToastVisible && (
          <Toast
            intent={Intent.DANGER}
            icon="warning-sign"
            message="You cannot undo the past."
            className={styles.fadeIn}
            timeout={4000}
            onDismiss={this.handleToast}
          />)
        }
      </>
    );
  }
}

Toaster.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Toaster;
