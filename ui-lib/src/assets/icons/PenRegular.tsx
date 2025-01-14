import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function PenRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.04004 21.96L8.73604 20.112L21.96 6.91204L17.088 2.04004L3.88804 15.264L2.04004 21.96ZM4.15204 19.848L5.20804 16.032L7.96804 18.792L4.15204 19.848ZM6.24004 14.976L14.328 6.88804L17.112 9.67204L9.02404 17.76L6.24004 14.976ZM15.36 5.85604L17.088 4.12804L19.872 6.91204L18.144 8.64004L15.36 5.85604Z"
        fill={color}
      />
    </svg>
  );
}

export default PenRegular;
