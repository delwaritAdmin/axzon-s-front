import Image from "next/image";

export default function JointCommissionCertification() {
  return (
    <section className="bg-gradient-to-br from-[rgba(170,134,196,0.7)] via-[rgba(255,255,255,0.7)] to-[rgba(231,153,166,0.7)]">
      <div className="relative w-full max-w-[1920px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center p-6 sm:p-10 lg:p-20 xl:p-[80px_160px] gap-8 lg:gap-16 xl:gap-[132px]">
          <div className="flex flex-col items-start gap-8 lg:gap-10 w-full max-w-[753px]">
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#222222] mb-2 sm:mb-4">
                Homecare Excellence Certified
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#7E22CE] lg:absolute lg:top-full lg:right-0 lg:translate-y-2 xl:translate-y-4">
                by The Joint Commission
              </h3>
            </div>
            <p className="text-lg font-normal leading-relaxed text-black mt-8 lg:mt-16">
              Axzons is a licensed home care services agency that has earned The
              Gold Seal of Approval® from The Joint Commission®.
            </p>
          </div>
          <div className="relative w-full max-w-[300px] sm:max-w-[373px] aspect-square mt-8 lg:mt-0">
            <Image
              src="/images/image-31.png"
              alt="Joint Commission Certification"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
