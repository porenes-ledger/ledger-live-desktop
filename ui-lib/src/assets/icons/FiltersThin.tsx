import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function FiltersThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.63991 21.36V16.032H8.63991V15.552H2.15991V16.032H5.15991V21.36H5.63991ZM5.15991 13.632H5.63991V2.64001H5.15991V13.632ZM8.75991 8.40002H15.2399V7.92002H12.2399V2.64001H11.7599V7.92002H8.75991V8.40002ZM11.7599 21.36H12.2399V10.32H11.7599V21.36ZM15.3599 16.032H18.3599V21.36H18.8399V16.032H21.8399V15.552H15.3599V16.032ZM18.3599 13.632H18.8399V2.64001H18.3599V13.632Z"
        fill={color}
      />
    </svg>
  );
}

export default FiltersThin;
