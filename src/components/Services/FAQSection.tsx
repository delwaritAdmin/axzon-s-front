import React from "react";

const FAQItem = ({
  number,
  question,
  answer,
}: {
  number: string;
  question: string;
  answer: string;
}) => (
  <div className="flex flex-col w-full shadow-lg rounded-2xl overflow-hidden">
    <div className="flex items-center p-4 sm:p-6 gap-4 bg-primary-100">
      <div className="flex-shrink-0 flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 bg-primary-600 rounded-full">
        <span className="font-bold text-lg sm:text-xl text-white">
          {number}
        </span>
      </div>
      <h3 className="font-bold text-2xl text-black flex-grow h-auto">
        {question}
      </h3>
    </div>
    <div className="p-4 sm:p-6 bg-primary-50 h-full">
      <p className="text-lg text-black">{answer}</p>
    </div>
  </div>
);

export default function FAQSection() {
  const faqs = [
    {
      number: "01",
      question: "What is the process of finding a caregiver?",
      answer:
        "Call us for a quick consultation. After an in-home visit, we can usually refer a caregiver within 24 hours. We continuously screen caregivers for fast access to quality care.",
    },
    {
      number: "02",
      question: "Will we have the flexibility to change our caregivers?",
      answer:
        "We are flexible in changing caregivers to ensure your satisfaction and will go to great lengths to provide you with the best care from the most suitable caregiver.",
    },
    {
      number: "03",
      question: "Can I trust Axzons caregivers in my home?",
      answer:
        "Axzons caregivers go through a rigorous screening process, including thorough background checks and evaluations of compassion, identity, integrity, and competence.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-black">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.number} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
