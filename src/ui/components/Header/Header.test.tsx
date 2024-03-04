import { HeaderComponent } from "./Header";
import { describe, expect, it } from "vitest";

import { render, screen } from "@/utils/settings/tests/utilities";

describe("Header", () => {
  it("should render the header", () => {
    const { asFragment } = render(<HeaderComponent />);

    const homeAnchor = screen.getByText("Home");
    const aboutAnchor = screen.getByText("About");
    const contactAnchor = screen.getByText("Contact");

    expect(asFragment()).toMatchSnapshot();
    expect(homeAnchor).toBeDefined();
    expect(aboutAnchor).toBeDefined();
    expect(contactAnchor).toBeDefined();
  });
});
