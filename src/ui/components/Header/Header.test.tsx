import { HeaderComponent } from "./Header";
import { describe, expect, it} from "vitest";

import { render } from "@/utils/settings/tests/utilities";

describe("Header", () => {
  it("should render the header", () => {
    const { getByText } = render(<HeaderComponent />);

    const homeAnchor = getByText("Home");
    const aboutAnchor = getByText("About");
    const contactAnchor = getByText("Contact");

    expect(homeAnchor).toBeDefined();
    expect(aboutAnchor).toBeDefined();
    expect(contactAnchor).toBeDefined();
  });
});
