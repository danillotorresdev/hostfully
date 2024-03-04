import { forwardRef, useState } from "react";
import * as S from "./PassengersCounter.styles";
import { Icon } from "@/ui/components/Icon/Icon";
import { Button } from "@/ui/components/Button/Button";

export type PassengerCount = {
  adults: number;
  children: number;
};

export type PassengerCounterProps = {
  onChange: (count: PassengerCount) => void;
  defaultValue?: PassengerCount;
};

export const PassengerCounter = forwardRef<
  HTMLDivElement,
  PassengerCounterProps
>(({ onChange, defaultValue }: PassengerCounterProps, ref) => {
  const [adultsCount, setAdultsCount] = useState(defaultValue?.adults ?? 1);
  const [childrenCount, setChildrenCount] = useState(
    defaultValue?.children ?? 0,
  );

  const incrementAdults = () => {
    const newCount = adultsCount + 1;
    setAdultsCount(newCount);
  };

  const decrementAdults = () => {
    const newCount = adultsCount - 1 >= 1 ? adultsCount - 1 : 1;
    setAdultsCount(newCount);
  };

  const incrementChildren = () => {
    const newCount = childrenCount + 1;
    setChildrenCount(newCount);
  };

  const decrementChildren = () => {
    const newCount = childrenCount - 1 >= 0 ? childrenCount - 1 : 0;
    setChildrenCount(newCount);
  };

  return (
    <S.Container ref={ref}>
      <S.CounterWrapper>
        <S.PassengerCounterContainer>
          <S.TitleWrapper>
            <Icon name="member" /> <S.Title>Passengers</S.Title>
          </S.TitleWrapper>
          <S.Content>
            <S.Counter>
              <S.CounterLabel>Adults</S.CounterLabel>
              <div>
                <S.CounterButton type="button" onClick={decrementAdults}>
                  -
                </S.CounterButton>
                <span>{adultsCount}</span>
                <S.CounterButton type="button" onClick={incrementAdults}>
                  +
                </S.CounterButton>
              </div>
            </S.Counter>
            <S.Counter>
              <S.CounterLabel>Children</S.CounterLabel>
              <div>
                <S.CounterButton type="button" onClick={decrementChildren}>
                  -
                </S.CounterButton>
                <span>{childrenCount}</span>
                <S.CounterButton type="button" onClick={incrementChildren}>
                  +
                </S.CounterButton>
              </div>
            </S.Counter>
          </S.Content>
          <S.ButtonWrapper>
            <Button
              onClick={() => {
                onChange({ adults: adultsCount, children: childrenCount });
              }}
              size="md"
              type="button"
            >
              Select
            </Button>
          </S.ButtonWrapper>
        </S.PassengerCounterContainer>
      </S.CounterWrapper>
    </S.Container>
  );
});
