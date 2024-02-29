import { ReactNode, createContext, useContext, useState } from "react";
import { z } from "zod";

const PassengerSchema = z.object({
  adults: z.number(),
  children: z.number(),
});

const BookingSchema = z.object({
  id: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  origin: z.string(),
  destination: z.string(),
  passengers: PassengerSchema,
});

type Booking = z.infer<typeof BookingSchema>;

const BookingContext = createContext<{
  bookings: Booking[];
  createBooking: (booking: Booking) => void;
  deleteBooking: (bookingId: string) => void;
  validateBookingCreation: (booking: Booking) => boolean;
  validateBookingUpdate: (booking: Booking) => boolean;
  updateBooking: (booking: Booking) => void;
}>({
  bookings: [],
  createBooking: () => {},
  deleteBooking: () => {},
  validateBookingCreation: () => false,
  validateBookingUpdate: () => false,
  updateBooking: () => {},
});

export const useBookingContext = () => useContext(BookingContext);

type BookingProviderProps = {
  children: ReactNode;
};

export const BookingProvider = ({ children }: BookingProviderProps) => {
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: "1",
      origin: "Cairo",
      destination: "Great Pyramid of Giza",
      startDate: "2024-01-11T03:00:00.000Z",
      endDate: "2024-01-15T03:00:00.000Z",
      passengers: {
        adults: 1,
        children: 0,
      },
    },
    {
      id: "2",
      origin: "Bodrum",
      destination: "Mausoleum at Halicarnassus",
      startDate: "2024-01-11T03:00:00.000Z",
      endDate: "2024-01-15T03:00:00.000Z",
      passengers: {
        adults: 2,
        children: 1,
      },
    },
  ]);

  const createBooking = (booking: Booking) => {
    const validBookingData = BookingSchema.parse(booking);
    setBookings([validBookingData, ...bookings]);
  };

  const deleteBooking = (bookingId: string) => {
    setBookings(bookings.filter((booking) => booking.id !== bookingId));
  };

  const updateBooking = (booking: Booking) => {
    const validBookingData = BookingSchema.parse(booking);

    const foundBooking = bookings.find(
      (booking) => booking.id === validBookingData.id,
    );

    if (!foundBooking) {
      return;
    }

    const updatedBookings = bookings.map((booking) =>
      booking.id === validBookingData.id ? validBookingData : booking,
    );

    setBookings(updatedBookings);
  };

  const validateBookingCreation = (booking: Booking) => {
    const newBookingStartDate = new Date(booking.startDate);
    const newBookingEndDate = new Date(booking.endDate);

    for (const existingBooking of bookings) {
      const existingBookingStartDate = new Date(existingBooking.startDate);
      const existingBookingEndDate = new Date(existingBooking.endDate);
      if (
        (newBookingStartDate >= existingBookingStartDate &&
          newBookingStartDate <= existingBookingEndDate) ||
        (newBookingEndDate >= existingBookingStartDate &&
          newBookingEndDate <= existingBookingEndDate)
      ) {
        return false;
      }
    }

    return true;
  };

  const validateBookingUpdate = (booking: Booking) => {
    const newBookingStartDate = new Date(booking.startDate);
    const newBookingEndDate = new Date(booking.endDate);

    const selectedBooking = bookings.find(
      (existingBooking) => existingBooking.id === booking.id,
    );

    if (!selectedBooking) {
      return false;
    }

    const existingBookingStartDate = new Date(selectedBooking.startDate);
    const existingBookingEndDate = new Date(selectedBooking.endDate);

    if (
      newBookingStartDate.getTime() === existingBookingStartDate.getTime() &&
      newBookingEndDate.getTime() === existingBookingEndDate.getTime()
    ) {
      return true;
    }

    for (const existingBooking of bookings) {
      const existingBookingStartDate = new Date(existingBooking.startDate);
      const existingBookingEndDate = new Date(existingBooking.endDate);
      if (
        (newBookingStartDate >= existingBookingStartDate &&
          newBookingStartDate <= existingBookingEndDate) ||
        (newBookingEndDate >= existingBookingStartDate &&
          newBookingEndDate <= existingBookingEndDate)
      ) {
        return false;
      }
    }

    return true;
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        createBooking,
        deleteBooking,
        updateBooking,
        validateBookingCreation,
        validateBookingUpdate,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
