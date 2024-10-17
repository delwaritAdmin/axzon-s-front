import EligibilityForm2 from "@/components/Locations/EligibilityForm2";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Care | Axzons Homecare",
  description: "Request personalized home health care services from Axzons Homecare. Our team of professionals is ready to provide you with exceptional care tailored to your needs.",
  keywords: "request care, home health care, personalized care, Axzons Homecare, eligibility",
  openGraph: {
    title: "Request Care | Axzons Homecare",
    description: "Request personalized home health care services from Axzons Homecare. Our team of professionals is ready to provide you with exceptional care tailored to your needs.",
    images: [
      {
        url: "https://axzons.com/request-care-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Request Care from Axzons Homecare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Request Care | Axzons Homecare",
    description: "Request personalized home health care services from Axzons Homecare. Our team of professionals is ready to provide you with exceptional care tailored to your needs.",
    images: ["https://axzons.com/request-care-twitter-image.jpg"],
  },
};

const RequestCare = () => {
  return (
    <>
      <EligibilityForm2 />
    </>
  );
};

export default RequestCare;
