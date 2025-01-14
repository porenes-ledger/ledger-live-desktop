import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ArrowTopMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.088 5.84393V21.3719H12.912V5.84393C13.296 6.27593 13.704 6.70793 14.088 7.09193L17.448 10.4759L18.624 9.27593L12 2.62793L5.37598 9.27593L6.55198 10.4759L9.91198 7.09193C10.296 6.70793 10.704 6.27593 11.088 5.84393Z"
        fill={color}
      />
    </svg>
  );
}

export default ArrowTopMedium;
