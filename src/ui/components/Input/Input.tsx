import { InputHTMLAttributes, forwardRef } from "react";
import * as S from "./Input.styles";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }: InputProps, ref) => {
    return (
      <S.InputContainer>
        <S.Label htmlFor={label}>{label}</S.Label>
        <S.InputField ref={ref} {...props} />
      </S.InputContainer>
    );
  },
);
