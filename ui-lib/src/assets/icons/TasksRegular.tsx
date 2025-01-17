import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TasksRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.19201 19.428H5.35201V17.268H3.19201V19.428ZM2.20801 11.988L4.29601 14.1L7.39201 11.004L6.48001 10.092L4.29601 12.276L3.12001 11.076L2.20801 11.988ZM2.20801 6.46802L4.29601 8.58002L7.39201 5.48402L6.48001 4.57202L4.29601 6.75602L3.12001 5.55602L2.20801 6.46802ZM7.75201 19.116H21.792V17.556H7.75201V19.116ZM8.83201 13.596H21.792V12.036H8.83201V13.596ZM8.83201 8.07602H21.792V6.51602H8.83201V8.07602Z"
        fill={color}
      />
    </svg>
  );
}

export default TasksRegular;
