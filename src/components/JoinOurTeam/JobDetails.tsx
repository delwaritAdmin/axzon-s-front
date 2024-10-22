"use client";
import React, { useState, useEffect } from "react";
import { Job } from "@/constants/jobs";
import {
  MapPin,
  Briefcase,
  Clock,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formatDate } from "@/utils/dateFormate";
import JobApplicationForm from "@/components/JobApplication/JobApplicationForm";

interface JobDetailsProps {
  job: Job;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job }) => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicantCount, setApplicantCount] = useState(0);

  useEffect(() => {
    setApplicantCount(Math.floor(Math.random() * 20));
  }, []);

  return (
    <div className="bg-[#F3FFF0] min-h-screen py-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-2xl p-8">
              <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
              <div className="flex items-center gap-4 text-gray-600 mb-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-1" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-1" />
                  <span>${job.salary.toLocaleString()}/year</span>
                </div>
              </div>
              <p className="mb-4">{job.description}</p>
              <div className="flex gap-4 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  <MapPin className="w-4 h-4 mr-1" />
                  {job.type}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  <Clock className="w-4 h-4 mr-1" />
                  {job.schedule}
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Posted {formatDate(job.datePosted)} | {applicantCount}{" "}
                applicants
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">About the Job</h2>
              <p>{job.aboutTheJob}</p>

              <h2 className="text-xl font-bold mt-8 mb-4">Responsibilities</h2>
              <ul className="list-disc pl-5 mb-4">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>

              <h2 className="text-xl font-bold mt-8 mb-4">
                Qualifications & Skills
              </h2>
              <ul className="list-disc pl-5 mb-4">
                {job.qualifications.map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))}
              </ul>

              <h2 className="text-xl font-bold mt-8 mb-4">Benefits</h2>
              <ul className="list-disc pl-5 mb-4">
                {job.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="sticky top-60">
              <div className="bg-[#F3E8FF] rounded-2xl p-5 flex flex-col items-start gap-5">
                <Button
                  variant="primary"
                  onClick={() => setShowApplicationForm(true)}
                  className="w-full h-[65px] px-4 py-2.5 flex items-center justify-center gap-2 text-xl font-semibold whitespace-nowrap group"
                >
                  <span className="text-xl font-semibold group-hover:text-primary-600">
                    Apply
                  </span>
                  <ArrowUpRight className="w-6 h-6 group-hover:text-primary-600" />
                </Button>
                <div className="bg-white rounded-2xl p-5 w-full flex flex-col items-start gap-2.5">
                  <h2 className="text-2xl font-bold text-[#222222]">
                    Contact Us
                  </h2>
                  <div className="w-full flex flex-col gap-2.5">
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-6 h-6 text-[#797979]" />
                      <span className="text-lg text-[#222222]">
                        (866)429-9667
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-6 h-6 text-[#797979]" />
                      <span className="text-lg text-[#222222]">
                        axzonshomecare@gmail.com
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-5 mt-2.5">
                    {[Facebook, Twitter, Linkedin, Instagram].map(
                      (Icon, index) => (
                        <Link
                          key={index}
                          href="#"
                          className="bg-[#7E22CE] text-white p-2.5 rounded-md flex items-center justify-center"
                        >
                          <Icon className="w-5 h-5" />
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <JobApplicationForm
        isOpen={showApplicationForm}
        onClose={() => setShowApplicationForm(false)}
        jobTitle={job.title}
        jobLocation={job.location}
      />
    </div>
  );
};

export default JobDetails;
