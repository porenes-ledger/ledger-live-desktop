import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function OneCircledUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21C17.04 21 21 16.896 21 12C21 6.96 17.04 3 12 3C6.96 3 3 6.96 3 12C3 17.04 6.96 21 12 21ZM3.84 12C3.84 7.416 7.44 3.84 12 3.84C16.584 3.84 20.16 7.416 20.16 12C20.16 16.44 16.584 20.16 12 20.16C7.44 20.16 3.84 16.56 3.84 12ZM8.616 11.568L11.904 8.496H12.432V12.312V16.464H13.272V7.584H11.76L8.616 10.512V11.568Z"
        fill={color}
      />
    </svg>
  );
}

export default OneCircledUltraLight;
