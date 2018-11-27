import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from '../assets/css/sass/avatar.module.scss';

function Avatar({ src, alt }) {
  let classname;

  if (alt === 'Github avatar') {
    classname = cn(styles.githubAvatar, styles.rotating);
  } else {
    classname = styles.profileAvatar;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={classname}
    />
  );
}

export default Avatar;

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
