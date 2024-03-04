import { BookingList } from "./BookingList";
import { describe, expect, it } from "vitest";
import * as BookingContext from "@/contexts/BookingContext/BookingContext";

import { render, screen, fireEvent } from "@/utils/settings/tests/utilities";

describe("BookingList", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(
      <BookingContext.BookingProvider>
        <BookingList />
      </BookingContext.BookingProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  
  describe("No bookings", () => {
    it("should show no bookings message and delete booking", async () => {
      render(
        <BookingContext.BookingProvider>
          <BookingList />
        </BookingContext.BookingProvider>,
      );

      const deleteButton = screen.getAllByTitle("Delete booking");

      const button1 = deleteButton[0] as HTMLButtonElement;
      const button2 = deleteButton[1] as HTMLButtonElement;

      fireEvent.click(button1);
      fireEvent.click(button2);

      expect(screen.getByText("No bookings yet")).toBeDefined();
    });
  });

  describe("With bookings", () => {
    it("should show bookings", () => {
      render(
        <BookingContext.BookingProvider>
          <BookingList />
        </BookingContext.BookingProvider>,
      );

      expect(screen.getByText("Bookings")).toBeDefined();
    });
  });
});
