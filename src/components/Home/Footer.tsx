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
            <h3 className="text-3xl font-semibold">Services</h3>
            <ul className="space-y-2">
              {[
                { name: "Homecare Services", url: "/services/homecare-services" },
                { name: "Private Duty Nursing", url: "/services/private-duty-nursing" },
                { name: "Specialized Care", url: "/services/specialized-care" },
                { name: "Nutritional Counseling", url: "/services/nutritional-counseling" },
                { name: "Medical Social Services", url: "/services/medical-social-service" },
                { name: "Consumer Directed (CDPAP)", url: "/services/cdpap" },
              ].map((service) => (
                <li key={service.name} className="text-lg">
                  <Link href={service.url} className="hover:underline">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", url: "/about" },
                { name: "Request Care", url: "/request-care" },
                { name: "Join Our Team", url: "/join-our-team" },
                { name: "Privacy Policy", url: "/privacy-policy" },
                { name: "Terms and Conditions", url: "/terms-and-conditions" },
              ].map((link) => (
                <li key={link.name} className="text-lg">
                  <Link href={link.url} className="hover:underline">
                    {link.name}
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
            <h3 className="text-3xl font-semibold">We Serve</h3>
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
