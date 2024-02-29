import { ButtonProps } from "@/ui/components/Button/Button";
import { styled } from "@linaria/react";

export const ButtonStyled = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ size }) => {
    if (size === "sm") return "35px";
    if (size === "lg") return "55px";
    return "40px";
  }};
  font-size: ${({ size }) => {
    if (size === "sm") return "12px";
    if (size === "lg") return "16px";
    return "14px";
  }};
  padding: ${({ size, noPadding }) => {
    if (noPadding) return "0";
    if (size === "sm") return "10px 24px";
    if (size === "lg") return "15px 30px";
    return "12px 24px";
  }};

  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: ${({ noBackground }) =>
    noBackground ? "transparent" : "#2D2AA5 "};
  color: ${({ noBackground }) => (noBackground ? "#2D2AA5" : "#fff")};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.3);
  }

  &:hover:not(:disabled) {
    background-color: ${({ noBackground }) =>
      noBackground ? "none" : "#40caa1"};
  }
`;
