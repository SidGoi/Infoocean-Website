"use client";
import React, { useState } from "react";
import SuccessMessage from "../SuccessMessage/SuccessMessage";

const MultiStepContactForm = () => {
  const [stage, setStage] = useState(0);
  return stage !== 3 ? (
    <div
      className={`flex flex-col md:flex-row gap-8 items-center justify-center`}
    >
      <div
        className={`bg-light border-1 border-primary p-5 rounded-2xl w-full md:w-fit md:min-h-[450px] flex 2xl:min-h-[600px] transition-all duration-300 ${
          stage === 1 ? "md:min-w-fit h-fit" : "md:min-w-[600px] min-h-[500px]"
        }`}
      >
        {stage === 0 && (
          <div className="flex justify-center items-center gap-2 cursor-pointer px-5 w-full transition-all duration-300">
            <span className="h-3 w-3 bg-gray rounded-full" />
            <div className="py-[1px] border-b-1 border-primary">
              Opened!
              <button
                onClick={() => {
                  setStage(1);
                }}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {stage === 1 && (
          <div className="flex justify-center items-center gap-2 cursor-pointer px-5 w-full transition-all duration-300">
            <span className="h-3 w-3 bg-gray rounded-full" />
            <div className="py-[1px] border-b-1 border-primary">
              Contact Information
            </div>
          </div>
        )}
      </div>
      <div
        className={`bg-light border-1 border-primary p-5 rounded-2xl w-full md:w-fit md:min-h-[450px] 2xl:min-h-[600px] flex max-w-[2000px]  ${
          stage === 0 ? "md:min-w-fit h-fit" : "md:min-w-[600px] min-h-[500px]"
        }`}
      >
        {stage === 1 && (
          <div className="flex justify-center items-center gap-2 cursor-pointer px-5  w-full transition-all duration-300">
            <span className="h-3 w-3 bg-gray rounded-full" />
            <div className="py-[1px] border-b-1 border-primary">
              Opened!
              <button
                onClick={() => {
                  setStage(0);
                }}
              >
                Back
              </button>
              <button
                onClick={() => {
                  setStage(3);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        )}
        {stage === 0 && (
          <div className="flex justify-center items-center gap-2 cursor-pointer px-5  w-full 2xl:min-h-[600px]">
            <span className="h-3 w-3 bg-gray rounded-full" />
            <div className="py-[1px] border-b-1 border-primary">
              Contact Information
            </div>
          </div>
        )}
      </div>
    </div>
  ) : (
    <SuccessMessage message={"Your Service Request Submitted!"} />
  );
};

export default MultiStepContactForm;
