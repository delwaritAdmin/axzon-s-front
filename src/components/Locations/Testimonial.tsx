import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ content, author }) => (
  <div className="flex flex-col h-full">
    <div className="flex-grow bg-[#F8F3FE] p-6 sm:p-8 md:p-10 rounded-t-2xl">
      <p className="text-base sm:text-lg text-[#222222]">{content}</p>
    </div>
    <div className="bg-[#F3E8FF] p-4 sm:p-5 rounded-b-2xl">
      <h3 className="font-bold text-xl sm:text-2xl text-[#222222]">{author}</h3>
    </div>
  </div>
);

const Testimonial: React.FC = () => {
  const testimonials = [
    {
      content: "Axzone staff is extremely helpful. I mostly deal with Michael. He is attentive to my needs and my father's needs. Michael is a pleasant and patient person to speak with. Thank you for all you have done and continue to do for my father and myself.",
      author: "Matthew Jambor"
    },
    {
      content: "I just want to let you know what a great job Joey did helping me out the last few days. He was always kind, considerate and very professional. I am very grateful to have received the quality of service Axzons provided. Thank You Rosemarie.",
      author: "Reginald"
    },
    {
      content: "Getting service in Port Washington in Nassau County, NY was so hard until we got Axzons. I personally want to thank Michel who is always willing and ready to help making coordination, giving wise advice and providing effective guidance when needed.",
      author: "Cesar Soriano"
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#222222] mb-4">
            Client Reviews & Testimonials
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl font-bold text-[#222222]">4.6</span>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="w-6 h-6 text-[#F89B3A] fill-current" />
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;