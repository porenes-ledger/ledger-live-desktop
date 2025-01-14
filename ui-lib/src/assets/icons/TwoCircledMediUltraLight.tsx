import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TwoCircledMediUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.09601 16.464H15.096V15.696H10.008V15.264L12.888 13.224C14.472 12.096 15.024 11.232 15.024 10.104C15.024 8.304 13.632 7.344 12 7.344C10.08 7.344 8.90401 8.688 8.90401 10.224V10.464H9.72001V10.224C9.72001 9.024 10.44 8.112 11.976 8.112H12.048C13.32 8.112 14.184 8.76 14.184 10.104C14.184 10.992 13.824 11.616 12.24 12.768L9.09601 15V16.464ZM5.76001 21H18.24V20.16H5.76001V21ZM5.76001 3.84H18.24V3H5.76001V3.84Z"
        fill={color}
      />
    </svg>
  );
}

export default TwoCircledMediUltraLight;
