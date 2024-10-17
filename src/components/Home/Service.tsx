import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Homecare Services",
    description:
      "We are deeply committed to providing high-quality home health care services to our clients.",
    icon: "/images/services/Subtract.png",
    link: "/services/homecare-services",
  },
  {
    title: "Private Duty Nursing",
    description:
      "Our nursing staff is trained to tailor plans based on medical advice and social needs of the client.",
    icon: "/images/services/Vector.png",
    link: "/services/private-duty-nursing",
  },
  {
    title: "Specialized Care",
    description:
      "Axzons has trained caregivers for clients with conditions including Parkinson's, Down's Syndrome, COPD, etc.",
    icon: "/images/services/Union.png",
    link: "/services/specialized-care",
  },
  {
    title: "Nutritional Counseling",
    description:
      "Our nutritional counselors can help in managing diets to counteract ill effects of debilitating diseases.",
    icon: "/images/services/nutrition.png",
    link: "/services/nutritional-counseling",
  },
  {
    title: "Medical Social Service",
    description:
      "We provide holistic support addressing the social and emotional needs of our clients.",
    icon: "/images/services/socialService.png",
    link: "/services/medical-social-service",
  },
  {
    title: "CDPAP",
    description:
      "Managed by a team of doctors and nurses, Axzons is a CDPAP agency for the entire state of New York.",
    icon: "/images/services/cdpapicon.png",
    link: "/services/cdpap",
  },
];

export default function Service() {
  return (
    <section className="bg-primary-50 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40 w-full">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-3 sm:p-6 flex flex-col h-full"
            >
              <div className="flex flex-col sm:flex-row items-start mb-4">
                <div className="bg-[#F3E8FF] p-3 rounded-lg mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={107}
                    height={107}
                    className="w-20 h-20"
                  />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-2xl font-bold text-black mb-2">
                    {service.title}
                  </h3>
                  <p className="text-lg sm:text-xl text-[#797979] mb-4">
                    {service.description}
                  </p>
                </div>
              </div>
              <Link
                href={service.link}
                className="mt-auto self-end px-3 md:px-5 py-2.5 border border-primary-600 text-primary-600 rounded-md text-lg sm:text-xl font-semibold hover:bg-[#F3E8FF] transition-colors w-[153px] h-[45px] flex items-center justify-center"
              >
                <button>Learn More</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
