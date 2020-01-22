import React from 'react';
import styles from '../styles/Gym.module.css';
import gymImage from '../gym.jpg'

const Gym = ({name, hours}) => {
  
  return (
    <div className={styles.container}>
      <div className={styles["image-box"]}>
        <img className={styles.image} src={gymImage} />
        <h2 class={styles.name}>{name}</h2>
      </div>
      <div class={styles.content}>
        <div className="name">{name}</div>
      </div>
    </div>
  );
}

export default Gym;