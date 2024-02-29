import { styled } from "@linaria/react";

export const FormWrapper = styled.div`
  padding: 0 20px ;

  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    height: 100%;
  }
`;

export const FormTitle = styled.span`
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 20px;
  display: block;
`;
