import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full bg-[#F3FFF0] relative overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto lg:h-[600px] flex flex-col lg:flex-row items-start justify-between p-6 sm:p-8 md:p-16 lg:p-[100px_80px] xl:p-[100px_160px] gap-4 sm:gap-6 md:gap-8 lg:gap-10 relative ">
        <div className="w-full sm:w-2/3 lg:w-1/2 mb-4 sm:mb-0 flex flex-col gap-4 lg:gap-6">
          <h1 className="text-3xl md:text-4xl lg:text-[48px] xl:text-[55px] font-bold leading-tight md:leading-[1] lg:leading-[81px] text-black">
            The care you need at the home you love
          </h1>
          <p className="text-base md:text-lg font-normal leading-relaxed md:leading-[23px] text-black">
            Axzons homecare has been a leading provider of homecare and CDPAP
            services in New York, New Jersey, and now in Georgia.
          </p>

          <a href="tel:8664299667">
            <Button
              variant="primary"
              className="w-full md:w-[376px] h-[65px] px-4 md:px-8 py-2.5 flex items-center justify-center gap-2 text-xl font-semibold"
            >
              <Phone className="h-5 w-5 md:h-6 md:w-6" />
              (866) 4AXZONS
            </Button>
          </a>
        </div>
        <div className="w-full lg:w-1/2 xl:w-[750px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[780px] relative mt-4 lg:mt-0 lg:absolute lg:right-0 xl:-right-20 lg:-top-20 lg:-bottom-20">
          <Image
            src="/images/heroImage-mobile.png"
            alt="Healthcare worker assisting elderly patient"
            layout="fill"
            objectFit="contain"
            className="sm:hidden"
          />
          <Image
            src="/images/heroBig.png"
            alt="Healthcare worker assisting elderly patient"
            layout="fill"
            objectFit="contain"
            className="hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
}
