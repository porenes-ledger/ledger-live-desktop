import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TachometerMediumMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.00818 20.4119H19.9922C21.4322 18.6599 22.3202 16.3799 22.3202 13.9319C22.3202 9.17989 19.0562 5.12389 14.6402 3.94789V5.96389C18.0002 7.06789 20.4002 10.2359 20.4002 13.9319C20.4002 15.6119 19.8962 17.1719 19.0322 18.4919H4.96818C4.10418 17.1719 3.60018 15.6119 3.60018 13.9319C3.60018 10.2359 6.00018 7.06789 9.36018 5.96389V3.94789C4.94418 5.12389 1.68018 9.17989 1.68018 13.9319C1.68018 16.3799 2.56818 18.6599 4.00818 20.4119ZM11.0402 13.9319C11.0402 14.4599 11.4722 14.8919 12.0002 14.8919C12.5282 14.8919 12.9602 14.4599 12.9602 13.9319V3.58789H11.0402V13.9319Z"
        fill={color}
      />
    </svg>
  );
}

export default TachometerMediumMedium;
