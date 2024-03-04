import { Icon } from "./Icon";
import { describe, expect, it } from "vitest";
import { render, screen } from "@/utils/settings/tests/utilities";

describe("Icon component", () => {
  it("renders icon with correct attributes", () => {
    render(<Icon name="arrow-right" size="md" color="blue" />);

    const iconSvg = screen.getByTestId("icon-svg");

    expect(iconSvg).toMatchSnapshot();
  });
});
