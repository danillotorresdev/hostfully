import { Logo } from "@/ui/components/Logo/Logo";
import * as S from "./Header.styles";

export const HeaderComponent = () => {
  return (
    <S.Header>
      <Logo />
      <S.Nav>
        <S.NavLink href="#">Home</S.NavLink>
        <S.NavLink href="#">About</S.NavLink>
        <S.NavLink href="#">Contact</S.NavLink>
      </S.Nav>
    </S.Header>
  );
};
