import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@blueprintjs/core';
import styles from '../../assets/css/sass/search-user/search-button.module.scss';

function SearchButton({ isLoading, onClick }) {
  return (
    <Button
      className={styles.searchButton}
      onClick={onClick}
      loading={isLoading}
      intent="success"
      text="Buscar"
      large
      fill
    />
  );
}

export default SearchButton;

SearchButton.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
