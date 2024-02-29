import { useEffect } from "react";

type UseClickoutsideProps = {
  ref: React.RefObject<HTMLDivElement>;
  callback: (event: MouseEvent) => void;
};

export const useClickoutside = ({ callback, ref }: UseClickoutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};
