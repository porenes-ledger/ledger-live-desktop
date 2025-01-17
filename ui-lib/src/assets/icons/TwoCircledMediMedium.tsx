import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TwoCircledMediMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.85601 16.4639H15.216V14.8079L11.112 14.8319V14.5199L13.344 13.1519C14.76 12.2879 15.336 11.3519 15.336 10.2239C15.336 8.42389 13.872 7.34389 12.024 7.34389C10.032 7.34389 8.64001 8.63989 8.64001 10.1519V10.4639H10.536V10.1999C10.536 9.33589 10.824 9.02389 11.928 9.02389H12.096C13.104 9.02389 13.416 9.33589 13.416 10.2719C13.416 10.9439 13.248 11.4479 11.64 12.4559L8.85601 14.2079V16.4639ZM5.76001 21.3599H18.24V19.4399H5.76001V21.3599ZM5.76001 4.55989H18.24V2.63989H5.76001V4.55989Z"
        fill={color}
      />
    </svg>
  );
}

export default TwoCircledMediMedium;
