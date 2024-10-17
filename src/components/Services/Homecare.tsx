"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Banner from "../Home/Banner";
import HomeCareService8 from "./HomeCareService8";
import JointCommissionCertification from "../Home/JointCommissionCertification";
import OurProcess from "../About/OurProcess";
import FAQSection from "./FAQSection";
import SendMessageForm from "@/components/SendMessageForm";
import { useState } from "react";

export default function HomecareServices() {
  const [isMessageFormOpen, setIsMessageFormOpen] = useState(false);

  const openMessageForm = () => setIsMessageFormOpen(true);
  const closeMessageForm = () => setIsMessageFormOpen(false);

  return (
    <>
      <div className="relative w-full bg-[#F3FFF0] overflow-hidden">
        <div className="w-full max-w-[1920px] mx-auto min-h-[616px] flex flex-col lg:flex-row items-start justify-between p-4 sm:p-8 md:p-16 lg:p-[100px_80px] xl:p-[100px_160px] gap-0 sm:gap-6 md:gap-8 lg:gap-10 relative">
          <div className="w-full lg:w-1/2 xl:w-[calc(100%-600px)] 2xl:w-2/5 lg:mb-0 flex flex-col gap-4 lg:gap-6 z-10">
            <div className="w-full mb-4 lg:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-[48px] xl:text-[55px] font-bold leading-tight md:leading-[1.2] lg:leading-[1.2] text-[#222222] mb-6">
                Homecare Services
              </h1>
              <p className="text-base md:text-lg text-[#222222] mb-6">
                Axzons Home Care Agency is dedicated to providing exceptional
                home health care services across New York, New Jersey, and
                Georgia. Our comprehensive range of services ensures that each
                client receives personalized care tailored to their unique
                needs.
              </p>
              <p className="text-base md:text-lg text-[#222222] mb-6">
                Our homecare services include:
              </p>
              <div className="flex justify-between mb-8">
                <ul className="text-base md:text-lg text-[#222222] space-y-2">
                  <li>Live-in Care</li>
                  <li>Companion Care</li>
                  <li>Respite Care</li>
                  <li>Personal Care</li>
                </ul>
                <div className="w-px bg-[#222222]"></div>
                <ul className="text-base md:text-lg text-[#222222] space-y-2">
                  <li>Home Health Aide</li>
                  <li>Homemaking Services</li>
                  <li>Housekeeping Services</li>
                </ul>
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
          <div className="w-full lg:w-1/2 2xl:w-[877px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[575px] xl:h-[735px] 2xl:h-[856px] relative lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2">
            <div className="relative w-full h-full">
              <Image
                src="/images/services/homecare-blob.png"
                alt="Homecare illustration"
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
      <HomeCareService8 />
      <JointCommissionCertification />
      <OurProcess />
      <FAQSection />
      <SendMessageForm isOpen={isMessageFormOpen} onClose={closeMessageForm} />
    </>
  );
}
