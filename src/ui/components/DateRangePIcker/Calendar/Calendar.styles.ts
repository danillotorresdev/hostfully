import { styled } from "@linaria/react";

export const CalendarContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  @media (min-width: 768px) {
    & > div:first-child {
      border-right: 1px solid #ccc;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      padding-right: 1rem;
    }
  }
`;

export const Calendar = styled.div`
  margin-top: 10px;
  background-color: #fff;
  border-radius: 4px;
  z-index: 10;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;

export const MonthSelector = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
`;

export const ArrowButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MonthName = styled.div`
  margin: 0 1rem;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
`;
