import { render as renderComponent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReactElement } from "react";

type RenderOptions = Parameters<typeof renderComponent>[1];

export * from "@testing-library/react";

export const render = (ui: ReactElement, options?: RenderOptions) => {
  return {
    ...renderComponent(ui, options),
    user: userEvent.setup(),
  };
};
