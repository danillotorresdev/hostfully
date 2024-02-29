import React from "react";
import * as S from "./Button.styles";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  noPadding?: boolean;
  noBackground?: boolean;
  size?: "sm" | "md" | "lg";
};

export const Button = ({ children, ...props }: ButtonProps) => (
  <S.ButtonStyled {...props}>{children}</S.ButtonStyled>
);
