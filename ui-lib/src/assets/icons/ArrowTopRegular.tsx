import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ArrowTopRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.256 5.26805V21.3721H12.744V5.26805C13.272 5.82005 13.824 6.39605 14.352 6.92405L17.664 10.2601L18.624 9.27605L12 2.62805L5.37598 9.27605L6.33598 10.2601L9.64798 6.92405C10.176 6.39605 10.728 5.82005 11.256 5.26805Z"
        fill={color}
      />
    </svg>
  );
}

export default ArrowTopRegular;
