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
  const questions = [
    {
      name: "legallyAuthorized",
      label: "Are you legally authorized to work in the United States for any employer?",
      required: true,
    },
    {
      name: "requireVisa",
      label: "Will you now or will you in the future require employment visa sponsorship?",
      required: true,
    },
    {
      name: "driversLicense",
      label: "Do you have a valid driver's license?",
      required: true,
    },
    {
      name: "validHhaPca",
      label: "Do you have valid HHA/PCA certificate?",
      required: false,
    },
    {
      name: "currentAnnualPhysical",
      label: "Do you have current annual physical?",
      required: false,
    },
    {
      name: "twoWorkReferences",
      label: "Do you have 2 work references?",
      required: false,
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      <h3 className="text-xl sm:text-2xl font-bold">Additional Questions</h3>
      <div className="space-y-6 sm:space-y-8">
        {questions.map((question) => (
          <div key={question.name} className="space-y-3 sm:space-y-4">
            <Label className="text-sm sm:text-base font-semibold">
              {question.label} {question.required && "*"}
            </Label>
            <Controller
              name={question.name as keyof FormData}
              control={control}
              rules={{ required: question.required ? "This field is required" : false }}
              render={({ field }) => (
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id={`${question.name}-yes`} />
                    <Label
                      htmlFor={`${question.name}-yes`}
                      className="text-sm sm:text-base"
                    >
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id={`${question.name}-no`} />
                    <Label
                      htmlFor={`${question.name}-no`}
                      className="text-sm sm:text-base"
                    >
                      No
                    </Label>
                  </div>
                </RadioGroup>
              )}
            />
            {errors[question.name as keyof FormData] && (
              <p className="text-red-500 mt-2 text-sm">
                {errors[question.name as keyof FormData]?.message?.toString()}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalQuestions;
