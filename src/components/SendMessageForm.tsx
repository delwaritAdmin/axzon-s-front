"use client";
import { usePathname } from "next/navigation";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

interface SendMessageFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  address: z.string().optional(),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().optional(),
  contactTime: z.string().optional(),
  needs: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const states = ["New York", "New Jersey", "Georgia"];

export default function SendMessageForm({
  isOpen,
  onClose,
}: SendMessageFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const route = usePathname();

  const onSubmit = async (data: FormData) => {
    let clientType = "CDPAP";

    switch (route) {
      case "/services/homecare-services":
        clientType = "homecare";
        break;
      case "/services/private-duty-nursing":
        clientType = "nursing";
        break;
      case "/services/specialized-care":
        clientType = "specializedCare";
        break;
      case "/services/medical-social-service":
        clientType = "medialSocialServices";
        break;
      case "/services/nutritional-counseling":
        clientType = "nutrition";
        break;
      case "/locations/new-york":
        clientType = "NY";
        break;
      case "/locations/new-jersey":
        clientType = "NJ";
        break;
      case "/locations/georgia":
        clientType = "GA";
        break;
      default:
        clientType = "CDPAP";
    }

    try {
      await axios.post(`${process.env.API_URL}/api/client`, {
        ...data,
        clientType,
      });

      toast.success("Thanks For Contacting with Us!");
      reset();
      onClose();
    } catch (error) {
      toast.error("Failed to submit data.");
      console.error("Error making POST request:", error);
      throw error; // Re-throw the error if you want to handle it later
    }
  };

  const renderSelectItem = (value: string, label: string) => (
    <SelectItem value={value}>{label}</SelectItem>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[872px] w-full px-4 sm:px-6 rounded-xl sm:rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 text-center border-b-2 border-gray-400 pb-4">
            How can we help?
          </DialogTitle>
        </DialogHeader>
        <p className="text-base md:text-lg leading-relaxed md:leading-[23px] text-[#222222] mb-4">
          Please fill out the form to let us know your needs. Our friendly staff
          will reach out at a time convenient to you.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 bg-primary-100 p-4 rounded-lg"
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
            <div className="w-full md:w-1/2">
              <Input
                type="text"
                placeholder="Address"
                {...register("address")}
                className="w-full h-[49px] bg-white text-[#797979] text-base md:text-lg leading-[23px] rounded-md px-4 py-[13px]"
              />
            </div>
            <div className="w-full md:w-1/2">
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
            <div className="w-full md:w-1/2">
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
            </div>
            <div className="w-full md:w-1/2">
              <Controller
                name="contactTime"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full h-[49px] bg-white text-[#797979] text-base md:text-lg leading-[23px] rounded-md px-4 py-[13px]">
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
        <Toaster position="bottom-right" reverseOrder={false} />
      </DialogContent>
    </Dialog>
  );
}
