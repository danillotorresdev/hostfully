import { HomePage } from "./HomePage";
import { describe, expect, it } from "vitest";

import { render } from "@/utils/settings/tests/utilities";

describe("HomePage", () => {
  it("should render the component", () => {
    const { container } = render(<HomePage />);

    expect(container).toMatchSnapshot();
  });
});
