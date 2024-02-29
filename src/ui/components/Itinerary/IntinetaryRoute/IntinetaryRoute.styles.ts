import { styled } from "@linaria/react";

export const IntinetaryRoute = styled.div`
  padding-bottom: 20px;
  line-height: 133%;
  color: rgb(0, 0, 20);
  margin: 0px;
  margin-top: 25px;
  display: flex;
  border-bottom: 0.0625rem solid rgb(214, 214, 230);
  max-width: 600px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CardLeftContent = styled.div`
  margin-right: 40px;
  width: 100px;
`;

export const DateWrapper = styled.span`
  font-size: 0.75rem;
  margin-top: 10px;
`;

export const CardRightContent = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  justify-content: start;
  text-align: left;
  color: #626275;
  margin-top: 10px;
  .svg {
    margin: 0 10px;
  }
`;
