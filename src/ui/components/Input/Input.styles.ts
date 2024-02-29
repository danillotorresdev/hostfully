import { styled } from "@linaria/react";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 0.2rem;
  font-size: 0.8rem;
`;

export const InputField = styled.input`
  padding: 0 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  height: 55px;
  &:hover {
    border: 1px solid #2d2aa5;
  }
`;
