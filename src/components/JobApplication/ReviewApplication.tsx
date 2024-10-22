import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { FormData } from "./JobApplicationForm";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface ReviewApplicationProps {
  formData: Partial<FormData>;
  onBack: () => void;
  onSubmit: () => void;
}

const ReviewApplication: React.FC<ReviewApplicationProps> = ({
  formData,
  onBack,
  onSubmit,
}) => {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const viewFile = (e: React.MouseEvent, file: File | null | undefined) => {
    e.preventDefault();
    e.stopPropagation();
    if (file instanceof File) {
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL, "_blank");
    }
  };

  const handleSubmit = () => {
    setShowConfirmDialog(true);
  };

  const confirmSubmit = () => {
    setShowConfirmDialog(false);
    onSubmit();
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#222222]">
        Review your application
      </h3>
      <p className="text-base sm:text-lg text-[#222222]">
        The employer will also receive a copy of your application.
      </p>

      <div className="border-t border-[#797979] pt-4 sm:pt-6">
        <h4 className="text-lg sm:text-2xl font-bold text-[#222222] mb-2 sm:mb-4">
          Contact Info
        </h4>
        <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
          <p>
            <span className="font-semibold">Name:</span> {formData.firstName}{" "}
            {formData.lastName}
          </p>
          <p>
            <span className="font-semibold">Phone Number:</span>{" "}
            {formData.phoneNumber || "Not provided"}
          </p>
          <p>
            <span className="font-semibold">Email Address:</span>{" "}
            {formData.email}
          </p>
        </div>
      </div>

      <div className="border-t border-[#797979] pt-4 sm:pt-6">
        <h4 className="text-lg sm:text-2xl font-bold text-[#222222] mb-2 sm:mb-4">
          Resume
        </h4>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <Button
            type="button"
            className="w-full sm:w-[400px] h-[55px] bg-[#4E2E87] text-white hover:bg-[#3D2468] px-[30px] py-[15px] rounded-[6px] flex items-center justify-between"
            onClick={(e) => viewFile(e, formData.resume as File)}
            disabled={!formData.resume}
          >
            <span className="font-semibold text-[20px] leading-[25px]">
              Resume
            </span>
            <Eye size={24} className="text-white" />
          </Button>
          {formData.coverLetter && (
            <Button
              type="button"
              className="w-full sm:w-[400px] h-[55px] bg-[#4E2E87] text-white hover:bg-[#3D2468] px-[30px] py-[15px] rounded-[6px] flex items-center justify-between"
              onClick={(e) => viewFile(e, formData.coverLetter as File)}
            >
              <span className="font-semibold text-[20px] leading-[25px]">
                Cover Letter
              </span>
              <Eye size={24} className="text-white" />
            </Button>
          )}
        </div>
      </div>

      <div className="border-t border-[#797979] pt-4 sm:pt-6">
        <h4 className="text-lg sm:text-2xl font-bold text-[#222222] mb-2 sm:mb-4">
          Additional Questions
        </h4>
        <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
          <p>
            <span className="font-semibold">
              Are you legally authorized to work in the United States for any employer?
            </span><br />
            {formData.legallyAuthorized || "Not answered"}
          </p>
          <p>
            <span className="font-semibold">
              Will you now or will you in the future require employment visa sponsorship?
            </span><br />
            {formData.requireVisa || "Not answered"}
          </p>
          <p>
            <span className="font-semibold">
              Do you have a valid driver&apos;s license?
            </span><br />
            {formData.driversLicense || "Not answered"}
          </p>
          <p>
            <span className="font-semibold">
              Do you have valid HHA/PCA certificate?
            </span><br />
            {formData.validHhaPca || "Not answered"}
          </p>
          <p>
            <span className="font-semibold">
              Do you have current annual physical?
            </span><br />
            {formData.currentAnnualPhysical || "Not answered"}
          </p>
          <p>
            <span className="font-semibold">
              Do you have 2 work references?
            </span><br />
            {formData.twoWorkReferences || "Not answered"}
          </p>
        </div>
      </div>

      <div className="border-t border-[#797979] pt-6 flex gap-4 flex-row justify-between items-center">
        <Button
          variant="primary"
          type="button"
          onClick={onBack}
          className="w-full sm:w-[270px] h-[40px] sm:h-[65px] px-4 sm:px-10 py-2 sm:py-5 text-sm sm:text-xl rounded-full text-white hover:bg-primary-100 hover:text-primary-600"
        >
          <span className="font-semibold">Back</span>
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={handleSubmit}
          className="w-full sm:w-[270px] h-[40px] sm:h-[65px] px-4 sm:px-10 py-2 sm:py-5 text-sm sm:text-xl rounded-full text-white hover:bg-primary-100 hover:text-primary-600"
        >
          <span className="font-semibold">Submit Application</span>
        </Button>
      </div>

      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl sm:text-3xl font-bold text-black">Confirm Submission</AlertDialogTitle>
            <AlertDialogDescription className="text-lg sm:text-xl text-black">
              Are you sure you want to submit your application? Once submitted,
              you won&apos;t be able to make any changes.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <AlertDialogCancel className="w-full sm:w-[200px] h-[50px] sm:h-[65px] text-base sm:text-xl font-semibold rounded-full">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmSubmit} 
              className="w-full sm:w-[200px] h-[50px] sm:h-[65px] bg-primary-600 text-white hover:bg-primary-100 hover:text-primary-600 transition-colors duration-300 text-base sm:text-xl font-semibold rounded-full border border-primary-600"
            >
              Submit
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ReviewApplication;
