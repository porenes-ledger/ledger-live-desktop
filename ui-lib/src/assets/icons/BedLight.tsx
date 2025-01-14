import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function BedLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.3042 18.852H3.4562V15.348H20.5442V18.852H21.6962V11.628C21.6962 9.78001 20.3042 8.38801 18.4802 8.38801L11.6642 8.41201V14.148H3.4562V5.14801H2.3042V18.852ZM4.6082 10.092C4.6082 11.724 5.9282 13.02 7.5602 13.02C9.1682 13.02 10.5122 11.724 10.5122 10.092C10.5122 8.46001 9.1682 7.14001 7.5602 7.14001C5.9282 7.14001 4.6082 8.46001 4.6082 10.092ZM5.6402 10.092C5.6402 9.01201 6.5042 8.17201 7.5602 8.17201C8.6162 8.17201 9.4802 9.01201 9.4802 10.092C9.4802 11.148 8.6162 12.012 7.5602 12.012C6.5042 12.012 5.6402 11.148 5.6402 10.092ZM12.7922 14.148V9.54001H18.7682C19.8962 9.54001 20.5682 10.212 20.5682 11.34L20.5442 14.148H12.7922Z"
        fill={color}
      />
    </svg>
  );
}

export default BedLight;
