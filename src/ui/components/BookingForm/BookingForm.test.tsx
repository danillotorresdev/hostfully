import { BookingForm } from "./BookingForm";
import { expect, it, vi } from "vitest";
import { beforeEach, describe } from "node:test";
import * as autoCompletesuggestionsAPI from "@/services/autoCompleteSuggestions/autoCompletesuggestions";
import { placesMock } from "@/services/autoCompleteSuggestions/autoCompletesuggestions.mocks";
import { AxiosRequestHeaders } from "axios";
import { BookingProvider } from "@/contexts/BookingContext/BookingContext";

import {
  render,
  waitFor,
  screen,
  act,
  fireEvent,
} from "@/utils/settings/tests/utilities";

vi.spyOn(
  autoCompletesuggestionsAPI,
  "placesAutoCompleteSuggestions",
).mockResolvedValue({
  data: placesMock,
  config: {
    headers: {} as AxiosRequestHeaders,
  },
  headers: {},
  status: 200,
  statusText: "OK",
  request: {},
});

vi.mock("@/utils/hooks/useToast/useToast", () => ({
  useToast: () => ({
    showToast: vi.fn(),
    toasts: [],
  }),
}));

const today = new Date("2030-05-29T12:10:40.070Z").toISOString();

describe("BookingForm", () => {
  beforeEach(() => {
    vi.spyOn(global, "Date").mockImplementation(
      () => today as unknown as string,
    );
  });

  describe("Create Booking", () => {
    it("should submit the form", async () => {
      vi.useFakeTimers();
      vi.setSystemTime(new Date("2024-09-14"));

      const afterSumbit = vi.fn();

      const { getByLabelText, getByText, debug } = render(
        <BookingForm afterSumbit={afterSumbit} />,
      );

      fireEvent.change(getByLabelText("Origin"), {
        target: { value: "Paris" },
      });
      fireEvent.change(getByLabelText("Destination"), {
        target: { value: "London" },
      });

      const departureLabel = screen.getByLabelText("date");
      fireEvent.click(departureLabel);

      expect(screen.getByText("Select")).toBeDefined();

      const calendar = screen.getByTestId("leftCalendar");
      const getStartDate = screen.getByText("15");
      const endDate = screen.getByText("20");

      fireEvent.click(getStartDate);
      fireEvent.click(endDate);

      const selectButon = calendar.querySelector("button") as HTMLElement;

      fireEvent.click(selectButon);

      act(() => {
        fireEvent.click(getByText("Select"));
      });

      const updatedStartDateLabel = screen.getByText("9/15/2024");
      const updatedEndDateLabel = screen.getByText("9/20/2024");

      expect(updatedStartDateLabel).toBeDefined();
      expect(updatedEndDateLabel).toBeDefined();

      const submitFormButton = screen.getByText("Create Booking");

      fireEvent.click(submitFormButton);

      waitFor(() => {
        expect(getByText("Booking created")).toBeDefined();
      });
    });
  });

  describe("Update Booking", () => {
    it("should submit the form", async () => {
      vi.useFakeTimers();
      vi.setSystemTime(new Date("2024-09-14"));

      const afterSumbit = vi.fn();

      const { getByLabelText, getByText } = render(
        <BookingProvider>
          <BookingForm bookingId="1" afterSumbit={afterSumbit} />
        </BookingProvider>,
      );

      fireEvent.change(getByLabelText("Origin"), {
        target: { value: "Paris" },
      });
      fireEvent.change(getByLabelText("Destination"), {
        target: { value: "London" },
      });

      const departureLabel = screen.getByLabelText("date");
      fireEvent.click(departureLabel);

      expect(screen.getByText("Select")).toBeDefined();

      const calendar = screen.getByTestId("leftCalendar");
      const getStartDate = screen.getByText("15");
      const endDate = screen.getByText("20");

      fireEvent.click(getStartDate);
      fireEvent.click(endDate);

      const selectButon = calendar.querySelector("button") as HTMLElement;

      fireEvent.click(selectButon);

      act(() => {
        fireEvent.click(getByText("Select"));
      });

      const updatedStartDateLabel = screen.getByText("1/11/2024");
      const updatedEndDateLabel = screen.getByText("1/15/2024");

      expect(updatedStartDateLabel).toBeDefined();
      expect(updatedEndDateLabel).toBeDefined();

      const submitFormButton = screen.getByText("Update Booking");

      fireEvent.click(submitFormButton);

      waitFor(() => {
        expect(getByText("Booking updated")).toBeDefined();
      });
    });
  });
});
