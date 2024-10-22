import React from "react";
import Image from "next/image";
import JointCommissionCertification from "../Home/JointCommissionCertification";
import EligibilityForm from "../Home/EligibilityForm";
import Descriptors from "./Descriptors";
import OurProcess from "./OurProcess";

const philosophyItems = [
  {
    title: "Patient-Centered Care",
    description:
      "Get specialized homecare in NY, NJ, or GA, with care plans are meticulously tailored to meet your unique needs.",
    icon: "/images/healthicons_outpatient.png",
  },
  {
    title: "Dignity & Respect",
    description:
      "Our certified caregivers provide home nursing care in NJ, NY, and GA with the utmost respect and dedication.",
    icon: "/images/mdi_hand-heart.png",
  },
  {
    title: "Independence & Autonomy",
    description:
      "From affordable live-in care in GA to in-home nursing care in NY and NJ, we empower you to choose your care.",
    icon: "/images/material-symbols_self-care.png",
  },
  {
    title: "Comprehensive Care",
    description:
      "From respite care for in NY to specialized Alzheimer's care in NJ and GA, we consider every aspect of your health.",
    icon: "/images/healthicons_world-care.png",
  },
  {
    title: "Coordination & Continuity",
    description:
      "Our trusted homecare agency for seniors in NJ, NY, and GA ensures that you receive consistent and seamless care.",
    icon: "/images/fluent_people-team-16-filled.png",
  },
  {
    title: "Affordability & Accessibility",
    description:
      "We provide Department of Health certified caregivers and ensure that all services are easily accessible.",
    icon: "/images/bx_accessibility.png",
  },
];

const Philosophy: React.FC = () => {
  return (
    <>
      <div className="bg-[#F8F3FE] px-4 sm:px-6 lg:px-8 pt-20 relative">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black pb-10 sm:pb-16">
            Our Philosophy
          </h2>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8">
            <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pb-20">
              {philosophyItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-xl shadow-[0px_4px_12px_rgba(34,34,34,0.1)] flex flex-col sm:flex-row gap-4 h-full"
                >
                  <div className="bg-[#F3E8FF] p-3 rounded-lg flex-shrink-0 w-[105.62px] h-[105.62px] flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={78}
                      height={78}
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <h4 className="text-xl sm:text-2xl font-bold text-[#222222] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[#797979] text-base sm:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-1/3 lg:absolute lg:right-8 lg:bottom-0">
              <Image
                src="/images/Services_Illustration2.png"
                alt="Services Illustration"
                width={510}
                height={653}
              />
            </div>
          </div>
        </div>
      </div>
      <JointCommissionCertification />
      <EligibilityForm />
      <Descriptors />
      <OurProcess />
    </>
  );
};

export default Philosophy;
