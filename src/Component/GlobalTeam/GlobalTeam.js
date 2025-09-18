import React from "react";
import styles from "./GlobalTeam.module.css";
import Image from "next/image";

const GlobalTeam = () => {
  return (
    <section className={styles.globalWrapper}>
      <div>
        <h2 className={styles.title}>Our Team is Expanding Across the Globe</h2>
        <p className={styles.description}>
          From a single vision to a growing global presence — InfoOcean is
          building a diverse, talented team that spans borders, time zones, and
          technologies.
        </p>
      </div>

      <div className={styles.mapWrapper}>
        <Image
          src="/images/World.svg"
          alt="Global Presence Map"
          width={800}
          height={450}
          className={styles.map}
        />

        {/* India Marker */}
        <div className={`${styles.marker} ${styles.India}`}>
          <span className={`${styles.markerDetails} ${styles.Indiadetails}`}>
            <div>India</div>
            <a href="tel:+918153839690">+91 81538 39690</a>
          </span>
        </div>

        {/* Australia Marker */}
        <div className={`${styles.marker} ${styles.Australia}`}>
          <span
            className={`${styles.markerDetails} ${styles.AustraliaDetails}`}
          >
            <div>Australia</div>
            <a href="tel:+61491337272">+61 49133 7272</a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default GlobalTeam;
