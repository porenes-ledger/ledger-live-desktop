import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function BandwithRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.488 20.4H21.144V3.59998H19.488V20.4ZM2.85596 20.4H4.51196V16.152H2.85596V20.4ZM7.00796 20.4H8.66396V13.008H7.00796V20.4ZM11.184 20.4H12.816V9.86398H11.184V20.4ZM15.336 20.4H16.992V6.71998H15.336V20.4Z"
        fill={color}
      />
    </svg>
  );
}

export default BandwithRegular;
