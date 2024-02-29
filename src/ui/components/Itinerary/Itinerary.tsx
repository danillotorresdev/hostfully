import * as S from "./Itinerary.styles";
import { Button } from "@/ui/components/Button/Button";
import { Icon } from "@/ui/components/Icon/Icon";
import { formatPassengers } from "@/utils/functions/formatPassengers/formatPassengers";
import { formatDateToLocaleString } from "@/utils/functions/formatDateToLocaleString/formatDateToLocaleString";
import { IntinetaryRoute } from "@/ui/components/Itinerary/IntinetaryRoute/IntinetaryRoute";
import { EditBookingModal } from "@/ui/components/Modals/EditBookingModal/EditBookingModal";
import { useState } from "react";

export type Booking = {
  id: string;
  origin: string;
  destination: string;
  startDate: string;
  endDate: string;
  passengers: {
    adults: number;
    children: number;
  };
};

type BookingItemProps = {
  booking: Booking;
  deleteBooking: (id: string) => void;
};

export const Itinerary = ({ booking, deleteBooking }: BookingItemProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <S.Container>
      <S.CardHeader>
        <S.Title>{booking.destination}</S.Title>
        <S.Subtitle>
          Booking for {formatPassengers(booking.passengers)}
          {`  | ${formatDateToLocaleString({
            date: booking.startDate,
            options: { month: "short", day: "numeric", year: "numeric" },
          })} to ${formatDateToLocaleString({
            date: booking.endDate,
            options: { month: "short", day: "numeric", year: "numeric" },
          })}`}
        </S.Subtitle>

        <S.CardCTAs>
          <Button
            onClick={handleShowModal}
            size="md"
            noBackground
            noPadding
            title="Edit booking"
          >
            <Icon name="edit" size="md" color="rgb(77 75 75)" />
          </Button>
          <Button
            onClick={() => deleteBooking(booking.id)}
            size="md"
            noBackground
            noPadding
            title="Delete booking"
          >
            <Icon name="trash" size="md" color="rgb(163 83 83)" />
          </Button>
        </S.CardCTAs>
      </S.CardHeader>
      <S.CardBody>
        <IntinetaryRoute booking={booking} type="DEPARTURE" />
        <IntinetaryRoute booking={booking} type="RETURN" />
      </S.CardBody>
      <S.CardFooter>
        <Icon name="members" size="sm" />
        {formatPassengers(booking.passengers)}
      </S.CardFooter>

      <EditBookingModal
        bookingId={booking.id}
        showModal={showModal}
        handleShowModal={handleShowModal}
      />
    </S.Container>
  );
};
