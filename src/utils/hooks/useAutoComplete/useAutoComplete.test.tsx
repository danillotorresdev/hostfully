import { useAutoComplete } from "./useAutoComplete";
import { beforeEach, describe, expect, it, test, vi } from "vitest";
import * as UseDebounce from "@/utils/hooks/useDebounce/useDebounce";
import * as PlacesAutoCompleteSuggestions from "@/services/autoCompleteSuggestions/autoCompletesuggestions";
import { placesMock } from "@/services/autoCompleteSuggestions/autoCompletesuggestions.mocks";

import { act, renderHook } from "@/utils/settings/tests/utilities";
import { AxiosHeaders } from "axios";

describe("useAutoComplete", () => {
  vi.useFakeTimers();
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should call fetchSuggestions with the correct value", () => {
    const useDebounceSpy = vi.spyOn(UseDebounce, "useDebounce");
    const placesAutoCompleteSuggestionsSpy = vi.spyOn(
      PlacesAutoCompleteSuggestions,
      "placesAutoCompleteSuggestions",
    );

    const { result } = renderHook(() => useAutoComplete());

    act(() => {
      result.current.handleChange("São Paulo");
    });

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(useDebounceSpy).toHaveBeenCalledWith("São Paulo", 500);
    expect(placesAutoCompleteSuggestionsSpy).toHaveBeenCalledWith("São Paulo");
  });

  it("should set suggestions to an empty array if the input value is empty", () => {
    const { result } = renderHook(() => useAutoComplete());

    act(() => {
      result.current.handleChange("");
    });

    expect(result.current.suggestions).toEqual([]);
  });

  it("should set suggestions to the correct value", () => {
    const placesAutoCompleteSuggestionsSpy = vi.spyOn(
      PlacesAutoCompleteSuggestions,
      "placesAutoCompleteSuggestions",
    );

    placesAutoCompleteSuggestionsSpy.mockResolvedValue({
      data: placesMock,
      status: 0,
      statusText: "",
      headers: {},
      config: {
        headers: {} as AxiosHeaders,
      },
    });

    const { result } = renderHook(() => useAutoComplete());

    act(() => {
      result.current.handleChange("São Paulo");
    });

    act(() => {
      vi.advanceTimersByTime(500);
    });
  });

  it("should filter the suggestions correctly", () => {
    const placesAutoCompleteSuggestionsSpy = vi.spyOn(
      PlacesAutoCompleteSuggestions,
      "placesAutoCompleteSuggestions",
    );

    placesAutoCompleteSuggestionsSpy.mockResolvedValue({
      data: placesMock,
      status: 0,
      statusText: "",
      headers: {},
      config: {
        headers: {} as AxiosHeaders,
      },
    });

    const { result } = renderHook(() => useAutoComplete());

    act(() => {
      result.current.handleChange("Paris, Île-de-France, France");
    });

    act(() => {
      vi.advanceTimersByTime(500);
    });
  });

  test("should handle the select correctly", () => {
    const { result } = renderHook(() => useAutoComplete());

    act(() => {
      result.current.handleSelect("São Paulo");
    });

    expect(result.current.inputValue).toBe("São Paulo");
    expect(result.current.suggestions).toEqual([]);
  });
});
