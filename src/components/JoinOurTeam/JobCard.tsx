import React from "react";
import Link from "next/link";
import { MapPin, Briefcase, Clock, ArrowUpRight } from "lucide-react";
import { Job } from "@/constants/jobs";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => (
  <div className="flex flex-col sm:flex-row gap-5 w-full border-t border-gray-400 pt-8 sm:relative">
    <div className="flex flex-col gap-5 w-full sm:w-3/4">
      <div className="flex flex-col gap-2.5 w-full">
        <h3 className="text-3xl sm:text-4xl font-bold text-[#222222]">
          {job.title}
        </h3>
        <div className="flex flex-col gap-2.5 w-full">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-6 h-6 text-[#797979]" />
            <span className="text-lg text-[#222222]">{job.location}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Briefcase className="w-6 h-6 text-[#797979]" />
            <span className="text-lg text-[#222222]">
              ${job.salary.toLocaleString()}/year
            </span>
          </div>
        </div>
        <p className="text-lg text-[#222222]">{job.description}</p>
      </div>
      <div className="flex gap-5">
        <span className="flex items-center px-3 py-1.5 rounded-full text-lg border border-[#797979] text-[#222222]">
          <MapPin className="w-6 h-6 mr-2.5 text-[#797979]" />
          {job.type}
        </span>
        <span className="flex items-center px-3 py-1.5 rounded-full text-lg border border-[#797979] text-[#222222]">
          <Clock className="w-6 h-6 mr-2.5 text-[#797979]" />
          {job.schedule}
        </span>
      </div>
    </div>
    <div className="w-full sm:w-1/4 sm:flex sm:items-center sm:justify-end">
      <Link
        href={`/join-our-team/${job.id}`}
        className="block w-full sm:w-auto"
      >
        <button className="w-full sm:w-[162px] h-[65px] flex justify-center items-center px-6 py-2.5 gap-2 bg-primary-600 rounded-xl transition-all duration-300 hover:bg-primary-50 hover:border hover:border-primary-600 group">
          <span className="font-semibold text-xl text-white group-hover:text-primary-600">
            View
          </span>
          <ArrowUpRight className="w-6 h-6 text-white group-hover:text-primary-600" />
        </button>
      </Link>
    </div>
  </div>
);

export default JobCard;
