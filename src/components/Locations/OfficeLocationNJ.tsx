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
                href="https://www.google.com/maps/place/317+George+St+%23320,+New+Brunswick,+NJ+08901,+USA/@40.4957762,-74.4446105,17z/data=!3m1!4b1!4m6!3m5!1s0x89c3c45af66b9c2d:0x6c0b0a9b1a7a0c5e!8m2!3d40.4957762!4d-74.4446105!16s%2Fg%2F11c2jg_8_8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-black hover:underline leading-[23px]"
              >
                317 George street, suite 320, New Brunswick, NJ 08901
              </a>
            </li>
          </ul>
        </div>
        <div className="relative w-full md:w-[761.79px] h-[427px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.7509455891745!2d-74.44679868459605!3d40.49577624936001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c45af66b9c2d%3A0x6c0b0a9b1a7a0c5e!2s317%20George%20St%20%23320%2C%20New%20Brunswick%2C%20NJ%2008901%2C%20USA!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s"
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
