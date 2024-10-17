import React from "react";
import { Metadata } from "next";
import { locations } from "@/components/Locations/LocationCard";
import { LocationCard } from "@/components/Locations/LocationCard";

export const metadata: Metadata = {
  title: "Our Locations | Axzons Homecare",
  description:
    "Find Axzons Homecare locations near you. We provide home health care services in multiple areas to better serve our community.",
  openGraph: {
    title: "Our Locations | Axzons Homecare",
    description:
      "Find Axzons Homecare locations near you. We provide home health care services in multiple areas to better serve our community.",
    images: [
      {
        url: "https://axzons.com/locations-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Axzons Homecare Locations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Locations | Axzons Homecare",
    description:
      "Find Axzons Homecare locations near you. We provide home health care services in multiple areas to better serve our community.",
    images: ["https://axzons.com/locations-twitter-image.jpg"],
  },
};

export default function AxzonsLocations() {
  return (
    <section className="bg-green-50 py-16 md:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1600px] mx-auto space-y-8 md:space-y-12">
        {locations.map((location, index) => (
          <LocationCard
            key={location.state}
            location={location}
            imagePosition={index % 2 === 0 ? "right" : "left"}
          />
        ))}
      </div>
    </section>
  );
}
