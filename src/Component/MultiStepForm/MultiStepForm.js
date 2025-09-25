"use client";
import React, { useRef, useState } from "react";
import styles from "./MultiStepForm.module.css";
import IOButton from "../IOButton/IOButton";
import SuccessMessage from "../SuccessMessage/SuccessMessage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MultiStepForm = () => {
  const [ContactInformationStatus, setContactInformationStatus] =
    useState(true);
  const [ProjectDetailsStatus, setProjectDetailsStatus] = useState(false);
  const [submited, setSubmited] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const numberRef = useRef(null);
  const servicesRef = useRef(null);
  const budgetRef = useRef(null);
  const projectDescriptionRef = useRef(null);

  if (submited) {
    return <SuccessMessage message={"Your Service Request Submitted!"} />;
  }

  return (
    <div className={styles.MultiStepForm}>
      {/* Contact Information */}
      <div
        className={`${styles.ContactInformationContainer} ${
          ContactInformationStatus ? styles.extended : ""
        }`}
      >
        <div className={styles.heading}>
          <span className={styles.circle} />
          <h2>
            Contact Information
            <span className={styles.line} />
          </h2>
        </div>
        <div className={styles.data}>
          <h3>
            Let’s get started with your
            <br />
            contact information
          </h3>

          <div className={styles.inputContainer}>
            <input
              className={styles.inputFild}
              type="text"
              placeholder="Name"
              ref={nameRef}
            />
            <input
              className={styles.inputFild}
              type="email"
              placeholder="Email"
              ref={emailRef}
            />
            <input
              className={styles.inputFild}
              type="text"
              placeholder="Phone"
              ref={numberRef}
            />
          </div>
          <div className={styles.nextBtn}>
            <IOButton
              title="Next"
              onClick={() => {
                if (
                  !nameRef.current.value.trim() ||
                  !emailRef.current.value.trim() ||
                  !numberRef.current.value.trim()
                ) {
                  toast.error("Please enter all contact details!");
                } else {
                  setProjectDetailsStatus(true);
                  setContactInformationStatus(false);
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div
        className={`${styles.ProjectDetailsContainer} ${
          ProjectDetailsStatus ? styles.extended : ""
        }`}
      >
        <div className={styles.heading}>
          <span className={styles.circle} />
          <h2>
            Project Details
            <span className={styles.line} />
          </h2>
        </div>
        <div className={styles.data}>
          <h3>Tell us about your project</h3>

          <div className={styles.inputContainer}>
            <input
              className={styles.inputFild}
              type="text"
              placeholder="Which Service You Needed"
              ref={servicesRef}
            />
            <input
              className={styles.inputFild}
              type="text"
              placeholder="Budget"
              ref={budgetRef}
            />
            <textarea
              className={styles.inputFild}
              rows={4}
              placeholder="Explain about your project - OPTIONAL"
              ref={projectDescriptionRef}
            />
          </div>

          <div className={'w-full flex justify-between'}>
              <IOButton
                back={true}
                title="Back"
                onClick={() => {
                  setProjectDetailsStatus(false);
                  setContactInformationStatus(true);
                }}
                backArrow={true}
              />
              <IOButton
                title="Submit"
                onClick={() => {
                  if (
                    !servicesRef.current.value.trim() ||
                    !budgetRef.current.value.trim()
                  ) {
                    toast.error("Please fill all required project details!");
                  } else {
                    setProjectDetailsStatus(false);
                    setContactInformationStatus(true);
                    setSubmited(true);
                  }
                }}
              />
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body"
        progressClassName="custom-progress-bar"
      />
    </div>
  );
};

export default MultiStepForm;
