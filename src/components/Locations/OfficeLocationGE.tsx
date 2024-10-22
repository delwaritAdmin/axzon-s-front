import React from "react";

const OfficeLocation = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-[1600px] mx-auto">
        <div className="flex flex-col items-start gap-10 max-w-[682px] w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <h2 className="text-5xl font-bold text-black leading-[61px]">
              Our Office Locations
            </h2>
          </div>
          <ul className="space-y-4 w-full">
            <li>
              <a
                href="https://www.google.com/maps/place/3280+Peachtree+Rd+NE,+Atlanta,+GA+30305,+USA/@33.8454924,-84.3699104,17z/data=!3m1!4b1!4m6!3m5!1s0x88f50f5bdc7a3bbd:0x6a56eff4e2a4c7cd!8m2!3d33.8454924!4d-84.3699104!16s%2Fg%2F11bw3y7_9f"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-black hover:underline leading-[23px]"
              >
                3280 Peachtree Rd NE, Atlanta, GA 30305
              </a>
            </li>
          </ul>
        </div>
        <div className="relative w-full md:w-[761.79px] h-[427px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.0085824121166!2d-84.37209868480189!3d33.84549238066164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50f5bdc7a3bbd%3A0x6a56eff4e2a4c7cd!2s3280%20Peachtree%20Rd%20NE%2C%20Atlanta%2C%20GA%2030305%2C%20USA!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Video thumbnails section */}
      <div className="grid md:grid-cols-2 gap-10 mt-20">
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
  );
}; 

export default OfficeLocation;
