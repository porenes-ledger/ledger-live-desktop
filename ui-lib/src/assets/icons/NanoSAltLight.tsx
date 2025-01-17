import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function NanoSAltLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8198 20.04L4.42782 9.64797L8.29182 5.78397L18.6838 16.176C19.2838 16.752 19.5478 17.424 19.5478 18.168C19.5478 19.68 18.2998 20.904 16.8118 20.904C16.0918 20.904 15.3958 20.616 14.8198 20.04ZM2.81982 9.64797L13.2118 20.064V21.84H20.4598V12.024H21.1798V9.52797H20.4598V6.76797H21.1798V4.29597H20.4598V2.15997H13.3798V9.26397L8.29182 4.17597L2.81982 9.64797ZM15.2758 18.144C15.2758 18.984 15.9478 19.704 16.8118 19.704C17.6518 19.704 18.3238 18.984 18.3238 18.144C18.3238 17.304 17.6518 16.632 16.8118 16.632C15.9478 16.632 15.2758 17.304 15.2758 18.144Z"
        fill={color}
      />
    </svg>
  );
}

export default NanoSAltLight;
