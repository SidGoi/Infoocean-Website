"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./CurrentOpenings.module.css";
import SuccessMessage from "../SuccessMessage/SuccessMessage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IOButton from "../IOButton/IOButton";

gsap.registerPlugin(ScrollTrigger);

const CurrentOpenings = () => {
  const [current, setCurrent] = useState(null);

  const jobData = [
    {
      title: "Python Developer",
      type: "Fulltime",
      location: "Remote",
      experience: "0-2 Year Experienced",
      about:
        "We are looking for a Python Developer to join our team. The ideal candidate should have a strong understanding of Python and its frameworks, with experience in developing scalable applications.",
      responsibilities: [
        "Write clean, maintainable, and efficient Python code",
        "Develop and maintain web applications using Python frameworks",
        "Collaborate with cross-functional teams to define, design, and ship new features",
        "Participate in code reviews and maintain code quality standards",
        "Collaborate with front-end developers and other team members to integrate user-facing elements",
      ],
      whyJoin: [
        "Competitive salary and benefits",
        "Opportunity to work on exciting projects",
        "Flexible working hours and remote work options",
        "Supportive and collaborative team environment",
      ],
    },
    {
      title: "React Developer",
      type: "Part-time",
      location: "Hybrid",
      experience: "1-3 Years Experienced",
      about:
        "We are seeking a talented React Developer to create engaging web applications with modern UI/UX practices.",
      responsibilities: [
        "Build and maintain scalable React applications",
        "Work closely with designers and backend developers",
        "Ensure performance and responsiveness of applications",
        "Write reusable components and maintain clean codebase",
      ],
      whyJoin: [
        "Work with cutting-edge technologies",
        "Friendly team and work culture",
        "Learning and growth opportunities",
        "Health and wellness benefits",
      ],
    },
  ];

  // ---------------- Job Card ----------------
  const JobCard = ({ job, index }) => {
    const [stage, setStage] = useState(0);
    const [dragActive, setDragActive] = useState(false);
    const [file, setFile] = useState(null);

    const handleDrag = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };

    const handleDrop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        setFile(e.dataTransfer.files[0]);
      }
    };

    const handleChange = (e) => {
      if (e.target.files && e.target.files[0]) {
        setFile(e.target.files[0]);
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setStage(2);
    };

    if (stage === 2) {
      return (
        <div
          className={`${styles.jobCardDescription} ${styles.active} ${styles.applyForm}`}
        >
          <SuccessMessage message={"Your form submitted"} />
        </div>
      );
    }

    return (
      <div className={styles.jobCardContainer}>
        <div className={styles.jobCard}>
          <div className={styles.left}>
            <div className={styles.JobTitle}>{job.title}</div>
            <div className={styles.JobData}>
              {job.type} - {job.location}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.experience}>{job.experience}</div>
            <div className={styles.btn}>
              {current === index ? (
                stage === 0 ? (
                  <IOButton
                    title="Apply"
                    onClick={() => {
                      setStage(1);
                    }}
                  />
                ) : (
                  <IOButton
                    title="Back"
                    onClick={() => {
                      setStage(0);
                    }}
                    backArrow={true}
                  />
                )
              ) : (
                <IOButton
                  title="Explore more"
                  onClick={() => setCurrent(current === index ? null : index)}
                />
              )}
            </div>
          </div>
        </div>

        {stage === 0 ? (
          <div
            className={`${styles.jobCardDescription} ${
              current === index ? styles.active : ""
            }`}
          >
            <div className={styles.jobCardDescriptionContent}>
              <div className={styles.jobCardDescriptionTitle}>
                About the Role
              </div>
              <div className={styles.jobCardDescriptionData}>{job.about}</div>
            </div>

            <div className={styles.jobCardDescriptionContent}>
              <div className={styles.jobCardDescriptionTitle}>
                Responsibilities
              </div>
              <div className={styles.jobCardDescriptionData}>
                {job.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </div>
            </div>

            <div className={styles.jobCardDescriptionContent}>
              <div className={styles.jobCardDescriptionTitle}>Why Join Us</div>
              <div className={styles.jobCardDescriptionData}>
                {job.whyJoin.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </div>
            </div>
          </div>
        ) : stage === 1 ? (
          <div
            className={`${styles.jobCardDescription} ${styles.active} ${styles.applyForm}`}
          >
            <div className={styles.formTitle}>Job application form</div>
            <div className={styles.form}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row}>
                  <input
                    type="text"
                    placeholder="First name"
                    className={styles.input}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className={styles.input}
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className={styles.inputFull}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className={styles.inputFull}
                  required
                />

                {/* Drag & Drop Box */}
                <div
                  className={`${styles.dropzone} ${
                    dragActive ? styles.active : ""
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    style={{ display: "none" }}
                    id="uploadInput"
                  />
                  <label htmlFor="uploadInput">
                    {file ? (
                      <span className={styles.fileName}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#666"
                        >
                          <path d="M382-320 155-547l57-57 170 170 366-366 57 57-423 423ZM200-160v-80h560v80H200Z" />
                        </svg>
                        {file.name}
                      </span>
                    ) : (
                      <span>Drop your resume here or click to upload</span>
                    )}
                  </label>
                </div>

                <button type="submit" className={styles.button}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <div className={styles.CurrentOpeningsContainer}>
      <div className={styles.Pagetitle}>Current Openings</div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>Design</div>
        {jobData.map((job, index) => (
          <JobCard key={index} job={job} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CurrentOpenings;
