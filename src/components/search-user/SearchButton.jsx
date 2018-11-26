import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@blueprintjs/core';
import styles from '../../assets/css/sass/search-user/search-button.module.scss';

function SearchButton({ isLoading, onClick }) {
  return (
    <Button
      onClick={onClick}
      className={styles.searchButton}
      intent="success"
      text="Buscar"
      large
      loading={isLoading}
    />
  );
}

export default SearchButton;

SearchButton.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
