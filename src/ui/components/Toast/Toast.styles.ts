import { styled } from "@linaria/react";

export const ToastContainer = styled.div<{
  type?: "success" | "error" | "warning";
}>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  z-index: 9999;
  width: 330px;
  height: 35px;
  font-size: 1.2rem;
  display: flex;
  border-radius: 5px;
  align-items: center;
  background-color: ${({ type }) => {
    switch (type) {
      case "success":
        return "#4caf50";
      case "error":
        return "#f44336";
      case "warning":
        return "#ff9800";
      default:
        return "#333";
    }
  }};
  color: #fff;
  transition: transform 0.5s ease-in-out;
`;
