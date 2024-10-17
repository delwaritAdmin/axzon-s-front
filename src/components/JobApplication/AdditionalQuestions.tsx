"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  UseFormRegister,
  FieldErrors,
  Controller,
  Control,
} from "react-hook-form";
import { FormData } from "./JobApplicationForm";

interface AdditionalQuestionsProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  control: Control<FormData>;
}

const AdditionalQuestions: React.FC<AdditionalQuestionsProps> = ({
  errors,
  control,
}) => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h3 className="text-xl sm:text-2xl font-bold">Additional Questions</h3>
      <div className="space-y-6 sm:space-y-8">
        <div className="space-y-3 sm:space-y-4">
          <Label className="text-sm sm:text-base font-semibold">
            Are you legally authorized to work in the United States for any
            employer? *
          </Label>
          <Controller
            name="legallyAuthorized"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <RadioGroup onValueChange={field.onChange} value={field.value}>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <RadioGroupItem value="yes" id="legallyAuthorized-yes" />
                  <Label
                    htmlFor="legallyAuthorized-yes"
                    className="text-sm sm:text-base"
                  >
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <RadioGroupItem value="no" id="legallyAuthorized-no" />
                  <Label
                    htmlFor="legallyAuthorized-no"
                    className="text-sm sm:text-base"
                  >
                    No
                  </Label>
                </div>
              </RadioGroup>
            )}
          />
          {errors.legallyAuthorized && (
            <p className="text-red-500 mt-2 text-sm">
              {errors.legallyAuthorized.message}
            </p>
          )}
        </div>
        <div className="space-y-3 sm:space-y-4">
          <Label className="text-sm sm:text-base font-semibold">
            Will you now or will you in the future require employment visa
            sponsorship? *
          </Label>
          <Controller
            name="requireVisa"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <RadioGroup onValueChange={field.onChange} value={field.value}>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <RadioGroupItem value="yes" id="requireVisa-yes" />
                  <Label
                    htmlFor="requireVisa-yes"
                    className="text-sm sm:text-base"
                  >
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <RadioGroupItem value="no" id="requireVisa-no" />
                  <Label
                    htmlFor="requireVisa-no"
                    className="text-sm sm:text-base"
                  >
                    No
                  </Label>
                </div>
              </RadioGroup>
            )}
          />
          {errors.requireVisa && (
            <p className="text-red-500 mt-2 text-sm">
              {errors.requireVisa.message}
            </p>
          )}
        </div>
        <div className="space-y-3 sm:space-y-4">
          <Label className="text-sm sm:text-base font-semibold">
            Do you have a valid driver&apos;s license? *
          </Label>
          <Controller
            name="driversLicense"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <RadioGroup onValueChange={field.onChange} value={field.value}>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <RadioGroupItem value="yes" id="driversLicense-yes" />
                  <Label
                    htmlFor="driversLicense-yes"
                    className="text-sm sm:text-base"
                  >
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <RadioGroupItem value="no" id="driversLicense-no" />
                  <Label
                    htmlFor="driversLicense-no"
                    className="text-sm sm:text-base"
                  >
                    No
                  </Label>
                </div>
              </RadioGroup>
            )}
          />
          {errors.driversLicense && (
            <p className="text-red-500 mt-2 text-sm">
              {errors.driversLicense.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdditionalQuestions;
