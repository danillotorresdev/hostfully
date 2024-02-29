import { styled } from "@linaria/react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const DateInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DateInputLabel = styled.label`
  margin-bottom: 0.2rem;
  font-size: 0.8rem;
`;

export const DateInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
  margin: 0;
  height: 42px;
  width: 100%;
`;

export const Day = styled.div<{
  isSelected: boolean;
  isInRange: boolean;
  isDisabled: boolean;
}>`
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
  text-align: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => {
    if (props.isSelected) {
      return "#33ae8a";
    } else if (props.isInRange) {
      return "#f0f0f0";
    } else {
      return "transparent";
    }
  }};
  color: ${(props) => {
    if (props.isSelected) {
      return "#fff";
    } else if (props.isDisabled) {
      return "#ccc";
    } else {
      return "#000";
    }
  }};
  &:hover {
    background-color: ${(props) => (props.isDisabled ? "transparent" : "#ccc")};
  }
`;

export const DepartureReturnDateWrapper = styled.div`
  display: flex;
  position: relative;
  background-color: #fff;
  width: 100%;
  border-radius: 0.5rem;
  height: 42px;
  border: 1px solid #ccc;
  width: 100%;
  height: 55px;
  cursor: pointer;

  & div:first-child {
    border-right: 1px solid #ccc;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:hover {
    border: 1px solid #2d2aa5;
  }
`;

export const DepartureReturnContent = styled.div`
  width: 100%;
  padding: 8px 0;
  position: relative;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  font-size: 14px;

  & .svg {
    margin-right: 0.3rem;
    display: block;
  }
`;

export const CalendarWrapper = styled.div`
  background-color: #fff;
  position: absolute;
  top: 20px;
  left: 0;
  padding: 15px 20px 20px 20px;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  z-index: 10;
  width: 90%;

  @media (min-width: 768px) {
    width: 605px;
  }
`;

export const CalendarFooter = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 1rem;
`;
