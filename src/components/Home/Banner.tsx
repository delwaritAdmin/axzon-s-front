import React from "react";
import Image from "next/image";
import { Clock, Stethoscope } from "lucide-react";

interface BannerItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BannerItem: React.FC<BannerItemProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="grid grid-cols-[84px_1fr] gap-4 items-center w-full">
    <div className="w-[84px] h-[84px] flex items-center justify-center rounded-full">
      {icon}
    </div>
    <div className="flex flex-col justify-center gap-2">
      <h3 className="font-bold text-lg text-white">{title}</h3>
      <p className="font-normal text-base leading-[23px] text-white">
        {description}
      </p>
    </div>
  </div>
);

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4 md:px-20 lg:px-40 py-10 w-full bg-[#4E2E87]">
      <BannerItem
        icon={
          <div className="relative w-[84px] h-[84px]">
            <Image
              src="/images/Union.png"
              alt="Quality"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        }
        title="Care"
        description="The care you need at the home you love."
      />
      <BannerItem
        icon={<Clock size={80} color="#F8F3FE" />}
        title="Assistance"
        description="Homecare assistance available 24/7."
      />
      <BannerItem
        icon={
          <div className="relative w-[84px] h-[84px]">
            <Image
              src="/images/quality.png"
              alt="Quality"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        }
        title="Quality"
        description="Accredited by authorized state agencies."
      />
      <BannerItem
        icon={<Stethoscope size={80} color="#F8F3FE" />}
        title="Management"
        description="Managed by trained doctors and nurses."
      />
    </div>
  );
};

export default Banner;
