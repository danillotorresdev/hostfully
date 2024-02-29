type Passengers = {
  adults: number;
  children: number;
};

export function formatPassengers(passengers: Passengers) {
  return `${passengers.adults} Adult${passengers.adults > 1 ? "s" : ""} ${
    passengers.children > 0
      ? `and ${passengers.children} Child${
          passengers.children > 1 ? "ren" : ""
        }`
      : ""
  }`;
}
