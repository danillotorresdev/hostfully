import { styled } from "@linaria/react";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  flex-direction: column;
`;

export const CounterWrapper = styled.div``;

export const PassengerCounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.16) !important;
  border-radius: 10px;
  background-color: #fff;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  border-bottom: 1px solid #e0e0e0;
  padding: 10px;
  display: flex;
  align-items: center;
  .svg {
    margin-right: 5px;
  }
`;

export const Title = styled.span`
  font-size: 1rem;
`;

export const Content = styled.div`
  padding: 10px 10px 10px 10px;
  & > div:first-child {
    margin-bottom: 10px;
  }
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  & > div {
    display: flex;
    align-items: center;
    span {
      margin: 0 10px;
    }
  }
`;

export const CounterLabel = styled.span`
  margin-right: 10px;
`;

export const CounterButton = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: #2d2aa5;
  color: #fff;
  cursor: pointer;
  border-radius: 50px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #40caa1;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  border-top: 1px solid #e0e0e0;
`;
