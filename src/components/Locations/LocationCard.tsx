import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

interface LocationData {
  state: string;
  address: string[];
  description: string;
  mapImage: string;
  textColor: string;
  backgroundColor: string;
  slug: string;
}

export const locations: LocationData[] = [
  {
    state: "New York",
    address: [
      "70 East Sunrise Hwy Suite 500, Valley Stream, NY 11581",
      "580 Hempstead Turnpike, West Hempstead, NY 11552",
    ],
    description:
      "Axzons is a NYS licensed homecare and CDPAP agency. We provide CDPAP in all 47 counties across New York and, homecare services in the following counties: Nassau | Suffolk | Queens | Westchester",
    mapImage: "/images/locations/newYork.png",
    textColor: "text-black",
    backgroundColor: "bg-purple-100",
    slug: "new-york",
  },
  {
    state: "New Jersey",
    address: ["317 George street, suite 320, New Brunswick, NJ 08901"],
    description:
      "Axzons is a New Jersey licensed homecare agency. We provide homecare services in all the counties of New Jersey.",
    mapImage: "/images/locations/newJersey.png",
    textColor: "text-white",
    backgroundColor: "bg-purple-900",
    slug: "new-jersey",
  },
  {
    state: "Georgia",
    address: ["3280 Peachtree Rd NE, Atlanta, GA 30305"],
    description:
      "Axzons is a Georgia state licensed homecare agency. We provide homecare services in the following counties: Henry | Rockdale | Forsyth | Clayton | Douglas | Cobb | Cherokee | Gwinnett | DeKalb | Fulton",
    mapImage: "/images/locations/goergia.png",
    textColor: "text-black",
    backgroundColor: "bg-purple-100",
    slug: "georgia",
  },
];

interface LocationCardProps {
  location: LocationData;
  imagePosition: "left" | "right";
}

export const LocationCard: React.FC<LocationCardProps> = ({
  location,
  imagePosition,
}) => {
  return (
    <div className="flex flex-col md:flex-row w-full overflow-hidden rounded-2xl">
      {imagePosition === "left" && (
        <div className="w-full md:w-1/2">
          <Image
            src={location.mapImage}
            alt={`Map of ${location.state}`}
            width={800}
            height={700}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div
        className={`w-full md:w-1/2 ${location.backgroundColor} p-8 md:p-12 flex flex-col justify-center items-center text-center`}
      >
        <h2
          className={`text-3xl md:text-4xl font-bold mb-6 ${location.textColor}`}
        >
          {location.state}
        </h2>
        {location.address.map((line, index) => (
          <p
            key={index}
            className={`text-lg md:text-xl mb-2 ${location.textColor}`}
          >
            {line}
          </p>
        ))}
        <hr className={`border-current w-full my-4 ${location.textColor}`} />
        <p className={`text-lg md:text-xl mb-6 ${location.textColor}`}>
          {location.description}
        </p>
        <Link href={`/locations/${location.slug}`}>
          <Button
            variant="outline"
            className="flex flex-row items-center justify-center px-5 py-2.5 w-36 h-12 bg-white text-purple-700 border border-[#7E22CE] rounded-md hover:bg-purple-50 font-semibold text-base"
          >
            Learn More
          </Button>
        </Link>
      </div>
      {imagePosition === "right" && (
        <div className="w-full md:w-1/2">
          <Image
            src={location.mapImage}
            alt={`Map of ${location.state}`}
            width={800}
            height={700}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};
