import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ArrowBottomThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.372L18.624 14.748L18.288 14.412L15.12 17.58L12.24 20.46V2.62799H11.76V20.46L8.87998 17.58L5.71198 14.412L5.37598 14.748L12 21.372Z"
        fill={color}
      />
    </svg>
  );
}

export default ArrowBottomThin;
