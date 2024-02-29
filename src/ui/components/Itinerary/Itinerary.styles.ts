import { styled } from "@linaria/react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  width: 100%;
  max-width: 600px;
  position: relative;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const CardCTAs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  position: absolute;
  right: 0px;
  bottom: 24px;
  button {
    margin: 0 10px;
  }
  @media (min-width: 768px) {
    top: 0;
    bottom: auto;
  }
`;

export const Title = styled.span`
  font-size: 1.5rem;
  line-height: 133%;
  font-weight: 700;
  color: #2d2aa5;
`;

export const Subtitle = styled.span`
  font-size: 1rem;
  display: flex;
  span {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    margin: 0 5px;
  }
  font-size: 0.875rem;
`;

export const DeleteButton = styled.button``;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

export const CardFooter = styled.div`
  font-size: 0.875rem;
  margin-top: 10px;
  color: rgb(0, 0, 20);
  display: flex;
  align-items: center;
  font-weight: 700;
`;
