import { useEffect, useState } from "react";
import { placesAutoCompleteSuggestions } from "@/services/autoCompleteSuggestions/autoCompletesuggestions";
import { useDebounce } from "@/utils/hooks/useDebounce/useDebounce";

export const useAutoComplete = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const placeDebounced = useDebounce(inputValue, 500);

  const fetchSuggestions = async (debouncedPlace: string) => {
    setInputValue(debouncedPlace);
    try {
      const { data } = await placesAutoCompleteSuggestions(debouncedPlace);
      const newSuggestions = data
        .filter(
          (item) =>
            item.addresstype === "city" ||
            item.addresstype === "town" ||
            item.addresstype === "village" ||
            item.addresstype === "municipality",
        )
        .map((item: any) => item.display_name);

      const normalizedSuggestions = newSuggestions.map((suggestion: string) => {
        const [first, ...rest] = suggestion.split(",");
        return `${first}, ${rest[rest.length - 1]}`;
      });

      const uniqueSuggestions: string[] = Array.from(
        new Set(normalizedSuggestions),
      );

      setSuggestions(uniqueSuggestions);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  useEffect(() => {
    if (placeDebounced.length === 0) {
      setSuggestions([]);
      return;
    }
    fetchSuggestions(placeDebounced);
  }, [placeDebounced]);

  const handleChange = (value: string) => {
    setInputValue(value);
  };

  const handleSelect = (selectedPlace: string) => {
    setInputValue(selectedPlace);
    setSuggestions([]);
  };

  return {
    inputValue,
    suggestions,
    handleSelect,
    handleChange,
  };
};
