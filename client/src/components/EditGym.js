import React from 'react';
import styles from '../styles/EditGym.module.css';

const EditGym = ({name}) => {
  return (
    <div className={styles.container}>
      {name}
    </div>
  );
}

export default EditGym;