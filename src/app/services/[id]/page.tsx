import React from "react";
import { notFound } from "next/navigation";

import HomecareServices from "@/components/Services/Homecare";
import PrivateDutyNursing from "@/components/Services/PrivateDutyNursing";
import SpecializedCare from "@/components/Services/SpecializedCare";
import NutritionalCounseling from "@/components/Services/NutritionalCounseling";
import MedicalSocialService from "@/components/Services/MedicalSocialService";
import CDPAP from "@/components/Services/CDPAP";
import { Metadata } from "next";
import { serviceData } from "@/constants/ServicesData";

export async function generateStaticParams() {
  return serviceData.map((service) => ({
    id: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const service = serviceData.find((s) => s.slug === params.id);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Axzons Homecare Services`,
    description: service.description,
    keywords: `${service.title.toLowerCase()}, home health care, Axzons Homecare, ${service.slug.replace(
      "-",
      " "
    )}`,
    openGraph: {
      title: `${service.title} | Axzons Homecare Services`,
      description: service.description,
      images: [
        {
          url: `https://axzons.com${service.image}`,
          width: 800,
          height: 600,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Axzons Homecare Services`,
      description: service.description,
      images: [`https://axzons.com${service.image}`],
    },
  };
}

const ServicePage = ({ params }: { params: { id: string } }) => {
  const service = serviceData.find((s) => s.slug === params.id);

  if (!service) {
    notFound();
  }

  // Render the appropriate component based on the service slug
  const renderServiceComponent = () => {
    switch (service.slug) {
      case "homecare-services":
        return <HomecareServices />;
      // Add cases for other services as you create their components
      case "private-duty-nursing":
        return <PrivateDutyNursing />;
      case "specialized-care":
        return <SpecializedCare />;
      case "nutritional-counseling":
        return <NutritionalCounseling />;
      case "medical-social-service":
        return <MedicalSocialService />;
      case "cdpap":
        return <CDPAP />;
      default:
        // Fallback content if no specific component is available
        return (
          <div>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
          </div>
        );
    }
  };

  return <div>{renderServiceComponent()}</div>;
};

export default ServicePage;
