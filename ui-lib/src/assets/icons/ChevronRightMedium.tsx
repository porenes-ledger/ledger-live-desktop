import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ChevronRightMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.78003 19.728L8.12403 21.072L17.22 12L8.12403 2.92798L6.78003 4.27198L14.484 12L6.78003 19.728Z"
        fill={color}
      />
    </svg>
  );
}

export default ChevronRightMedium;
