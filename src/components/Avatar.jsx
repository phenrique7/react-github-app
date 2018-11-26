import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/css/sass/avatar.module.scss';

function Avatar({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className={alt === 'Github avatar' ? styles.githubAvatar : styles.profileAvatar}
    />
  );
}

export default Avatar;

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
