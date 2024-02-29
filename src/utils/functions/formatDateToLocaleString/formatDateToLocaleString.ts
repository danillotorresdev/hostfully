type FormatDateToLocaleStringProps = {
  date: string;
  options: Intl.DateTimeFormatOptions;
};
export const formatDateToLocaleString = ({
  date,
  options,
}: FormatDateToLocaleStringProps) => {
  const dateObj: Date = new Date(date);

  const formattedDate: string = dateObj.toLocaleDateString("en-US", {
    ...options,
  });
  return formattedDate;
};
