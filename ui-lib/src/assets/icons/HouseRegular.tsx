import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function HouseRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.32018 21.36H10.8962V14.496H13.1042V21.36H19.6802V11.64L21.2642 13.08L22.3202 12L12.0002 2.64001L1.68018 12L2.73618 13.08L4.32018 11.64V21.36ZM5.83218 19.896V10.272L12.0002 4.68001L18.1682 10.272V19.896H14.4962V13.104H9.50418V19.896H5.83218Z"
        fill={color}
      />
    </svg>
  );
}

export default HouseRegular;
