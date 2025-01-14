import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function DashboardThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.6001 19.92H20.4001V19.44H4.0801V4.08002H3.6001V19.92ZM7.2721 17.04H7.7521V11.4H7.2721V17.04ZM11.2081 17.04H11.6881V6.57602H11.2081V17.04ZM15.1441 17.04H15.6241V8.97602H15.1441V17.04ZM19.0801 17.04H19.5601V4.20002H19.0801V17.04Z"
        fill={color}
      />
    </svg>
  );
}

export default DashboardThin;
