import { PassengerCounterInput } from "./PassengersCounterWrapper";
import { describe, expect, it, vi } from "vitest";
import { render, fireEvent, screen } from "@/utils/settings/tests/utilities";

describe("PassengerCounterWrapper", () => {
  it("should show the correct number of passengers", () => {
    const onChangeMock = vi.fn();
    const { asFragment } = render(
      <PassengerCounterInput
        onChange={onChangeMock}
        defaultValue={{
          adults: 1,
          children: 0,
        }}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText("1 passenger")).toBeDefined();
  });

  it('calls onChange with correct passenger counts when "Select" button is clicked', () => {
    const onChangeMock = vi.fn();
    const { getByText } = render(
      <PassengerCounterInput
        defaultValue={{
          adults: 1,
          children: 0,
        }}
        onChange={onChangeMock}
      />,
    );

    const passenger = getByText("1 passenger");

    fireEvent.click(passenger);

    const adultsIncrement = getByText("Adults")
      .nextElementSibling as HTMLButtonElement;
    const getAdultMinusButton = adultsIncrement.querySelectorAll("button")[0];
    const getAdultPlusButton = adultsIncrement.querySelectorAll("button")[1];
    fireEvent.click(getAdultPlusButton);
    fireEvent.click(getAdultPlusButton);

    fireEvent.click(getAdultMinusButton);

    const childrenIncrement = getByText("Children")
      .nextElementSibling as HTMLButtonElement;

    fireEvent.click(childrenIncrement.querySelectorAll("button")[1]);
    fireEvent.click(childrenIncrement.querySelectorAll("button")[1]);

    fireEvent.click(childrenIncrement.querySelectorAll("button")[0]);

    const selectButton = getByText("Select");

    fireEvent.click(selectButton);

    expect(onChangeMock).toHaveBeenCalledWith({ adults: 2, children: 1 });
  });
});
