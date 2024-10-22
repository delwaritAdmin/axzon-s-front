"use client";

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
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  address: z.string().optional(),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().optional(),
  contactTime: z.string().optional(),
  insuranceType: z.string().optional(),
  relationship: z.string().optional(),
  needs: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const states = ["New York", "New Jersey", "Georgia"];

export default function EligibilityForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission here
    reset({
      name: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      state: "",
      contactTime: undefined,
      insuranceType: undefined,
      relationship: undefined,
      needs: "",
    });
  };

  const renderSelectItem = (value: string, label: string) => (
    <SelectItem value={value}>{label}</SelectItem>
  );

  return (
    <section className="bg-[#F3FFF0]">
      <div className="w-full max-w-[1920px] min-h-[806px] mx-auto py-10 md:py-20 px-4 md:px-10 lg:px-40 flex flex-col lg:flex-row justify-between gap-8 lg:gap-[68px]">
        <div className="flex items-center gap-6 md:gap-10 w-full lg:w-[647px]">
          <div className="flex flex-col gap-4 md:gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight md:leading-[1.2] lg:leading-[61px] text-[#222222]">
              You may be eligible for CDPAP.
            </h2>
            <p className="text-base md:text-lg leading-relaxed md:leading-[23px] text-[#222222]">
              To qualify for Consumer Directed services, patients must have
              Medicaid. Fill out this form to check your eligibility. A member
              from our team will get back at a time convenient to you!
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start p-4 md:p-5 gap-4 w-full lg:w-[832px] bg-[#F3E8FF] rounded-xl"
        >
          <Input
            type="text"
            placeholder="Name *"
            {...register("name")}
            className="w-full h-[49px] bg-white text-[#797979] text-base md:text-lg leading-[23px] rounded-md px-4 py-[13px]"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}

          <Input
            type="tel"
            placeholder="Phone Number *"
            {...register("phone")}
            className="w-full h-[49px] bg-white text-[#797979] text-base md:text-lg leading-[23px] rounded-md px-4 py-[13px]"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}

          <Input
            type="email"
            placeholder="Email Address *"
            {...register("email")}
            className="w-full h-[49px] bg-white text-[#797979] text-base md:text-lg leading-[23px] rounded-md px-4 py-[13px]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}

          <div className="flex flex-col md:flex-row gap-4 md:gap-[10px] w-full">
            <div className="w-full">
              <Input
                type="text"
                placeholder="Address"
                {...register("address")}
                className="w-full h-[49px] bg-white text-[#797979] text-base md:text-lg leading-[23px] rounded-md px-4 py-[13px]"
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <Input
                type="text"
                placeholder="City *"
                {...register("city")}
                className="w-full h-[49px] bg-white text-[#797979] text-base md:text-lg leading-[23px] rounded-md px-4 py-[13px]"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.city.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-[10px] w-full">
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full h-[49px] bg-white text-[#797979] text-base md:text-lg leading-[23px] rounded-md px-4 py-[13px]">
                    <SelectValue placeholder="State" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.state && (
              <p className="text-red-500 text-sm mt-1">
                {errors.state.message}
              </p>
            )}

            <Controller
              name="contactTime"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full h-[51px] bg-white text-[#797979] text-base md:text-xl leading-[25px] rounded-md px-4 py-[13px]">
                    <SelectValue placeholder="Preferred Contact Time" />
                  </SelectTrigger>
                  <SelectContent>
                    {renderSelectItem(
                      "Morning (8:00 AM - 11:59 AM)",
                      "Morning (8:00 AM - 11:59 AM)"
                    )}
                    {renderSelectItem(
                      "Afternoon (12:00 PM - 5:00 PM)",
                      "Afternoon (12:00 PM - 5:00 PM)"
                    )}
                    {renderSelectItem(
                      "Evening (5:01 PM - 7:00 PM)",
                      "Evening (5:01 PM - 7:00 PM)"
                    )}
                    {renderSelectItem("Anytime", "Anytime")}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-[10px] w-full">
            <Controller
              name="insuranceType"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full h-[51px] bg-white text-[#797979] text-base md:text-xl leading-[25px] rounded-md px-4 py-[13px]">
                    <SelectValue placeholder="Type of Insurance" />
                  </SelectTrigger>
                  <SelectContent>
                    {renderSelectItem("Medicare", "Medicare")}
                    {renderSelectItem("Medicaid", "Medicaid")}
                    {renderSelectItem("MLTC", "MLTC")}
                    {renderSelectItem("Private", "Private")}
                    {renderSelectItem("Other", "Other")}
                  </SelectContent>
                </Select>
              )}
            />
            <Controller
              name="relationship"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full h-[51px] bg-white text-[#797979] text-base md:text-xl leading-[25px] rounded-md px-4 py-[13px]">
                    <SelectValue placeholder="Relationship to Client" />
                  </SelectTrigger>
                  <SelectContent>
                    {renderSelectItem("Parent", "Parent")}
                    {renderSelectItem("Son/Daughter", "Son/Daughter")}
                    {renderSelectItem("Self", "Self")}
                    {renderSelectItem(
                      "Other family member",
                      "Other family member"
                    )}
                    {renderSelectItem("Friend", "Friend")}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <Textarea
            placeholder="Describe your home health care needs"
            {...register("needs")}
            className="w-full h-[136px] bg-white text-[#797979] text-base md:text-lg leading-[23px] rounded-md px-4 py-[13px]"
          />

          <Button
            variant="primary"
            type="submit"
            className="w-full h-[60px] text-lg md:text-xl font-semibold leading-[25px] rounded-xl"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
