import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Homecare Services",
    description:
      "We are deeply committed to providing high-quality home health care services to our clients.",
    icon: "/images/services/homecare.png",
  },
  {
    title: "Private Duty Nursing",
    description:
      "Our nursing staff is trained to tailor plans based on medical advice and social needs of the client.",
    icon: "/images/services/nursing.svg",
  },
  {
    title: "Specialized Care",
    description:
      "Axzons has trained caregivers for clients with conditions including Parkinson's, Down's Syndrome, COPD, etc.",
    icon: "/images/services/specialized.svg",
  },
  {
    title: "Nutritional Counseling",
    description:
      "Our nutritional counselors can help in managing diets to counteract ill effects of debilitating diseases.",
    icon: "/images/services/nutrition.svg",
  },
  {
    title: "Medical Social Service",
    description:
      "We provide holistic support addressing the social and emotional needs of our clients.",
    icon: "/images/services/social.svg",
  },
  {
    title: "CDPAP",
    description:
      "Managed by a team of doctors and nurses, Axzons is a CDPAP agency for the entire state of New York.",
    icon: "/images/services/cdpap.svg",
  },
];

const ServicesOverview = () => {
  return (
    <div className="bg-[#F8F3FE] py-12 sm:py-16 md:py-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 sm:p-6 flex flex-col"
            >
              <div className="flex items-start gap-4 sm:gap-6 mb-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#F3E8FF] rounded-[6.55px] flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={32}
                    height={32}
                    className="sm:w-10 sm:h-10"
                  />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-lg sm:text-xl text-[#222222] mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-[#797979]">
                    {service.description}
                  </p>
                </div>
              </div>
              <button className="mt-auto self-end text-[#6B21A8] font-semibold text-sm border border-[#6B21A8] rounded-sm px-4 py-2 hover:bg-[#6B21A8] hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
