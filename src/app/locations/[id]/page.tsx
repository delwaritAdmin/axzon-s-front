import React from "react";
import { notFound } from "next/navigation";
import { locations } from "@/components/Locations/LocationCard";
import NewYork from "@/components/Locations/NewYork";
import NewJersey from "@/components/Locations/NewJersey";
import Georgia from "@/components/Locations/Georgia";
import { Metadata } from "next";

export async function generateStaticParams() {
  return locations.map((location: { slug: string }) => ({
    id: location.slug,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const location = locations.find(l => l.slug === params.id);
  
  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: `${location.state} | Axzons Homecare Locations`,
    description: `Axzons Homecare services in ${location.state}. ${location.description}`,
    keywords: `${location.state}, home health care, Axzons Homecare, ${location.slug.replace('-', ' ')}`,
    openGraph: {
      title: `${location.state} | Axzons Homecare Locations`,
      description: `Axzons Homecare services in ${location.state}. ${location.description}`,
      images: [
        {
          url: `https://axzons.com${location.mapImage}`,
          width: 800,
          height: 600,
          alt: `Axzons Homecare in ${location.state}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${location.state} | Axzons Homecare Locations`,
      description: `Axzons Homecare services in ${location.state}. ${location.description}`,
      images: [`https://axzons.com${location.mapImage}`],
    },
  };
}

const LocationPage = ({ params }: { params: { id: string } }) => {
  const location = locations.find((s) => s.slug === params.id);

  if (!location) {
    notFound();
  }

  const renderLocationComponent = () => {
    switch (location.slug) {
      case "new-york":
        return <NewYork />;
      case "new-jersey":
        return <NewJersey />;
      case "georgia":
        return <Georgia />;

      default:
        // Fallback content if no specific component is available
        return (
          <div>
            <h1>{location.state}</h1>
            <p>{location.description}</p>
          </div>
        );
    }
  };

  return <div>{renderLocationComponent()}</div>;
};

export default LocationPage;
