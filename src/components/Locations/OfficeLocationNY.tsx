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
                href="https://www.google.com/maps/place/70+E+Sunrise+Hwy+Suite+500,+Valley+Stream,+NY+11581,+USA/@40.6614615,-73.7069297,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2652e76ac5b2b:0x3e0a46c4d0a6c9f0!8m2!3d40.6614615!4d-73.7069297!16s%2Fg%2F11c1z0_8mf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-black hover:underline leading-[23px]"
              >
                70 East Sunrise Hwy Suite 500, Valley Stream, NY 11581 
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/place/580+Hempstead+Turnpike,+West+Hempstead,+NY+11552,+USA/@40.7062359,-73.6524257,17z/data=!3m1!4b1!4m6!3m5!1s0x89c27d24b04b0001:0x1fff09c27c2c81eb!8m2!3d40.7062359!4d-73.6524257!16s%2Fg%2F11c250m5t6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-black hover:underline leading-[23px]"
              >
                580 Hempstead Turnpike, West Hempstead, NY 11552
              </a>
            </li>
          </ul>
        </div>
        <div className="relative w-full md:w-[761.79px] h-[427px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s"
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
