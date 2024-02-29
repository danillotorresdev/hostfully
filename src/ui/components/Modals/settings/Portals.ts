import { useLayoutEffect, useState, type ReactPortal, ReactNode } from "react";
import { createPortal } from "react-dom";

export type PortalProps = {
  wrapperId: string;
  children: ReactNode;
};

export const createWrapperAndAppendToBody = (wrapperId: string) => {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  wrapperElement.setAttribute("data-testid", wrapperId);
  document.body.appendChild(wrapperElement);

  return wrapperElement;
};

export const Portal = ({
  children,
  wrapperId = "react-portal-wrapper",
}: PortalProps): ReactPortal | null => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null,
  );

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }

    setWrapperElement(element);

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};
