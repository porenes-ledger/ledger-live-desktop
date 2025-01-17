import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function MedalLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.96001 13.752V21.6L12 18.792L17.04 21.6V13.752C18.12 12.528 18.792 10.944 18.792 9.19202C18.792 5.44802 15.744 2.40002 12 2.40002C8.25601 2.40002 5.20801 5.44802 5.20801 9.19202C5.20801 10.944 5.88001 12.528 6.96001 13.752ZM6.40801 9.19202C6.40801 6.09602 8.92801 3.60002 12 3.60002C15.096 3.60002 17.592 6.09602 17.592 9.19202C17.592 12.264 15.096 14.784 12 14.784C8.92801 14.784 6.40801 12.264 6.40801 9.19202ZM8.11201 19.704V14.688C9.19201 15.48 10.536 15.984 12 15.984C13.464 15.984 14.808 15.48 15.912 14.688V19.704L12 17.544L8.11201 19.704Z"
        fill={color}
      />
    </svg>
  );
}

export default MedalLight;
