import { styled } from "@linaria/react";

export const HomeWrapper = styled.div`
  padding-bottom: 100px;
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
  text-align: center;

  span {
    font-weight: 700;
    font-size: 1.7rem;
  }
  @media (min-width: 768px) {
    text-align: left;
    font-size: 1.5rem;
    span {
      font-size: 2.1rem;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  max-width: 1284px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const BookingFormWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 40px 0;
`;
