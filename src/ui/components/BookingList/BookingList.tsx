import { useBookingContext } from "@/contexts/BookingContext/BookingContext";
import * as S from "./BookingList.styles";
import { Itinerary } from "@/ui/components/Itinerary/Itinerary";

export function BookingList() {
  const { bookings, deleteBooking } = useBookingContext();

  if (bookings.length === 0) {
    return (
      <S.Container>
        <h2>No bookings yet</h2>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Title>Bookings</S.Title>
      {bookings.map((booking) => (
        <Itinerary
          key={booking.id}
          booking={booking}
          deleteBooking={deleteBooking}
        />
      ))}
    </S.Container>
  );
}
