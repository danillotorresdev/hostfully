import { DateRangePicker } from "./DateRangePicker";
import { expect, it, vi } from "vitest";
import { describe } from "node:test";
import {
  render,
  screen,
  waitFor,
  fireEvent,
} from "@/utils/settings/tests/utilities";

describe("DateRangePicker", () => {
  it("should render with default values", () => {
    const defaultValues = {
      startDate: new Date("2024-09-11T03:00:00.000Z"),
      endDate: new Date("2024-11-11T03:00:00.000Z"),
    };

    const onSelectMock = vi.fn();

    render(
      <DateRangePicker onSelect={onSelectMock} defaultValue={defaultValues} />,
    );

    expect(screen.getByText("9/11/2024")).toBeDefined();
    expect(screen.getByText("11/11/2024")).toBeDefined();
  });

  it("should call onSelect when a date is selected", async () => {
    const defaultValues = {
      startDate: new Date("2024-09-11T03:00:00.000Z"),
      endDate: new Date("2024-11-11T03:00:00.000Z"),
    };
    const onSelectMock = vi.fn();

    render(
      <DateRangePicker onSelect={onSelectMock} defaultValue={defaultValues} />,
    );
    const departureLabel = screen.getByLabelText("date");

    fireEvent.click(departureLabel);

    const getStartDate = screen.getByText("15");
    const getEndDate = screen.getByText("20");
    fireEvent(getStartDate, new MouseEvent("click", { bubbles: true }));
    fireEvent(getEndDate, new MouseEvent("click", { bubbles: true }));

    const selectButton = screen.getByText("Select");
    fireEvent(selectButton, new MouseEvent("click", { bubbles: true }));

    await waitFor(() => {
      expect(onSelectMock).toHaveBeenCalled();
    });
  });

  it("should navigate to the next month", () => {
    const defaultValues = {
      startDate: new Date("2024-09-11T03:00:00.000Z"),
      endDate: new Date("2024-11-11T03:00:00.000Z"),
    };
    const onSelectMock = vi.fn();

    render(
      <DateRangePicker onSelect={onSelectMock} defaultValue={defaultValues} />,
    );
    const departureLabel = screen.getByLabelText("date");

    fireEvent.click(departureLabel);

    const nextMonthButton = screen.getByLabelText("next month");
    fireEvent.click(nextMonthButton);

    expect(screen.getByText("October 2024")).toBeDefined();
  });
  it("should navigate to the previous month", () => {
    const defaultValues = {
      startDate: new Date("2024-09-11T03:00:00.000Z"),
      endDate: new Date("2024-11-11T03:00:00.000Z"),
    };
    const onSelectMock = vi.fn();

    render(
      <DateRangePicker onSelect={onSelectMock} defaultValue={defaultValues} />,
    );
    const departureLabel = screen.getByLabelText("date");

    fireEvent.click(departureLabel);

    const prevMonthButton = screen.getByLabelText("previous month");
    fireEvent.click(prevMonthButton);

    expect(screen.getByText("August 2024")).toBeDefined();
  });

  it("should navigate to the next year when the next month is December", () => {
    const defaultValues = {
      startDate: new Date("2024-12-11T03:00:00.000Z"),
      endDate: new Date("2024-12-11T03:00:00.000Z"),
    };
    const onSelectMock = vi.fn();

    render(
      <DateRangePicker onSelect={onSelectMock} defaultValue={defaultValues} />,
    );
    const departureLabel = screen.getByLabelText("date");

    fireEvent.click(departureLabel);

    const nextMonthButton = screen.getByLabelText("next month");
    fireEvent.click(nextMonthButton);

    expect(screen.getByText("January 2025")).toBeDefined();
  });

  it("should navigate to the previous year when the previous month is January", () => {
    const defaultValues = {
      startDate: new Date("2024-01-11T03:00:00.000Z"),
      endDate: new Date("2024-01-11T03:00:00.000Z"),
    };
    const onSelectMock = vi.fn();

    render(
      <DateRangePicker onSelect={onSelectMock} defaultValue={defaultValues} />,
    );
    const departureLabel = screen.getByLabelText("date");

    fireEvent.click(departureLabel);

    const prevMonthButton = screen.getByLabelText("previous month");
    fireEvent.click(prevMonthButton);

    expect(screen.getByText("December 2023")).toBeDefined();
  });

  it("should click in a day and select the start date", () => {
    const onSelectMock = vi.fn();

    render(<DateRangePicker onSelect={onSelectMock} />);
    const departureLabel = screen.getByLabelText("date");

    fireEvent.click(departureLabel);

    const getStartDate = screen.getByText("15");
    fireEvent.click(getStartDate);

    expect(screen.getByText("15")).toBeDefined();
  });

  it("should close the calendar when clicking outside", () => {
    const onSelectMock = vi.fn();

    render(<DateRangePicker onSelect={onSelectMock} />);

    const departureLabel = screen.getByLabelText("date");

    fireEvent.click(departureLabel);

    const outsideElement = document.body;
    fireEvent.mouseDown(outsideElement);

    expect(screen.queryByTestId("leftCalendar")).toBeNull();
    expect(screen.queryByTestId("rightCalendar")).toBeNull();
  });
  it("should select the start date if the start date has not been previously selected", () => {
    const onSelectMock = vi.fn();

    vi.useFakeTimers();
    vi.setSystemTime(new Date("2024-09-14"));

    render(<DateRangePicker onSelect={onSelectMock} />);
    const departureLabel = screen.getByLabelText("date");

    fireEvent.click(departureLabel);

    const getStartDate = screen.getByText("15");
    fireEvent.click(getStartDate);

    expect(screen.getByText("15")).toBeDefined();
  });
});
