import React from "react";
import styles from './EmbeddedCode.module.css'

const EmbeddedCode = () => {
  return (
    <div className={styles.userEmbeddedCode}>
      <div className={styles.userEmbeddedCodeHeading}>
        <h3>Embedded Code</h3>
        <p>
        Please click the API button to see the API code and copy the code and insert it in your website.
        </p>
      </div>
      <button className={styles.userEmbeddedCodeButton}>See API</button>
    </div>
  );
};

export default EmbeddedCode;
