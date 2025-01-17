import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TachometerMediumLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.1638 19.86H19.8118C21.0358 18.276 21.8038 16.212 21.8038 14.004C21.8038 9.30001 18.4678 5.34001 14.0278 4.42801V5.65201C17.7958 6.56401 20.6038 9.97202 20.6038 14.004C20.6038 15.708 20.0758 17.316 19.2118 18.66H4.7878C3.8998 17.316 3.3958 15.708 3.3958 14.004C3.3958 9.97202 6.1798 6.56401 9.9478 5.65201V4.42801C5.5318 5.34001 2.1958 9.30001 2.1958 14.004C2.1958 16.188 2.9398 18.252 4.1638 19.86ZM11.3878 14.004C11.3878 14.34 11.6518 14.604 11.9878 14.604C12.3238 14.604 12.5878 14.34 12.5878 14.004V4.14001H11.3878V14.004Z"
        fill={color}
      />
    </svg>
  );
}

export default TachometerMediumLight;
