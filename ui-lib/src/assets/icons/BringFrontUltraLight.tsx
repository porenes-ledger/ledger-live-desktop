import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function BringFrontUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.84 21H21V12.84H18.36V13.656H20.184V20.184H13.656V18.36H12.84V21ZM3 11.16H5.64V10.344H3.816V3.816H10.704V5.64H11.52V3H3V11.16ZM7.92 16.08H16.08V7.92H7.92V16.08ZM8.736 15.264V8.736H15.264V15.264H8.736Z"
        fill={color}
      />
    </svg>
  );
}

export default BringFrontUltraLight;
