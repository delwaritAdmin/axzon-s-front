import { Metadata } from "next";
import Banner from "@/components/Home/Banner";
import EligibilityForm from "@/components/Home/EligibilityForm";
import Hero from "@/components/Home/Hero";
import JoinFamily from "@/components/Home/JoinFamily";
import JointCommissionCertification from "@/components/Home/JointCommissionCertification";
import Service from "@/components/Home/Service";

export const metadata: Metadata = {
  title: "Axzons Homecare | Professional Home Health Care Services",
  description:
    "Axzons Homecare provides professional home health care services. We offer personalized care plans, skilled nursing, and support for seniors and individuals with disabilities.",
  keywords:
    "home health care, senior care, disability support, nursing services, Axzons Homecare",
  openGraph: {
    title: "Axzons Homecare | Professional Home Health Care Services",
    description:
      "Personalized home health care services for seniors and individuals with disabilities.",
    images: [
      {
        url: "https://axzons.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Axzons Homecare Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axzons Homecare | Professional Home Health Care Services",
    description:
      "Personalized home health care services for seniors and individuals with disabilities.",
    images: ["https://axzons.com/twitter-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <Service />
      <EligibilityForm />
      <JoinFamily />
      <JointCommissionCertification />
    </>
  );
}
