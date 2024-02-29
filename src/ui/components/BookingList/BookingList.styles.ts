import { styled } from "@linaria/react";

export const Container = styled.div`
  border-top: 1px solid #e0e0e0;
  padding-top: 40px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1024px) {
    display: inherit;
    flex-direction: inherit;
    justify-content: inherit;
    align-items: inherit;
  }
`;

export const Title = styled.h2`
  color: #333;
  font-size: 24px;
  margin: 0;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;
