"use client";
import React, { useEffect, useRef } from "react";
import styles from "./MissionVision.module.css";
import Image from "next/image";
const MissionVision = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textBlockL}>
        <h2 className={styles.heading}>Our Mission</h2>
        <p className={styles.paragraph}>
          To empower businesses with intelligent tech solutions that are clean,
          scalable, and impactful — turning complexity into clarity.
        </p>
      </div>

      <div className={styles.iconWrapper}>
        <Image
          src="/images/innovation-infinity.png"
          alt="Infinity symbol"
          width={1000}
          height={800}
          className={styles.icon}
        />
      </div>

      <div className={styles.textBlockR}>
        <h2 className={styles.heading}>Our Vision</h2>
        <p className={styles.paragraph}>
          To be the trusted tech partner for organizations ready to take a leap
          into the digital future, one wave at a time.
        </p>
      </div>
    </section>
  );
};

export default MissionVision;
