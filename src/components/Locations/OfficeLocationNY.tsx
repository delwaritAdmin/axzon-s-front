import React from "react";
import Image from "next/image";

const OfficeLocation = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-[1600px] mx-auto">
        <div className="flex flex-col items-start gap-10 max-w-[682px] w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <h2 className="text-5xl font-bold text-black leading-[61px]">
              Our Office Locations
            </h2>
          </div>
          <ul className="space-y-4 w-full">
            <li>
              <a
                href="#"
                className="text-lg text-black hover:underline leading-[23px]"
              >
                70 East Sunrise Hwy Suite 500, Valley Stream, NY 11581 
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg text-black hover:underline leading-[23px]"
              >
                580 Hempstead Turnpike, West Hempstead, NY 11552
              </a>
            </li>
          </ul>
        </div>
        <div className="relative w-full md:w-[761.79px] h-[427px]">
          <Image
            src="/images/locations/map.png"
            alt="Office Locations Map"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Added grid section */}
      <div className="grid md:grid-cols-2 gap-10 mt-20">
        <div className="relative aspect-video rounded-3xl overflow-hidden">
          <Image
            src="/images/services/thamnail1.png"
            alt="CDPAP Video"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative aspect-video rounded-3xl overflow-hidden">
          <Image
            src="/images/services/thamnail2.png"
            alt="Home Health Aide Review"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocation;
