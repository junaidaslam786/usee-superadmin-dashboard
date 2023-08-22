// import React from "react";
// import styles from './TimeZone.module.css'

// const TimeZone = () => {
//   return (
//     <div className={styles.timeZone}>
//       <div className={styles.timeZoneHeading}>
//         <h3>Update your timezone</h3>
//         <p>
//         Select & update your timezone for seamless collaboration and timely responses
//         </p>
//       </div>
//       <div className={styles.timeZoneLabel}>
//         <label htmlFor="Timezone"></label>
//         <select name="Time" id="Time">
//           <option value="Islamabad">Islamabad</option>
//           <option value="Karachi">Karachi</option>
//         </select>
//       </div>
//       <button className={styles.timeZoneButton}>Update</button>
//     </div>
//   );
// };

// export default TimeZone;


import React, { useState, useEffect } from "react";
import styles from './TimeZone.module.css'

const TimeZone = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState('');
  const [updated, setUpdated] = useState(false);

  // List of common IANA timezones
  const timeZones = [
    "UTC",
    "Europe/London",
    "Europe/Paris",
    "Europe/Berlin",
    "Europe/Moscow",
    "Asia/Kolkata",
    "Asia/Tokyo",
    "Asia/Shanghai",
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "America/Sao_Paulo",
    "Africa/Cairo",
    "Africa/Johannesburg",
    "Australia/Sydney",
    "America/Toronto",
    "America/Mexico_City",
    "America/Bogota",
    "America/Buenos_Aires",
    "America/Santiago",
    "Asia/Seoul",
    "Asia/Singapore",
    "Asia/Hong_Kong",
    "Asia/Manila",
    "Asia/Bangkok",
    "Asia/Jakarta",
    "Asia/Dubai",
    "Asia/Karachi",
    "Europe/Rome",
    "Europe/Madrid",
    "Europe/Amsterdam",
    "Europe/Copenhagen",
    "Europe/Istanbul",
    "Pacific/Auckland",
    "America/Caracas",
    "Asia/Taipei"
];


  // Retrieve selected timezone from localStorage on component mount
  useEffect(() => {
    const savedTimeZone = localStorage.getItem('selectedTimeZone');
    if (savedTimeZone) {
      setSelectedTimeZone(savedTimeZone);
    }
  }, []);

  // Update selected timezone in state and localStorage
  const handleUpdate = () => {
    localStorage.setItem('selectedTimeZone', selectedTimeZone);
    setUpdated(true);
  };

  return (
    <div className={styles.timeZone}>
      <div className={styles.timeZoneHeading}>
        <h3>Update your timezone</h3>
        <p>
          Select & update your timezone for seamless collaboration and timely responses
        </p>
      </div>
      <div className={styles.timeZoneLabel}>
        <label htmlFor="Timezone"></label>
        <select
          name="Time"
          id="Time"
          value={selectedTimeZone}
          onChange={e => setSelectedTimeZone(e.target.value)}
        >
          {timeZones.map((tz, index) => (
            <option key={index} value={tz}>
              {tz}
            </option>
          ))}
        </select>
      </div>
      <button className={styles.timeZoneButton} onClick={handleUpdate}>
        Update
      </button>
      {updated && <p>Your timezone updated successfully!</p>}
    </div>
  );
};

export default TimeZone;
