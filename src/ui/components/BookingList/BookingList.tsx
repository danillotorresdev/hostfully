import { useBookingContext } from "@/contexts/BookingContext/BookingContext";
import * as S from "./BookingList.styles";
import { Itinerary } from "@/ui/components/Itinerary/Itinerary";
import { Toast } from "@/ui/components/Toast/Toast";
import { useToast } from "@/utils/hooks/useToast/useToast";

export function BookingList() {
  const { bookings, deleteBooking } = useBookingContext();
  const { showToast, toasts } = useToast();

  const handleDeleteBooking = (id: string) => {
    showToast({
      id,
      message: "Booking deleted",
      type: "success",
    });
    deleteBooking(id);
  };

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
          deleteBooking={() => handleDeleteBooking(booking.id)}
        />
      ))}

      {toasts.map((toast) => (
        <Toast key={toast.id} message={toast.message} type={toast.type} />
      ))}
    </S.Container>
  );
}
