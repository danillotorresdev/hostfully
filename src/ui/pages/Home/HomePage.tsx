import { BookingProvider } from "@/contexts/BookingContext/BookingContext";
import { BookingForm } from "@/ui/components/BookingForm/BookingForm";
import { BookingList } from "@/ui/components/BookingList/BookingList";
import { HeaderComponent } from "@/ui/components/Header/Header";
import * as S from "./HomePage.styles";

export const HomePage = () => (
  <S.HomeWrapper>
    <HeaderComponent />

    <BookingProvider>
      <S.BookingFormWrapper>
        <S.Container>
          <S.Title>
            Your property management made easy: <br />
            <span>Our platform, your success!</span>
          </S.Title>
          <BookingForm />
        </S.Container>
      </S.BookingFormWrapper>
      <S.Container>
        <BookingList />
      </S.Container>
    </BookingProvider>
  </S.HomeWrapper>
);
