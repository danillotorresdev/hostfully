import { Input, InputProps } from "@/ui/components/Input/Input";
import { useAutoComplete } from "@/utils/hooks/useAutoComplete/useAutoComplete";
import * as S from "./AutoCompleteInput.styles";
import { useState } from "react";

type AutoCompleteInputProps = Omit<InputProps, "onChange"> & {
  onPlaceChange: (place: string) => void;
  defaultValue?: string;
};

export const AutoCompleteInput = ({
  onPlaceChange,
  defaultValue,
  ...props
}: AutoCompleteInputProps) => {
  const { handleSelect, inputValue, suggestions, handleChange } =
    useAutoComplete();

  const [inputValueState, setInputValueState] = useState(
    inputValue === "" && defaultValue ? defaultValue : undefined,
  );

  return (
    <div>
      <Input
        {...props}
        defaultValue={defaultValue}
        value={inputValueState}
        type="text"
        onChange={(e) => {
          handleChange(e.target.value);
          setInputValueState(e.target.value);
          onPlaceChange(e.target.value);
        }}
      />
      <S.SuggestionsWrapper>
        <S.SuggestionsList>
          {suggestions.map((place) => (
            <li key={place}>
              <button
                onClick={() => {
                  handleSelect(place);
                  setInputValueState(place);
                }}
              >
                {place}
              </button>
            </li>
          ))}
        </S.SuggestionsList>
      </S.SuggestionsWrapper>
    </div>
  );
};
