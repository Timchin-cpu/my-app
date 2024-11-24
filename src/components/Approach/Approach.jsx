import React, { useState } from "react";
import styles from "./Approach.module.css";

const Approach = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Trustable Air Quality data from NASA program.
        </h1>
        <div className={styles.whiteSquare}>
          <p className={styles.aboutText}>
            BreatheSafetyIndex is an early adopters of TEMPO program
            (Tropospheric Emissions: Monitoring of Pollution).From April of 2023
            NASA was launching new satellites that can detect and measure air
            pollution with hourly data from space. Now they observe 3 pollutants
            that are harmful to our health, which are nitrogen oxides (NOx),
            formaldehyde (HCHO), and ozone (O3).
          </p>
          <div className={styles.arrow1} onClick={openModal}>
            <div></div>
          </div>
          <p className={styles.aboutTextMoreButton}>Problem statement.</p>
          <img src="./traf.png" alt="Фото" className={styles.image} />
        </div>
      </div>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p className={styles.aboutTextMore}>
              TEMPO program is environmental program of NASAFor decades,
              satellite-based instruments have provided insights into the
              physical and chemical processes that govern the Earth’s
              atmosphere. The current generation of air quality satellites only
              makes an observation near mid-day. This has prevented researchers
              from answering some of the most pressing questions relating to air
              quality, including when and how much pollution is being emitted
              and how it varies over time. This information is vital to
              effectively combat atmospheric pollution and its harmful
              consequences to human health and ecosystems worldwide.To address
              this problem, TEMPO will scan and track pollution hourly as it
              moves across North America. An international team of scientists
              analyze these in-depth measurements of North American pollution.
            </p>
            <br />{" "}
            <div
              className={styles.arrow1Button}
              onClick={() => setIsModalOpen(false)}
            >
              <div></div>
            </div>
            <p>https://tempo.si.edu/</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Approach;
