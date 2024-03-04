import React from "react";
import { Input } from "./Input";
import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@/utils/settings/tests/utilities";

describe("Input component", () => {
  it("renders input field with label correctly", () => {
    const { asFragment } = render(<Input label="Username" />);

    expect(asFragment()).toMatchSnapshot();
    
    const inputField = screen.getByLabelText("Username");
    expect(inputField).toBeDefined();

    const label = screen.getByText("Username");
    expect(label).toBeDefined();
  });

  it("forwards ref to input field", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input label="Username" ref={ref} />);

    expect(ref.current).toBeDefined();
  });

  it("handles user input correctly", () => {
    render(<Input label="Username" />);

    const inputField = screen.getByLabelText("Username");
    fireEvent.change(inputField, { target: { value: "testuser" } });

    expect(screen.getByDisplayValue("testuser")).toBeDefined();
  });
});
