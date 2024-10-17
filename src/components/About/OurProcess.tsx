import React from "react";
import Image from "next/image";

const processSteps = [
  [
    { icon: "/images/ph_phone-fill.png", text: "Homecare service request" },
    { icon: "/images/ic_round-mail.png", text: "Patient referral" },
  ],
  [
    {
      icon: "/images/healthicons_doctor-male.png",
      text: "Patient needs analyzed",
    },
    { icon: "/images/payment.png", text: "Insurance/payment advice" },
    { icon: "/images/caregiver.png", text: "Caregiver is assigned" },
    { icon: "/images/care-plan.png", text: "Tailored care plan created" },
  ],
  [
    { icon: "/images/handshake.png", text: "Start of service" },
    { icon: "/images/24-7.png", text: "24/7 Axzons care" },
  ],
];

const Arrow = ({ direction = "right", className = "" }) => (
  <svg
    width="75"
    height="20"
    viewBox="0 0 75 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transform ${
      direction === "down" ? "rotate-90" : ""
    } ${className}`}
  >
    <path d="M60 0L75 10L60 20V0Z" fill="#7E22CE" />
    <rect x="0" y="8" width="62" height="4" fill="#7E22CE" />
  </svg>
);

interface ProcessStepProps {
  step: {
    icon: string;
    text: string;
  };
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step }) => (
  <div className="flex flex-col items-center w-full max-w-[140px]">
    <div className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 flex items-center justify-center mb-2">
      <Image
        src={step.icon}
        alt={step.text}
        width={70}
        height={70}
        className="w-full h-full"
      />
    </div>
    <p className="text-center text-sm lg:text-base xl:text-lg leading-tight text-black h-[50px] flex items-center justify-center overflow-hidden">
      {step.text}
    </p>
  </div>
);

export default function OurProcess() {
  return (
    <div className="bg-[url('/images/bg_ourprocess.jpg')] bg-cover">
      <div className="bg-[rgba(248,243,254,0.5)] py-10 sm:py-16 md:py-20 px-4 sm:px-4 lg:px-6">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center mb-8 sm:mb-12 md:mb-16">
            Our Process
          </h2>

          {/* Mobile layout (up to sm) */}
          <div className="sm:hidden flex flex-col items-center w-full mx-auto px-4">
            {/* Top row with separate arrows */}
            <div className="flex justify-between w-full mb-8">
              {processSteps[0].map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <ProcessStep step={step} />
                  <Arrow direction="down" className="w-10 h-10 mt-4" />
                </div>
              ))}
            </div>

            {/* Middle steps */}
            {processSteps[1].map((step, index) => (
              <React.Fragment key={index}>
                <ProcessStep step={step} />
                {index < processSteps[1].length - 1 && (
                  <Arrow direction="down" className="w-10 h-12 my-6" />
                )}
              </React.Fragment>
            ))}
            <Arrow direction="down" className="w-10 h-12 my-6" />

            {/* Bottom row */}
            <div className="flex justify-between w-full mt-8">
              {processSteps[2].map((step, index) => (
                <ProcessStep key={index} step={step} />
              ))}
            </div>
          </div>

          {/* Tablet and small laptop layout (sm to lg) */}
          <div className="hidden sm:flex lg:hidden flex-col items-center gap-6">
            <div className="flex justify-center items-center gap-4">
              {processSteps[0].map((step, index) => (
                <ProcessStep key={index} step={step} />
              ))}
            </div>
            <div className="flex justify-center w-full">
              <Arrow direction="down" className="w-12 h-10" />
              <div className="w-32"></div>
              <Arrow direction="down" className="w-12 h-10" />
            </div>
            <div className="flex justify-center items-center gap-4">
              {processSteps[1].map((step, index) => (
                <React.Fragment key={index}>
                  <ProcessStep step={step} />
                  {index < processSteps[1].length - 1 && (
                    <Arrow className="w-12 h-10" />
                  )}
                </React.Fragment>
              ))}
            </div>
            <Arrow direction="down" className="w-12 h-12" />
            <div className="flex justify-center items-center gap-4">
              {processSteps[2].map((step, index) => (
                <ProcessStep key={index} step={step} />
              ))}
            </div>
          </div>

          {/* Large screen layout (lg and above) */}
          <div className="hidden lg:block w-full max-w-[1600px] mx-auto">
            <div className="flex justify-between items-start">
              {/* First column */}
              <div className="flex flex-col items-start gap-8 w-1/4">
                {processSteps[0].map((step, index) => (
                  <div key={index} className="flex items-center w-full">
                    <ProcessStep step={step} />
                    <Arrow className="w-20 h-auto ml-4" />
                  </div>
                ))}
              </div>

              {/* Middle row */}
              <div className="flex flex-row justify-center items-center gap-2 mt-20 w-3/5">
                {processSteps[1].map((step, index) => (
                  <React.Fragment key={index}>
                    <ProcessStep step={step} />
                    {index < processSteps[1].length - 1 && (
                      <Arrow className="w-16 h-auto lg:w-20 xl:w-24" />
                    )}
                  </React.Fragment>
                ))}
                {/* Last arrow aligned with middle arrows */}
                <Arrow className="w-16 h-auto lg:w-20 xl:w-24" />
              </div>

              {/* Last column */}
              <div className="flex flex-col items-end gap-8 w-1/4">
                {processSteps[2].map((step) => (
                  <ProcessStep key={step.text} step={step} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
