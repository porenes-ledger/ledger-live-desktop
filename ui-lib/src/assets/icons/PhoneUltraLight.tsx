import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function PhoneUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9882 21.156L21.1562 17.892L16.0442 13.284L11.8202 17.46C10.8122 16.74 9.85224 15.924 8.96424 15.036C8.07624 14.148 7.26024 13.188 6.56424 12.18L10.7162 7.95599L6.10824 2.84399L2.84424 6.01199C3.58824 9.53999 5.70024 12.924 8.36424 15.636C11.1002 18.324 14.4602 20.436 17.9882 21.156ZM3.78024 6.27599L6.08424 4.06799L9.56424 7.93199L6.08424 11.484C5.02824 9.85199 4.21224 8.09999 3.78024 6.27599ZM12.5162 17.94L16.0682 14.46L19.9322 17.916L17.7242 20.22C15.9002 19.788 14.1482 18.996 12.5162 17.94Z"
        fill={color}
      />
    </svg>
  );
}

export default PhoneUltraLight;
