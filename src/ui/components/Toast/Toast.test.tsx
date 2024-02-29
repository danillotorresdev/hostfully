import { ToastComponent } from "./Toast";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { render } from "@/utils/settings/tests/utilities";

describe("Toast", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the component", () => {
    const { container } = render(
      <ToastComponent message="This is a message" type="success" />,
    );

    expect(container).toMatchSnapshot();
  });
});
