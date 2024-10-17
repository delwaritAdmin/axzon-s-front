import React from "react";
import CDPAP from "@/components/Services/CDPAP";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CDPAP Services | Consumer Directed Personal Assistance Program",
  description:
    "Learn about Axzons' CDPAP services. We help Medicaid-eligible New York residents hire, train, and supervise personal assistants for home care.",
  openGraph: {
    title: "CDPAP Services | Axzons Homecare",
    description:
      "Discover how Axzons' CDPAP program can help you manage your home care needs with personalized assistance.",
    images: [
      {
        url: "https://axzons.com/images/cdpap-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Axzons CDPAP Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CDPAP Services | Axzons Homecare",
    description:
      "Explore Axzons' Consumer Directed Personal Assistance Program for personalized home care solutions.",
    images: ["https://axzons.com/images/cdpap-twitter-image.jpg"],
  },
};

const CDPAPPage = () => {
  return (
    <>
      {/* <div className="relative w-full bg-[#F3FFF0]">
        <div className="max-w-[1600px] mx-auto min-h-[501px] flex flex-col lg:flex-row items-start p-4 sm:p-8 md:pb-12 lg:pb-20 gap-4 sm:gap-6 isolate overflow-hidden">
          <div className="w-full lg:w-1/2 z-10">
            <h2 className="w-full lg:w-[648px] text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold leading-tight sm:leading-[1.2] md:leading-[1.3] lg:leading-[61px] text-[#222222]">
              Consumer Directed
              <br />
              (CDPAP)
            </h2>

            <div className="flex flex-col items-start gap-3 sm:gap-4 md:gap-5 w-full lg:w-[648px] mt-4 sm:mt-6 md:mt-8 lg:mt-10">
              <p className="text-base sm:text-lg leading-normal sm:leading-relaxed md:leading-[23px] text-[#222222]">
                Axzons is a Lead CDPAP agency, awarded by the New York State
                Department of Health.
              </p>
              <p className="text-base sm:text-lg leading-normal sm:leading-relaxed md:leading-[23px] text-[#222222]">
                Managed by doctors and nurses, we expertly navigate the CDPAP
                program, helping Medicaid-eligible New York residents hire,
                train, and supervise personal assistants.
              </p>
              <p className="text-base sm:text-lg leading-normal sm:leading-relaxed md:leading-[23px] text-[#222222]">
                We ensure efficient application processing and compliance with
                state guidelines to secure the benefits you deserve.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12">
              <Button
                variant="primary"
                className="w-full sm:w-[300px] md:w-[340px] lg:w-[376px] h-[50px] sm:h-[60px] md:h-[65px] px-4 md:px-8 py-2 sm:py-2.5 rounded-xl transition-all duration-300 group text-white font-semibold text-base sm:text-lg md:text-xl flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white group-hover:text-primary-600" />
                <span className="group-hover:text-primary-600">
                  (866) 4AXZONS
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full bg-primary-50 sm:w-[300px] md:w-[340px] lg:w-[376px] h-[50px] sm:h-[60px] md:h-[65px] px-4 md:px-8 py-2 sm:py-2.5 rounded-xl border border-[#7E22CE] text-[#7E22CE] hover:bg-[#F3E8FF] hover:border-[#7E22CE] font-semibold text-base sm:text-lg md:text-xl flex items-center justify-center gap-2 transition-all duration-300"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                Send a message
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:absolute lg:right-0 lg:top-0 lg:bottom-0">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full">
              <Image
                src="/images/cdpap-mobile.png"
                alt="CDPAP Service Illustration"
                fill
                className="object-contain sm:hidden"
              />
              <Image
                src="/images/cdpap.png"
                alt="CDPAP Service Illustration"
                fill
                className="hidden sm:block object-cover object-right-top"
              />
            </div>
          </div>
        </div>
      </div>
      <Banner />
      <EligibilityForm />
      <HowItWorksFAQ />
      <CDPAPEligibility /> */}
      <CDPAP />
    </>
  );
};

export default CDPAPPage;
