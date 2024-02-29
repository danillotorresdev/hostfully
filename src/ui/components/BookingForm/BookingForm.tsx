import { useBookingContext } from "../../../contexts/BookingContext/BookingContext";
import * as S from "./BookingForm.styles";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { DateRangePicker } from "@/ui/components/DateRangePIcker/DateRangePicker";
import { Button } from "@/ui/components/Button/Button";
import { AutoCompleteInput } from "@/ui/components/AutoCompleteInput/AutoCompleteInput";
import { PassengerCounterInput } from "@/ui/components/PassengersCounterWrapper/PassengersCounterWrapper";
import { useMemo } from "react";
import { v4 as uuid } from "uuid";
import { Toast } from "@/ui/components/Toast/Toast";
import { useToast } from "@/utils/hooks/useToast/useToast";

const createPassengerFormSchema = z.object({
  adults: z.number(),
  children: z.number(),
});

const createBookingFormSchema = z.object({
  destination: z.string(),
  origin: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  passengers: createPassengerFormSchema,
});

type BookingFormProps = {
  bookingId?: string;
  afterSumbit?: () => void;
};

export function BookingForm({ bookingId, afterSumbit }: BookingFormProps) {
  const { showToast, toasts } = useToast();

  const {
    createBooking,
    validateBookingCreation,
    validateBookingUpdate,
    bookings,
    updateBooking,
  } = useBookingContext();

  const bookingToUpdate = useMemo(
    () =>
      bookingId ? bookings.find((booking) => booking.id === bookingId) : null,
    [bookingId, bookings],
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      origin: bookingToUpdate?.origin ?? "",
      destination: bookingToUpdate?.destination ?? "",
      startDate: bookingToUpdate?.startDate ?? "",
      endDate: bookingToUpdate?.endDate ?? "",
      passengers: bookingToUpdate?.passengers ?? { adults: 1, children: 0 },
    },
  });

  register("startDate", {
    required: "Start date is required",
  });

  register("endDate", {
    required: "End date is required",
  });

  register("origin", {
    required: "Origin is required",
  });

  register("destination", {
    required: "Destination is required",
  });

  const onSubmit: SubmitHandler<z.infer<typeof createBookingFormSchema>> = (
    bookingProps,
  ) => {
    const newBooking = {
      id: bookingId ?? uuid(),
      ...bookingProps,
    };

    if (bookingId) {
      if (validateBookingUpdate(newBooking)) {
        updateBooking(newBooking);
        showToast({
          id: newBooking.id,
          message: "Booking updated",
          type: "success",
        });
      } else {
        showToast({
          id: newBooking.id,
          message: "Booking conflicts with existing bookings",
          type: "error",
        });
      }
    } else {
      if (validateBookingCreation(newBooking)) {
        createBooking(newBooking);
        showToast({
          id: newBooking.id,
          message: "Booking created",
          type: "success",
        });
      } else {
        showToast({
          id: newBooking.id,
          message: "Booking conflicts with existing bookings",
          type: "error",
        });
      }
    }

    if (afterSumbit) {
      afterSumbit();
    }
  };

  return (
    <>
      <S.Form className="form" onSubmit={handleSubmit(onSubmit)}>
        <S.InputWrapper>
          <AutoCompleteInput
            type="text"
            placeholder="City's name"
            label="Origin"
            defaultValue={bookingToUpdate?.origin}
            onPlaceChange={(place) => {
              setValue("origin", place);
            }}
          />
          <S.ErrorMessage>
            {errors.origin && <p>{errors.origin.message}</p>}
          </S.ErrorMessage>
        </S.InputWrapper>
        <S.InputWrapper>
          <AutoCompleteInput
            type="text"
            placeholder="City's name"
            defaultValue={bookingToUpdate?.destination}
            label="Destination"
            onPlaceChange={(place) => {
              setValue("destination", place);
            }}
          />
          <S.ErrorMessage>
            {errors.destination && <p>{errors.destination.message}</p>}
          </S.ErrorMessage>
        </S.InputWrapper>
        <S.InputWrapper>
          <DateRangePicker
            defaultValue={
              bookingToUpdate
                ? {
                    startDate: new Date(bookingToUpdate.startDate),
                    endDate: new Date(bookingToUpdate.endDate),
                  }
                : undefined
            }
            onSelect={(startDate, endDate) => {
              if (startDate && endDate) {
                setValue("startDate", startDate?.toISOString());
                setValue("endDate", endDate?.toISOString());
              }
            }}
          />
          <S.ErrorMessage>
            {errors.startDate && errors.endDate && (
              <p>Start and end date are required</p>
            )}
          </S.ErrorMessage>
        </S.InputWrapper>

        <PassengerCounterInput
          defaultValue={bookingToUpdate?.passengers}
          onChange={(count) => {
            setValue("passengers", count);
          }}
        />
        <S.ButtonWrapper>
          <Button type="submit" size="lg">
            {bookingId ? "Update" : "Create"} Booking
          </Button>
        </S.ButtonWrapper>
      </S.Form>
      {toasts.map((toast) => (
        <Toast key={uuid()} message={toast.message} type={toast.type} />
      ))}
    </>
  );
}
