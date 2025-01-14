import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ChristmasThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7601 20.88H12.2401V18H20.6401L16.6801 12.48H18.5521L12.0001 3.12L5.44811 12.48H7.34411L3.36011 18H11.7601V20.88ZM4.29611 17.52L8.28011 12H6.36011L12.0001 3.96L17.6401 12H15.7441L19.7041 17.52H4.29611Z"
        fill={color}
      />
    </svg>
  );
}

export default ChristmasThin;
