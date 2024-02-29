import { useRef, useState } from "react";
import * as S from "./DateRangePicker.styles";
import { Calendar } from "./Calendar/Calendar";
import { useClickoutside } from "@/utils/hooks/useClickOutside/useClickoutside";
import { Icon } from "@/ui/components/Icon/Icon";
import { Button } from "@/ui/components/Button/Button";

type DateRangePickerProps = {
  onSelect: (startDate: Date, endDate: Date) => void;
  defaultValue?: {
    startDate: Date;
    endDate: Date;
  };
};

export const DateRangePicker = ({
  onSelect,
  defaultValue,
}: DateRangePickerProps) => {
  const [startDate, setStartDate] = useState<Date | null>(
    defaultValue?.startDate ?? null,
  );
  const [endDate, setEndDate] = useState<Date | null>(
    defaultValue?.endDate ?? null,
  );
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [currentMonth, setCurrentMonth] = useState<number>(
    defaultValue?.startDate?.getMonth() ?? new Date().getMonth(),
  );
  const [currentYear, setCurrentYear] = useState<number>(
    defaultValue?.startDate?.getFullYear() ?? new Date().getFullYear(),
  );

  const calendarRef = useRef<HTMLDivElement>(null);

  useClickoutside({
    callback: () => setShowCalendar(false),
    ref: calendarRef,
  });

  const handleDayClick = (day: number, monthOffset: number) => {
    const clickedDate = new Date(currentYear, currentMonth + monthOffset, day);
    if (!startDate) {
      setStartDate(clickedDate);
      setEndDate(null);
    } else if (!endDate && clickedDate >= startDate) {
      setEndDate(clickedDate);
    } else {
      if (clickedDate.getMonth() === currentMonth + monthOffset) {
        setStartDate(clickedDate);
        setEndDate(null);
      }
    }
  };

  const renderDaysForMonth = (
    year: number,
    month: number,
    monthOffset: number,
  ): JSX.Element[] => {
    const days: JSX.Element[] = [];
    const totalDays = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const today = new Date();

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} />);
    }

    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(year, month, i);
      const isSelected =
        (startDate && date.toDateString() === startDate.toDateString()) ||
        (endDate && date.toDateString() === endDate.toDateString());
      const isInRange =
        startDate && endDate && date >= startDate && date <= endDate;
      const isDisabled = date < today;
      days.push(
        <S.Day
          key={i}
          isSelected={!!isSelected}
          isInRange={!!isInRange}
          isDisabled={isDisabled}
          onClick={() => !isDisabled && handleDayClick(i, monthOffset)}
        >
          {i}
        </S.Day>,
      );
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => {
      if (prevMonth === 0) {
        setCurrentYear((prevYear) => prevYear - 1);
        return 11;
      }
      return prevMonth - 1;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => {
      if (prevMonth === 11) {
        setCurrentYear((prevYear) => prevYear + 1);
        return 0;
      }
      return prevMonth + 1;
    });
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <S.Container>
      <S.DateInputLabel>Date</S.DateInputLabel>
      <S.DateInputContainer onClick={toggleCalendar}>
        <S.DepartureReturnDateWrapper>
          <S.DepartureReturnContent>
            <Icon name="calendar" />
            {startDate ? startDate.toLocaleDateString() : "Departure"}
          </S.DepartureReturnContent>
          <S.DepartureReturnContent>
            <Icon name="calendar" />
            {endDate ? endDate.toLocaleDateString() : "Return"}
          </S.DepartureReturnContent>
        </S.DepartureReturnDateWrapper>
      </S.DateInputContainer>

      {showCalendar && (
        <S.CalendarWrapper ref={calendarRef}>
          <Calendar
            currentMonth={currentMonth}
            currentYear={currentYear}
            handleNextMonth={handleNextMonth}
            handlePrevMonth={handlePrevMonth}
            renderDaysForMonth={renderDaysForMonth}
            className="calendar"
          />

          <S.CalendarFooter>
            <Button
              type="button"
              size="sm"
              onClick={() => {
                if (startDate && endDate) {
                  onSelect(startDate, endDate);
                  setShowCalendar(false);
                }
              }}
            >
              Select
            </Button>
          </S.CalendarFooter>
        </S.CalendarWrapper>
      )}
    </S.Container>
  );
};
