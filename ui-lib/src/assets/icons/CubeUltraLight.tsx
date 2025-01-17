import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function CubeUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9879 22.056L20.7239 16.992V7.008L11.9879 1.944L3.27588 7.008V16.992L11.9879 22.056ZM4.11588 16.536V7.944L11.5799 12.24V20.88L4.11588 16.536ZM4.49988 7.224L11.9879 2.88L19.4759 7.224L11.9879 11.544L4.49988 7.224ZM12.3959 20.88V12.24L19.8839 7.944V16.536L12.3959 20.88Z"
        fill={color}
      />
    </svg>
  );
}

export default CubeUltraLight;
