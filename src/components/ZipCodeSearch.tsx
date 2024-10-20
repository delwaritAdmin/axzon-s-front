import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import Link from "next/link";
import axios from "axios";

interface Location {
  geonameId: string;
  name: string;
  adminName1: string; // This could be used as the state
  state?: string; // Add the state property
  address?: string; // Optional if not always available
  phone?: string; // Optional if not always available
}

const ZipCodeSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [locations, setLocations] = useState<Location[]>([]); // Specify type for locations
  const [error, setError] = useState("");
  const [showLocation, setShowLocation] = useState(false);

  const handleUseCurrentLocation = () => {
    fetchLocations();
  };

  const fetchNyLocations = async () => {
    // Define valid zip codes
    const validZipCodes = [
      "12207",
      "11367",
      "10549",
      "14604",
      "11965",
      "11581",
      "11552",
    ];

    // Early return if the query is empty or invalid
    if (query === "" || !validZipCodes.includes(query)) {
      setLocations([]); // Clear locations if the query is empty or invalid
      return;
    }

    setError(""); // Clear any previous errors
    setShowLocation(false); // Optionally reset the showLocation state

    try {
      const response = await axios.get(`http://localhost:3000/NYLocation.json`);

      // Assuming response.data contains the locations
      setLocations(response.data);
      setShowLocation(true); // Show the locations after a successful fetch
    } catch (err) {
      console.error(err); // Log the error for debugging
      setError("Failed to fetch locations");
    }
  };

  const fetchGALocations = async () => {
    // Define valid zip codes
    const validZipCodes = ["30305"];

    // Early return if the query is empty or invalid
    if (query === "" || !validZipCodes.includes(query)) {
      setLocations([]); // Clear locations if the query is empty or invalid
      return;
    }

    setError(""); // Clear any previous errors
    setShowLocation(false); // Optionally reset the showLocation state

    try {
      const response = await axios.get(`http://localhost:3000/Galocation.json`);

      // Assuming response.data contains the locations
      setLocations(response.data);
      setShowLocation(true); // Show the locations after a successful fetch
    } catch (err) {
      console.error(err); // Log the error for debugging
      setError("Failed to fetch locations");
    }
  };

  const fetchNjLocations = async () => {
    setError("");
    try {
      const response = await axios.get(`http://localhost:3000/NJlocation.json`);

      setShowLocation(true);
      setLocations(response.data);
    } catch (err) {
      setError("Failed to fetch locations");
    }
  };

  const fetchLocations = async () => {
    switch (query) {
      case "12207":
      case "11367":
      case "10549":
      case "14604":
      case "11965":
      case "11581":
      case "11552":
        await fetchNyLocations(); // Await the function to ensure it completes
        break;
      case "08901":
        await fetchNjLocations(); // Await the function to ensure it completes
        break;
      case "30305":
        await fetchGALocations(); // Await the function to ensure it completes
        break;
      default:
        await fetchNyLocations(); // Default case
        break;
    }
  };

  return (
    <div className="flex flex-col gap-3 sm:gap-5">
      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
        Enter your ZIP Code
      </h4>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
        <div className="flex items-center px-3 py-2 sm:py-3 bg-white border border-[#797979] rounded-md w-full sm:w-[286px]">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="ZIP Code"
            className="w-full text-base sm:text-lg text-[#797979] bg-transparent outline-none"
          />
        </div>
        <Button
          onClick={handleUseCurrentLocation}
          variant="primary"
          className="flex items-center justify-center gap-2 w-full sm:w-[162px] h-[40px] sm:h-[49px]"
        >
          <Search className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          <span className="text-base sm:text-lg md:text-xl font-semibold">
            Search
          </span>
        </Button>
      </div>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-[#F8F3FE] border-b-2 border-[#7E22CE] rounded-t-md w-full sm:w-[286px]"
        onClick={handleUseCurrentLocation}
      >
        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#7E22CE]" />
        <span className="text-base sm:text-lg md:text-xl font-semibold text-[#7E22CE]">
          Use Current Location
        </span>
      </Button>
      {showLocation && (
        <div className="flex  h-fit max-h-[25rem] overflow-y-scroll flex-col gap-2.5 mt-2.5 w-full sm:w-[468px]">
          <p className="text-lg font-normal text-[#222222]">
            {locations.length} location(s) in the surrounding area:
          </p>
          {locations.map((location, index) => (
            <div key={index}>
              <div className="flex flex-col  justify-center space-y-4 w-full">
                <div className="flex flex-col items-start gap-2.5 pt-6">
                  <h5 className="text-lg font-bold text-[#222222]">
                    {location.address}
                  </h5>
                  {/* <p className="text-lg font-normal text-[#222222]">
                    {location.address || "Address not available"}
                  </p> */}
                  <p className="text-lg font-normal text-[#222222]">
                    {location.phone || "(866) 429-9667"}
                  </p>
                </div>

                {location?.state === "New York" ? (
                  <Link href={`/locations/new-york`}>
                    <Button
                      variant="outline"
                      className="text-primary-600 px-2 py-0 text-sm border-primary-600 cursor-pointer  font-semibold"
                    >
                      View This Location
                    </Button>
                  </Link>
                ) : (
                  <Link href={`/locations/new-jersey`}>
                    <Button
                      variant="outline"
                      className="text-primary-600 px-2 py-0 text-sm border-primary-600 cursor-pointer  font-semibold"
                    >
                      View This Location
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      {error && <p className="text-red-600">{error}</p>}{" "}
      {/* Display error if any */}
    </div>
  );
};

export default ZipCodeSearch;
