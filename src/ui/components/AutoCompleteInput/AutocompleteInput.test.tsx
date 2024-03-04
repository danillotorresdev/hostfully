import { AutoCompleteInput } from "./AutoCompleteInput";
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  act,
  fireEvent,
  render,
  screen,
} from "@/utils/settings/tests/utilities";
import * as placesAutoCompleteSuggestions from "@/services/autoCompleteSuggestions/autoCompletesuggestions";
import { placesMock } from "@/services/autoCompleteSuggestions/autoCompletesuggestions.mocks";
import { AxiosHeaders } from "axios";

describe("AutoCompleteInput component", () => {
  vi.useFakeTimers();
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const placesAutoCompleteSuggestionsSpy = vi
    .spyOn(placesAutoCompleteSuggestions, "placesAutoCompleteSuggestions")
    .mockResolvedValue({
      data: placesMock,
      status: 0,
      statusText: "",
      headers: {},
      config: {
        headers: {} as AxiosHeaders,
      },
    });

  it("should match snapshot", () => {
    const { asFragment } = render(
      <AutoCompleteInput onPlaceChange={() => {}} label={"City"} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders input field and suggestions correctly", async () => {
    render(<AutoCompleteInput onPlaceChange={() => {}} label={"City"} />);

    const inputField = screen.getByRole("textbox");
    expect(inputField).toBeDefined();

    fireEvent.change(inputField, { target: { value: "New York" } });

    expect(screen.getByDisplayValue("New York")).toBeDefined();

    await act(async () => {
      vi.advanceTimersByTime(500);
    });

    expect(placesAutoCompleteSuggestionsSpy).toHaveBeenCalledWith("New York");
  });

  it("calls onPlaceChange callback when input value changes", () => {
    const onPlaceChange = vi.fn();
    render(<AutoCompleteInput onPlaceChange={onPlaceChange} label={"City"} />);

    const inputField = screen.getByRole("textbox");

    fireEvent.change(inputField, { target: { value: "New York" } });

    expect(onPlaceChange).toHaveBeenCalledWith("New York");
  });

  it("selects suggestion and updates input value when suggestion is clicked", async () => {
    render(<AutoCompleteInput onPlaceChange={() => {}} label={"City"} />);

    const inputField = screen.getByRole("textbox");

    fireEvent.change(inputField, { target: { value: "Paris" } });

    await act(async () => {
      vi.advanceTimersByTime(1000);
    });

    const suggestion = screen.getByRole("button", { name: "Paris, France" });

    fireEvent.click(suggestion);

    expect(screen.getByDisplayValue("Paris, France")).toBeDefined();
  });
});
