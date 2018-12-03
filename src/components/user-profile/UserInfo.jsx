import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Button, AnchorButton } from '@blueprintjs/core';
import Avatar from '../Avatar';
import UserOrganizations from './UserOrganizations';
import withContext from '../../context/WithContext';
import styles from '../../assets/css/sass/user-profile/user-info.module.scss';

function NumberInfo({ info, subinfo }) {
  return (
    <div className={styles.numberInfo}>
      <h3>{info}</h3>
      <small>{subinfo}</small>
    </div>
  );
}

function UserInfo({ userData, unsubscribeUser }) {
  const {
    name,
    username,
    avatar,
    bio,
    followers,
    following,
    orgs,
    repos,
    githubHref,
  } = userData;

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <Avatar
          src={avatar}
          alt="Profile avatar"
        />
      </div>
      <div className={styles.cardBody}>
        <h3>{name}</h3>
        <h4>{username}</h4>
        <p>{bio}</p>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.numberInfoContainer}>
          <NumberInfo info={followers} subinfo="followers" />
          <NumberInfo info={repos.length} subinfo="repositories" />
          <NumberInfo info={following} subinfo="following" />
        </div>
        <div
          className={orgs.length === 0
            ? styles.organizations
            : cn(styles.organizations, styles.orgsDivider)
          }
        >
          <UserOrganizations orgs={orgs} />
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
          onClick={unsubscribeUser}
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
  userData: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    avatar: PropTypes.string,
    bio: PropTypes.any,
    followers: PropTypes.number,
    following: PropTypes.number,
    orgs: PropTypes.array,
    repos: PropTypes.array,
  }).isRequired,
  unsubscribeUser: PropTypes.func.isRequired,
};

export default withContext(UserInfo);
