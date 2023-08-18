import React from "react";
import styles from './TimeZone.module.css'

const TimeZone = () => {
  return (
    <div className={styles.timeZone}>
      <div className={styles.timeZoneHeading}>
        <h3>Update your timezone</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          ducimus?
        </p>
      </div>
      <div className={styles.timeZoneLabel}>
        <label htmlFor="Timezone"></label>
        <select name="Time" id="Time">
          <option value="Islamabad">Islamabad</option>
          <option value="Karachi">Karachi</option>
        </select>
      </div>
      <button className={styles.timeZoneButton}>Update</button>
    </div>
  );
};

export default TimeZone;
