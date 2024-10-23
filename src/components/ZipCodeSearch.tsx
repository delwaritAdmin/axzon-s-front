import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import nyzipcodes from "../../public/nyzip.json";
import njzipcodes from "../../public/njzip.json";
import gozipcodes from "../../public/gozip.json";

interface Location {
  geonameId: string;
  name: string;
  adminName1: string; // This could be used as the state
  state?: string; // Add the state property
  address?: string; // Optional if not always available
  phone?: string; // Optional if not always available
}

const ZipCodeSearch: React.FC = () => {
  const [showLocation, setShowLocation] = useState(false);
  const [error, setError] = useState("");
  const [locations, setLocations] = useState<Location[]>([]); // Specify type for
  const [query, setQuery] = useState("");

  const handleUseCurrentLocation = () => {
    setShowLocation(true);
    fetchLocations();
  };

  const fetchNyLocations = async () => {
    // Extract valid zip codes from the imported JSON
    const validZipCodes = nyzipcodes.zipCodes;
    // Early return if the query is empty or invalid
    if (query === "" || !validZipCodes.includes(query)) {
      setLocations([]); // Clear locations if the query is empty or invalid
      return;
    }
    setError(""); // Clear any previous errors
    setShowLocation(false); // Optionally reset the showLocation state

    try {
      const response = await axios.get(
        `${process.env.NATIVE_URL}/NYLocation.json`
      );
      const allLocations = response?.data;
      setLocations(allLocations);
      setShowLocation(true); // Show the locations after a successful fetch
    } catch (err) {
      console.error(err); // Log the error for debugging
      setError("Failed to fetch locations");
    }
  };

  const fetchGALocations = async () => {
    // Extract valid zip codes from the imported JSON
    const validZipCodes = gozipcodes.zipCodes;
    // Early return if the query is empty or invalid
    if (query === "" || !validZipCodes.includes(query)) {
      setLocations([]); // Clear locations if the query is empty or invalid
      return;
    }
    setError(""); // Clear any previous errors
    setShowLocation(false); // Optionally reset the showLocation state
    try {
      const response = await axios.get(
        `${process.env.NATIVE_URL}/Galocation.json`
      );
      const allLocations = response?.data;
      setLocations(allLocations);
      setShowLocation(true); // Show the locations after a successful fetch
    } catch (err) {
      console.error(err); // Log the error for debugging
      setError("Failed to fetch locations");
    }
  };

  const fetchNjLocations = async () => {
    // Extract valid zip codes from the imported JSON
    const validZipCodes = njzipcodes.zipCodes;
    // Early return if the query is empty or invalid
    if (query === "" || !validZipCodes.includes(query)) {
      setLocations([]); // Clear locations if the query is empty or invalid
      return;
    }
    setError(""); // Clear any previous errors
    setShowLocation(false); // Optionally reset the showLocation state
    try {
      const response = await axios.get(
        `${process.env.NATIVE_URL}/NJlocation.json`
      );
      const allLocations = response?.data;
      setLocations(allLocations);
      setShowLocation(true); // Show the locations after a successful fetch
    } catch (err) {
      console.error(err); // Log the error for debugging
      setError("Failed to fetch locations");
    }
  };

  const fetchLocations = async () => {
    // Combine all valid ZIP codes from different states into one array
    const allValidZipCodes = [
      ...njzipcodes.zipCodes,
      ...nyzipcodes.zipCodes,
      ...gozipcodes.zipCodes,
    ];

    // Early return if the query is empty or invalid
    if (query === "" || !allValidZipCodes.includes(query)) {
      setLocations([]); // Clear locations if the query is empty or invalid
      return;
    }

    setError(""); // Clear any previous errors
    setShowLocation(false); // Optionally reset the showLocation state

    try {
      // Determine which function to call based on the ZIP code
      if (nyzipcodes.zipCodes.includes(query)) {
        await fetchNyLocations(); // Fetch NY locations
      } else if (njzipcodes.zipCodes.includes(query)) {
        console.log("nj");
        await fetchNjLocations(); // Fetch NJ locations
      } else if (gozipcodes.zipCodes.includes(query)) {
        console.log("go");
        await fetchGALocations(); // Fetch GA locations
      } else {
        // If the ZIP code doesn't match any known ones, you could handle it here
        setLocations([]); // Clear locations for invalid ZIP
      }
    } catch (err) {
      console.error(err); // Log the error for debugging
      setError("Failed to fetch locations");
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
                      View This Locationz
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
