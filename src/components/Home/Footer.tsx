import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Facebook, LinkedinIcon, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/images/footerLogo.png"
              alt="Axzons HomeCare Logo"
              width={177}
              height={69}
            />
            <p className="text-lg leading-relaxed">
              Axzons homecare has been a leading provider of homecare and CDPAP
              services for nearly two decades in the state of New York. The
              Axzons team, managed by doctors and nurses, is committed to
              enhancing the quality of life for those under our care. As part of
              our mission to expand our services nationwide, Axzons services are
              available in New York, New Jersey, and now in Georgia.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-5xl font-semibold">Services</h3>
            <ul className="space-y-2">
              {[
                "Homecare Services",
                "Private Duty Nursing",
                "Specialized Care",
                "Nutritional Counseling",
                "Medical Social Services",
                "Consumer Directed (CDPAP)",
              ].map((service) => (
                <li key={service} className="text-lg">
                  <Link href="#" className="hover:underline">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-5xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "About Us",
                "Request Care",
                "Join Our Team",
                "Privacy Policy",
                "Terms and Conditions",
              ].map((link) => (
                <li key={link} className="text-lg">
                  <Link href="#" className="hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-2 text-lg">
                <Phone className="w-5 h-5" />
                <Link href="tel:8664299667" className="hover:underline">
                  (866) 4AXZONS
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-5xl font-semibold">We Serve</h3>
            <ul className="space-y-2">
              {["New York", "New Jersey", "Georgia"].map((location) => (
                <li key={location} className="text-lg">
                  {location}
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
              <div className="flex gap-4">
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Facebook className="w-6 h-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <TwitterLogoIcon className="w-6 h-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <LinkedinIcon className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <InstagramLogoIcon className="w-6 h-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full bg-black p-2">
        <span className="text-[18px] font-normal text-white">
          Copyright © Axzons® 2025
        </span>
      </div>
    </footer>
  );
}
