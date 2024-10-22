import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import Link from "next/link";

const ZipCodeSearch: React.FC = () => {
  const [showLocation, setShowLocation] = useState(false);

  const handleUseCurrentLocation = () => {
    setShowLocation(true);
  };

  return (
    <div className="flex flex-col gap-3 sm:gap-5">
      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
        Enter your ZIP Code
      </h4>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
        <div className="flex items-center px-3 py-2 sm:py-3 bg-white border border-[#797979] rounded-md w-full sm:w-[286px]">
          <input
            type="text"
            placeholder="ZIP Code"
            className="w-full text-base sm:text-lg text-[#797979] bg-transparent outline-none"
          />
        </div>
        <Button
          variant="primary"
          className="flex items-center justify-center gap-2 w-full sm:w-[162px] h-[40px] sm:h-[49px]"
        >
          <Search className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          <span className="text-base sm:text-lg md:text-xl font-semibold">
            Search
          </span>
        </Button>
      </div>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-[#F8F3FE] border-b-2 border-[#7E22CE] rounded-t-md w-full sm:w-[286px]"
        onClick={handleUseCurrentLocation}
      >
        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#7E22CE]" />
        <span className="text-base sm:text-lg md:text-xl font-semibold text-[#7E22CE]">
          Use Current Location
        </span>
      </Button>

      {showLocation && (
        <div className="flex flex-col gap-2.5 mt-2.5 w-full sm:w-[468px]">
          <p className="text-lg font-normal text-[#222222]">
            1 location(s) in the surrounding area:
          </p>
          <div className="flex flex-col items-end p-3 gap-2.5 bg-white border border-[#797979] rounded-md">
            <div className="flex flex-row justify-between items-end w-full">
              <div className="flex flex-col items-start gap-2.5">
                <h5 className="text-lg font-bold text-[#222222]">
                  Valley Stream, NY
                </h5>
                <p className="text-lg font-normal text-[#222222]">
                  70 East Sunrise Hwy Suite 500,
                  <br />
                  Valley Stream, NY 11581
                </p>
                <p className="text-lg font-normal text-[#222222]">
                  (866) 429-9667
                </p>
              </div>
              <Link href="/locations/new-york">
                <Button
                  variant="outline"
                  className="mt-auto self-end px-3 md:px-5 py-2.5 border border-primary-600 text-primary-600 rounded-md text-lg sm:text-xl font-semibold hover:bg-[#F3E8FF] hover:border-primary-600 hover:text-primary-600 transition-colors w-[153px] h-[45px] flex items-center justify-center"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ZipCodeSearch;
