import React from "react";

const StepItem = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col w-full shadow-lg rounded-2xl overflow-hidden">
    <div className="flex items-center p-4 sm:p-6 gap-4 bg-primary-100">
      <div className="flex-shrink-0 flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 bg-primary-600 rounded-full">
        <span className="font-bold text-lg sm:text-xl text-white">{number}</span>
      </div>
      <h3 className="font-bold text-lg sm:text-xl text-black flex-grow h-auto">
        {title}
      </h3>
    </div>
    <div className="p-4 sm:p-6 bg-primary-50 h-full">
      <p className="text-base sm:text-lg text-black">{description}</p>
    </div>
  </div>
);

export default function HowItWorksFAQ() {
  const steps = [
    {
      number: "01",
      title: "Get Assessed",
      description:
        "A nurse will visit you at home to assess eligibility for Medicaid-funded in-home care and determine your weekly care hours.",
    },
    {
      number: "02",
      title: "Choose a Caregiver",
      description:
        "You choose a caregiver. The caregiver can be your daughter, son, relative, or friend. We visit your home to enroll you in the program.",
    },
    {
      number: "03",
      title: "You get care, they get paid",
      description:
        "You get ongoing care from a person who loves you. They get peace of mind because they're getting paid for the care they give.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-black">
          Here&apos;s how it works
        </h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <StepItem key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
