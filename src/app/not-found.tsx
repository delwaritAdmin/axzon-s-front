import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-primary-50 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <svg
          className="mx-auto mb-6"
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="60" cy="60" r="60" fill="#F3E8FF" />
          <path
            d="M78.75 41.25L41.25 78.75"
            stroke="#7E22CE"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M41.25 41.25L78.75 78.75"
            stroke="#7E22CE"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link href="/">
          <Button
            variant="primary"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
