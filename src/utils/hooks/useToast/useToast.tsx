import { useState } from "react";

type ToastType = "success" | "error" | "warning";

interface ToastMessage {
  id: string;
  message: string;
  type: ToastType;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = ({ id, message, type }: ToastMessage) => {
    const newToast: ToastMessage = { id, message, type };
    setToasts((prevToasts) => {
      const updatedToasts = [...prevToasts, newToast];

      if (prevToasts.length === 0) {
        setTimeout(() => {
          setToasts([]);
        }, 3000);
      }

      return updatedToasts;
    });
  };

  return { showToast, toasts };
};
