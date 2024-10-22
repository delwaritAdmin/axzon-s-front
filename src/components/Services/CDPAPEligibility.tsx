import { Check, X } from "lucide-react";

const eligibilityCriteria = [
  "He/She has Medicaid*",
  "Lives in NY",
  "Needs help with day to day activities",
  "Has a stable medical condition",
  "Be eligible for long term care",
];

const caregiverCriteria = [
  { text: "Children over 18 years", eligible: true },
  { text: "Friend", eligible: true },
  { text: "Legal Spouse", eligible: false },
  { text: "Designated Representative", eligible: false },
];

export default function CDPAPEligibility() {
  return (
    <section className="bg-[#F8F3FE] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#222222] mb-10">
          Who is eligible for the CDPAP program?
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#222222] mb-6">
              Your elderly loved one is likely to be eligible if:
            </h3>
            <ul className="space-y-4">
              {eligibilityCriteria.map((criterion, index) => (
                <li key={index} className="flex items-center">
                  <span className="bg-[#7E22CE] rounded-full p-1 mr-3">
                    <Check className="w-4 h-4 text-white" />
                  </span>
                  <span className="text-[#797979]">{criterion}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#222222] mb-6">
              Who can be a caregiver:
            </h3>
            <ul className="space-y-4">
              {caregiverCriteria.map((criterion, index) => (
                <li key={index} className="flex items-center">
                  <span
                    className={`rounded-full p-1 mr-3 ${
                      criterion.eligible ? "bg-[#7E22CE]" : "bg-red-500"
                    }`}
                  >
                    {criterion.eligible ? (
                      <Check className="w-4 h-4 text-white" />
                    ) : (
                      <X className="w-4 h-4 text-white" />
                    )}
                  </span>
                  <span className="text-[#797979]">{criterion.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="aspect-video rounded-3xl overflow-hidden">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/HwSGOl3HbJU" 
              title="CDPAP | Axzons CDPAP | Axzons HomeCare" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="aspect-video rounded-3xl overflow-hidden">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/9VX4OTStgec" 
              title="Axzons HomeCare - Home Health Aide: Reynaldo Benitez's Review" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
