import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Phone } from "lucide-react";
import JoinFamily from "@/components/Home/JoinFamily";
import Philosophy from "@/components/About/Philosophy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Axzons Homecare",
  description:
    "Learn about Axzons Homecare, our mission, values, and commitment to providing exceptional home health care services.",
  openGraph: {
    title: "About Us | Axzons Homecare",
    description:
      "Learn about Axzons Homecare, our mission, values, and commitment to providing exceptional home health care services.",
    images: [
      {
        url: "https://axzons.com/about-us-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Axzons Homecare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Axzons Homecare",
    description:
      "Learn about Axzons Homecare, our mission, values, and commitment to providing exceptional home health care services.",
    images: ["https://axzons.com/about-us-twitter-image.jpg"],
  },
};

const About = () => {
  const socialIcons = [
    { name: "facebook", icon: Facebook },
    { name: "twitter", icon: Twitter },
    { name: "linkedin", icon: Linkedin },
    { name: "instagram", icon: Instagram },
  ];

  const items = [
    {
      title: "Our Mission",
      description:
        "Our mission is to deliver top-quality compassionate, personalized homecare and CDPAP services, in New York, New Jersey, and Georgia.",
      icon: "/images/mission.png",
    },
    {
      title: "Our Vision",
      description:
        "Our vision is to become the leading homecare and CDPAP agency in the region, recognized for our dedication to enhancing the quality of life for those in need of care.",
      icon: "/images/vission.png",
    },
  ];

  return (
    <>
      <div className="flex max-w-[1920px] mx-auto flex-col lg:flex-row justify-center items-stretch p-4 lg:p-16 gap-8 bg-[#F3FFF0]">
        <div className="w-full lg:w-1/2 max-w-3xl flex flex-col gap-10">
          <div className="relative w-full h-[500px] md:h-[400px] lg:h-[424px]">
            <Image
              src="/images/Services_Illustration.png"
              alt="Services Illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
          <div className="hidden lg:block bg-primary-800 rounded-2xl p-6 text-white">
            <h3 className="text-2xl lg:text-4xl font-bold mb-6">
              We always love to hear from you.
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <Phone className="w-6 h-6" />
              <span className="text-lg">(866) 4AXZONS</span>
            </div>
            <div className="flex gap-5">
              {socialIcons.map(({ name, icon: Icon }) => (
                <Link
                  key={name}
                  href={`https://${name}.com`}
                  className="bg-white p-2 rounded-md hover:bg-primary-100 transition-colors"
                >
                  <Icon className="w-6 h-6 text-primary-600" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 max-w-3xl bg-primary-100 rounded-2xl p-8 flex flex-col">
          <div className="flex-1">
            <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6">
              Licensed Homecare and CDPAP Agency
            </h1>
            <p className="text-lg text-black mt-8">
              The patient&apos;s care comes first. Our core values include
              innovation, excellence, compassion, respect, integrity, healing,
              teamwork, and leadership.
            </p>
          </div>
          <div className="space-y-6 mt-12 md:mt-0">
            {items.map((item) => (
              <div
                key={item.title}
                className="flex flex-col lg:flex-row gap-4 bg-white p-4 rounded-xl shadow-md"
              >
                <div className="bg-primary-50 rounded-lg w-16 h-16 flex items-center justify-center flex-shrink-0 self-start">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">
                    {item.description}{" "}
                    <Link
                      href="#"
                      className="text-gray-700 hover:underline font-semibold"
                    >
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="block lg:hidden bg-primary-800 rounded-2xl p-6 text-white">
          <h3 className="text-2xl lg:text-4xl font-bold mb-6">
            We always love to hear from you.
          </h3>
          <div className="flex items-center gap-2 mb-4">
            <Phone className="w-6 h-6" />
            <span className="text-lg">(866) 4AXZONS</span>
          </div>
          <div className="flex gap-5">
            {socialIcons.map(({ name, icon: Icon }) => (
              <Link
                key={name}
                href={`https://${name}.com`}
                className="bg-white p-2 rounded-md hover:bg-primary-100 transition-colors"
              >
                <Icon className="w-6 h-6 text-primary-600" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <JoinFamily />
      <Philosophy />
    </>
  );
};

export default About;
