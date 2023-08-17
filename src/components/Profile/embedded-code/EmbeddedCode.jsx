import React from "react";
import styles from './EmbeddedCode.module.css'

const EmbeddedCode = () => {
  return (
    <div className={styles.userEmbeddedCode}>
      <div className={styles.userEmbeddedCodeHeading}>
        <h3>Embedded Code</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, delectus!
        </p>
      </div>
      <button className={styles.userEmbeddedCodeButton}>See API</button>
    </div>
  );
};

export default EmbeddedCode;
