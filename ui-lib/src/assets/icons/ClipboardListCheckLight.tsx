import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ClipboardListCheckLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.95996 21.36H20.04V4.27201H15.84V2.64001H8.15996V4.27201H3.95996V21.36ZM5.15996 20.208V5.40001H8.15996V5.88001H15.84V5.40001H18.84V20.208H5.15996ZM6.79196 9.60002L8.78396 11.64L11.784 8.64002L11.064 7.89602L8.78396 10.176L7.51196 8.90402L6.79196 9.60002ZM7.79996 16.992H9.71996V15.072H7.79996V16.992ZM11.88 16.632H16.8V15.432H11.88V16.632ZM13.08 11.136H16.8V9.93602H13.08V11.136Z"
        fill={color}
      />
    </svg>
  );
}

export default ClipboardListCheckLight;
