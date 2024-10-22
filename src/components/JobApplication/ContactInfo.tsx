import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import { FormData } from "./JobApplicationForm";

interface ContactInfoProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  register,
  errors,
}) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Contact Info</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            {...register("firstName", { required: "First name is required" })}
            className="w-full h-[50px] border-[#797979] rounded-[6px]"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            {...register("lastName", { required: "Last name is required" })}
            className="w-full h-[50px] border-[#797979] rounded-[6px]"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Phone Number *</Label>
          <Input
            id="phoneNumber"
            type="tel"
            {...register("phoneNumber", { required: "Phone number is required" })}
            className="w-full h-[50px] border-[#797979] rounded-[6px]"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address",
              },
            })}
            className="w-full h-[50px] border-[#797979] rounded-[6px]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
