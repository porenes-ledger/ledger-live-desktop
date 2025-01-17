import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ImportLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.87988 20.28H21.1199V13.32H19.9199V19.08H4.07988V13.32H2.87988V20.28ZM7.65588 12.336L11.9999 16.68L16.3439 12.336L15.5759 11.568L14.1119 13.032C13.6079 13.536 13.0799 14.088 12.5759 14.616V3.71997H11.4239V14.64C10.9199 14.088 10.3919 13.56 9.88788 13.032L8.39988 11.568L7.65588 12.336Z"
        fill={color}
      />
    </svg>
  );
}

export default ImportLight;
