import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Button, AnchorButton } from '@blueprintjs/core';
import Avatar from '../Avatar';
import UserOrganizations from './UserOrganizations';
import styles from '../../assets/css/sass/user-profile/user-info.module.scss';

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
    following,
    repositories,
    organizations,
    githubHref,
    unsubscribeUser,
  } = props;

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
          <NumberInfo info={repositories} subinfo="repositories" />
          <NumberInfo info={following} subinfo="following" />
        </div>
        <div
          className={organizations.length === 0
            ? styles.organizations
            : cn(styles.organizations, styles.orgsDivider)
          }
        >
          <UserOrganizations orgs={organizations} />
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

UserInfo.defaultProps = {
  bio: '',
};

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  repositories: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  organizations: PropTypes.array.isRequired,
  githubHref: PropTypes.string.isRequired,
  unsubscribeUser: PropTypes.func.isRequired,
};

export default UserInfo;
