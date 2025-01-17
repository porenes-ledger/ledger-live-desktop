import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ShieldCheckMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9999 21.8399C18.2399 19.3679 21.3599 15.4319 21.3599 10.1279V5.08791C18.6959 3.16791 15.4559 2.15991 11.9999 2.15991C8.54389 2.15991 5.30389 3.16791 2.63989 5.08791V10.1279C2.63989 15.4319 5.75989 19.3679 11.9999 21.8399ZM4.55989 10.1279V5.99991C6.79189 4.60791 9.19189 3.95991 11.9999 3.95991C14.8079 3.95991 17.2079 4.60791 19.4399 5.99991V10.1279C19.4399 14.6399 17.2079 17.6399 11.9999 19.8719C6.79189 17.6399 4.55989 14.6399 4.55989 10.1279ZM7.91989 11.3039L11.2799 14.6879L16.9439 8.99991L15.5999 7.65591L11.2799 11.9519L9.26389 9.95991L7.91989 11.3039Z"
        fill={color}
      />
    </svg>
  );
}

export default ShieldCheckMedium;
