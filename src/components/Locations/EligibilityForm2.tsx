"use client";
import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  cityState: z.string().min(1, { message: "City/State is required" }),
  contactTime: z.string().optional(),
  timeZone: z.string().optional(),
  insuranceType: z.string().optional(),
  relationship: z.string().optional(),
  needs: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function EligibilityForm2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    const {
      name,
      phone,
      email,
      cityState,
      contactTime,
      timeZone,
      needs,
      insuranceType,
      relationship,
    } = data;

    const clientType = "reqCare";

    const actualData = {
      name,
      phone,
      email,
      city: cityState,
      preferredContactTime: contactTime,
      timeZone,
      typeOfInsurance: insuranceType,
      relationshipToClient: relationship,
      description: needs,
      clientType,
    };

    setLoading(true);
    try {
      setLoading(false);
       await axios.post(
        "https://testing.axzons.com/api/client",
        actualData
      );
      toast.success("Thanks For Contacting with Us!");
      reset();
    } catch (error) {
      setLoading(false);
      toast.error("Failed to submit data.");
      console.error("Error making POST request:", error);
      throw error; // Re-throw the error if you want to handle it later
    }
  };

  const renderSelectItem = (value: string, label: string) => (
    <SelectItem value={value}>{label}</SelectItem>
  );

  return (
    <section className="bg-[#F3FFF0] py-10 md:py-20 px-4 md:px-10 lg:px-40 flex flex-col lg:flex-row justify-between gap-8 lg:gap-[68px] max-w-[1920px] min-h-[806px]">
      <div className="flex items-center gap-6 md:gap-10 w-full lg:w-[647px]">
        <div className="flex flex-col gap-4 md:gap-6">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight md:leading-[1.2] lg:leading-[61px] text-[#222222]">
            How can we help?
          </h2>
          <p className="text-base md:text-lg leading-relaxed md:leading-[23px] text-[#222222]">
            Please fill out the form to let us know your needs. Our friendly
            staff will reach out at a time convenient to you.
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start p-4 md:p-5 gap-4 w-full lg:w-[832px] bg-[#F3E8FF] rounded-xl"
      >
        <div className="w-full">
          <Input
            type="text"
            placeholder="Name *"
            {...register("name")}
            className="w-full h-[49px] bg-white text-[#797979] text-base md:text-lg leading-[23px] rounded-md px-4 py-[13px]"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="w-full">
          <Input
            type="tel"
            placeholder="Phone Number *"
            {...register("phone")}
            className="w-full h-[49px] bg-white text-[#797979] text-base md:text-lg leading-[23px] rounded-md px-4 py-[13px]"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div className="w-full">
          <Input
            type="email"
            placeholder="Email Address *"
            {...register("email")}
            className="w-full h-[49px] bg-white text-[#797979] text-base md:text-lg leading-[23px] rounded-md px-4 py-[13px]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="w-full">
          <Input
            type="text"
            placeholder="City/State *"
            {...register("cityState")}
            className="w-full h-[49px] bg-white text-[#797979] text-base md:text-lg leading-[23px] rounded-md px-4 py-[13px]"
          />
          {errors.cityState && (
            <p className="text-red-500 text-sm mt-1">
              {errors.cityState.message}
            </p>
          )}
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-[10px] w-full">
          <Select onValueChange={(value) => setValue("contactTime", value)}>
            <SelectTrigger className="w-full md:w-1/2 h-[51px] bg-white text-[#797979] text-base md:text-xl leading-[25px] rounded-md px-4 py-[13px]">
              <SelectValue placeholder="Preferred Contact Time" />
            </SelectTrigger>
            <SelectContent>
              {renderSelectItem("morning", "Morning")}
              {renderSelectItem("afternoon", "Afternoon")}
              {renderSelectItem("evening", "Evening")}
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setValue("timeZone", value)}>
            <SelectTrigger className="w-full md:w-1/2 h-[51px] bg-white text-[#797979] text-base md:text-xl leading-[25px] rounded-md px-4 py-[13px]">
              <SelectValue placeholder="Time Zone" />
            </SelectTrigger>
            <SelectContent>
              {renderSelectItem("est", "Eastern Time")}
              {renderSelectItem("cst", "Central Time")}
              {renderSelectItem("mst", "Mountain Time")}
              {renderSelectItem("pst", "Pacific Time")}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-[10px] w-full">
          <Select onValueChange={(value) => setValue("insuranceType", value)}>
            <SelectTrigger className="w-full md:w-1/2 h-[51px] bg-white text-[#797979] text-base md:text-xl leading-[25px] rounded-md px-4 py-[13px]">
              <SelectValue placeholder="Type of Insurance" />
            </SelectTrigger>
            <SelectContent>
              {renderSelectItem("medicaid", "Medicaid")}
              {renderSelectItem("medicare", "Medicare")}
              {renderSelectItem("private", "Private Insurance")}
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setValue("relationship", value)}>
            <SelectTrigger className="w-full md:w-1/2 h-[51px] bg-white text-[#797979] text-base md:text-xl leading-[25px] rounded-md px-4 py-[13px]">
              <SelectValue placeholder="Relationship to Client" />
            </SelectTrigger>
            <SelectContent>
              {renderSelectItem("self", "Self")}
              {renderSelectItem("family", "Family Member")}
              {renderSelectItem("caregiver", "Caregiver")}
            </SelectContent>
          </Select>
        </div>
        <Textarea
          placeholder="Describe your home health care needs"
          {...register("needs")}
          className="w-full h-[136px] bg-white text-[#797979] text-base md:text-lg leading-[23px] rounded-md px-4 py-[13px]"
        />
        <Button
          disabled={loading}
          variant="primary"
          type="submit"
          className="w-full h-[60px] text-lg md:text-xl font-semibold leading-[25px] rounded-xl"
        >
          {loading ? "Loading.." : "Submit"}
        </Button>
      </form>
      <Toaster position="bottom-right" reverseOrder={false} />
    </section>
  );
}
