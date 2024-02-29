import { ModalBase } from "@/ui/components/Modals/settings/ModalBase";
import { BookingForm } from "@/ui/components/BookingForm/BookingForm";
import * as S from "./EditBookingModal.styles";

type EditBookingModalProps = {
  bookingId: string;
  showModal: boolean;
  handleShowModal: () => void;
};

export const EditBookingModal = ({
  bookingId,
  handleShowModal,
  showModal,
}: EditBookingModalProps) => (
  <ModalBase
    style={{
      minWidth: "30%",
      minHeight: "30%",
    }}
    handleShowModal={handleShowModal}
    showModal={showModal}
  >
    <S.FormWrapper>
      <S.FormTitle>Edit Booking</S.FormTitle>

      <BookingForm bookingId={bookingId} afterSumbit={handleShowModal} />
    </S.FormWrapper>
  </ModalBase>
);
