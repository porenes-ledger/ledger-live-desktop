import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TwoCircledFinaUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.02812 16.464H14.0281V15.696H8.94011V15.264L11.8201 13.224C13.4041 12.096 13.9561 11.232 13.9561 10.104C13.9561 8.304 12.5641 7.344 10.9321 7.344C9.01212 7.344 7.83611 8.688 7.83611 10.224V10.464H8.65211V10.224C8.65211 9.024 9.37211 8.112 10.9081 8.112H10.9801C12.2521 8.112 13.1161 8.76 13.1161 10.104C13.1161 10.992 12.7561 11.616 11.1721 12.768L8.02812 15V16.464ZM4.06812 21H10.9321C15.9721 21 19.9321 16.896 19.9321 12C19.9321 6.96 15.9721 3 10.9321 3H4.06812V3.84H10.9321C15.5161 3.84 19.0921 7.416 19.0921 12C19.0921 16.44 15.5161 20.16 10.9321 20.16H4.06812V21Z"
        fill={color}
      />
    </svg>
  );
}

export default TwoCircledFinaUltraLight;
