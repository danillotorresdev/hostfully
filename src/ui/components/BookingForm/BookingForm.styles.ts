import { styled } from "@linaria/react";

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-direction: column;
  & > * {
    flex: 1;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  & button {
    width: 100%;
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    .svg {
      margin-left: 10px;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  padding-bottom: 10px;
  @media (min-width: 1024px) {
    padding-bottom: 0;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 0.8rem;
  position: absolute;
  bottom: -22px;
  @media (min-width: 1024px) {
    bottom: -33px;
  }
`;
