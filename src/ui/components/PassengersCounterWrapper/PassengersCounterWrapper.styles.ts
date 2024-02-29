import { styled } from "@linaria/react";

export const Label = styled.label`
  margin-bottom: 0.2rem;
  font-size: 0.8rem;
`;

export const Container = styled.div`
  position: relative;
  flex-direction: column;
  color: #333333;
`;

export const PassengerCounterWrapper = styled.div`
  position: absolute;
  top: 20px;
  width: 100%;
  z-index: 100;
`;

export const PassengerButton = styled.button`
  padding: 0 10px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  height: 57px;
  font-size: 14px;
  .svg {
    margin-right: 5px;
  }
  &:hover {
    border: 1px solid #2d2aa5;
  }
`;
