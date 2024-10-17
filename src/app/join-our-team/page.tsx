import { Metadata } from "next";
import JoinOurTeamContent from "./JoinOurTeamContent";

export const metadata: Metadata = {
  title: "Join Our Team | Career Opportunities at Axzons Homecare",
  description:
    "Explore exciting career opportunities with Axzons Homecare. Join our team of dedicated professionals in providing exceptional home health care services.",
  openGraph: {
    title: "Join Our Team | Career Opportunities at Axzons Homecare",
    description:
      "Explore exciting career opportunities with Axzons Homecare. Join our team of dedicated professionals in providing exceptional home health care services.",
    images: [
      {
        url: "https://axzons.com/join-team-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Join Axzons Homecare Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Our Team | Career Opportunities at Axzons Homecare",
    description:
      "Explore exciting career opportunities with Axzons Homecare. Join our team of dedicated professionals in providing exceptional home health care services.",
    images: ["https://axzons.com/join-team-twitter-image.jpg"],
  },
};

export default function JoinOurTeamPage() {
  return <JoinOurTeamContent />;
}
