import React from 'react';
import PropTypes from 'prop-types';
import { Button, AnchorButton } from '@blueprintjs/core';
import styles from '../../assets/css/sass/user-profile/user-info.module.scss';
import Avatar from '../Avatar';

function NumberInfo({ info, subinfo }) {
  return (
    <div className={styles.numberInfo}>
      <h3>{info}</h3>
      <small>{subinfo}</small>
    </div>
  );
}

function UserInfo(props) {
  const {
    name,
    username,
    avatar,
    bio,
    followers,
    repositories,
    following,
    githubHref,
  } = props;

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img
          height={130}
          width="100%"
          src="https://demos.creative-tim.com/paper-dashboard-pro-react/static/media/damir-bosnjak.a6f24e7d.jpg"
          alt="Profile"
        />
      </div>
      <Avatar
        src={avatar}
        alt="Profile avatar"
      />
      <div className={styles.cardBody}>
        <h3>{name}</h3>
        <h4>{username}</h4>
        <p>{bio}</p>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.numberInfoContainer}>
          <NumberInfo info={followers} subinfo="followers" />
          <NumberInfo info={repositories} subinfo="repositories" />
          <NumberInfo info={following} subinfo="following" />
        </div>
        <div className={styles.organizations}>
          <strong>Organizations</strong>
        </div>
        <AnchorButton
          href={githubHref}
          intent="success"
          text="View on GitHub"
          fill
        />
        <Button
          type="button"
          text="Try another"
          fill
        />
      </div>
    </div>
  );
}

NumberInfo.propTypes = {
  info: PropTypes.number.isRequired,
  subinfo: PropTypes.string.isRequired,
};

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  repositories: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  githubHref: PropTypes.string.isRequired,
};

export default UserInfo;
