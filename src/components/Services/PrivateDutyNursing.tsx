"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Banner from "../Home/Banner";
import JointCommissionCertification from "../Home/JointCommissionCertification";
import OurProcess from "../About/OurProcess";
import FAQSection from "./FAQSection";
import SendMessageForm from "@/components/SendMessageForm";
import { useState } from "react";

export default function PrivateDutyNursing() {
  const [isMessageFormOpen, setIsMessageFormOpen] = useState(false);

  const openMessageForm = () => setIsMessageFormOpen(true);
  const closeMessageForm = () => setIsMessageFormOpen(false);

  return (
    <>
      <div className="relative w-full bg-[#F3FFF0] overflow-hidden">
        <div className="w-full max-w-[1920px] mx-auto min-h-[616px] flex flex-col lg:flex-row items-start justify-between p-4 sm:p-8 md:p-16 lg:p-[100px_80px] xl:p-[100px_160px] gap-0 sm:gap-6 md:gap-8 lg:gap-10 relative">
          <div className="w-full lg:w-1/2 xl:w-[calc(100%-595px)] 2xl:w-[calc(100%-750px)] lg:mb-0 flex flex-col gap-4 lg:gap-6 z-10">
            <div className="w-full mb-4 lg:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-[48px] xl:text-[55px] font-bold leading-tight md:leading-[1.2] lg:leading-[1.2] text-[#222222] mb-6">
                Private Duty Nursing
              </h1>
              <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8 md:mb-10">
                <p className="text-base sm:text-lg text-[#222222]">
                  Our private duty nursing services deliver expert medical care
                  with compassion and precision. Our professional nurses create
                  customized care plans to meet the specific medical and social
                  needs of your loved ones.
                </p>
                <p className="text-base sm:text-lg text-[#222222]">
                  Patients receive care from RNs or LPNs when a physician orders
                  services that exceed a certified home health aide&apos;s
                  scope.
                </p>
                <p className="text-base sm:text-lg text-[#222222]">
                  Private duty, skilled nursing, and visiting nurse services are
                  available through Medicaid, private payment, and some health
                  insurers. Intermittent rehabilitative care may also be
                  covered.
                </p>
                <p className="text-base sm:text-lg font-semibold text-[#222222]">
                  Axzons&apos;s skilled nursing care services include:
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-between mb-6 sm:mb-8 md:mb-10">
                <ul className="text-base sm:text-lg text-[#222222] space-y-2 mb-4 sm:mb-0">
                  <li>Initial client assessment</li>
                  <li>Pre- and post-operative care</li>
                  <li>Routine vital monitoring</li>
                  <li>Catheter care/change</li>
                  <li>Trach/vent care</li>
                  <li>Pain management</li>
                  <li>Infusion/IV therapies</li>
                </ul>
                <div className="hidden sm:block w-px bg-[#222222]"></div>
                <ul className="text-base sm:text-lg text-[#222222] space-y-2 ml-2">
                  <li>Tube feeding</li>
                  <li>Lab draws</li>
                  <li>Injections</li>
                  <li>Wound care</li>
                  <li>Pulmonary care</li>
                  <li>Medication management</li>
                  <li>Central line and port maintenance</li>
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
          <div className="w-full lg:w-1/2 2xl:w-[877px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[820px] 2xl:h-[956px] relative lg:absolute lg:right-0 2xl:-top-20 xl:-top-20">
            <div className="relative w-full h-full">
              <Image
                src="/images/services/private-duty.png"
                alt="Private Duty Nursing illustration"
                fill
                sizes="(max-width: 1280px) 100vw, (max-width: 1556px) 589px, 877px"
                style={{
                  objectFit: "contain",
                  objectPosition: "top center",
                  width: "100%",
                  height: "100%",
                  maxWidth: "877px",
                  maxHeight: "956px",
                }}
                className="lg:w-[589px] xl:w-[735px] 2xl:w-[877px] lg:h-[700px] xl:h-[820px] 2xl:h-[956px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <Banner />
      <JointCommissionCertification />
      <OurProcess />
      <FAQSection />
      <SendMessageForm isOpen={isMessageFormOpen} onClose={closeMessageForm} />
    </>
  );
}
