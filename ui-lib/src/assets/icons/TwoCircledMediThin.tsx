import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TwoCircledMediThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.16801 16.464H15.048V15.984H9.64801V15.504L12.72 13.248C14.376 12.024 14.928 11.184 14.928 10.056C14.928 8.28 13.56 7.344 12 7.344C10.08 7.344 8.97601 8.712 8.97601 10.248V10.464H9.45601V10.248C9.45601 8.928 10.32 7.824 11.976 7.824H12.024C13.392 7.824 14.448 8.568 14.448 10.056C14.448 11.016 14.016 11.688 12.432 12.864L9.16801 15.264V16.464ZM5.76001 20.88H18.24V20.4H5.76001V20.88ZM5.76001 3.6H18.24V3.12H5.76001V3.6Z"
        fill={color}
      />
    </svg>
  );
}

export default TwoCircledMediThin;
