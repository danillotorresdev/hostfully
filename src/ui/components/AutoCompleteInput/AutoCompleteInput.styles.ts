import { styled } from "@linaria/react";

export const SuggestionsWrapper = styled.div`
  position: relative;
  border-radius: 20px;
  background-color: white;
`;

export const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border-top: none;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 10;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  display: block;

  button {
    width: 100%;
    padding: 0.5rem;
    text-align: left;
    border: none;
    background-color: white;
    cursor: pointer;
    border-bottom: 1px solid #f5f5f5;
    z-index: 999;
  }
`;
