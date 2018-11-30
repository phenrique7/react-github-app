import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from '../../assets/css/sass/user-profile/user-organizations.module.scss';

function UserOrganizations({ orgs }) {
  const organizations = orgs.map(org => (
    <a
      key={shortid.generate()}
      href={org.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      title={org.name}
    >
      <img
        src={org.avatar}
        alt={`@${org.name}`}
        width={45}
        height={45}
      />
    </a>
  ));

  return (
    <div className={styles.orgContainer}>
      <strong>{organizations.length !== 0 && 'Organizations'}</strong>
      <div className={styles.organizations}>
        {organizations}
      </div>
    </div>
  );
}

UserOrganizations.propTypes = {
  orgs: PropTypes.array.isRequired,
};

export default UserOrganizations;
