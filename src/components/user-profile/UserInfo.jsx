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

function UserInfo() {
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
        src="https://demos.creative-tim.com/paper-dashboard-pro-react/static/media/mike.aab414f7.jpg"
        alt="Profile avatar"
      />
      <div className={styles.cardBody}>
        <h3>Kent C. Dodds</h3>
        <h4>kentcdodds</h4>
        <p>
          Aqui vai ficar a bio do usuário I like the way you work it No diggity
        </p>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.numberInfoContainer}>
          <NumberInfo info={7209} subinfo="followers" />
          <NumberInfo info={253} subinfo="repositories" />
          <NumberInfo info={39} subinfo="following" />
        </div>
        <div className={styles.organizations}>
          <strong>Organizations</strong>
        </div>
        <AnchorButton
          className={styles.anchorButton}
          href="https://github.com/kentcdodds"
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

export default UserInfo;
