import { describe, expect, it } from "vitest";
import { Logo } from "./Logo";
import { render, screen } from "@/utils/settings/tests/utilities";

describe("Logo component", () => {
  it("renders logo image with correct attributes", () => {
   const {asFragment} = render(<Logo />);

    expect(asFragment()).toMatchSnapshot();
    
    const logoImage = screen.getByAltText("Logo");
    expect(logoImage).toBeDefined();

    expect(logoImage).toBeDefined();
  });
});
