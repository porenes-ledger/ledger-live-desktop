import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function OneCircledMediThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6 11.904V16.464H13.08V7.584H11.808L8.54401 10.632V11.28L12 8.064H12.6V11.904ZM5.76001 20.88H18.24V20.4H5.76001V20.88ZM5.76001 3.6H18.24V3.12H5.76001V3.6Z"
        fill={color}
      />
    </svg>
  );
}

export default OneCircledMediThin;
