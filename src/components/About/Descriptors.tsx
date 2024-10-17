import React from "react";
import Image from "next/image";

const descriptors = [
  {
    icon: "/images/hugeicons_healtcare.png",
    text: "One-on-one, highly personalized services.",
  },
  {
    icon: "/images/mingcute_nurse-line.png",
    text: "Supervised by experienced physicians and nurses.",
  },
  {
    icon: "/images/icon-park-outline_family.png",
    text: "We place the patient and their families first.",
  },
  {
    icon: "/images/tabler_heart-up.png",
    text: "Significantly enhances treatment outcomes.",
  },
  {
    icon: "/images/lucide_hospital.png",
    text: "Reduce unnecessary hospital visits considerably.",
  },
  {
    icon: "/images/streamline_insurance-hand.png",
    text: "We accept all types of payments and insurances.",
  },
];

const Descriptors: React.FC = () => {
  return (
    <div className="bg-primary-50 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-1/4 space-y-6">
            {descriptors.slice(0, 3).map((item, index) => (
              <DescriptorItem key={index} icon={item.icon} text={item.text} />
            ))}
          </div>
          <div className="w-full lg:w-2/5 my-10 lg:my-0">
            <Image
              src="/images/Services_Illustration3.png"
              alt="Services Illustration"
              width={615}
              height={595}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/4 space-y-6">
            {descriptors.slice(3).map((item, index) => (
              <DescriptorItem
                key={index + 3}
                icon={item.icon}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface DescriptorItemProps {
  icon: string;
  text: string;
}

const DescriptorItem: React.FC<DescriptorItemProps> = ({ icon, text }) => {
  return (
    <>
      <div className="flex items-start bg-white p-4 rounded-xl shadow-md">
        <div className="flex-shrink-0 mr-4">
          <Image src={icon} alt="" width={48} height={48} />
        </div>
        <p className="text-[#797979] text-lg">{text}</p>
      </div>
    </>
  );
};

export default Descriptors;
