const url = "/assets/sprite.svg";

type SvgNameMapper =
  | "arrow-right"
  | "arrow-left"
  | "trash"
  | "edit"
  | "logo"
  | "calendar"
  | "departure"
  | "arrival"
  | "arrow-foward"
  | "arrow-back"
  | "members"
  | "member"
  | "close";

type IconProps = {
  name: SvgNameMapper;
  size?: "sm" | "md" | "lg";
  color?: string;
};

const SVG_SIZE_MAPPER = {
  sm: 16,
  md: 24,
  lg: 32,
};

export const Icon = ({ name, size = "md", color }: IconProps) => {
  const svgSize = SVG_SIZE_MAPPER[size];

  return (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      className={`svg svg-${name}`}
      data-testid="icon-svg"
      style={{
        width: svgSize,
        height: svgSize,
        color,
      }}
    >
      <use xlinkHref={`${url}#${name}`} />
    </svg>
  );
};
