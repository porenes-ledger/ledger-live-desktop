import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function UstensilsLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.33209 11.76V21.84H8.53209V11.76C10.4281 11.472 11.8681 9.84003 11.8681 7.92003V2.40003H10.7161V7.92003C10.7161 9.31203 9.82809 10.416 8.53209 10.656V2.40003H7.33209V10.656C6.06009 10.416 5.14809 9.31203 5.14809 7.92003V2.40003H3.99609V7.92003C3.99609 9.84003 5.46009 11.472 7.33209 11.76ZM14.1241 16.8H18.8041V21.84H20.0041V2.16003C16.7401 2.16003 14.1241 4.75203 14.1241 8.04003V16.8ZM15.3241 15.72V8.04003C15.3241 5.64003 16.7401 3.86403 18.8041 3.43203V15.72H15.3241Z"
        fill={color}
      />
    </svg>
  );
}

export default UstensilsLight;
