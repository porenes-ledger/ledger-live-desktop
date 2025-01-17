import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function MicrochipUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.136 21H8.904V17.64H11.616V21H12.384V17.64H15.096V21H15.864V17.64H17.64V15.864H21V15.096H17.64V12.384H21V11.616H17.64V8.904H21V8.136H17.64V6.36H15.864V3H15.096V6.36H12.384V3H11.616V6.36H8.904V3H8.136V6.36H6.36V8.136H3V8.904H6.36V11.616H3V12.384H6.36V15.096H3V15.864H6.36V17.64H8.136V21ZM7.176 16.824V7.176H16.824V16.824H7.176ZM9.744 14.256H14.256V9.744H9.744V14.256ZM10.464 13.536V10.464H13.536V13.536H10.464Z"
        fill={color}
      />
    </svg>
  );
}

export default MicrochipUltraLight;
