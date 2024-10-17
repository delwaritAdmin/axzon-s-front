import Image from "next/image";

const services = [
  {
    icon: "/images/services/lungs.png",
    title: "Respiratory Therapy",
    description:
      "Our specialized respiratory care services are designed to enhance breathing and comfort for clients with respiratory conditions. We provide comprehensive tailored support to manage and improve respiratory health.",
  },
  {
    icon: "/images/services/therapy.png",
    title: "Physical Therapy",
    description:
      "Our physical therapy services focus on restoring mobility and physical function. Our licensed therapists create customized treatment plans to help clients regain strength, improve movement, and enhance their quality of life.",
  },
  {
    icon: "/images/services/walker.png",
    title: "Occupational Therapy",
    description:
      "Our occupational therapy services are designed to improve daily living skills and promote independence. Our therapists work with clients to develop personalized strategies that enhance their ability to perform everyday tasks.",
  },
  {
    icon: "/images/services/speak.png",
    title: "Speech Therapy",
    description:
      "Our speech language pathology services offer specialized therapy to improve communication skills. We work with clients to address speech, language, and swallowing disorders, enhancing their ability to communicate effectively.",
  },
  {
    icon: "/images/services/ear.png",
    title: "Audiology",
    description:
      "Our audiology services provide specialized, comprehensive hearing care to enhance auditory health. We offer hearing assessments, hearing aid fittings, and ongoing support to improve our clients' hearing and quality of life.",
  },
];

export default function SpecializedCareService() {
  return (
    <div className="bg-[#F8F3FE] py-12 sm:py-16 md:py-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col sm:flex-row items-start gap-6"
            >
              <div className="flex-shrink-0 w-24 h-24 bg-[#F3E8FF] rounded-[6.55px] flex items-center justify-center p-2">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-2xl text-[#222222] mb-2">
                  {service.title}
                </h4>
                <p className="text-lg text-[#797979]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
