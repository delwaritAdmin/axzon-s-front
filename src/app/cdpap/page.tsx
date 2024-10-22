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
      <CDPAP />
    </>
  );
};

export default CDPAPPage;
