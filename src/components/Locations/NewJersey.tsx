"use client";

import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import OfficeLocationNJ from "./OfficeLocationNJ";
import Banner from "../Home/Banner";
import Service from "../Home/Service";
import JointCommissionCertification from "../Home/JointCommissionCertification";
import Descriptors from "../About/Descriptors";
import EligibilityForm2 from "./EligibilityForm2";
import Testimonial from "./Testimonial";
import SendMessageForm from "@/components/SendMessageForm";

const NewJersey = () => {
  const [isMessageFormOpen, setIsMessageFormOpen] = useState(false);

  const openMessageForm = () => setIsMessageFormOpen(true);
  const closeMessageForm = () => setIsMessageFormOpen(false);

  return (
    <>
      <div className="relative w-full bg-[#F3FFF0] overflow-hidden">
        <div className="w-full max-w-[1920px] mx-auto min-h-[500px] flex flex-col lg:flex-row items-start justify-between p-4 sm:p-8 md:p-16 lg:p-[100px_80px] xl:p-[100px_160px] gap-0 sm:gap-6 md:gap-8 lg:gap-10 relative">
          <div className="w-full lg:w-1/2 xl:w-[calc(100%-640px)] 2xl:w-2/5 lg:mb-0 flex flex-col gap-4 lg:gap-6 z-10">
            <div className="w-full mb-4 lg:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-[48px] xl:text-[55px] font-bold leading-tight md:leading-[1.2] lg:leading-[1.2] text-black mb-6">
                New Jersey
              </h1>
              <div className="space-y-3 sm:space-y-3 mb-4 sm:mb-6 md:mb-8">
                <p className="text-base sm:text-lg text-black">
                  Axzons is a New Jersey licensed homecare agency. We provide homecare
                  services in all the counties of New Jersey.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full">
                <a
                  href="tel:8664299667"
                  className="w-full sm:flex-1 sm:max-w-[376px]"
                >
                  <Button
                    variant="primary"
                    className="w-full h-[65px] px-4 py-2.5 flex items-center justify-center gap-2 text-base sm:text-lg md:text-xl font-semibold whitespace-nowrap"
                  >
                    <Phone className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
                    <span className="truncate">(866) 4AXZONS</span>
                  </Button>
                </a>
                <Button
                  variant="outline"
                  className="w-full sm:flex-1 sm:max-w-[376px] h-[65px] px-4 py-2.5 flex items-center justify-center bg-white gap-2 border-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-md text-primary-600 text-base sm:text-lg md:text-xl font-semibold whitespace-nowrap"
                  onClick={openMessageForm}
                >
                  <Mail className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <span className="truncate">Send a message</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 2xl:w-[877px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[575px] xl:h-[735px] 2xl:h-[856px] relative mt-2 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2">
            <div className="relative w-full h-full">
              <Image
                src="/images/locations/NewJersey-Blob.png"
                alt="New Jersey illustration"
                fill
                sizes="(max-width: 1280px) 100vw, (max-width: 1556px) 589px, 877px"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                  width: "100%",
                  height: "100%",
                  maxWidth: "877px",
                  maxHeight: "856px",
                }}
                className="lg:w-[589px] xl:w-[735px] 2xl:w-[877px] lg:h-[575px] xl:h-[735px] 2xl:h-[856px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <Banner />
      <OfficeLocationNJ />
      <Service />
      <JointCommissionCertification />
      <Descriptors />
      <EligibilityForm2 />
      <Testimonial />
      <SendMessageForm isOpen={isMessageFormOpen} onClose={closeMessageForm} />
    </>
  );
};

export default NewJersey;
