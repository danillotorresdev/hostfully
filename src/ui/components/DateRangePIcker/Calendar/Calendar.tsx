import * as S from "./Calendar.styles";
import { Icon } from "@/ui/components/Icon/Icon";
import { formatDateToLocaleString } from "@/utils/functions/formatDateToLocaleString/formatDateToLocaleString";

type CalendarProps = {
  currentYear: number;
  currentMonth: number;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
  renderDaysForMonth: (
    year: number,
    month: number,
    monthOffset: number,
  ) => JSX.Element[];

  className?: string;
};

const mediaQuery = window.matchMedia("(max-width: 767px)");

export const Calendar = ({
  currentYear,
  currentMonth,
  handlePrevMonth,
  handleNextMonth,
  renderDaysForMonth,
  className,
}: CalendarProps) => (
  <S.CalendarContainer className={className}>
    <S.Calendar>
      <S.Header>
        <S.ArrowButton type="button" onClick={handlePrevMonth}>
          <Icon name="arrow-left" size="sm" />
        </S.ArrowButton>
        <S.MonthSelector>
          <S.MonthName>
            {formatDateToLocaleString({
              date: new Date(currentYear, currentMonth).toString(),
              options: { month: "long", year: "numeric" },
            })}
          </S.MonthName>
        </S.MonthSelector>
        <S.ArrowButton type="button" onClick={handleNextMonth}>
          <Icon name="arrow-right" size="sm" />
        </S.ArrowButton>
      </S.Header>
      <S.DaysGrid>
        {renderDaysForMonth(currentYear, currentMonth, 0)}
      </S.DaysGrid>
    </S.Calendar>

    {!mediaQuery.matches && (
      <S.Calendar>
        <S.Header>
          <S.ArrowButton type="button" onClick={handlePrevMonth}>
            <Icon name="arrow-left" size="sm" />
          </S.ArrowButton>
          <S.MonthSelector>
            <S.MonthName>
              {formatDateToLocaleString({
                date: new Date(currentYear, currentMonth + 1).toString(),
                options: { month: "long", year: "numeric" },
              })}
            </S.MonthName>
          </S.MonthSelector>
          <S.ArrowButton type="button" onClick={handleNextMonth}>
            <Icon name="arrow-right" size="sm" />
          </S.ArrowButton>
        </S.Header>
        <S.DaysGrid>
          {renderDaysForMonth(currentYear, currentMonth + 1, 1)}
        </S.DaysGrid>
      </S.Calendar>
    )}
  </S.CalendarContainer>
);
