import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Live-in Care",
    description:
      "Our live-in care services provide continuous, personalized support, ensuring comfort and safety around the clock in your own home. Our dedicated caregivers live with your loved ones, offering constant assistance and companionship.",
    icon: "/images/services/live.png",
  },
  {
    title: "Companion Care",
    description:
      "Enhance the quality of life for your loved ones with our companion care services. Our caregivers provide emotional support, engage in social activities, and assist with daily tasks, fostering a sense of companionship and well-being.",
    icon: "/images/services/companion.png",
  },
  {
    title: "Respite Care",
    description:
      "Our respite care services offer temporary relief for primary caregivers, ensuring their loved ones receive quality care while they take a much-needed break. We provide peace of mind knowing that your family member is in good hands.",
    icon: "/images/services/respite.png",
  },
  {
    title: "Personal Care",
    description:
      "Our compassionate personal care services assist with daily activities, promoting dignity and independence for our clients. From bathing and grooming to mobility assistance, we ensure your loved ones receive the highest quality care.",
    icon: "/images/services/personal.png",
  },
  {
    title: "Home Health Aide",
    description:
      "Our skilled home health aides provide essential support for personal care and health-related tasks, ensuring comfort and safety at home. They are trained to handle a variety of needs, from medication reminders to basic health monitoring.",
    icon: "/images/services/homehealth.png",
  },
  {
    title: "Homemaker Services",
    description:
      "Our homemaker services focus on maintaining a clean and safe living environment. From meal preparation to light housekeeping, we help manage household tasks so your loved ones can enjoy living in a comfortable home.",
    icon: "/images/services/home-maker.png",
  },
  {
    title: "Housekeeper Services",
    description:
      "Our professional housekeepers ensure your home remains spotless and organized. They handle all cleaning duties, including vacuuming, dusting, mopping, organization, and more, allowing you to focus on what matters most.",
    icon: "/images/services/housekeeper.png",
  },
];

const HomeCareService8 = () => {
  return (
    <div className="bg-[#F8F3FE] py-12 sm:py-16 md:py-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
            >
              <div className="flex-shrink-0 w-24 h-24 sm:w-[107px] sm:h-[107px] bg-[#F3E8FF] rounded-[6.55px] flex items-center justify-center">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={100}
                  height={100}
                  className="sm:w-[84px] sm:h-[84px]"
                />
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-2xl text-[#222222] mb-2">
                  {service.title}
                </h4>
                <p className="text-lg text-[#797979]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCareService8;
