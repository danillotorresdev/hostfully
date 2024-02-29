import { createPortal } from "react-dom";
import * as S from "@/ui/components/Toast/Toast.styles";

const portalRoot = document.getElementById("portal-root") as HTMLElement;

export type ToastProps = {
  message: string;
  type?: "success" | "error" | "warning";
};

export const Toast = ({ message, type }: ToastProps) =>
  createPortal(
    <S.ToastContainer type={type}>{message}</S.ToastContainer>,
    portalRoot,
  );
