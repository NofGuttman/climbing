import React from 'react';
import styles from '../styles/Gym.module.css';
import defaultImage from '../gym.jpg'

const Gym = ({name, hours, address, website, image}) => {
  
  return (
    <div className={styles.container}>
      <div className={styles["image-box"]}>
        <img className={styles.image} src={image || defaultImage} />
        <h2 className={styles.name}>{name}</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.address}>
          <label>כתובת: </label>
          {address}
        </div>
        <div className={styles.hours}>
          <table>
            <caption>שעות פעילות</caption>
            <tbody>
              <tr>
                <td>ראשון</td>
                <td>{hours.sun || "סגור"}</td>
              </tr>
              <tr>
                <td>שני</td>
                <td>{hours.mon || "סגור"}</td>
              </tr>
              <tr>
                <td>שלישי</td>
                <td>{hours.tue || "סגור"}</td>
              </tr>
              <tr>
                <td>רביעי</td>
                <td>{hours.wed || "סגור"}</td>
              </tr>
              <tr>
                <td>חמישי</td>
                <td>{hours.thu || "סגור"}</td>
              </tr>
              <tr>
                <td>שישי</td>
                <td>{hours.fri || "סגור"}</td>
              </tr>
              <tr>
                <td>שבת</td>
                <td>{hours.sat || "סגור"}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.website}>
          <a href={website}>{website}</a>
        </div>
      </div>
    </div>
  );
}

export default Gym;