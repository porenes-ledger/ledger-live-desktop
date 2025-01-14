import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function FourCircledRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.24C17.184 21.24 21.24 17.04 21.24 12C21.24 6.84001 17.16 2.76001 12 2.76001C6.84001 2.76001 2.76001 6.84001 2.76001 12C2.76001 17.16 6.84001 21.24 12 21.24ZM4.32001 12C4.32001 7.68001 7.70401 4.32001 12 4.32001C16.32 4.32001 19.68 7.68001 19.68 12C19.68 16.176 16.32 19.68 12 19.68C7.70401 19.68 4.32001 16.296 4.32001 12ZM8.01601 14.568H12.192V16.464H13.68V14.568H15.072V13.296H13.68V7.58401H11.88L8.01601 13.416V14.568ZM9.48001 13.296L12.12 9.28801H12.24C12.216 10.176 12.192 11.232 12.192 12.216V13.296H9.48001Z"
        fill={color}
      />
    </svg>
  );
}

export default FourCircledRegular;
