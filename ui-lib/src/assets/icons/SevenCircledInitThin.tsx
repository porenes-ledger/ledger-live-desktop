import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function SevenCircledInitThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.592 16.44H12.12C12.504 13.176 13.872 10.464 16.032 8.64V7.584H9.67198V8.064H15.552V8.424C13.32 10.392 11.976 13.2 11.592 16.44ZM4.03198 12C4.03198 16.968 7.94398 20.88 12.912 20.88H19.968V20.4H12.912C8.20798 20.4 4.51198 16.704 4.51198 12C4.51198 7.416 8.20798 3.6 12.912 3.6H19.968V3.12H12.912C7.94398 3.12 4.03198 7.152 4.03198 12Z"
        fill={color}
      />
    </svg>
  );
}

export default SevenCircledInitThin;
