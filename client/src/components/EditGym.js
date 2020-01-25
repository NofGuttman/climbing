import React from 'react';
import styles from '../styles/EditGym.module.css';

const EditGym = ({name, deleteHandler, id}) => {
  return (
    <div className={styles.container}>
      {name}
      <button onClick={deleteHandler.bind(this, id)}>DELETE</button>
    </div>
  );
}

export default EditGym;