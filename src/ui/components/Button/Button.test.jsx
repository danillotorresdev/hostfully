import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { Button } from "./Button";

it("render correctly", () => {
  render(<Button>Click</Button>);
  const result = screen.getByText(/Click/i);
  expect(result).toBeDefined();
});
