import { useRef, useState } from "react";
import { Icon } from "@/ui/components/Icon/Icon";
import * as S from "./PassengersCounterWrapper.styles";
import {
  PassengerCount,
  PassengerCounter,
} from "@/ui/components/PassengersCounterWrapper/PassengersCounter/PassengersCounter";
import { useClickoutside } from "@/utils/hooks/useClickOutside/useClickoutside";

type PassengerCounterProps = {
  onChange: (count: PassengerCount) => void;
  defaultValue?: PassengerCount;
};

export const PassengerCounterInput = ({
  onChange,
  defaultValue,
}: PassengerCounterProps) => {
  const [showCounter, setShowCounter] = useState(false);
  const [passengerCount, setPassengerCount] = useState<PassengerCount>(
    defaultValue ?? { adults: 1, children: 0 },
  );

  const counterRef = useRef<HTMLDivElement>(null);

  useClickoutside({
    ref: counterRef,
    callback: () => setShowCounter(false),
  });

  return (
    <S.Container>
      <S.Label>Passengers</S.Label>
      <S.PassengerButton
        type="button"
        onClick={() => setShowCounter(!showCounter)}
      >
        <Icon name="member" />
        {passengerCount.adults + passengerCount.children} passenger{passengerCount.adults + passengerCount.children > 1 ? "s" : ""}
      </S.PassengerButton>
      {showCounter && (
        <S.PassengerCounterWrapper>
          <PassengerCounter
            defaultValue={passengerCount}
            onChange={(count) => {
              onChange(count);
              setPassengerCount(count);
              setShowCounter(false);
            }}
            ref={counterRef}
          />
        </S.PassengerCounterWrapper>
      )}
    </S.Container>
  );
};
