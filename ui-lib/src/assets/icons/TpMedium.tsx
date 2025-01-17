import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TpMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9999 21.3481C17.1599 21.3481 21.3599 17.1721 21.3599 12.0121C21.3599 6.8521 17.1599 2.6521 11.9999 2.6521C6.83989 2.6521 2.63989 6.8521 2.63989 12.0121C2.63989 17.1721 6.83989 21.3481 11.9999 21.3481ZM5.51989 9.6601V8.0761H11.9519V9.6601H9.59989V16.4281H7.89589V9.6601H5.51989ZM12.8879 16.4281V8.0761H15.9359C17.6399 8.0761 18.8399 9.2521 18.8399 10.8121C18.8399 12.3721 17.6399 13.5001 15.9359 13.5001H14.6159V16.4281H12.8879ZM14.6159 11.9401H16.0799C16.8239 11.9401 17.0399 11.7001 17.0399 11.0281V10.5721C17.0399 9.8761 16.8239 9.6601 16.0799 9.6601H14.6159V11.9401Z"
        fill={color}
      />
    </svg>
  );
}

export default TpMedium;
