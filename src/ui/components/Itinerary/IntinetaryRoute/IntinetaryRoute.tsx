import { Icon } from "@/ui/components/Icon/Icon";
import { formatDateToLocaleString } from "@/utils/functions/formatDateToLocaleString/formatDateToLocaleString";
import { limitCharacters } from "@/utils/functions/limitCharacters/limitCharacters";
import { Booking } from "@/ui/components/Itinerary/Itinerary";
import * as S from "./IntinetaryRoute.styles";

type IntinetaryRouteProps = {
  booking: Booking;
  type: "DEPARTURE" | "RETURN";
};

export const IntinetaryRoute = ({ booking, type }: IntinetaryRouteProps) => (
  <S.IntinetaryRoute>
    <S.CardLeftContent>
      <div>
        <Icon
          name={type === "DEPARTURE" ? "departure" : "arrival"}
          color="rgb(45 42 165)"
          size="sm"
        />{" "}
        <b>{type === "DEPARTURE" ? "Departure" : "Return"}</b>
      </div>
      <S.DateWrapper>
        {formatDateToLocaleString({
          date: type === "DEPARTURE" ? booking.startDate : booking.endDate,
          options: {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
          },
        })}
      </S.DateWrapper>
    </S.CardLeftContent>
    <S.CardRightContent>
      <span title={booking.origin}>{limitCharacters(booking.origin, 20)} </span>
      <Icon
        name={type === "DEPARTURE" ? "arrow-foward" : "arrow-back"}
        size="sm"
      />{" "}
      <span title={booking.destination}>
        {limitCharacters(booking.destination, 20)}
      </span>
    </S.CardRightContent>
  </S.IntinetaryRoute>
);
