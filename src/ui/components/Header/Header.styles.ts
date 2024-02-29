import { styled } from "@linaria/react";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--color-primary);
  color: var(--color-white);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  flex-direction: column;

  img {
    padding-bottom: 1rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    img {
      padding-bottom: 0;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const NavLink = styled.a`
  color: var(--color-white);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
`;
