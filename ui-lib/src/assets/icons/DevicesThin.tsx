import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function DevicesThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.88008 21.36H12.8401V20.88H5.88008C5.08808 20.88 4.56008 20.352 4.56008 19.56V4.44001C4.56008 3.64801 5.08808 3.12001 5.88008 3.12001H15.3601C16.1521 3.12001 16.6801 3.64801 16.6801 4.44001V7.20002H17.1601V4.44001C17.1601 3.45601 16.3441 2.64001 15.3601 2.64001H5.88008C4.89608 2.64001 4.08008 3.45601 4.08008 4.44001V19.56C4.08008 20.544 4.89608 21.36 5.88008 21.36ZM14.5201 21.36H19.9201V8.88002H14.5201V21.36ZM15.0001 20.88V9.36002H19.4401V20.88H15.0001Z"
        fill={color}
      />
    </svg>
  );
}

export default DevicesThin;
