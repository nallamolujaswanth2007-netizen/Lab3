import React from 'react';
import styles from './ProfileCard.module.css';

const ProfileCardCSS = ({ name, bio }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.bio}>{bio}</p>
      <button className={styles.button}>View Profile</button>
    </div>
  );
};

export default ProfileCardCSS;
