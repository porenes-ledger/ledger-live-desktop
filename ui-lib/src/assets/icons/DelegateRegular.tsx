import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function DelegateRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.40796 12.444V20.844H4.96796V12.444C4.96796 10.02 6.71996 8.24401 9.14396 8.24401H18C17.496 8.70001 17.016 9.15601 16.536 9.61201L15.288 10.884L16.248 11.868L20.592 7.50001L16.248 3.15601L15.288 4.14001L16.536 5.38801C16.992 5.84401 17.472 6.30001 17.952 6.75601H9.14396C5.97596 6.75601 3.40796 9.34801 3.40796 12.444Z"
        fill={color}
      />
    </svg>
  );
}

export default DelegateRegular;
