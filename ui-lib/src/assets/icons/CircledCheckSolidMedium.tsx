import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function CircledCheckSolidMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0001 21.3599C17.2561 21.3599 21.3601 17.0879 21.3601 11.9999C21.3601 6.76789 17.2321 2.63989 12.0001 2.63989C6.76814 2.63989 2.64014 6.76789 2.64014 11.9999C2.64014 17.2319 6.76814 21.3599 12.0001 21.3599ZM6.86414 11.6879L8.20814 10.3439L11.1841 13.2959L16.4641 8.03989L17.8081 9.38389L11.1841 16.0319L6.86414 11.6879Z"
        fill={color}
      />
    </svg>
  );
}

export default CircledCheckSolidMedium;
