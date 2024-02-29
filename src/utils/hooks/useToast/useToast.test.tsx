import { useToast } from "./useToast";
import { describe, expect, it, vi } from "vitest";

import { act, renderHook } from "@/utils/settings/tests/utilities";

vi.useFakeTimers();

describe("useToast", () => {
  it("adds a toast message to the list when showToast is called", () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      result.current.showToast({
        id: "1",
        message: "Test message",
        type: "success",
      });
    });

    expect(result.current.toasts).toEqual([
      { id: "1", message: "Test message", type: "success" },
    ]);
  });

  it("clears the list of toasts after a delay", () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      result.current.showToast({
        id: "1",
        message: "Test message",
        type: "success",
      });
    });

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(result.current.toasts).toEqual([]);
  });
});
