import React, { useEffect, useRef } from "react";
import styles from "./SuccessMessage.module.css";
import Image from "next/image";
import gsap from "gsap";

const SuccessMessage = ({ icon, message }) => {
  const wrapperRef = useRef(null);
  const iconRef = useRef(null);
  const messageRef = useRef(null);
  const boomRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // 👇 Boom effect particles (create 10 divs)
    for (let i = 0; i < 12; i++) {
      const dot = document.createElement("div");
      dot.className = styles.dot;
      boomRef.current.appendChild(dot);

      const angle = i * 30 * (Math.PI / 180); // Spread evenly
      const distance = 100 + Math.random() * 50;

      gsap.fromTo(
        dot,
        { x: 0, y: 0, opacity: 1 },
        {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
          scale: 0,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.1,
        }
      );
    }

    // ✨ Main animation
    tl.fromTo(
      wrapperRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out", delay: 0.1 }
    )
      .fromTo(
        iconRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.4"
      )
      .fromTo(
        messageRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      );
    gsap.to(iconRef.current, {
      scale: 1.05,
      duration: 1.2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div ref={boomRef} className={styles.boom}></div>
      <div ref={iconRef} className={styles.iconBox}>
        <Image
          src={"/icons/Ribbon.svg"}
          alt="Success Icon"
          width={100}
          height={100}
        />
      </div>
      <h2 ref={messageRef} className={styles.message}>
        {message}
      </h2>
    </div>
  );
};

export default SuccessMessage;
