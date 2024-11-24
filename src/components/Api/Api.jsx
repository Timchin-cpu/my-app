import React, { useState } from "react";
import styles from "./Api.module.css";

const Api = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(setIsModalOpen);
  // const openModal = () => setIsModalOpen(true);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Who BreatheSafetyIndex serves</h1>
        <div className={styles.textImageWrapper}>
          <div className={styles.text}>
            <h2>
              Weather Services / Smart City Platforms / Public Health
              Applications / Sports Event Organizers
            </h2>
            <p>
              Each of our clients benefits from high-frequency data calls and
              risk assessments tailored to their specific needs, helping them
              create safer, healthier environments.
            </p>
            <div className={styles.advantagesSection}>
              <div className={styles.arrow1}>
                <div></div>
              </div>
              <p>Try now</p>
            </div>
          </div>
        </div>
        <img src="./banner 2.png" alt="#" />
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p className={styles.aboutTextMore}>
              Problem statement.With outdoor air pollution contributing to over
              238,000 premature deaths in the EU alone, translating air quality
              data into meaningful health insights has become essential.
              Standard air quality measures offer limited guidance on the direct
              effects of pollution on human health, leaving a significant gap in
              understanding the specific risks associated with daily exposure to
              pollutants.
            </p>
            <button
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Api;
